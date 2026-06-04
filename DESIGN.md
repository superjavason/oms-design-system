---
version: alpha
name: 东鹏 OMS 设计系统
description: >-
  东鹏 OMS 管理后台设计规范 v2.1。以飞书管理后台 + shadcn/ui 为参考，构建统一、克制、
  层级清晰的企业级 admin dashboard 界面体系。采用 OKLCH 色彩空间、4px 间距栅格、
  语义化 Design Token，所有视觉属性通过 CSS 变量驱动，禁止硬编码。

colors:
  # 品牌色 —— 东鹏红
  brand: "oklch(0.54 0.25 22)"
  brand-hover: "oklch(0.48 0.24 22)"
  brand-light: "oklch(0.95 0.05 22)"
  brand-bg: "oklch(0.97 0.02 22)"

  # 功能色 —— 每种附带 -light（浅底）与 -bg（极浅底）
  success: "oklch(0.55 0.14 150)"
  success-light: "oklch(0.94 0.06 150)"
  success-bg: "oklch(0.97 0.02 150)"
  warning: "oklch(0.62 0.13 75)"
  warning-light: "oklch(0.94 0.07 85)"
  warning-bg: "oklch(0.97 0.03 85)"
  danger: "oklch(0.55 0.22 25)"
  danger-light: "oklch(0.94 0.06 25)"
  danger-bg: "oklch(0.97 0.02 25)"
  info: "oklch(0.58 0.16 250)"
  info-light: "oklch(0.94 0.05 250)"
  info-bg: "oklch(0.97 0.02 250)"

  # 中性色
  bg: "oklch(1 0 0)"
  bg-muted: "oklch(0.97 0 0)"
  bg-hover: "oklch(0.95 0 0)"
  fg: "oklch(0.15 0 0)"
  fg-muted: "oklch(0.5 0 0)"
  fg-subtle: "oklch(0.7 0 0)"
  border: "oklch(0.92 0 0)"
  border-hover: "oklch(0.85 0 0)"

  # 语义别名（shadcn/ui 兼容）
  primary: "{colors.brand}"
  primary-foreground: "oklch(1 0 0)"
  secondary: "{colors.bg-muted}"
  muted-foreground: "{colors.fg-muted}"
  destructive: "{colors.danger}"
  ring: "{colors.brand}"

typography:
  fontFamily:
    sans: >-
      -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
      "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica,
      Arial, sans-serif
    mono: >-
      ui-monospace, SFMono-Regular, "SF Mono", "JetBrains Mono", Menlo,
      Consolas, "Liberation Mono", monospace
  # 字号梯度（基准 14px / 0.875rem）
  caption:    { fontSize: "0.625rem",  lineHeight: "1.25" }   # 10px text-2xs
  meta:       { fontSize: "0.6875rem", lineHeight: "1.25" }   # 11px text-xs
  secondary:  { fontSize: "0.75rem",   lineHeight: "1.5" }    # 12px text-sm
  body-sm:    { fontSize: "0.8125rem", lineHeight: "1.5" }    # 13px text-base
  body:       { fontSize: "0.875rem",  lineHeight: "1.5", fontWeight: 400 }  # 14px text-md
  emphasis:   { fontSize: "1rem",      lineHeight: "1.5", fontWeight: 600 }  # 16px text-lg
  page-title: { fontSize: "1.125rem",  lineHeight: "1.25", fontWeight: 600 } # 18px text-xl
  kpi:        { fontSize: "1.25rem",   lineHeight: "1.25", fontWeight: 600 } # 20px text-2xl
  display:    { fontSize: "1.5rem",    lineHeight: "1.25", fontWeight: 600 } # 24px text-3xl
  fontWeight:
    normal: 400
    medium: 500
    semibold: 600
    bold: 700

rounded:
  sm: "0.25rem"      # 4px  — chip / badge / checkbox
  md: "0.5rem"       # 8px  — button / input / select（全局默认）
  lg: "0.75rem"      # 12px — card / modal / table
  xl: "1rem"         # 16px — 大面板
  full: "9999px"     # 圆形 / pill

