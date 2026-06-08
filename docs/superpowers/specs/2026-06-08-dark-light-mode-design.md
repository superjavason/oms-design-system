# 设计文档：Dark / Light Mode 切换

日期：2026-06-08
状态：已批准设计，待实现

## 目标

为「东鹏 OMS 设计系统」文档站增加深色 / 浅色模式切换能力。利用现有的 CSS 变量令牌体系，以最小改动实现全站主题切换。

## 背景与约束

- 全站视觉样式由 `src/styles/tokens.css` 中的 CSS 自定义属性驱动；经核查，`src/styles/` 与 `src/pages/`、`src/components/` 中**没有任何硬编码颜色**（仅有 `rgba(0,0,0,…)` 形式的阴影令牌）。因此切换颜色令牌即可实现全站换肤，无需逐文件改色。
- 仅运行时依赖：`react`、`react-dom`、`lucide-react`（图标已具备）。无 Tailwind、无状态库、无 UI 框架。
- 无测试 / lint / CI；类型检查通过 `pnpm build`（tsconfig 为 `strict`，含 `noUnusedLocals`/`noUnusedParameters`）。
- 现有持久化范式：`AppShell` 已用 `localStorage`（key `oms-sidebar-collapsed`）持久化侧边栏收拢态，本特性沿用同样模式。

## 决策

1. **切换控件**：亮 / 暗两态切换（Sun / Moon 图标按钮）。首次访问跟随系统 `prefers-color-scheme`，之后记住用户选择。
2. **品牌红 `--color-brand`**：深色模式下将 OKLCH 亮度上调约一档（更鲜亮）以保证对比度与可读性。

## 架构

三个相互独立、边界清晰的单元：

### 1. 令牌层 — `src/styles/tokens.css`

在文件中新增 `.dark { … }` 选择器块，**仅覆盖第 3.1 节颜色令牌**。其余令牌（字体、间距、圆角、动效、布局）保持不变。由于下游一切样式均引用 `var(--token)`，无需改动 `components.css` / `showcase.css` / 任何页面。

覆盖内容：

- **中性色（反相）**
  - `--color-bg: oklch(0.18 0 0)`（深色基底）
  - `--color-bg-muted: oklch(0.22 0 0)`
  - `--color-bg-hover: oklch(0.26 0 0)`
  - `--color-fg: oklch(0.95 0 0)`
  - `--color-fg-muted: oklch(0.65 0 0)`
  - `--color-fg-subtle: oklch(0.5 0 0)`
  - `--color-border: oklch(0.3 0 0)`
  - `--color-border-hover: oklch(0.4 0 0)`
  - （以上为目标方向值，实现时按视觉微调以达成对比度。）

- **品牌色**：`--color-brand` 亮度由 `0.54` 提升至约 `0.62`；`--color-brand-hover` 相应调整；`--color-brand-light` / `--color-brand-bg` 由近白浅底改为低亮度深色调底（如 `oklch(0.3 0.08 22)` / `oklch(0.24 0.04 22)`）。

- **功能色（success / warning / danger / info）**：主色亮度上调以在深底上保持可读；对应的 `-light` / `-bg` 由近白改为低亮度同色相深底，使「极浅底色」语义在深色模式下转译为「极深底色」。

- **阴影**：在 `.dark` 下加深阴影 alpha（如 `--shadow-sm: 0 1px 3px rgba(0,0,0,0.4)`），使卡片 / 弹层的高度在深色面上可辨。

- **shadcn 别名变量**：`--background`、`--primary` 等均引用 `--color-*`，自动继承，无需在 `.dark` 中重复声明。

> 保留分节编号注释（`3.1 颜色` 等）的对应关系，新增块以注释标明其为深色覆盖。

### 2. 主题 Hook — `src/lib/useTheme.ts`（新建）

一个小型 `useTheme()` Hook，职责单一：管理主题状态、持久化、并把 class 同步到 `<html>`。

接口：

```ts
type Theme = "light" | "dark";
function useTheme(): { theme: Theme; toggle: () => void };
```

行为：

- 初值：若 `localStorage["oms-theme"]` 存在则用之；否则读 `matchMedia("(prefers-color-scheme: dark)")`。
- 副作用：根据 `theme` 在 `document.documentElement` 上增删 `dark` 类。
- `toggle`：在 `light` / `dark` 间翻转，并写入 `localStorage["oms-theme"]`。
- SSR 安全：访问 `window` 前判空（与 `AppShell` 中现有写法一致），本项目虽为纯 SPA，但保持范式统一。

依赖：仅浏览器 `localStorage` / `matchMedia` / `document`。

### 3. 切换按钮 — `src/components/showcase/AppShell.tsx`

在 `.docs-topbar-actions` 内、shadcn/ui 与 Lucide 链接**之前**插入一个图标按钮：

- 类名 `btn btn-ghost btn-icon btn-sm`（复用现有按钮样式）。
- 图标：`theme === "dark"` 显示 `Sun`（点击切回浅色），否则显示 `Moon`（点击切到深色）— 均来自 `lucide-react`。
- `aria-label`：深色态为「切换到浅色模式」，浅色态为「切换到深色模式」；`title` 同文案。
- 点击调用 `toggle()`。
- `AppShell` 顶部调用 `const { theme, toggle } = useTheme();`。

## 防闪烁（Anti-FOUC）

在 `index.html` 的 `<head>` 内（样式表加载前）加入一段极简内联脚本：在 React 挂载前读取 `localStorage["oms-theme"]`（缺省时读系统偏好），若判定为深色则给 `document.documentElement` 加 `dark` 类。避免深色偏好用户加载时出现浅色闪烁。该逻辑与 `useTheme` 初值逻辑保持一致（同一判定规则）。

## 数据流

```
首次加载：
  index.html 内联脚本 → 读 localStorage/系统偏好 → 设 <html class="dark">（如需）
  React 挂载 → useTheme 以相同规则计算初值 → 与已有 class 一致，无跳变

用户点击切换：
  按钮 onClick → toggle() → 翻转 state → 写 localStorage
    → useEffect 同步 <html> 的 dark 类 → CSS 变量切换 → 全站重绘
```

## 错误处理 / 边界

- `localStorage` 不可用（隐私模式）时：读写以 try/catch 兜底（或沿用项目现有的直接访问范式——现有 collapse 代码未加 try/catch，保持一致即可，风险可接受）。决策：与现有 `AppShell` collapse 写法保持一致，不额外加 try/catch，避免引入不一致范式。
- `localStorage` 中存有非法值：仅接受 `"light"` / `"dark"`，其他一律回退系统偏好。
- 不监听系统偏好的实时变化（用户一旦手动切换即固定为显式选择）；两态切换无「跟随系统」回退态，符合所选方案。

## 测试与验证

- 无测试运行器。验证方式：
  1. `pnpm build` — TypeScript 严格模式类型检查必须通过。
  2. `pnpm dev` — 人工核查：切换按钮可用、全站深 / 浅色正确、刷新后保持、清空 localStorage 后跟随系统、无加载闪烁。

## 受影响文件

- 修改：`src/styles/tokens.css`（新增 `.dark` 覆盖块）
- 修改：`src/components/showcase/AppShell.tsx`（引入 hook + 切换按钮）
- 修改：`index.html`（防闪烁内联脚本）
- 新增：`src/lib/useTheme.ts`

## 不做（YAGNI）

- 不做三态（亮/暗/跟随系统）切换。
- 不做主题色自定义 / 多主题。
- 不重构阴影令牌为变量化 alpha（仅在 `.dark` 内覆盖即可）。
- 不为文档页面单独适配深色截图 / 配图。
