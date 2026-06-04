import { PageHead, DocSection, Preview, CodeBlock } from "@/components/showcase/Doc";

const SIZES = [
  { name: "--text-2xs", px: "10px", use: "caption / 极小标注" },
  { name: "--text-xs", px: "11px", use: "辅助标签 / meta" },
  { name: "--text-sm", px: "12px", use: "次要文字 / 表头" },
  { name: "--text-base", px: "13px", use: "正文 / sidebar" },
  { name: "--text-md", px: "14px", use: "默认字号 / 按钮 / 输入框" },
  { name: "--text-lg", px: "16px", use: "标题 / 强调" },
  { name: "--text-xl", px: "18px", use: "页面标题" },
  { name: "--text-2xl", px: "20px", use: "KPI 数值" },
  { name: "--text-3xl", px: "24px", use: "大数字展示" },
];

const WEIGHTS = [
  { name: "--font-weight-normal", val: "400", use: "正文" },
  { name: "--font-weight-medium", val: "500", use: "强调文字 / 按钮" },
  { name: "--font-weight-semibold", val: "600", use: "卡片标题 / KPI" },
  { name: "--font-weight-bold", val: "700", use: "大数字" },
];

export function TypographyPage() {
  return (
    <>
      <PageHead
        eyebrow="Foundations · 3.2"
        title="字体 Typography"
        lead="优先使用系统原生字体，不引入 Web Font。字号梯度以 14px 为基准，通过字号、字重、行高建立信息层级。"
      />

      <DocSection title="字体栈" desc="跨平台系统字体，中英文混排优先 PingFang SC / Microsoft YaHei。">
        <CodeBlock
          lang="css"
          code={`font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
  "Helvetica Neue", Helvetica, Arial, sans-serif;`}
        />
      </DocSection>

      <DocSection title="字号梯度" desc="基准 14px。每一级对应明确的使用场景。">
        <div className="card" style={{ padding: "var(--space-2) var(--space-5)" }}>
          {SIZES.map((s) => (
            <div className="spec-row" key={s.name}>
              <span className="spec-name">{s.name}</span>
              <span className="spec-val">{s.px}</span>
              <span
                className="spec-demo type-sample"
                style={{ fontSize: `var(${s.name})` }}
              >
                东鹏 OMS 管理后台 · {s.use}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="字重" desc="4 级字重，避免在正文中混用过多字重。">
        <Preview align="block">
          {WEIGHTS.map((w) => (
            <div
              key={w.name}
              className="row"
              style={{ justifyContent: "space-between", padding: "var(--space-2) 0" }}
            >
              <span
                style={{ fontWeight: Number(w.val), fontSize: "var(--text-lg)" }}
              >
                东鹏 OMS Operation Management System
              </span>
              <span className="text-muted" style={{ fontSize: "var(--text-sm)", fontFamily: "var(--font-mono)" }}>
                {w.val} · {w.use}
              </span>
            </div>
          ))}
        </Preview>
      </DocSection>

      <DocSection title="行高" desc="标题用 tight (1.25)，正文与表格用 normal (1.5)。">
        <div className="two-col-equal">
          <Preview caption="--line-height-tight · 1.25 · 标题">
            <p style={{ lineHeight: "var(--line-height-tight)", fontSize: "var(--text-base)" }}>
              通过间距、字号、颜色建立信息层级，而非依赖分割线。减少装饰性元素，让数据说话。
            </p>
          </Preview>
          <Preview caption="--line-height-normal · 1.5 · 正文">
            <p style={{ lineHeight: "var(--line-height-normal)", fontSize: "var(--text-base)" }}>
              通过间距、字号、颜色建立信息层级，而非依赖分割线。减少装饰性元素，让数据说话。
            </p>
          </Preview>
        </div>
      </DocSection>
    </>
  );
}
