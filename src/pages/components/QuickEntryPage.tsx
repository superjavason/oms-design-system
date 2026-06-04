import {
  ShoppingCart,
  FileText,
  PencilLine,
  Search,
  Boxes,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
} from "@/components/showcase/Doc";

const ENTRIES: { label: string; color: string; Icon: LucideIcon }[] = [
  { label: "下订单", color: "blue", Icon: ShoppingCart },
  { label: "创建报价单", color: "purple", Icon: FileText },
  { label: "订单修改", color: "orange", Icon: PencilLine },
  { label: "订单查询", color: "green", Icon: Search },
  { label: "库存查询", color: "red", Icon: Boxes },
  { label: "对账中心", color: "teal", Icon: Wallet },
];

export function QuickEntryPage() {
  return (
    <>
      <PageHead
        eyebrow="Components · 6.8"
        title="快捷入口 Quick Entry"
        lead="飞书风格圆形图标网格。48px 圆圈 + 居中标签。hover 圆圈放大 1.05 + 投影，标签变品牌色。"
      />

      <DocSection title="入口网格" desc="鼠标悬停观察上浮与放大效果。">
        <Preview>
          <div className="quick-entry-grid" style={{ width: "100%" }}>
            {ENTRIES.map(({ label, color, Icon }) => (
              <button
                key={label}
                className="quick-entry-item"
                style={{ background: "none", border: "none" }}
              >
                <span className={`quick-entry-circle ${color}`}>
                  <Icon className="icon-lg" aria-hidden />
                </span>
                <span className="quick-entry-label">{label}</span>
              </button>
            ))}
          </div>
        </Preview>
        <CodeBlock
          lang="html"
          code={`<div class="quick-entry-grid">
  <button class="quick-entry-item">
    <span class="quick-entry-circle blue"><i data-lucide="shopping-cart"></i></span>
    <span class="quick-entry-label">下订单</span>
  </button>
</div>`}
        />
      </DocSection>

      <DocSection title="颜色方案" desc="6 色循环，库存查询使用品牌红。">
        <div className="row wrap gap-4">
          {[
            { c: "blue", v: "oklch(0.58 0.18 255)", u: "下订单" },
            { c: "purple", v: "oklch(0.52 0.18 280)", u: "创建报价单" },
            { c: "orange", v: "oklch(0.58 0.18 50)", u: "订单修改" },
            { c: "green", v: "oklch(0.52 0.15 150)", u: "订单查询" },
            { c: "red", v: "--color-brand", u: "库存查询" },
            { c: "teal", v: "oklch(0.5 0.12 190)", u: "扩展预留" },
          ].map((x) => (
            <div key={x.c} className="stack gap-2" style={{ alignItems: "center", minWidth: 96 }}>
              <span className={`quick-entry-circle ${x.c}`} />
              <div style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
                  .{x.c}
                </div>
                <div className="text-muted" style={{ fontSize: "var(--text-xs)" }}>
                  {x.u}
                </div>
              </div>
            </div>
          ))}
        </div>
      </DocSection>
    </>
  );
}
