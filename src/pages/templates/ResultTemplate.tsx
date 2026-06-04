import { useState } from "react";
import { CircleCheck, CircleX, TriangleAlert, Info } from "lucide-react";
import { Button, Tabs } from "@/components/ui";
import { PageHead } from "@/components/showcase/Doc";

type Variant = "success" | "error" | "warning" | "info";

const CONFIG: Record<
  Variant,
  { Icon: typeof CircleCheck; title: string; desc: string; extra?: string }
> = {
  success: {
    Icon: CircleCheck,
    title: "操作成功",
    desc: "订单已提交，等待审核中",
    extra: "订单号：PO-2026-00231",
  },
  error: {
    Icon: CircleX,
    title: "操作失败",
    desc: "支付未成功，请检查账户余额后重试",
  },
  warning: {
    Icon: TriangleAlert,
    title: "部分成功",
    desc: "3 条记录导入成功，2 条需人工确认",
  },
  info: {
    Icon: Info,
    title: "操作已受理",
    desc: "您的退货申请正在处理中，预计 1 个工作日内完成",
  },
};

export function ResultTemplate() {
  const [variant, setVariant] = useState<Variant>("success");
  const { Icon, title, desc, extra } = CONFIG[variant];

  return (
    <>
      <PageHead
        eyebrow="Templates · 7.4"
        title="结果页 Result Page"
        lead="操作完成反馈页。垂直居中，48px 图标 + 标题 + 描述 + 补充信息 + 主/次按钮组。"
      />

      <div style={{ marginBottom: "var(--space-4)" }}>
        <Tabs
          value={variant}
          onChange={(k) => setVariant(k as Variant)}
          items={[
            { key: "success", label: "成功" },
            { key: "error", label: "失败" },
            { key: "warning", label: "警告" },
            { key: "info", label: "信息" },
          ]}
        />
      </div>

      <div className="template-frame">
        <div className="tpl-canvas">
          <div className="result-page">
            <div className={`result-icon result-icon-${variant}`}>
              <Icon className="icon-2xl" aria-hidden />
            </div>
            <h2 className="result-title">{title}</h2>
            <p className="result-desc">{desc}</p>
            {extra && <p className="result-extra">{extra}</p>}
            <div className="result-actions">
              <Button>查看订单</Button>
              <Button variant="outline">返回首页</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
