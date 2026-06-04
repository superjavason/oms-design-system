import { useState, type ReactNode } from "react";
import { Check, Copy, Info, AlertTriangle, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

/* ---------------- 页面标题 ---------------- */
export function PageHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: ReactNode;
}) {
  return (
    <header className="page-head fade-up">
      <div className="page-eyebrow">{eyebrow}</div>
      <h1 className="page-title">{title}</h1>
      <p className="page-lead">{lead}</p>
    </header>
  );
}

/* ---------------- 文档章节 ---------------- */
export function DocSection({
  id,
  title,
  desc,
  children,
}: {
  id?: string;
  title: string;
  desc?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="doc-section">
      <div className="doc-section-head">
        <h2 className="doc-section-title">{title}</h2>
        {desc && <p className="doc-section-desc">{desc}</p>}
      </div>
      {children}
    </section>
  );
}

/* ---------------- 组件预览 ---------------- */
export function Preview({
  children,
  caption,
  variant = "default",
  align = "left",
}: {
  children: ReactNode;
  caption?: ReactNode;
  variant?: "default" | "plain";
  align?: "left" | "center" | "block";
}) {
  return (
    <div className="preview">
      <div
        className={cn(
          "preview-stage",
          variant === "plain" && "stage-plain",
          align === "center" && "stage-center",
          align === "block" && "stage-block"
        )}
      >
        {children}
      </div>
      {caption && <div className="preview-caption">{caption}</div>}
    </div>
  );
}

/* ---------------- 代码块（含复制） ---------------- */
export function CodeBlock({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    });
  };
  return (
    <div className="code-block">
      <div className="code-block-head">
        <span className="code-block-lang">{lang}</span>
        <button className="code-copy" onClick={copy} aria-label="复制代码">
          {copied ? (
            <>
              <Check className="icon-sm" aria-hidden /> 已复制
            </>
          ) : (
            <>
              <Copy className="icon-sm" aria-hidden /> 复制
            </>
          )}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* ---------------- 属性表 ---------------- */
export interface PropRow {
  name: string;
  type: string;
  def?: string;
  desc: string;
}
export function PropTable({ rows }: { rows: PropRow[] }) {
  return (
    <table className="prop-table">
      <thead>
        <tr>
          <th style={{ width: "22%" }}>属性</th>
          <th style={{ width: "30%" }}>类型</th>
          <th style={{ width: "16%" }}>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td>
              <code>{r.name}</code>
            </td>
            <td className="text-muted">
              <code style={{ background: "transparent", color: "inherit" }}>
                {r.type}
              </code>
            </td>
            <td className="text-muted">{r.def ?? "—"}</td>
            <td>{r.desc}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------------- 提示框 ---------------- */
export function Callout({
  type = "info",
  children,
}: {
  type?: "info" | "warning" | "brand";
  children: ReactNode;
}) {
  const Icon = type === "warning" ? AlertTriangle : type === "brand" ? Sparkles : Info;
  return (
    <div className={cn("callout", `callout-${type}`)}>
      <span className="callout-icon">
        <Icon className="icon-md" aria-hidden />
      </span>
      <div>{children}</div>
    </div>
  );
}

/* ---------------- DO / DON'T ---------------- */
export function DoDont({
  doItems,
  dontItems,
}: {
  doItems: ReactNode[];
  dontItems: ReactNode[];
}) {
  return (
    <div className="dodont">
      <div className="dodont-card dodont-do">
        <div className="dodont-head">
          <Check className="icon-sm" aria-hidden /> 推荐 DO
        </div>
        <div className="dodont-body">
          <ul>
            {doItems.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="dodont-card dodont-dont">
        <div className="dodont-head">
          <AlertTriangle className="icon-sm" aria-hidden /> 避免 DON'T
        </div>
        <div className="dodont-body">
          <ul>
            {dontItems.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
