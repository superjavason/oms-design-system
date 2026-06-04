import type { StatusType } from "@/components/ui";

export interface OrderRow {
  id: string;
  customer: string;
  region: string;
  amount: number;
  status: StatusType;
  statusLabel: string;
  date: string;
}

export const ORDERS: OrderRow[] = [
  { id: "PO-2026-00231", customer: "佛山禅城建材城", region: "禅城区", amount: 45800, status: "pending", statusLabel: "待审核", date: "2026-06-04" },
  { id: "PO-2026-00230", customer: "广州天河旗舰店", region: "天河区", amount: 128600, status: "done", statusLabel: "已完成", date: "2026-06-04" },
  { id: "PO-2026-00229", customer: "深圳南山专卖", region: "南山区", amount: 76200, status: "processing", statusLabel: "配货中", date: "2026-06-03" },
  { id: "PO-2026-00228", customer: "东莞厚街家居", region: "厚街镇", amount: 32400, status: "pending", statusLabel: "待审核", date: "2026-06-03" },
  { id: "PO-2026-00227", customer: "中山古镇灯饰", region: "古镇镇", amount: 215000, status: "done", statusLabel: "已完成", date: "2026-06-02" },
  { id: "PO-2026-00226", customer: "珠海香洲建材", region: "香洲区", amount: 18900, status: "processing", statusLabel: "配货中", date: "2026-06-02" },
  { id: "PO-2026-00225", customer: "惠州惠城商贸", region: "惠城区", amount: 54300, status: "done", statusLabel: "已完成", date: "2026-06-01" },
  { id: "PO-2026-00224", customer: "江门蓬江陶瓷", region: "蓬江区", amount: 96700, status: "pending", statusLabel: "待审核", date: "2026-06-01" },
];

export interface PickupRow {
  id: string;
  region: string;
  contact: string;
  amount: number;
  status: StatusType;
  statusLabel: string;
}

export const PICKUPS: PickupRow[] = [
  { id: "WO20260401567", region: "禅城区", contact: "王小姐", amount: 45800, status: "pending", statusLabel: "待提货" },
  { id: "WO20260401566", region: "南山区", contact: "李先生", amount: 76200, status: "processing", statusLabel: "部分提货" },
  { id: "WO20260401565", region: "天河区", contact: "陈经理", amount: 128600, status: "done", statusLabel: "已提货" },
];

export const EXPENSES = [
  { id: "FY-2026-0088", title: "物流运输费", dept: "仓储部 · 6 月", amount: 12800 },
  { id: "FY-2026-0087", title: "样品采购费", dept: "市场部 · 6 月", amount: 6400 },
  { id: "FY-2026-0086", title: "门店装修补贴", dept: "渠道部 · 5 月", amount: 35000 },
];

export const TODOS = [
  { title: "佛山禅城建材城提交的订单待审核", meta: "2 分钟前 · PO-2026-00231" },
  { title: "深圳南山专卖申请超额信用额度", meta: "1 小时前 · 待审批" },
  { title: "中山古镇灯饰对账单待确认", meta: "3 小时前 · 6 月对账" },
  { title: "东莞厚街家居退货申请待处理", meta: "昨天 · RT-2026-0012" },
];

export const NOTICES = [
  { title: "关于 2026 年 6 月物流价格调整的通知", meta: "运营中心 · 06-03" },
  { title: "新版经销商返利政策正式上线", meta: "渠道部 · 06-01" },
  { title: "系统将于本周六凌晨进行例行维护", meta: "信息中心 · 05-30" },
];

export const KPIS = [
  { label: "今日下单", value: "86", trend: "+12.5%", up: true },
  { label: "本月下单", value: "1,286", trend: "+8.2%", up: true },
  { label: "今日提货", value: "64", trend: "-3.1%", up: false },
  { label: "本月提货", value: "1,042", trend: "+5.6%", up: true },
  { label: "待提货", value: "218", trend: "+2.4%", up: true },
];

export const QUICK_ENTRIES: {
  label: string;
  color: "blue" | "purple" | "orange" | "green" | "red" | "teal";
  icon: string;
}[] = [
  { label: "下订单", color: "blue", icon: "ShoppingCart" },
  { label: "创建报价单", color: "purple", icon: "FileText" },
  { label: "订单修改", color: "orange", icon: "PencilLine" },
  { label: "订单查询", color: "green", icon: "Search" },
  { label: "库存查询", color: "red", icon: "Boxes" },
  { label: "对账中心", color: "teal", icon: "Wallet" },
];

export function money(n: number): string {
  return "¥" + n.toLocaleString("zh-CN");
}
