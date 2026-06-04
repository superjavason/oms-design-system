import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BadgeVariant =
  | "default"
  | "secondary"
  | "outline"
  | "destructive"
  | "success"
  | "warning"
  | "info";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: ReactNode;
}

/**
 * 徽标 Badge —— 规范 6.3
 * 用于计数值和状态标记，不做内容标签（如「重要」「促销」）。
 */
export function Badge({
  variant = "default",
  className,
  ...props
}: BadgeProps) {
  return (
    <span className={cn("badge", `badge-${variant}`, className)} {...props} />
  );
}
