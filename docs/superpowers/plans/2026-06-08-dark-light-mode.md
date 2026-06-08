# Dark / Light Mode Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为「东鹏 OMS 设计系统」文档站增加亮 / 暗模式切换（首次跟随系统偏好，之后记住用户选择）。

**Architecture:** 利用现有 CSS 变量令牌体系——在 `tokens.css` 新增 `.dark` 颜色覆盖块即可全站换肤；一个 `useTheme` Hook 管理状态 / 持久化 / 同步 `<html>` 的 `dark` 类；`AppShell` 顶栏放置 Sun/Moon 图标切换按钮；`index.html` 内联脚本防加载闪烁。

**Tech Stack:** React + TypeScript（Vite，strict tsconfig）、CSS 自定义属性（OKLCH）、lucide-react 图标、`localStorage` / `matchMedia`。

**验证说明：** 本项目无测试运行器 / lint / CI。每个任务的验证门为 `pnpm build`（TypeScript strict 类型检查通过），关键任务附 `pnpm dev` 人工视觉核查。频繁提交。

参考规范文档：`docs/superpowers/specs/2026-06-08-dark-light-mode-design.md`

---

## File Structure

- **新增** `src/lib/useTheme.ts` — 主题状态 Hook（状态 + localStorage 持久化 + 同步 `<html>` class）。单一职责。
- **修改** `src/styles/tokens.css` — 在末尾追加 `.dark { … }` 颜色覆盖块（仅 3.1 节颜色令牌 + 阴影）。
- **修改** `src/components/showcase/AppShell.tsx` — 调用 `useTheme()`，在 `.docs-topbar-actions` 内加入切换按钮。
- **修改** `index.html` — `<head>` 内加防闪烁内联脚本。

---

## Task 1: `.dark` 令牌覆盖块

**Files:**
- Modify: `src/styles/tokens.css`（在文件末尾、`:root { … }` 闭合大括号之后追加）

- [ ] **Step 1: 在 `tokens.css` 末尾追加 `.dark` 覆盖块**

在文件最末（第 137 行 `:root` 的闭合 `}` 之后）追加以下内容：

```css

/* =============================================================
 * 深色模式覆盖 Dark Mode —— 仅覆盖 3.1 颜色令牌与阴影
 * 由 <html class="dark"> 激活。下游样式均引用 var(--token)，
 * 故无需改动 components.css / showcase.css / 任何页面。
 * shadcn 别名变量（--background / --primary …）引用 --color-*，自动继承。
 * ============================================================= */
.dark {
  /* 3.1.1 品牌色 —— 深底上提亮以保证对比度 */
  --color-brand: oklch(0.62 0.23 22);
  --color-brand-hover: oklch(0.68 0.22 22);
  --color-brand-light: oklch(0.32 0.09 22);
  --color-brand-bg: oklch(0.26 0.05 22);

  /* 3.1.2 功能色 —— 主色提亮，-light/-bg 转为低亮度深底 */
  --color-success: oklch(0.65 0.15 150);
  --color-success-light: oklch(0.32 0.08 150);
  --color-success-bg: oklch(0.26 0.04 150);

  --color-warning: oklch(0.72 0.14 80);
  --color-warning-light: oklch(0.34 0.08 80);
  --color-warning-bg: oklch(0.27 0.04 80);

  --color-danger: oklch(0.65 0.2 25);
  --color-danger-light: oklch(0.32 0.08 25);
  --color-danger-bg: oklch(0.26 0.04 25);

  --color-info: oklch(0.68 0.16 250);
  --color-info-light: oklch(0.32 0.08 250);
  --color-info-bg: oklch(0.26 0.04 250);

  /* 3.1.3 中性色 —— 反相 */
  --color-bg: oklch(0.18 0 0);
  --color-bg-muted: oklch(0.22 0 0);
  --color-bg-hover: oklch(0.26 0 0);
  --color-fg: oklch(0.95 0 0);
  --color-fg-muted: oklch(0.65 0 0);
  --color-fg-subtle: oklch(0.5 0 0);
  --color-border: oklch(0.3 0 0);
  --color-border-hover: oklch(0.4 0 0);

  /* 3.5 阴影 —— 深底上加深 alpha 以呈现高度 */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.3);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.45);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.55);
}
```

> 注：`--primary-foreground` / `--destructive-foreground` 在 `:root` 中为 `oklch(1 0 0)`（白），深底上品牌 / 危险按钮文字仍为白色，对比正确，无需覆盖。

- [ ] **Step 2: 类型检查通过**

Run: `pnpm build`
Expected: 构建成功，无 TypeScript 错误（本任务仅改 CSS，不应引入错误）。

- [ ] **Step 3: 提交**

```bash
git add src/styles/tokens.css
git commit -m "feat(tokens): 新增深色模式颜色令牌覆盖块"
```

---

## Task 2: `useTheme` Hook

**Files:**
- Create: `src/lib/useTheme.ts`

- [ ] **Step 1: 创建 `src/lib/useTheme.ts`**

```ts
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "oms-theme";

/** 计算初始主题：localStorage 显式选择优先，否则跟随系统偏好。 */
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * 主题状态 Hook：管理亮/暗状态、持久化到 localStorage，
 * 并把 `dark` 类同步到 <html>。首次跟随系统偏好，切换后记住选择。
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () =>
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });

  return { theme, toggle };
}
```

