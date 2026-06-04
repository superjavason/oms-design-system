import { Inbox, Search, Shield, Hammer, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui";
import { PageHead, DocSection } from "@/components/showcase/Doc";

const VARIANTS: {
  Icon: LucideIcon;
  title: string;
  desc: string;
  action?: string;
}[] = [
  { Icon: Inbox, title: "暂无数据", desc: "当前没有相关记录", action: "新建订单" },
  { Icon: Search, title: "未找到匹配结果", desc: "请尝试调整筛选条件或关键词", action: "重置筛选" },
  { Icon: Shield, title: "暂无访问权限", desc: "请联系管理员开通权限" },
  { Icon: Hammer, title: "功能开发中", desc: "该功能即将上线，敬请期待" },
];

export function EmptyTemplate() {
  return (
    <>
      <PageHead
        eyebrow="Templates · 7.5"
        title="空状态 Empty State"
        lead="无数据、搜索无结果、无权限、建设中四类场景。垂直居中，40px 弱化图标 + 标题 + 描述 + 可选操作。"
      />

      <DocSection title="四类变体" desc="图标色 --color-fg-subtle，保持克制。">
        <div className="two-col-equal">
          {VARIANTS.map((v) => {
            const Icon = v.Icon;
            return (
              <div className="template-frame" key={v.title}>
                <div className="empty-state" style={{ padding: "var(--space-8) var(--space-4)" }}>
                  <Icon className="icon-xl empty-icon" aria-hidden />
                  <div className="empty-title">{v.title}</div>
                  <div className="empty-desc">{v.desc}</div>
                  {v.action && (
                    <Button size="sm" variant="outline">
                      {v.action}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </DocSection>
    </>
  );
}
