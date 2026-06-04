import { StatusBadge } from "@/components/ui";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
  Callout,
} from "@/components/showcase/Doc";

export function StatusPage() {
  return (
    <>
      <PageHead
        eyebrow="Components · 6.7"
        title="状态指示 Status Badge"
        lead="用于订单、提货单等业务对象的状态展示。三种语义底色，带 role=status 供屏幕阅读器播报。"
      />

      <DocSection title="三种状态" desc="待处理（黄）/ 已完成（绿）/ 处理中（蓝）。">
        <Preview>
          <StatusBadge status="pending">待提货</StatusBadge>
          <StatusBadge status="done">已完成</StatusBadge>
          <StatusBadge status="processing">配货中</StatusBadge>
        </Preview>
        <CodeBlock
          code={`<StatusBadge status="pending">待提货</StatusBadge>
<StatusBadge status="done">已完成</StatusBadge>
<StatusBadge status="processing">配货中</StatusBadge>`}
        />
      </DocSection>

      <DocSection title="业务语义映射" desc="同一状态类型在订单 / 提货 / 支付场景的文案。">
        <table className="prop-table">
          <thead>
            <tr>
              <th>状态</th>
              <th>订单</th>
              <th>提货</th>
              <th>支付</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><StatusBadge status="pending">待处理</StatusBadge></td>
              <td>待审核</td>
              <td>待提货 / 部分提货</td>
              <td>待支付</td>
            </tr>
            <tr>
              <td><StatusBadge status="done">已完成</StatusBadge></td>
              <td>已通过 / 已发货</td>
              <td>已提货</td>
              <td>已支付</td>
            </tr>
            <tr>
              <td><StatusBadge status="processing">处理中</StatusBadge></td>
              <td>处理中</td>
              <td>配货中</td>
              <td>处理中</td>
            </tr>
          </tbody>
        </table>
      </DocSection>

      <Callout>
        Status Badge 与 Badge 区分：Status Badge 表达<strong>业务对象状态</strong>（订单流转），
        语义底色固定；Badge 表达<strong>计数</strong>与通用标记。
      </Callout>
    </>
  );
}
