import { PageHead, DocSection, Callout } from "@/components/showcase/Doc";

export function AccessibilityPage() {
  return (
    <>
      <PageHead
        eyebrow="Guidelines · 8"
        title="无障碍 Accessibility"
        lead="经销商操作人员年龄跨度大、设备环境多样。无障碍是保证系统可用的底线，而非可选项。"
      />

      <DocSection title="色彩对比度" desc="正文 ≥ 4.5:1，大号文字 ≥ 3:1（AA 级）。">
        <table className="prop-table">
          <thead>
            <tr><th>元素</th><th>要求</th><th>说明</th></tr>
          </thead>
          <tbody>
            <tr><td>正文文字</td><td>≥ 4.5:1</td><td>14px 正常字重</td></tr>
            <tr><td>大号文字</td><td>≥ 3:1</td><td>≥18px 或 ≥14px Bold</td></tr>
            <tr><td>图标 / 边框</td><td>≥ 3:1</td><td>功能性图标必须可辨识</td></tr>
            <tr><td>品牌色 #C41D1D 白字</td><td>≈ 5.8:1 ✅</td><td>达标</td></tr>
          </tbody>
        </table>
      </DocSection>

      <DocSection title="键盘导航" desc="所有交互元素可达，焦点顺序从左到右、从上到下。">
        <table className="prop-table">
          <thead>
            <tr><th>交互</th><th>键盘操作</th></tr>
          </thead>
          <tbody>
            <tr><td>焦点移动</td><td><kbd>Tab</kbd> / <kbd>Shift</kbd>+<kbd>Tab</kbd></td></tr>
            <tr><td>按钮激活</td><td><kbd>Enter</kbd> 或 <kbd>Space</kbd></td></tr>
            <tr><td>下拉展开</td><td><kbd>Enter</kbd>；<kbd>↑↓</kbd> 选择；<kbd>Esc</kbd> 关闭</td></tr>
            <tr><td>对话框关闭</td><td><kbd>Esc</kbd></td></tr>
            <tr><td>复选 / 单选</td><td><kbd>Space</kbd> 切换</td></tr>
          </tbody>
        </table>
        <Callout>
          所有交互元素都有 <code className="inline-code">:focus-visible</code> 样式（品牌色 2px 外框 + 2px 偏移）。
          本展示站内 <kbd>Tab</kbd> 试试，即可看到统一聚焦环。
        </Callout>
      </DocSection>

      <DocSection title="屏幕阅读器与表单" desc="语义化标签 + ARIA 关联。">
        <table className="prop-table">
          <thead>
            <tr><th>元素</th><th>要求</th></tr>
          </thead>
          <tbody>
            <tr><td>每个 input</td><td>关联 <code>&lt;label for&gt;</code> 或 <code>aria-labelledby</code></td></tr>
            <tr><td>必填字段</td><td>红色 <code>*</code> + <code>aria-required="true"</code></td></tr>
            <tr><td>错误提示</td><td><code>aria-describedby</code> 关联输入框</td></tr>
            <tr><td>图标按钮</td><td>必须有 <code>aria-label</code></td></tr>
            <tr><td>表格表头</td><td><code>scope="col"</code> / <code>scope="row"</code></td></tr>
            <tr><td>状态 Badge</td><td><code>role="status"</code></td></tr>
          </tbody>
        </table>
      </DocSection>

      <DocSection title="触控与可点击区域">
        <table className="prop-table">
          <thead>
            <tr><th>规则</th><th>值</th></tr>
          </thead>
          <tbody>
            <tr><td>最小点击区域</td><td>44px × 44px（WCAG 2.5.5）</td></tr>
            <tr><td>相邻可点击间距</td><td>≥ 8px，避免误触</td></tr>
            <tr><td>移动端适配</td><td>Sidebar 折叠、表格横向滚动</td></tr>
          </tbody>
        </table>
      </DocSection>
    </>
  );
}
