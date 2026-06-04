import { PageHead, DocSection, DoDont } from "@/components/showcase/Doc";

export function CopywritingPage() {
  return (
    <>
      <PageHead
        eyebrow="Guidelines · 9"
        title="文案规范 Copywriting"
        lead="统一系统文案风格，降低理解成本，提升专业感。简洁、一致、主动、准确。"
      />

      <DocSection title="通用原则">
        <DoDont
          doItems={[
            "简洁：「保存成功」",
            "一致：统一「删除」",
            "主动：「提交订单」",
            "准确：「共 3 条待处理」",
          ]}
          dontItems={[
            "「您的数据已经成功保存到系统中」",
            "混用「删除 / 移除 / 清除」",
            "「订单将被提交」（被动语态）",
            "「有未处理事项」（模糊）",
          ]}
        />
      </DocSection>

      <DocSection title="按钮文案" desc="同一操作同一说法。">
        <table className="prop-table">
          <thead>
            <tr><th>场景</th><th>文案</th><th>说明</th></tr>
          </thead>
          <tbody>
            <tr><td>确认提交</td><td>提交 / 确认</td><td>不用「确定」</td></tr>
            <tr><td>取消操作</td><td>取消</td><td>不用「放弃」「返回」</td></tr>
            <tr><td>删除数据</td><td>删除</td><td>二次确认弹窗用语</td></tr>
            <tr><td>搜索</td><td>查询</td><td>不用「搜索」「检索」混用</td></tr>
            <tr><td>重置筛选</td><td>重置</td><td>不用「清空」</td></tr>
            <tr><td>新建</td><td>+ 新建订单</td><td>加号 + 动宾结构</td></tr>
          </tbody>
        </table>
      </DocSection>

      <DocSection title="状态文案" desc="正面 / 负面 / 中性三态。">
        <table className="prop-table">
          <thead>
            <tr><th>类型</th><th>正面</th><th>负面</th><th>中性</th></tr>
          </thead>
          <tbody>
            <tr><td>订单</td><td>已通过 / 已完成 / 已发货</td><td>已拒绝 / 已取消</td><td>待审核 / 处理中</td></tr>
            <tr><td>提货</td><td>已提货</td><td>提货失败</td><td>待提货 / 部分提货</td></tr>
            <tr><td>支付</td><td>已支付</td><td>支付失败</td><td>待支付</td></tr>
          </tbody>
        </table>
      </DocSection>

      <DocSection title="标点与格式">
        <table className="prop-table">
          <thead>
            <tr><th>规则</th><th>示例</th></tr>
          </thead>
          <tbody>
            <tr><td>中文标点</td><td>全角 ，。！？</td></tr>
            <tr><td>英文 / 数字前后加半角空格</td><td>「共 3 条」而非「共3条」</td></tr>
            <tr><td>金额</td><td>¥12,800.00</td></tr>
            <tr><td>百分比</td><td>85.6%（保留 1 位小数）</td></tr>
            <tr><td>日期 / 时间</td><td>2026-06-04 / 14:30</td></tr>
            <tr><td>长数字</td><td>每三位逗号分隔 1,286,500</td></tr>
          </tbody>
        </table>
      </DocSection>
    </>
  );
}
