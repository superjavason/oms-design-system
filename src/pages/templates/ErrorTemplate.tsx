import { useState } from "react";
import { ShieldOff, FileQuestion, ServerCrash, type LucideIcon } from "lucide-react";
import { Button, Tabs } from "@/components/ui";
import { PageHead } from "@/components/showcase/Doc";

type Code = "403" | "404" | "500";

const CONFIG: Record<
  Code,
  { Icon: LucideIcon; title: string; desc: string; refresh?: boolean }
> = {
  "403": {
    Icon: ShieldOff,
    title: "403 无权限",
    desc: "您没有访问该页面的权限，请联系管理员",
  },
  "404": {
    Icon: FileQuestion,
    title: "404 页面不存在",
    desc: "您访问的页面可能已被删除或移动",
  },
  "500": {
    Icon: ServerCrash,
    title: "500 服务器错误",
    desc: "服务器出现异常，请稍后再试",
    refresh: true,
  },
};

export function ErrorTemplate() {
  const [code, setCode] = useState<Code>("404");
  const { Icon, title, desc, refresh } = CONFIG[code];

  return (
    <>
      <PageHead
        eyebrow="Templates · 7.6"
        title="异常页 Error Page"
        lead="HTTP 错误状态展示。状态码作背景水印 + 弱化图标 + 标题 + 描述 + 返回首页主操作。"
      />

      <div style={{ marginBottom: "var(--space-4)" }}>
        <Tabs
          value={code}
          onChange={(k) => setCode(k as Code)}
          items={[
            { key: "403", label: "403" },
            { key: "404", label: "404" },
            { key: "500", label: "500" },
          ]}
        />
      </div>

      <div className="template-frame">
        <div className="tpl-canvas">
          <div className="error-page">
            <div className="error-code">{code}</div>
            <div className="error-icon">
              <Icon className="icon-2xl" aria-hidden />
            </div>
            <h2 className="error-title">{title}</h2>
            <p className="error-desc">{desc}</p>
            <div className="error-actions">
              <Button>返回首页</Button>
              {refresh && <Button variant="outline">刷新页面</Button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
