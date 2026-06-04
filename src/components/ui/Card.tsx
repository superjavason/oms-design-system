import type { HTMLAttributes, ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/** 卡片 Card —— 规范 6.2，圆角 --radius-lg (12px) */
export function Card({ className, ...props }: CardProps) {
  return <div className={cn("card", className)} {...props} />;
}

export interface CardHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  /** 右上角入口文案。规范：所有卡片统一「全部」，特殊场景可「共 N 条 · 全部」 */
  action?: ReactNode;
  onActionClick?: () => void;
}

/**
 * 卡片标题栏。标题不加装饰 icon，不挂 badges/切换控件。
 * 右上角统一「全部 >」。
 */
export function CardHeader({
  title,
  action = "全部",
  onActionClick,
  className,
  ...props
}: CardHeaderProps) {
  return (
    <div className={cn("card-header", className)} {...props}>
      <div className="card-title">{title}</div>
      {action !== false && action != null && (
        <button
          type="button"
          className="card-action"
          onClick={onActionClick}
        >
          {action}
          <ChevronRight className="icon-xs" aria-hidden />
        </button>
      )}
    </div>
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card-content", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("card-footer", className)} {...props} />;
}
