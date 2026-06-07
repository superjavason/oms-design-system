# 东鹏 OMS 设计系统 · 组件库展示网站

以飞书管理后台 + shadcn/ui 组件范式为参考，构建统一、克制、层级清晰的企业级界面体系。该项目代码集中展示新的设计规范和组件库

## 技术栈

- **Vite 5 + React 18 + TypeScript** — 轻量、快速的 SPA 文档站
- **原生 CSS + Design Token** — 所有视觉属性通过 CSS 变量驱动，与规范附录 B 类名一一对应
- **lucide-react** — 与 shadcn/ui 一致的图标库
- 无 Tailwind、无 UI 框架依赖：组件类名即规范类名，源码完全可控

## 快速开始

```bash
pnpm install
pnpm dev        # 启动开发服务器
pnpm build      # 生产构建到 dist/
pnpm preview    # 预览生产构建
```

## 目录结构

```
src/
├── styles/
│   ├── tokens.css        # 全部 Design Token（颜色/字体/间距/圆角/阴影/动效/布局）
│   ├── components.css     # 全部组件类名（规范 4/5/6/7 节）
│   └── showcase.css       # 文档站自身布局样式
├── components/
│   ├── ui/                # 类型化 React 组件：Button / Card / Badge / Input /
│   │                      #   Select / Tabs / StatusBadge / Pagination 等
│   └── showcase/          # 文档站组件：AppShell（侧边栏+顶栏）+ Doc 工具集
├── pages/
│   ├── foundations/       # 颜色 / 字体 / 间距·圆角 / 阴影·动效 / 图标
│   ├── components/        # 10 个组件展示页（含交互示例 + 代码 + API 表）
│   ├── templates/         # 7 类页面模版（首页/列表/详情/表单/结果/空状态/异常）
│   └── guidelines/        # 无障碍 / 文案规范 / 禁止事项
├── data/                  # 导航配置 + 模拟业务数据
└── lib/                   # cn() className 工具
```

## 内容覆盖


| 模块              | 内容                                                        |
| --------------- | --------------------------------------------------------- |
| **Foundations** | OKLCH 颜色体系、字号梯度、4px 间距栅格、圆角层级、阴影、动效，含可视化 Token 演示         |
| **Components**  | 按钮、卡片、徽标、输入框/选择器、表格、标签页、状态指示、快捷入口、列表项、分页                  |
| **Templates**   | 首页 Dashboard、列表页、详情页、表单页（onBlur 校验）、结果页、空状态、异常页，均为可交互真实渲染 |
| **Guidelines**  | 无障碍（对比度/键盘/ARIA/触控）、文案规范、禁止事项清单                           |


## 设计原则

克制 · 统一 · 层级清晰 · 轻量反馈 · 内容优先。所有颜色、间距、圆角禁止硬编码，
必须引用 `var(--token)`。Icon 只在功能交互处出现，不做装饰。