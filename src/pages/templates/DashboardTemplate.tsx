import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  FileText,
  PencilLine,
  Search,
  Boxes,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  Select,
  StatusBadge,
} from "@/components/ui";
import {
  KPIS,
  TODOS,
  NOTICES,
  ORDERS,
  PICKUPS,
  EXPENSES,
  money,
} from "@/data/mock";
import { PageHead, Callout } from "@/components/showcase/Doc";

const ENTRIES: { label: string; color: string; Icon: LucideIcon }[] = [
  { label: "下订单", color: "blue", Icon: ShoppingCart },
  { label: "创建报价单", color: "purple", Icon: FileText },
  { label: "订单修改", color: "orange", Icon: PencilLine },
  { label: "订单查询", color: "green", Icon: Search },
  { label: "库存查询", color: "red", Icon: Boxes },
  { label: "对账中心", color: "teal", Icon: Wallet },
];

export function DashboardTemplate() {
  return (
    <>
      <PageHead
        eyebrow="Templates · 7.7"
        title="首页 Dashboard"
        lead="欢迎横幅 + KPI 指标 + 资金账号 / 快捷入口 + 待办 / 公告 + 动态列表。卡片右上角统一「全部 >」。"
      />

      <Callout type="brand">
        以下为完整首页模版的真实渲染。所有卡片、网格、间距均严格引用 Design Token。
      </Callout>

      <div className="template-frame">
        <div className="tpl-canvas">
          <div className="home-content" style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
            {/* Welcome Banner */}
            <div className="welcome-banner">
              <div>
                <h2>下午好，李经理 👋</h2>
                <p>今日已有 86 笔新订单，64 笔待提货，请及时处理待办事项。</p>
              </div>
              <div className="welcome-stats">
                <div className="welcome-stat">
                  <div className="num">12</div>
                  <div className="lbl">待审核</div>
                </div>
                <div className="welcome-stat">
                  <div className="num">218</div>
                  <div className="lbl">待提货</div>
                </div>
              </div>
            </div>

            {/* KPI Grid */}
            <div className="kpi-grid">
              {KPIS.map((k) => (
                <div className="kpi-card" key={k.label}>
                  <div className="kpi-head">
                    <span className="kpi-label">{k.label}</span>
                    <span className={`kpi-trend ${k.up ? "up" : "down"}`}>
                      {k.up ? (
                        <TrendingUp className="icon-sm" aria-hidden />
                      ) : (
                        <TrendingDown className="icon-sm" aria-hidden />
                      )}
                      {k.trend}
                    </span>
                  </div>
                  <div className="kpi-value">{k.value}</div>
                </div>
              ))}
            </div>

            {/* 资金账号 + 快捷入口 */}
            <div className="two-col">
              <Card>
                <CardHeader title="资金账号" action={false} />
                <CardContent>
                  <Select inputSize="sm" defaultValue="hq" aria-label="销售组织">
                    <option value="hq">东鹏华南大区</option>
                    <option value="east">东鹏华东大区</option>
                  </Select>
                  <div style={{ marginTop: "var(--space-3)" }}>
                    <div className="fund-row">
                      <span className="fund-label">可开单金额</span>
                      <span className="fund-value">{money(1286500)}</span>
                    </div>
                    <div className="fund-row">
                      <span className="fund-label">现金余额</span>
                      <span className="fund-value">{money(458200)}</span>
                    </div>
                    <div className="fund-row">
                      <span className="fund-label">积分</span>
                      <span className="fund-value">86,400</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="快捷入口" action={false} />
                <CardContent>
                  <div className="quick-entry-grid">
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
                </CardContent>
              </Card>
            </div>

            {/* 待办 + 公告 */}
            <div className="two-col-equal">
              <Card>
                <CardHeader title="待办事项" action={`共 ${TODOS.length} 条 · 全部`} />
                <CardContent style={{ padding: "var(--space-2) var(--space-3)" }}>
                  {TODOS.map((t, i) => (
                    <div className="todo-item" key={i}>
                      <div className="unread-dot" />
                      <div className="todo-body">
                        <div className="todo-title">{t.title}</div>
                        <div className="todo-meta">{t.meta}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="通知公告" action={`共 ${NOTICES.length} 条 · 全部`} />
                <CardContent style={{ padding: "var(--space-2) var(--space-3)" }}>
                  {NOTICES.map((n, i) => (
                    <div className="notice-item" key={i}>
                      <div className="unread-dot" />
                      <div className="notice-body">
                        <div className="notice-title">{n.title}</div>
                        <div className="notice-meta">{n.meta}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* 动态列表 ×3 */}
            <div className="three-col">
              <Card>
                <CardHeader title="最新订单" />
                <CardContent style={{ padding: "var(--space-2) var(--space-3)" }}>
                  {ORDERS.slice(0, 4).map((o) => (
                    <div className="dynamic-item" key={o.id}>
                      <div className="dynamic-body">
                        <div className="dynamic-title">{o.id}</div>
                        <div className="dynamic-meta">
                          {o.region} · {o.customer}
                        </div>
                      </div>
                      <div className="dynamic-right">
                        <div className="dynamic-amount">{money(o.amount)}</div>
                        <StatusBadge status={o.status}>{o.statusLabel}</StatusBadge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="最近提货单" />
                <CardContent style={{ padding: "var(--space-2) var(--space-3)" }}>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader title="最近费用支出" />
                <CardContent style={{ padding: "var(--space-2) var(--space-3)" }}>
                  {EXPENSES.map((e) => (
                    <div className="dynamic-item" key={e.id}>
                      <div className="dynamic-body">
                        <div className="dynamic-title">{e.title}</div>
                        <div className="dynamic-meta">{e.dept}</div>
                      </div>
                      <div className="dynamic-right">
                        <div className="dynamic-amount">{money(e.amount)}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
