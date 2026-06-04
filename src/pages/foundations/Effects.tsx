import { PageHead, DocSection, Callout } from "@/components/showcase/Doc";

const SHADOWS = [
  { name: "--shadow-xs", use: "极小浮层" },
  { name: "--shadow-sm", use: "tabs 选中态" },
  { name: "--shadow-md", use: "card hover / dropdown" },
  { name: "--shadow-lg", use: "应用下拉面板" },
];

const DURATIONS = [
  { name: "--duration-fast", val: "120ms", use: "hover 态切换、图标旋转" },
  { name: "--duration-normal", val: "200ms", use: "focus 态、卡片 hover" },
  { name: "--duration-slow", val: "300ms", use: "面板展开 / 收起" },
];

export function EffectsPage() {
  return (
    <>
      <PageHead
        eyebrow="Foundations · 3.5 / 3.6"
        title="阴影 · 动效"
        lead="飞书管理后台风格：极简投影，克制使用。交互反馈 ≤ 200ms，展开收起 ≤ 300ms，统一 ease 缓动。"
      />

      <DocSection title="阴影 Shadow" desc="4 级投影 + 1 个聚焦环。鼠标悬停卡片观察效果。">
        <div className="row wrap gap-6" style={{ padding: "var(--space-4) 0" }}>
          {SHADOWS.map((s) => (
            <div key={s.name} className="stack gap-3" style={{ alignItems: "center" }}>
              <div
                className="shadow-box"
                style={{ boxShadow: `var(${s.name})`, border: "1px solid var(--color-border)" }}
              />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
                  {s.name}
                </div>
                <div className="text-muted" style={{ fontSize: "var(--text-xs)" }}>
                  {s.use}
                </div>
              </div>
            </div>
          ))}
          <div className="stack gap-3" style={{ alignItems: "center" }}>
            <div
              className="shadow-box"
              style={{ boxShadow: "var(--shadow-focus)", border: "1px solid var(--color-brand)" }}
            />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
                --shadow-focus
              </div>
              <div className="text-muted" style={{ fontSize: "var(--text-xs)" }}>
                输入框聚焦环
              </div>
            </div>
          </div>
        </div>
      </DocSection>

      <DocSection title="动效 Motion" desc="3 级时长。鼠标悬停色块观察过渡。">
        <div className="card" style={{ padding: "var(--space-2) var(--space-5)" }}>
          {DURATIONS.map((d) => (
            <div className="spec-row" key={d.name}>
              <span className="spec-name">{d.name}</span>
              <span className="spec-val">{d.val}</span>
              <span className="spec-demo">
                <span
                  className="motion-demo"
                  style={{
                    display: "inline-block",
                    width: 120,
                    height: 32,
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-bg-muted)",
                    transition: `background-color var(${d.name}) var(--ease-standard), transform var(${d.name}) var(--ease-standard)`,
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-brand)";
                    e.currentTarget.style.transform = "translateX(40px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--color-bg-muted)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                />
              </span>
              <span className="text-muted" style={{ fontSize: "var(--text-sm)", width: 200, flexShrink: 0 }}>
                {d.use}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <Callout type="warning">
        <strong>禁止：</strong>使用 <code className="inline-code">ease-in-out</code>{" "}
        或其他自定义缓动函数；动画时长超过 300ms。统一使用{" "}
        <code className="inline-code">--ease-standard</code>（ease）。
      </Callout>
    </>
  );
}
