import { Badge } from "@/components/ui";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
  Callout,
  PropTable,
} from "@/components/showcase/Doc";

export function BadgePage() {
  return (
    <>
      <PageHead
        eyebrow="Components · 6.3"
        title="徽标 Badge"
        lead="用于计数值和状态标记。圆角 4px，字号 12px，字重 500。"
      />

      <DocSection title="变体 Variant" desc="7 种变体，覆盖主标签、计数、线框与语义色。">
        <Preview>
          <Badge>主标签</Badge>
          <Badge variant="secondary">128</Badge>
          <Badge variant="outline">线框</Badge>
          <Badge variant="destructive">未读 5</Badge>
          <Badge variant="success">已完成</Badge>
          <Badge variant="warning">待处理</Badge>
          <Badge variant="info">处理中</Badge>
        </Preview>
        <CodeBlock
          code={`<Badge>主标签</Badge>
<Badge variant="secondary">128</Badge>
<Badge variant="destructive">未读 5</Badge>
<Badge variant="success">已完成</Badge>`}
        />
      </DocSection>

      <DocSection title="计数场景" desc="最常见用法：Tab 计数、未读数。">
        <Preview>
          <span className="row gap-2">
            全部 <Badge variant="secondary">35</Badge>
          </span>
          <span className="row gap-2">
            待提货 <Badge variant="secondary">12</Badge>
          </span>
          <span className="row gap-2">
            消息 <Badge variant="destructive">9</Badge>
          </span>
        </Preview>
      </DocSection>

      <Callout type="warning">
        <strong>禁止：</strong>用 Badge 做「重要」「促销」等内容标签 ——
        内容标签会增加视觉噪音，直接去掉，让内容本身说话。
      </Callout>

      <DocSection title="API">
        <PropTable
          rows={[
            { name: "variant", type: `"default" | "secondary" | "outline" | "destructive" | "success" | "warning" | "info"`, def: `"default"`, desc: "徽标变体" },
            { name: "children", type: "ReactNode", def: "—", desc: "徽标内容（计数 / 状态文字）" },
          ]}
        />
      </DocSection>
    </>
  );
}
