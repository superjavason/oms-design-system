import type { LucideIcon } from "lucide-react";
import {
  Home,
  Palette,
  Type,
  Ruler,
  Sparkles,
  Shapes,
  MousePointerClick,
  CreditCard,
  Tag,
  TextCursorInput,
  Table2,
  PanelTop,
  CircleDot,
  Grid3x3,
  List,
  Hash,
  LayoutDashboard,
  ListChecks,
  FileText,
  ClipboardEdit,
  CheckCircle2,
  Inbox,
  TriangleAlert,
  Accessibility,
  PenLine,
  Ban,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}
export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const NAV: NavGroup[] = [
  {
    title: "开始",
    items: [{ id: "overview", label: "概览", icon: Home }],
  },
  {
    title: "基础 Foundations",
    items: [
      { id: "colors", label: "颜色 Color", icon: Palette },
      { id: "typography", label: "字体 Typography", icon: Type },
      { id: "spacing", label: "间距 · 圆角", icon: Ruler },
      { id: "effects", label: "阴影 · 动效", icon: Sparkles },
      { id: "icons", label: "图标 Icon", icon: Shapes },
    ],
  },
  {
    title: "组件 Components",
    items: [
      { id: "button", label: "按钮 Button", icon: MousePointerClick },
      { id: "card", label: "卡片 Card", icon: CreditCard },
      { id: "badge", label: "徽标 Badge", icon: Tag },
      { id: "input", label: "输入框 · 选择器", icon: TextCursorInput },
      { id: "table", label: "表格 Table", icon: Table2 },
      { id: "tabs", label: "标签页 Tabs", icon: PanelTop },
      { id: "status", label: "状态指示", icon: CircleDot },
      { id: "quick-entry", label: "快捷入口", icon: Grid3x3 },
      { id: "list-item", label: "列表项", icon: List },
      { id: "pagination", label: "分页 Pagination", icon: Hash },
    ],
  },
  {
    title: "页面模版 Templates",
    items: [
      { id: "tpl-dashboard", label: "首页 Dashboard", icon: LayoutDashboard },
      { id: "tpl-list", label: "列表页", icon: ListChecks },
      { id: "tpl-detail", label: "详情页", icon: FileText },
      { id: "tpl-form", label: "表单页", icon: ClipboardEdit },
      { id: "tpl-result", label: "结果页", icon: CheckCircle2 },
      { id: "tpl-empty", label: "空状态", icon: Inbox },
      { id: "tpl-error", label: "异常页", icon: TriangleAlert },
    ],
  },
  {
    title: "规范 Guidelines",
    items: [
      { id: "a11y", label: "无障碍", icon: Accessibility },
      { id: "copywriting", label: "文案规范", icon: PenLine },
      { id: "anti-patterns", label: "禁止事项", icon: Ban },
    ],
  },
];

export const ALL_ITEMS: NavItem[] = NAV.flatMap((g) => g.items);

export function findItem(id: string): NavItem | undefined {
  return ALL_ITEMS.find((i) => i.id === id);
}

export function findGroupTitle(id: string): string | undefined {
  return NAV.find((g) => g.items.some((i) => i.id === id))?.title;
}