- [ ] **Step 2: 类型检查通过**

Run: `pnpm build`
Expected: 构建成功。注意 strict 模式下 `noUnusedLocals` —— 本文件导出的 `useTheme` / `Theme` 在 Task 3 才被引用；`pnpm build` 对「已导出但未在本模块使用」不会报错（仅对模块内未使用的局部变量报错），故此处应通过。

- [ ] **Step 3: 提交**

```bash
git add src/lib/useTheme.ts
git commit -m "feat(lib): 新增 useTheme 主题切换 Hook"
```

---

## Task 3: 顶栏切换按钮

**Files:**
- Modify: `src/components/showcase/AppShell.tsx`

- [ ] **Step 1: 引入图标与 Hook**

在顶部 lucide-react 导入中加入 `Sun` 与 `Moon`。现有导入块（`AppShell.tsx:2-10`）：

```tsx
import {
  Search,
  Github,
  BookOpen,
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
```

改为：

```tsx
import {
  Search,
  Github,
  BookOpen,
  Menu,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  Sun,
  Moon,
} from "lucide-react";
```

在 NAV / cn 导入之后（`AppShell.tsx:11-12` 附近）加入：

```tsx
import { useTheme } from "@/lib/useTheme";
```

- [ ] **Step 2: 在组件内调用 Hook**

在 `AppShell` 函数体内、`const [query, setQuery] = useState("");`（`AppShell.tsx:25`）之前或之后加入：

```tsx
  const { theme, toggle: toggleTheme } = useTheme();
```

- [ ] **Step 3: 在顶栏操作区加入切换按钮**

在 `.docs-topbar-actions` 容器内、shadcn/ui 链接**之前**插入按钮。现有结构（`AppShell.tsx:180` 起）：

```tsx
          <div className="docs-topbar-actions">
            <a
              className="btn btn-ghost btn-sm"
              href="https://ui.shadcn.com/"
```

改为：

```tsx
          <div className="docs-topbar-actions">
            <button
              className="btn btn-ghost btn-icon btn-sm"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
              title={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
            >
              {theme === "dark" ? (
                <Sun className="icon-md" aria-hidden />
              ) : (
                <Moon className="icon-md" aria-hidden />
              )}
            </button>
            <a
              className="btn btn-ghost btn-sm"
              href="https://ui.shadcn.com/"
```

- [ ] **Step 4: 类型检查通过**

Run: `pnpm build`
Expected: 构建成功，无未使用导入 / 类型错误。

- [ ] **Step 5: 人工视觉核查**

Run: `pnpm dev`，浏览器打开本地地址。
Expected:
- 顶栏出现月亮图标按钮；点击后切换为深色、图标变太阳。
- 全站背景 / 文字 / 卡片 / 表格 / 徽章颜色正确反相，品牌红清晰可读。
- 再次点击切回浅色。
- 刷新页面保持上次选择。

- [ ] **Step 6: 提交**

```bash
git add src/components/showcase/AppShell.tsx
git commit -m "feat(shell): 顶栏新增亮/暗模式切换按钮"
```

---

## Task 4: 防闪烁内联脚本

**Files:**
- Modify: `index.html`

- [ ] **Step 1: 查看 `index.html` 现有 `<head>`**

Run: `cat index.html`
目的：确认 `<head>` 位置与现有内容，脚本须置于样式 / 模块加载前。

- [ ] **Step 2: 在 `<head>` 内、其余资源之前加入内联脚本**

在 `<head>` 标签内尽量靠前处插入（与 `useTheme` 的初值规则保持一致）：

```html
    <script>
      (function () {
        try {
          var t = localStorage.getItem("oms-theme");
          if (t !== "light" && t !== "dark") {
            t = window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light";
          }
          if (t === "dark") document.documentElement.classList.add("dark");
        } catch (e) {}
      })();
    </script>
```

- [ ] **Step 3: 类型检查通过**

Run: `pnpm build`
Expected: 构建成功。

- [ ] **Step 4: 人工核查无加载闪烁**

操作：在浏览器开发者工具中设置 `localStorage["oms-theme"] = "dark"`（或清空并将系统设为深色），硬刷新页面。
Expected: 页面加载即为深色，无浅色 → 深色的闪烁跳变。

- [ ] **Step 5: 提交**

```bash
git add index.html
git commit -m "feat: 加入防主题闪烁内联脚本"
```

---

## Self-Review 结果

**Spec 覆盖核对：**
- 令牌层 `.dark` 覆盖块 → Task 1 ✅
- `useTheme` Hook（初值 / 持久化 / 同步 class / 两态 toggle）→ Task 2 ✅
- 顶栏 Sun/Moon 切换按钮 → Task 3 ✅
- 防闪烁内联脚本 → Task 4 ✅
- 品牌红提亮决策 → Task 1（`--color-brand: oklch(0.62 …)`）✅
- 两态切换 + 首次跟随系统 → Task 2 `getInitialTheme` ✅

**占位符扫描：** 无 TBD / TODO；每个代码步骤含完整代码。

**类型一致性：** `useTheme()` 返回 `{ theme, toggle }`；Task 3 以 `const { theme, toggle: toggleTheme } = useTheme()` 解构并使用 `theme` / `toggleTheme`，命名一致；`STORAGE_KEY` 值 `"oms-theme"` 与 Task 4 内联脚本及 spec 一致。
