import {
  ArrowRight,
  Palette,
  Component,
  LayoutTemplate,
  Accessibility,
  ShieldCheck,
  Boxes,
} from "lucide-react";
import { Button } from "@/components/ui";

const FEATURES = [
  {
    icon: Palette,
    title: "完整 Design Token",
    desc: "OKLCH 色彩空间，语义化命名。颜色、字体、间距、圆角、阴影、动效全部以 CSS 变量驱动，禁止硬编码。",
  },
  {
    icon: Component,
    title: "30+ 组件约束",
    desc: "基于 shadcn/ui 范式，叠加 OMS 业务定制。按钮、卡片、表格、状态指示等全部对齐飞书管理后台风格。",
  },
  {
    icon: LayoutTemplate,
    title: "8 类页面模版",
    desc: "列表 / 详情 / 表单 / 结果 / 空状态 / 异常 / 首页 / 业务操作页，新增页面从对应模版派生。",
  },
  {
    icon: Accessibility,
    title: "无障碍底线",
    desc: "对比度 ≥ 4.5:1、键盘导航、ARIA 角色、44px 触控区域，保证经销商操作人员可用。",
  },
  {
    icon: ShieldCheck,
    title: "克制为先",
    desc: "减少装饰性元素，Icon 只在功能交互处出现。内容优先，让数据说话，而非依赖分割线与彩色方块。",
  },
  {
    icon: Boxes,
    title: "源码可控",
    desc: "组件代码直接进入项目 @/components/ui，不依赖 npm 黑盒包。Token 与 shadcn 变量一一映射。",
  },
];

const STATS = [
  { num: "5", lbl: "类基础 Token" },
  { num: "30+", lbl: "组件约束" },
  { num: "8", lbl: "页面模版" },
  { num: "AA", lbl: "无障碍等级" },
];

export function OverviewPage({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <div className="fade-up">
      <section className="landing-hero">
        <span className="hero-badge">设计规范 v2.1 · 2026-06-04</span>
        <h1 className="hero-title">
          东鹏 OMS <span className="accent">管理后台</span>
          <br />
          设计系统
        </h1>
        <p className="hero-lead">
          面向经销商端、销售代表端与管理端的 PC 管理后台。以飞书管理后台 +
          shadcn/ui 组件范式为参考，构建统一、克制、层级清晰的企业级界面体系。
        </p>
        <div className="hero-actions">
          <Button onClick={() => onNavigate("button")}>
            浏览组件
            <ArrowRight className="icon-sm" aria-hidden />
          </Button>
          <Button variant="outline" onClick={() => onNavigate("tpl-dashboard")}>
            查看页面模版
          </Button>
        </div>

        <div className="hero-stats">
          {STATS.map((s) => (
            <div className="hero-stat" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "var(--space-8)" }}>
        <h2 className="doc-section-title">设计原则</h2>
        <p className="doc-section-desc" style={{ marginBottom: "var(--space-4)" }}>
          克制 · 统一 · 层级清晰 · 轻量反馈 · 内容优先
        </p>
        <div className="feature-grid">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">
                  <Icon className="icon-lg" aria-hidden />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ marginTop: "var(--space-8)" }}>
        <div
          className="card"
          style={{ padding: "var(--space-6)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "var(--space-4)", flexWrap: "wrap" }}
        >
          <div>
            <h3 style={{ fontSize: "var(--text-lg)", fontWeight: 600 }}>
              从 Token 开始
            </h3>
            <p className="text-muted" style={{ marginTop: "var(--space-1)", fontSize: "var(--text-base)" }}>
              所有视觉属性通过 CSS 变量引用。先理解原子级变量，再组合组件与页面。
            </p>
          </div>
          <div className="row gap-2">
            <Button variant="outline" onClick={() => onNavigate("colors")}>
              颜色 Color
            </Button>
            <Button onClick={() => onNavigate("colors")}>
              查看 Token
              <ArrowRight className="icon-sm" aria-hidden />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
