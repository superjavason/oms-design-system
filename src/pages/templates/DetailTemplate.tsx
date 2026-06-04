import { ArrowLeft, Printer } from "lucide-react";
import { Button, Card, CardHeader, CardContent, StatusBadge } from "@/components/ui";
import { money } from "@/data/mock";
import { PageHead, Callout } from "@/components/showcase/Doc";

const FIELDS = [
  { label: "订单号", value: "PO-2026-00231" },
  { label: "客户名称", value: "佛山禅城建材城" },
  { label: "下单时间", value: "2026-06-04 14:30" },
  { label: "交付日期", value: "2026-06-12" },
  { label: "销售代表", value: "李明 · 华南大区" },
  { label: "收货地址", value: "佛山市禅城区季华五路 33 号" },
  { label: "联系人", value: "王小姐 138****6688" },
  { label: "订单类型", value: "常规采购" },
];

const AMOUNTS = [
  { label: "订单金额", value: money(45800) },
  { label: "已付金额", value: money(20000) },
  { label: "待付金额", value: money(25800) },
  { label: "优惠金额", value: money(1200) },
];

const ITEMS = [
  { name: "东鹏瓷砖 800×800 抛光砖", spec: "FG8001", qty: 120, price: 168 },
  { name: "东鹏洁具 连体马桶", spec: "TC-2026", qty: 16, price: 1280 },
  { name: "东鹏木地板 强化复合", spec: "WD-503", qty: 240, price: 89 },
];

const LOGS = [
  { time: "2026-06-04 14:30", who: "王小姐", text: "提交订单" },
  { time: "2026-06-04 15:02", who: "李明", text: "销售代表确认订单信息" },
  { time: "2026-06-04 16:18", who: "系统", text: "等待区域经理审核" },
];

export function DetailTemplate() {
  return (
    <>
      <PageHead
        eyebrow="Templates · 7.2"
        title="详情页 Detail Page"
        lead="页头（返回 + 标题 + 状态 + 操作）+ 信息区块 + 商品明细 + 操作日志 + sticky 底部操作栏。"
      />

      <Callout type="brand">下方为订单详情真实模版。底部操作栏随内容 sticky 吸底。</Callout>

      <div className="template-frame">
        <div className="tpl-canvas">
          <div className="detail-page">
            {/* 页头 */}
            <div className="detail-header">
              <div className="detail-header-left">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="icon-sm" aria-hidden /> 返回
                </Button>
                <h1 className="detail-title">订单详情</h1>
                <StatusBadge status="pending">待审核</StatusBadge>
              </div>
              <div className="detail-header-right">
                <Button variant="outline" size="sm">
                  <Printer className="icon-sm" aria-hidden /> 打印
                </Button>
                <Button size="sm">审核</Button>
              </div>
            </div>

            <div className="detail-body">
              {/* 基本信息 */}
              <Card>
                <CardHeader title="基本信息" action={false} />
                <CardContent>
                  <div className="info-grid info-grid-4">
                    {FIELDS.map((f) => (
                      <div className="info-item" key={f.label}>
                        <div className="info-label">{f.label}</div>
                        <div className="info-value">{f.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 金额信息 */}
              <Card>
                <CardHeader title="金额信息" action={false} />
                <CardContent>
                  <div className="info-grid info-grid-4">
                    {AMOUNTS.map((a) => (
                      <div className="info-item" key={a.label}>
                        <div className="info-label">{a.label}</div>
                        <div className="info-value" style={{ fontVariantNumeric: "tabular-nums" }}>
                          {a.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 商品明细 */}
              <Card>
                <CardHeader title="商品明细" action={false} />
                <CardContent style={{ padding: 0 }}>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">商品名称</th>
                        <th scope="col">规格</th>
                        <th scope="col" className="col-num">数量</th>
                        <th scope="col" className="col-num">单价</th>
                        <th scope="col" className="col-num">小计</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ITEMS.map((it) => (
                        <tr key={it.spec}>
                          <td>{it.name}</td>
                          <td className="text-muted">{it.spec}</td>
                          <td className="col-num">{it.qty}</td>
                          <td className="col-num">{money(it.price)}</td>
                          <td className="col-num">{money(it.qty * it.price)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* 操作日志 */}
              <Card>
                <CardHeader title="操作日志" action={false} />
                <CardContent>
                  <div className="timeline">
                    {LOGS.map((l, i) => (
                      <div className="timeline-item" key={i}>
                        <div className="timeline-dot" />
                        <div>
                          <div className="timeline-text">
                            {l.who} · {l.text}
                          </div>
                          <div className="timeline-time">{l.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* sticky 底部 */}
            <div className="detail-footer">
              <Button variant="outline">取消订单</Button>
              <Button>编辑</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
