import { StatusBadge } from "@/components/ui";
import { TODOS, NOTICES, PICKUPS, money } from "@/data/mock";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
  Callout,
} from "@/components/showcase/Doc";

export function ListItemPage() {
  return (
    <>
      <PageHead
        eyebrow="Components · 6.9"
        title="列表项 List Item"
        lead="卡片内条目。待办 / 公告用未读红点 + 标题 + 元信息；动态列表用标题 + 右侧金额 + 状态 Badge。"
      />

      <DocSection title="待办 / 公告条目" desc="8px 品牌红未读点，hover 背景变灰。">
        <div className="two-col-equal">
          <Preview align="block" variant="plain">
            {TODOS.slice(0, 3).map((t, i) => (
              <div className="todo-item" key={i}>
                <div className="unread-dot" />
                <div className="todo-body">
                  <div className="todo-title">{t.title}</div>
                  <div className="todo-meta">{t.meta}</div>
                </div>
              </div>
            ))}
          </Preview>
          <Preview align="block" variant="plain">
            {NOTICES.map((n, i) => (
              <div className="notice-item" key={i}>
                <div className="unread-dot" />
                <div className="notice-body">
                  <div className="notice-title">{n.title}</div>
                  <div className="notice-meta">{n.meta}</div>
                </div>
              </div>
            ))}
          </Preview>
        </div>
        <CodeBlock
          lang="html"
          code={`<div class="todo-item">
  <div class="unread-dot"></div>
  <div class="todo-body">
    <div class="todo-title">标题文本</div>
    <div class="todo-meta">元信息</div>
  </div>
</div>`}
        />
      </DocSection>

      <DocSection title="动态列表条目" desc="订单 / 提货 / 费用，右侧放金额 + 状态 Badge。">
        <Preview align="block" variant="plain">
          {PICKUPS.map((p) => (
            <div className="dynamic-item" key={p.id}>
              <div className="dynamic-body">
                <div className="dynamic-title">{p.id}</div>
                <div className="dynamic-meta">
                  {p.region} · {p.contact}
                </div>
              </div>
              <div className="dynamic-right">
                <div className="dynamic-amount">{money(p.amount)}</div>
                <StatusBadge status={p.status}>{p.statusLabel}</StatusBadge>
              </div>
            </div>
          ))}
        </Preview>
        <CodeBlock
          lang="html"
          code={`<div class="dynamic-item">
  <div class="dynamic-body">
    <div class="dynamic-title">WO20260401567</div>
    <div class="dynamic-meta">禅城区 · 王小姐</div>
  </div>
  <div class="dynamic-right">
    <div class="dynamic-amount">¥45,800</div>
    <span class="status-badge status-pending">待提货</span>
  </div>
</div>`}
        />
      </DocSection>

      <Callout type="warning">
        <strong>禁止：</strong>列表项加彩色方块 icon（<code className="inline-code">.dynamic-icon-sq</code> 已废弃）。
        统一未读样式：品牌红圆点 8px。
      </Callout>
    </>
  );
}
