import { useState } from "react";
import { Tabs } from "@/components/ui";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
} from "@/components/showcase/Doc";

export function TabsPage() {
  const [seg, setSeg] = useState("today");
  const [line, setLine] = useState("all");

  return (
    <>
      <PageHead
        eyebrow="Components · 6.6"
        title="标签页 Tabs"
        lead="两种形态：分段控件型用于页面级切换；下划线型用于业务操作页切换，可携带计数 badge。"
      />

      <DocSection title="分段控件型" desc="灰底容器，选中项白底 + 微阴影。">
        <Preview>
          <Tabs
            value={seg}
            onChange={setSeg}
            items={[
              { key: "today", label: "今日" },
              { key: "week", label: "本周" },
              { key: "month", label: "本月" },
            ]}
          />
        </Preview>
        <CodeBlock
          code={`<Tabs
  value={value}
  onChange={setValue}
  items={[
    { key: "today", label: "今日" },
    { key: "week", label: "本周" },
    { key: "month", label: "本月" },
  ]}
/>`}
        />
      </DocSection>

      <DocSection title="下划线型" desc="透明底，选中项品牌色文字 + 底部 2px 色条，附计数。">
        <Preview align="block">
          <Tabs
            variant="underline"
            value={line}
            onChange={setLine}
            items={[
              { key: "all", label: "全部", count: 35 },
              { key: "pending", label: "待提货", count: 12 },
              { key: "partial", label: "部分提货", count: 6 },
              { key: "done", label: "已提货", count: 17 },
            ]}
          />
        </Preview>
        <CodeBlock
          code={`<Tabs
  variant="underline"
  value={value}
  onChange={setValue}
  items={[
    { key: "all", label: "全部", count: 35 },
    { key: "pending", label: "待提货", count: 12 },
  ]}
/>`}
        />
      </DocSection>
    </>
  );
}
