/**
 * 轻量 className 合并工具。
 * 过滤 falsy 值并以空格连接，避免引入额外依赖。
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
