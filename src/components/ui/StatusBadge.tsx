import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type StatusType = "pending" | "done" | "processing";

const statusClass: Record<StatusType, string> = {
  pending: "status-pending",
  done: "status-done",
  processing: "status-processing",
};

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  status: StatusType;
  children: React.ReactNode;
}

/**
 * 状态指示 Status Badge —— 规范 6.7
 * 业务对象状态：待处理 / 已完成 / 处理中。带 role="status" 供屏幕阅读器。
 */
export function StatusBadge({
  status,
  className,
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      role="status"
      className={cn("status-badge", statusClass[status], className)}
      {...props}
    >
      {children}
    </span>
  );
}
