import { X, Check } from "lucide-react";
import { PageHead, DocSection, Callout } from "@/components/showcase/Doc";

const ROWS = [
  { bad: "硬编码色值（#fff, #1890ff, rgba()）", good: "使用 var(--color-*)" },
  { bad: "硬编码 px 间距", good: "使用 var(--space-N)" },
  { bad: "卡片标题加装饰 icon", good: "纯文字标题" },
  { bad: "列表项加彩色方块 icon", good: "纯文字 + 状态 Badge" },
  { bad: "内容标签（「重要」「促销」「确认」）", good: "去掉，让内容本身说话" },
  { bad: "右上角「更多」「自定义」「查看详情」混用", good: "统一「全部 >」" },
  { bad: "多个未读样式混用", good: "统一 .unread-dot（品牌红圆点 8px）" },
  { bad: "过度装饰", good: "克制。Icon 只在功能交互处出现" },
  { bad: "引入第三方 Web Font", good: "使用系统字体栈" },
  { bad: "自定义 easing 函数", good: "统一 ease" },
  { bad: "动画 > 300ms", good: "最大 300ms" },
];

export function AntiPatternsPage() {
  return (
    <>
      <PageHead
        eyebrow="Guidelines · 12"
        title="禁止事项 Anti-patterns"
        lead="贯穿全规范的红线。核心是克制：减少视觉噪音，让数据说话，Icon 只在功能交互处出现。"
      />

      <Callout type="warning">
        以下为硬性约束。代码评审与设计评审均以此为检查清单。
      </Callout>

      <DocSection title="禁止 → 替代方案">
        <table className="prop-table">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>❌ 禁止</th>
              <th>✅ 替代方案</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.bad}>
                <td>
                  <span className="row gap-2" style={{ alignItems: "flex-start" }}>
                    <X className="icon-sm" style={{ color: "var(--color-danger)", flexShrink: 0, marginTop: 3 }} aria-hidden />
                    {r.bad}
                  </span>
                </td>
                <td>
                  <span className="row gap-2" style={{ alignItems: "flex-start" }}>
                    <Check className="icon-sm" style={{ color: "var(--color-success)", flexShrink: 0, marginTop: 3 }} aria-hidden />
                    {r.good}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DocSection>
    </>
  );
}
