import { useState } from "react";
import { Input, Select, Textarea } from "@/components/ui";
import {
  PageHead,
  DocSection,
  Preview,
  CodeBlock,
  PropTable,
} from "@/components/showcase/Doc";

export function InputPage() {
  const [val, setVal] = useState("");
  const error = val.length > 0 && val.length < 3;

  return (
    <>
      <PageHead
        eyebrow="Components · 6.4"
        title="输入框 · 选择器"
        lead="Input 与 Select 统一规格：36px 高（sm 32px），圆角 8px，focus 态品牌色边框 + 聚焦环。"
      />

      <DocSection title="输入框 Input" desc="默认与小尺寸。focus 试试看聚焦环效果。">
        <Preview align="block">
          <div style={{ maxWidth: 320, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Input placeholder="请输入订单号 / 客户名" />
            <Input inputSize="sm" placeholder="小尺寸输入框（32px）" />
            <Input disabled placeholder="禁用态" />
          </div>
        </Preview>
        <CodeBlock
          code={`<Input placeholder="请输入订单号 / 客户名" />
<Input inputSize="sm" placeholder="小尺寸" />
<Input disabled placeholder="禁用态" />`}
        />
      </DocSection>

      <DocSection title="下拉选择 Select" desc="原生 select + CSS 覆盖 appearance，右侧自定义 chevron。">
        <Preview align="block">
          <div style={{ maxWidth: 320, display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Select defaultValue="">
              <option value="" disabled>
                订单状态
              </option>
              <option value="pending">待审核</option>
              <option value="processing">配货中</option>
              <option value="done">已完成</option>
            </Select>
            <Select inputSize="sm" defaultValue="all">
              <option value="all">全部客户</option>
              <option value="1">佛山禅城建材城</option>
              <option value="2">广州天河旗舰店</option>
            </Select>
          </div>
        </Preview>
      </DocSection>

      <DocSection title="校验状态" desc="失焦时校验（onBlur），错误态红色边框 + 下方提示。本例输入少于 3 字即报错。">
        <Preview align="block">
          <div style={{ maxWidth: 320 }}>
            <label className="form-label" htmlFor="demo-name">
              客户名称 <span className="required">*</span>
            </label>
            <Input
              id="demo-name"
              value={val}
              error={error}
              aria-invalid={error}
              aria-describedby={error ? "demo-name-err" : undefined}
              onChange={(e) => setVal(e.target.value)}
              placeholder="至少输入 3 个字符"
            />
            {error && (
              <div id="demo-name-err" className="field-error">
                客户名称至少需要 3 个字符
              </div>
            )}
          </div>
        </Preview>
      </DocSection>

      <DocSection title="多行文本 Textarea">
        <Preview align="block">
          <div style={{ maxWidth: 480 }}>
            <Textarea placeholder="请输入备注信息…" />
          </div>
        </Preview>
      </DocSection>

      <DocSection title="API">
        <PropTable
          rows={[
            { name: "inputSize", type: `"default" | "sm"`, def: `"default"`, desc: "尺寸（36px / 32px）" },
            { name: "error", type: "boolean", def: "false", desc: "错误态，红色边框" },
            { name: "...props", type: "Input / Select / Textarea 原生属性", def: "—", desc: "value / onChange / placeholder 等" },
          ]}
        />
      </DocSection>
    </>
  );
}