spacing:
  # 4px 基准栅格
  1: "0.25rem"   # 4px
  2: "0.5rem"    # 8px
  3: "0.75rem"   # 12px
  4: "1rem"      # 16px
  5: "1.25rem"   # 20px
  6: "1.5rem"    # 24px
  8: "2rem"      # 32px
  # 布局尺寸
  topbar-h: "48px"
  sidebar-w: "232px"

components:
  button:
    height: "36px"
    paddingX: "{spacing.4}"
    fontSize: "{typography.body.fontSize}"
    fontWeight: "{typography.fontWeight.medium}"
    rounded: "{rounded.md}"
    background: "{colors.brand}"
    color: "oklch(1 0 0)"
    hover-background: "{colors.brand-hover}"
  card:
    background: "{colors.bg}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.lg}"
    headerPadding: "{spacing.4} {spacing.5}"
  badge:
    paddingY: "2px"
    paddingX: "{spacing.2}"
    fontSize: "{typography.secondary.fontSize}"
    fontWeight: "{typography.fontWeight.medium}"
    rounded: "{rounded.sm}"
  input:
    height: "36px"
    paddingX: "{spacing.3}"
    fontSize: "{typography.body.fontSize}"
    border: "1px solid {colors.border}"
    rounded: "{rounded.md}"
    focus-border: "{colors.brand}"
    focus-shadow: "{shadow.focus}"
  table:
    headerHeight: "40px"
    rowHeight: "44px"
    cellPaddingX: "{spacing.3}"
    rounded: "{rounded.lg}"
  tabs:
    height: "28px"
    padding: "{spacing.1}"
    rounded: "{rounded.md}"

shadow:
  xs: "0 1px 2px rgba(0,0,0,0.04)"
  sm: "0 1px 3px rgba(0,0,0,0.06)"
  md: "0 4px 12px rgba(0,0,0,0.06)"
  lg: "0 8px 24px rgba(0,0,0,0.08)"
  focus: "0 0 0 3px oklch(0.54 0.25 22 / 12%)"

motion:
  duration-fast: "120ms"     # hover 态切换、图标旋转
  duration-normal: "200ms"   # focus 态、卡片 hover
  duration-slow: "300ms"     # 面板展开 / 收起
  ease-standard: "ease"
---

# 东鹏 OMS 设计系统 · DESIGN.md

> 管理后台设计规范 v2.1 — 组件库展示网站。本文档由 `src/styles/tokens.css` 与
> `src/styles/components.css` 提取生成，遵循 [design.md spec](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)。

## Overview

东鹏 OMS 是一套面向企业级订单管理后台（Order Management System）的设计系统，
设计参考 **飞书管理后台** 的信息密度与 **shadcn/ui** 的组件范式，目标是构建一个
**统一、克制、层级清晰** 的工作型界面。

**品牌个性**

- **克制（Restrained）** — 大面积留白与中性灰，色彩只在需要传递语义时出现。
- **统一（Consistent）** — 所有视觉属性来自单一 Token 源，禁止硬编码，禁止"一次性"样式。
- **层级清晰（Clear Hierarchy）** — 靠字号、字重、颜色深浅与边框区分层级，而非靠重投影。
- **轻量反馈（Subtle Feedback）** — 交互反馈以背景色微变、120ms 过渡为主，不喧哗。
- **内容优先（Content First）** — Icon 只在功能交互处出现，不做装饰；数字用等宽数列对齐。

**情绪基调**：专业、冷静、可信赖，长时间使用不疲劳。品牌色「东鹏红」作为点睛色，
用于主操作、激活态与关键强调，而非铺底。

## Colors

颜色采用 **OKLCH 色彩空间** 定义，语义化命名，保证跨色相的感知亮度一致。

### 品牌色（东鹏红）

