import { PageHead, DocSection, Callout, CodeBlock } from "@/components/showcase/Doc";

interface Swatch {
  name: string;
  value: string;
  use: string;
}

function SwatchGrid({ items }: { items: Swatch[] }) {
  return (
    <div className="token-grid">
      {items.map((s) => (
        <div className="color-swatch" key={s.name}>
          <div
            className="color-swatch-chip"
            style={{ background: `var(${s.name})` }}
          />
          <div className="color-swatch-meta">
            <div className="color-swatch-name">{s.name}</div>
            <div className="color-swatch-value">{s.value}</div>
            <div className="color-swatch-use">{s.use}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const BRAND: Swatch[] = [
  { name: "--color-brand", value: "oklch(0.54 0.25 22)", use: "主按钮 / 链接 / 选中态" },
  { name: "--color-brand-hover", value: "oklch(0.48 0.24 22)", use: "主按钮 hover" },
  { name: "--color-brand-light", value: "oklch(0.95 0.05 22)", use: "选中背景 / 高亮" },
  { name: "--color-brand-bg", value: "oklch(0.97 0.02 22)", use: "大面积品牌底色" },
];

const FUNCTIONAL: Swatch[] = [
  { name: "--color-success", value: "oklch(0.55 0.14 150)", use: "成功 / 已完成" },
  { name: "--color-warning", value: "oklch(0.62 0.13 75)", use: "警告 / 待处理" },
  { name: "--color-danger", value: "oklch(0.55 0.22 25)", use: "危险 / 未读红点" },
  { name: "--color-info", value: "oklch(0.58 0.16 250)", use: "信息 / 处理中" },
];

const FUNCTIONAL_LIGHT: Swatch[] = [
  { name: "--color-success-light", value: "oklch(0.94 0.06 150)", use: "成功标签底" },
  { name: "--color-warning-light", value: "oklch(0.94 0.07 85)", use: "警告标签底" },
  { name: "--color-danger-light", value: "oklch(0.94 0.06 25)", use: "未读 / 危险标签底" },
  { name: "--color-info-light", value: "oklch(0.94 0.05 250)", use: "信息标签底" },
];

const NEUTRAL: Swatch[] = [
  { name: "--color-bg", value: "oklch(1 0 0)", use: "卡片 / 组件白底" },
  { name: "--color-bg-muted", value: "oklch(0.97 0 0)", use: "页面底 / 表头" },
  { name: "--color-bg-hover", value: "oklch(0.95 0 0)", use: "hover 态背景" },
  { name: "--color-fg", value: "oklch(0.15 0 0)", use: "正文颜色" },
  { name: "--color-fg-muted", value: "oklch(0.5 0 0)", use: "辅助文字" },
  { name: "--color-fg-subtle", value: "oklch(0.7 0 0)", use: "占位符 / 禁用" },
  { name: "--color-border", value: "oklch(0.92 0 0)", use: "默认边框" },
  { name: "--color-border-hover", value: "oklch(0.85 0 0)", use: "边框 hover" },
];

export function ColorsPage() {
  return (
    <>
      <PageHead
        eyebrow="Foundations · 3.1"
        title="颜色 Color"
        lead="采用 OKLCH 色彩空间，语义化命名。所有颜色必须通过 CSS 变量引用，禁止使用 #fff、rgba() 等硬编码色值。"
      />

      <Callout type="warning">
        <strong>禁止：</strong>直接使用 <code className="inline-code">#fff</code>、
        <code className="inline-code">rgba()</code>、
        <code className="inline-code">#1890ff</code> 等硬编码色值；
        禁止为同色写新 Token，必须复用现有变量。
      </Callout>

      <DocSection title="品牌色 Brand" desc="品牌红，OMS 系统的核心识别色。白字对比度约 5.8:1，达到 AA 级。">
        <SwatchGrid items={BRAND} />
      </DocSection>

      <DocSection title="功能色 Functional" desc="语义化状态色，每种附带 -light（浅色背景）与 -bg（极浅底色）变体。">
        <SwatchGrid items={FUNCTIONAL} />
        <div style={{ height: "var(--space-3)" }} />
        <SwatchGrid items={FUNCTIONAL_LIGHT} />
      </DocSection>

      <DocSection title="中性色 Neutral" desc="背景、文字、边框层级。通过明度差异建立信息层级。">
        <SwatchGrid items={NEUTRAL} />
      </DocSection>

      <DocSection title="shadcn/ui 语义别名" desc="安装 shadcn 组件后，必须在 globals.css 中以下述映射覆盖默认主题变量。">
        <CodeBlock
          lang="css"
          code={`--background:       var(--color-bg);
--foreground:       var(--color-fg);
--primary:          var(--color-brand);
--primary-foreground: white;
--secondary:        var(--color-bg-muted);
--muted:            var(--color-bg-muted);
--muted-foreground: var(--color-fg-muted);
--accent:           var(--color-bg-hover);
--destructive:      var(--color-danger);
--border:           var(--color-border);
--ring:             var(--color-brand);
--radius:           var(--radius-md);   /* 8px */`}
        />
      </DocSection>
    </>
  );
}
