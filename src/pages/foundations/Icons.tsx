import {
  Package,
  Truck,
  CreditCard,
  Bell,
  ChevronRight,
  Search,
  Download,
  Upload,
  Trash2,
  Pencil,
  Filter,
  Plus,
  Check,
  X,
  ArrowLeft,
  ArrowUpDown,
  Settings,
  User,
  Boxes,
  Wallet,
  ClipboardList,
  ShoppingCart,
} from "lucide-react";
import { PageHead, DocSection, DoDont, Callout } from "@/components/showcase/Doc";

const SIZES = [
  { cls: ".icon-xs", px: "10px", use: "chevron 箭头" },
  { cls: ".icon-sm", px: "14px", use: "按钮内联 / 排序箭头" },
  { cls: ".icon-md", px: "16px", use: "导航 / 默认" },
  { cls: ".icon-lg", px: "20px", use: "KPI 卡片" },
  { cls: ".icon-xl", px: "24px", use: "页面标题" },
  { cls: ".icon-2xl", px: "32px", use: "banner 图标" },
];

const GALLERY = [
  { Icon: Package, name: "package" },
  { Icon: Truck, name: "truck" },
  { Icon: CreditCard, name: "credit-card" },
  { Icon: Bell, name: "bell" },
  { Icon: ChevronRight, name: "chevron-right" },
  { Icon: Search, name: "search" },
  { Icon: Download, name: "download" },
  { Icon: Upload, name: "upload" },
  { Icon: Trash2, name: "trash-2" },
  { Icon: Pencil, name: "pencil" },
  { Icon: Filter, name: "filter" },
  { Icon: Plus, name: "plus" },
  { Icon: Check, name: "check" },
  { Icon: X, name: "x" },
  { Icon: ArrowLeft, name: "arrow-left" },
  { Icon: ArrowUpDown, name: "arrow-up-down" },
  { Icon: Settings, name: "settings" },
  { Icon: User, name: "user" },
  { Icon: Boxes, name: "boxes" },
  { Icon: Wallet, name: "wallet" },
  { Icon: ClipboardList, name: "clipboard-list" },
  { Icon: ShoppingCart, name: "shopping-cart" },
];

const PX: Record<string, number> = {
  ".icon-xs": 10,
  ".icon-sm": 14,
  ".icon-md": 16,
  ".icon-lg": 20,
  ".icon-xl": 24,
  ".icon-2xl": 32,
};

export function IconsPage() {
  return (
    <>
      <PageHead
        eyebrow="Foundations · 4"
        title="图标 Icon"
        lead="使用 Lucide Icons，与 shadcn/ui 内置图标库一致。核心原则：Icon 是功能的延伸，不是装饰。"
      />

      <Callout type="brand">
        <strong>核心原则：</strong>Icon 只在有功能交互的位置出现 ——
        按钮内联、导航项、KPI 卡片、快捷入口、排序箭头、展开 chevron、关闭/删除操作。
        纯文字标题区不做装饰。
      </Callout>

      <DocSection title="尺寸规范" desc="6 级尺寸，按使用场景选择。">
        <div className="card" style={{ padding: "var(--space-4) var(--space-5)" }}>
          <div className="row wrap gap-6">
            {SIZES.map((s) => (
              <div key={s.cls} className="stack gap-2" style={{ alignItems: "center", minWidth: 84 }}>
                <div style={{ height: 36, display: "flex", alignItems: "center" }}>
                  <Package size={PX[s.cls]} aria-hidden />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)" }}>
                    {s.cls}
                  </div>
                  <div className="text-muted" style={{ fontSize: "var(--text-xs)" }}>
                    {s.px} · {s.use}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DocSection>

      <DocSection title="常用图标" desc="OMS 业务高频图标节选，全部来自 Lucide。">
        <div className="icon-gallery">
          {GALLERY.map(({ Icon, name }) => (
            <div className="icon-cell" key={name}>
              <Icon className="icon-lg" aria-hidden />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="使用规则" desc="Icon 是功能的延伸，不是装饰。">
        <DoDont
          doItems={[
            "按钮内联图标（下载、删除、新建）",
            "导航项与快捷入口圆圈图标",
            "KPI 卡片图标、表格排序箭头",
            "下拉 / 展开 chevron、关闭 / 删除操作",
          ]}
          dontItems={[
            "卡片标题前加装饰图标（如 “📦 最新订单”）",
            "纯文字区域加无关 icon",
            "列表项加彩色方块图标",
            "通知公告标题加 bell icon",
          ]}
        />
      </DocSection>
    </>
  );
}