| Token | 值 | 用途 |
|---|---|---|
| `--color-brand` | `oklch(0.54 0.25 22)` | 主按钮、激活态、关键强调、链接焦点环 |
| `--color-brand-hover` | `oklch(0.48 0.24 22)` | 品牌色 hover 加深态 |
| `--color-brand-light` | `oklch(0.95 0.05 22)` | 浅色描边 / 已完成步骤底 |
| `--color-brand-bg` | `oklch(0.97 0.02 22)` | 极浅品牌底（Banner / hover 热区） |

### 功能色（语义反馈）

每种功能色提供三档：主色（文字 / 图标）、`-light`（浅色徽标底）、`-bg`（极浅页面底）。

| 语义 | 主色 | -light | -bg | 场景 |
|---|---|---|---|---|
| Success 成功 | `oklch(0.55 0.14 150)` | `oklch(0.94 0.06 150)` | `oklch(0.97 0.02 150)` | 已完成、上升趋势、成功结果 |
| Warning 警告 | `oklch(0.62 0.13 75)` | `oklch(0.94 0.07 85)` | `oklch(0.97 0.03 85)` | 待处理、待确认 |
| Danger 危险 | `oklch(0.55 0.22 25)` | `oklch(0.94 0.06 25)` | `oklch(0.97 0.02 25)` | 删除、错误、下降趋势、必填星号 |
| Info 信息 | `oklch(0.58 0.16 250)` | `oklch(0.94 0.05 250)` | `oklch(0.97 0.02 250)` | 处理中、普通链接、提示 |

### 中性色（界面骨架）

| Token | 值 | 用途 |
|---|---|---|
| `--color-bg` | `oklch(1 0 0)` | 卡片 / 输入框 / 主内容底 |
| `--color-bg-muted` | `oklch(0.97 0 0)` | 页面底、表头、分段控件底 |
| `--color-bg-hover` | `oklch(0.95 0 0)` | 行 / 条目 hover 背景 |
| `--color-fg` | `oklch(0.15 0 0)` | 主文字 |
| `--color-fg-muted` | `oklch(0.5 0 0)` | 次要文字、标签、meta |
| `--color-fg-subtle` | `oklch(0.7 0 0)` | placeholder、空状态、禁用提示 |
| `--color-border` | `oklch(0.92 0 0)` | 默认描边、分割线 |
| `--color-border-hover` | `oklch(0.85 0 0)` | hover 描边加深 |

### shadcn/ui 语义别名

Token 同时映射为 shadcn/ui 主题变量（`--primary`、`--secondary`、`--muted`、
`--destructive`、`--ring` 等）。前端安装 shadcn 后**必须以本规范覆盖默认主题**，
确保第三方组件与自有组件视觉一致。

## Typography

字体优先调用系统字体栈，中文回退 PingFang SC / 微软雅黑，数字与代码使用等宽栈。

- **Sans**：`-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", …`
- **Mono**：`ui-monospace, SFMono-Regular, "SF Mono", "JetBrains Mono", …`

### 字号梯度（基准 14px）

| Token | px | 用途 |
|---|---|---|
| `--text-2xs` | 10px | caption / 极小标注 |
| `--text-xs` | 11px | 辅助标签 / meta |
| `--text-sm` | 12px | 次要文字 / 表头 |
| `--text-base` | 13px | 正文 / sidebar |
| `--text-md` | **14px** | 默认字号 / 按钮 / 输入框 |
| `--text-lg` | 16px | 标题 / 强调 |
| `--text-xl` | 18px | 页面标题 |
| `--text-2xl` | 20px | KPI 数值 |
| `--text-3xl` | 24px | 大数字展示 |

### 字重与行高

- 字重：`normal 400` / `medium 500`（按钮、标签、激活态）/ `semibold 600`（标题、KPI）/ `bold 700`（大数字）。
- 行高：`tight 1.25`（标题、数值）/ `normal 1.5`（正文）。
- 数字一律使用 `font-variant-numeric: tabular-nums` 等宽对齐（KPI、金额、表格数值列）。

## Layout & Spacing

### 间距 —— 4px 基准栅格

所有间距取自 4 的倍数，禁止使用任意值。

