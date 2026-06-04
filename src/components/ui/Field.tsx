import {
  forwardRef,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/cn";

type Size = "default" | "sm";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: Size;
  error?: boolean;
}

/** 输入框 Input —— 规范 6.4，36px / sm 32px，focus 品牌色环 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = "default", error, className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "input",
        inputSize === "sm" && "input-sm",
        error && "is-error",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  inputSize?: Size;
  error?: boolean;
}

/** 下拉选择 Select —— 规范 6.4，原生 select + 自定义 chevron */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ inputSize = "default", error, className, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "select",
        inputSize === "sm" && "select-sm",
        error && "is-error",
        className
      )}
      {...props}
    />
  )
);
Select.displayName = "Select";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn("textarea", error && "is-error", className)}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
