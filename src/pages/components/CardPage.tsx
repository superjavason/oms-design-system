import { Card, CardHeader, CardContent } from "@/components/ui";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
  Callout,
} from "@/components/showcase/Doc";

export function CardPage() {
  return (
    <>
      <PageHead
        eyebrow="Components · 6.2"
        title="卡片 Card"
        lead="容器级组件，圆角 12px。标题栏 + 内容区结构，右上角统一「全部 >」入口。"
      />

      <Callout type="brand">
        <strong>统一规范：</strong>所有卡片右上角使用「全部 &gt;」，不出现「更多」「自定义」「查看详情」等变体。
        待办 / 公告可用「共 N 条 · 全部 &gt;」格式。
      </Callout>

      <DocSection title="基础卡片" desc="card-header（标题 + 全部入口） + card-content。">
        <Preview align="block">
          <Card>
            <CardHeader title="最新订单" />
            <CardContent>
              <p className="text-muted" style={{ fontSize: "var(--text-base)" }}>
                卡片内容区。标题字号 14px / 字重 600，标题不加装饰 icon，不挂 badges 或切换控件。
              </p>
            </CardContent>
          </Card>
        </Preview>
        <CodeBlock
          code={`<Card>
  <CardHeader title="最新订单" />
  <CardContent>
    {/* 内容区 */}
  </CardContent>
</Card>`}
        />
      </DocSection>

      <DocSection title="右上角入口变体" desc="特殊场景可携带计数，但文案落点仍是「全部」。">
        <div className="two-col-equal">
          <Preview align="block">
            <Card>
              <CardHeader title="待办事项" action="共 12 条 · 全部" />
              <CardContent>
                <p className="text-muted" style={{ fontSize: "var(--text-base)" }}>
                  共 N 条 · 全部 &gt;
                </p>
              </CardContent>
            </Card>
          </Preview>
          <Preview align="block">
            <Card>
              <CardHeader title="资金账号" action={false} />
              <CardContent>
                <p className="text-muted" style={{ fontSize: "var(--text-base)" }}>
                  无右上角入口（action=false）
                </p>
              </CardContent>
            </Card>
          </Preview>
        </div>
      </DocSection>

      <DocSection title="规格">
        <table className="prop-table">
          <thead>
            <tr>
              <th>属性</th>
              <th>值</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>圆角</td><td><code>--radius-lg</code>（12px）</td></tr>
            <tr><td>边框</td><td>1px solid <code>--color-border</code></td></tr>
            <tr><td>Header padding</td><td>16px 20px，底部 1px 分割线</td></tr>
            <tr><td>Content padding</td><td>16px 20px</td></tr>
            <tr><td>标题</td><td>14px / 字重 600 / 不加 icon</td></tr>
          </tbody>
        </table>
      </DocSection>
    </>
  );
}