| Token | px | Token | px |
|---|---|---|---|
| `--space-1` | 4 | `--space-5` | 20 |
| `--space-2` | 8 | `--space-6` | 24 |
| `--space-3` | 12 | `--space-8` | 32 |
| `--space-4` | 16 | | |

卡片内边距标准为 `16px 20px`（`--space-4 --space-5`），栅格间隙多用 `12px`（`--space-3`）。

### 布局骨架

- **顶栏高度** `--topbar-h: 48px`
- **侧边栏宽度** `--sidebar-w: 232px`
- 主内容区采用 AppShell（侧边栏 + 顶栏 + 内容）结构。

### 常用网格

| 类名 | 列模型 | 用途 |
|---|---|---|
| `.kpi-grid` | `repeat(5, 1fr)` | 首页 KPI 卡片 |
| `.two-col` | `1fr 2fr` | 主次分栏 |
| `.two-col-equal` | `1fr 1fr` | 等分双栏 |
| `.three-col` | `repeat(3, 1fr)` | 三栏 |
| `.info-grid-2/3/4` | `repeat(n, 1fr)` | 详情页信息网格 |
| `.quick-entry-grid` | `repeat(6, 1fr)` | 快捷入口 |
| `.form-container` | `max-width: 720px` 居中 | 表单页 |

## Elevation & Depth

阴影遵循**飞书风格：极简投影、克制使用**。层级优先靠边框与背景色区分，
阴影仅在浮层、hover 提升、聚焦环时介入。

| Token | 值 | 用途 |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,.04)` | 极轻微提升 |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,.06)` | 激活态 Tab、小卡 |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,.06)` | 卡片 hover、快捷入口 hover |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,.08)` | 弹层 / Modal / Dropdown |
| `--shadow-focus` | `0 0 0 3px oklch(0.54 0.25 22 / 12%)` | 输入框聚焦环（品牌色 12% 透明） |

**动效**：`fast 120ms`（hover）/ `normal 200ms`（focus、卡片 hover）/ `slow 300ms`（展开收起），
统一缓动 `ease`。过渡只作用于必要属性（background-color、border-color、box-shadow、transform），不做全局 `all` 动画。

## Shapes

圆角分层，从小元素到大面板递增；默认全局圆角为 `md(8px)`。

| Token | 值 | 适用 |
|---|---|---|
| `--radius-sm` | 4px | chip / badge / checkbox / 分页按钮 |
| `--radius-md` | 8px | button / input / select（**全局默认**） |
| `--radius-lg` | 12px | card / modal / table / KPI 卡 |
| `--radius-xl` | 16px | 大面板 |
| `--radius-full` | 9999px | 圆形头像、pill、未读点、快捷入口圆 |

边框统一 `1px solid var(--color-border)`，分割线复用同色，不引入多种描边粗细。

## Components

所有组件类名与规范第 4/5/6/7 节一一对应，源码见 `src/styles/components.css`。

### Button `.btn`

- 默认高度 36px，圆角 `md`，字重 medium，gap `8px`，`white-space: nowrap`。
- 尺寸：`.btn-sm`（32px / 圆角 sm）、`.btn-xs`（26px）；图标按钮 `.btn-icon` 宽=高。
- 变体：`default`（品牌实心）、`outline`（描边）、`ghost`（透明）、`secondary`（浅灰）、`destructive`（危险红）。
- 禁用态 `opacity: .5` + `pointer-events: none`。

### Card `.card`

`bg + 1px border + radius-lg`。三段式结构：`.card-header`（含 `.card-title` 与 `.card-action`）、
`.card-content`、`.card-footer`，段间用 `1px` 分割线。`.card-action`（如「查看全部」）为
pill 形 hover 热区，hover 变品牌色并让箭头右移 2px。

### Badge `.badge` / Status `.status-badge`

- `.badge`：`2px 8px` 内边距、圆角 sm、字重 medium；变体 default / secondary / outline /
  success / warning / danger / info（语义色用 `-light` 底 + 主色字）。
- `.status-badge`：更紧凑的状态标，`pending`（警告）/ `done`（成功）/ `processing`（信息）。

