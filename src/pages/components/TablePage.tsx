import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { StatusBadge } from "@/components/ui";
import { ORDERS, money } from "@/data/mock";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
} from "@/components/showcase/Doc";

export function TablePage() {
  const [asc, setAsc] = useState(false);
  const rows = useMemo(
    () => [...ORDERS].sort((a, b) => (asc ? a.amount - b.amount : b.amount - a.amount)),
    [asc]
  );

  return (
    <>
      <PageHead
        eyebrow="Components · 6.5"
        title="表格 Table"
        lead="字号 13px，表头 40px 灰底，数据行 44px，行 hover 浅灰。表头使用 scope=col 保证无障碍。"
      />

      <DocSection title="基础表格" desc="点击「金额」列头切换升序 / 降序。鼠标悬停行观察 hover 态。">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">订单号</th>
                <th scope="col">客户名称</th>
                <th scope="col">地区</th>
                <th scope="col" className="col-num">
                  <button
                    className="th-sortable"
                    onClick={() => setAsc((v) => !v)}
                    style={{ background: "none", border: "none", color: "inherit", font: "inherit" }}
                  >
                    金额
                    <ArrowUpDown className="icon-sm" aria-hidden />
                  </button>
                </th>
                <th scope="col">状态</th>
                <th scope="col">下单时间</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td style={{ fontVariantNumeric: "tabular-nums" }}>{r.id}</td>
                  <td>{r.customer}</td>
                  <td className="text-muted">{r.region}</td>
                  <td className="col-num">{money(r.amount)}</td>
                  <td>
                    <StatusBadge status={r.status}>{r.statusLabel}</StatusBadge>
                  </td>
                  <td className="text-muted">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection title="HTML 结构" desc="table-wrapper 提供边框、圆角与横向滚动容器。">
        <CodeBlock
          lang="html"
          code={`<div class="table-wrapper">
  <table class="table">
    <thead>
      <tr><th scope="col">订单号</th><th scope="col">金额</th></tr>
    </thead>
    <tbody>
      <tr><td>PO-2026-00231</td><td class="col-num">¥45,800</td></tr>
    </tbody>
  </table>
</div>`}
        />
      </DocSection>

      <DocSection title="规格">
        <Preview variant="plain" align="block">
          <table className="prop-table" style={{ background: "var(--color-bg)" }}>
            <thead>
              <tr><th>属性</th><th>值</th></tr>
            </thead>
            <tbody>
              <tr><td>字号</td><td>13px</td></tr>
              <tr><td>表头</td><td>40px 高 · 灰底 <code>--color-bg-muted</code> · 字重 500 · <code>--color-fg-muted</code></td></tr>
              <tr><td>数据行</td><td>44px 高 · 单元格 padding 0 12px</td></tr>
              <tr><td>行 hover</td><td><code>--color-bg-hover</code></td></tr>
            </tbody>
          </table>
        </Preview>
      </DocSection>
    </>
  );
}
