import { Download, Plus, Trash2, Settings } from "lucide-react";
import { Button } from "@/components/ui";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
  PropTable,
} from "@/components/showcase/Doc";

export function ButtonPage() {
  return (
    <>
      <PageHead
        eyebrow="Components · 6.1"
        title="按钮 Button"
        lead="inline-flex 布局，icon 与文字间距 8px，不换行。hover 态切换 ≤ 120ms。"
      />

      <DocSection title="变体 Variant" desc="5 种变体，主操作用 default，次要用 outline / ghost。">
        <Preview>
          <Button>主按钮</Button>
          <Button variant="outline">线框按钮</Button>
          <Button variant="ghost">幽灵按钮</Button>
          <Button variant="secondary">次要按钮</Button>
          <Button variant="destructive">危险按钮</Button>
        </Preview>
        <CodeBlock
          code={`<Button>主按钮</Button>
<Button variant="outline">线框按钮</Button>
<Button variant="ghost">幽灵按钮</Button>
<Button variant="secondary">次要按钮</Button>
<Button variant="destructive">危险按钮</Button>`}
        />
      </DocSection>

      <DocSection title="尺寸 Size" desc="default 36px / sm 32px / xs 26px，对应不同密度场景。">
        <Preview>
          <Button size="default">默认 36px</Button>
          <Button size="sm">小号 32px</Button>
          <Button size="xs">超小 26px</Button>
        </Preview>
      </DocSection>

      <DocSection title="图标按钮" desc="内联图标传 children；纯图标按钮用 iconOnly，必须提供 aria-label。">
        <Preview>
          <Button>
            <Download className="icon-sm" aria-hidden /> 导出
          </Button>
          <Button variant="outline">
            <Plus className="icon-sm" aria-hidden /> 新建订单
          </Button>
          <Button variant="destructive" size="sm">
            <Trash2 className="icon-sm" aria-hidden /> 删除
          </Button>
          <Button variant="outline" iconOnly aria-label="设置">
            <Settings className="icon-sm" aria-hidden />
          </Button>
        </Preview>
        <CodeBlock
          code={`<Button>
  <Download className="icon-sm" aria-hidden /> 导出
</Button>

<Button variant="outline" iconOnly aria-label="设置">
  <Settings className="icon-sm" aria-hidden />
</Button>`}
        />
      </DocSection>

      <DocSection title="状态" desc="禁用态 opacity 0.5 + pointer-events none。">
        <Preview>
          <Button disabled>禁用主按钮</Button>
          <Button variant="outline" disabled>
            禁用线框
          </Button>
        </Preview>
      </DocSection>

      <DocSection title="API">
        <PropTable
          rows={[
            { name: "variant", type: `"default" | "outline" | "ghost" | "secondary" | "destructive"`, def: `"default"`, desc: "按钮变体" },
            { name: "size", type: `"default" | "sm" | "xs"`, def: `"default"`, desc: "尺寸" },
            { name: "iconOnly", type: "boolean", def: "false", desc: "纯图标按钮（宽=高），需 aria-label" },
            { name: "...props", type: "ButtonHTMLAttributes", def: "—", desc: "原生 button 属性（onClick / disabled 等）" },
          ]}
        />
      </DocSection>
    </>
  );
}
