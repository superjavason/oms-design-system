import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "secondary"
  | "destructive";
export type ButtonSize = "default" | "sm" | "xs";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** 仅图标按钮（宽 = 高），需提供 aria-label */
  iconOnly?: boolean;
  children?: ReactNode;
}

const sizeClass: Record<ButtonSize, string> = {
  default: "",
  sm: "btn-sm",
  xs: "btn-xs",
};

/**
 * 按钮 Button —— 规范 6.1
 * 默认 36px 高，inline-flex，icon 与文字间距 var(--space-2)。
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", size = "default", iconOnly, className, ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={cn(
        "btn",
        `btn-${variant}`,
        sizeClass[size],
        iconOnly && "btn-icon",
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