### Input / Select / Textarea

- 输入控件统一高度 36px、圆角 md、`1px` 描边。
- 状态：hover 描边加深 → focus 品牌色描边 + `--shadow-focus` 聚焦环。
- `.select` 覆盖原生 appearance，内嵌自定义 chevron SVG。
- 校验：`.is-error` 红色描边 + `.field-error` 红色错误文案（表单页 onBlur 触发）。

### Table `.table`

包裹于 `.table-wrapper`（圆角 lg + 描边 + 横向滚动）。表头 40px、`bg-muted` 底、
sm 字号 muted 色；行 44px，hover `bg-hover`；最后一行去除底边框。数字列 `.col-num`
右对齐 + 等宽数字；可排序表头 `.th-sortable`。

### Tabs

两种范式：
- **分段控件** `.tabs / .tab`：灰底胶囊，激活态白底 + `shadow-sm`。
- **下划线** `.pickup-tabs / .pickup-tab`：激活态品牌色文字 + 2px 品牌色下划线。

### Quick Entry `.quick-entry-grid`

6 列网格，每项为彩色圆形图标（blue/purple/orange/green/red/teal）+ 标签；
hover 整体上移 2px、圆放大 1.05 并加 `shadow-md`、标签变品牌色。

### List Item

`.todo-item / .notice-item / .dynamic-item` 等条目：`12px` 内边距、圆角 md、
hover `bg-hover`；标题省略号截断，meta 用 sm muted；未读点 `.unread-dot` 8px 品牌色圆。
`.dynamic-amount` 金额右对齐 + semibold + 等宽数字。

### Pagination `.pag-bar`

左侧 `.pag-total` 总数，右侧 `.pag-list` 按钮组；`.pag-btn` 28px 方钮圆角 sm，
激活态品牌实心，禁用态 `opacity .5 + not-allowed`。

### Page Templates

涵盖首页 Dashboard、列表页、详情页、表单页、结果页、空状态、异常页：
- **Banner**：`.page-banner`（品牌浅底）、`.welcome-banner`（品牌渐变红底）。
- **工具栏**：`.filter-bar`（筛选）、`.toolbar`（左右操作区）。
- **详情**：`.info-grid` 信息网格、`.timeline` 操作日志、sticky `.detail-footer` 底部固定栏。
- **表单**：`.form-section-title`（前置 3px 品牌色竖条）、`.form-row` 双列、`.required` 红星、sticky `.form-footer`。
- **步骤条** `.steps`：active 品牌实心 / done 品牌浅底。
- **结果 / 空 / 异常页**：居中布局 + 语义色大图标圆（64px）/ 灰阶大错误码。

## Do's and Don'ts

### ✅ Do

- **始终引用 Token**：颜色、间距、圆角、字号、阴影一律用 `var(--token)`。
- **语义化用色**：成功用 success、危险用 danger、处理中用 info，不靠记硬编码十六进制。
- **数字等宽对齐**：KPI、金额、表格数值列加 `font-variant-numeric: tabular-nums`。
- **靠层级而非投影区分信息**：优先用字号 / 字重 / 颜色深浅 / 边框。
- **保持触控与无障碍**：聚焦环 2px 品牌色 + 2px 偏移；对比度满足 WCAG；交互元素键盘可达。
- **过渡只作用于必要属性**：列出具体属性，时长取 `fast/normal/slow` 三档。

### ❌ Don't

- **不要硬编码**任何颜色 / 间距 / 圆角 / 字号 —— 破坏统一性与可主题化。
- **不要用 Icon 做装饰**：图标只出现在功能交互处（按钮、状态、可点条目）。
- **不要堆叠重投影**做层级 —— 阴影保持克制，弹层才用 `shadow-lg`。
- **不要使用非 4 倍数间距**或任意圆角值，必须落在 Token 梯度内。
- **不要大面积铺品牌红**：品牌色是点睛色，用于主操作 / 激活 / 强调，而非背景。
- **不要给第三方组件留默认主题**：安装 shadcn/ui 后必须以本规范的语义别名覆盖。
