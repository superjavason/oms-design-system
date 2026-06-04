import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface TabItem {
  key: string;
  label: ReactNode;
  /** 下划线型可附计数 badge */
  count?: number;
}

export interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (key: string) => void;
  /** segment：分段控件型；underline：下划线型 */
  variant?: "segment" | "underline";
  className?: string;
}

/** 标签页 Tabs —— 规范 6.6，分段控件型 + 下划线型 */
export function Tabs({
  items,
  value,
  onChange,
  variant = "segment",
  className,
}: TabsProps) {
  if (variant === "underline") {
    return (
      <div className={cn("pickup-tabs", className)} role="tablist">
        {items.map((item) => (
          <button
            key={item.key}
            role="tab"
            aria-selected={value === item.key}
            className={cn("pickup-tab", value === item.key && "active")}
            onClick={() => onChange(item.key)}
          >
            {item.label}
            {item.count != null && (
              <span className="badge badge-secondary">{item.count}</span>
            )}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("tabs", className)} role="tablist">
      {items.map((item) => (
        <button
          key={item.key}
          role="tab"
          aria-selected={value === item.key}
          className={cn("tab", value === item.key && "active")}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
