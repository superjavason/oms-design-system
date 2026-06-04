import { PageHead, DocSection, Callout } from "@/components/showcase/Doc";

const SPACES = [
  { name: "--space-1", px: "4px", use: "紧密间距 / badge padding" },
  { name: "--space-2", px: "8px", use: "图标间距 / 紧凑 padding" },
  { name: "--space-3", px: "12px", use: "小组件间距 / 卡片间隙" },
  { name: "--space-4", px: "16px", use: "卡片 padding / 通用间距" },
  { name: "--space-5", px: "20px", use: "卡片 header padding" },
  { name: "--space-6", px: "24px", use: "页面区块间距" },
  { name: "--space-8", px: "32px", use: "大区块间距" },
];

const RADII = [
  { name: "--radius-sm", px: "4px", use: "chip / badge / checkbox" },
  { name: "--radius-md", px: "8px", use: "button / input / select" },
  { name: "--radius-lg", px: "12px", use: "card / modal" },
  { name: "--radius-xl", px: "16px", use: "大面板" },
  { name: "--radius-full", px: "9999px", use: "圆形 / pill" },
];

export function SpacingPage() {
  return (
    <>
      <PageHead
        eyebrow="Foundations · 3.3 / 3.4"
        title="间距 · 圆角"
        lead="间距基于 4px 基准栅格，所有 margin / padding / gap 必须使用 var(--space-N)。圆角按组件层级递进。"
      />

      <Callout type="warning">
        <strong>禁止：</strong>裸写 px 值。所有间距引用{" "}
        <code className="inline-code">var(--space-N)</code>，所有圆角引用{" "}
        <code className="inline-code">var(--radius-*)</code>。
      </Callout>

      <DocSection title="间距 Spacing" desc="4px 基准栅格，7 级间距。">
        <div className="card" style={{ padding: "var(--space-2) var(--space-5)" }}>
          {SPACES.map((s) => (
            <div className="spec-row" key={s.name}>
              <span className="spec-name">{s.name}</span>
              <span className="spec-val">{s.px}</span>
              <span className="spec-demo">
                <span
                  className="spacing-bar"
                  style={{ width: `var(${s.name})`, display: "block", minWidth: s.px }}
                />
              </span>
              <span className="text-muted" style={{ fontSize: "var(--text-sm)", width: 220, flexShrink: 0 }}>
                {s.use}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection
        title="圆角 Radius"
        desc="容器 = lg(12px)，表单控件 = md(8px)，标签 = sm(4px)，圆形元素 = full。"
      >
        <div className="row wrap gap-4">
          {RADII.map((r) => (
            <div key={r.name} className="stack gap-2" style={{ alignItems: "center" }}>
              <div
                className="radius-box"
                style={{
                  borderRadius: `var(${r.name})`,
                  width: r.name === "--radius-full" ? 64 : 64,
                  height: 64,
                }}
              />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
                  {r.name}
                </div>
                <div className="text-muted" style={{ fontSize: "var(--text-xs)" }}>
                  {r.px}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocSection>
    </>
  );
}
