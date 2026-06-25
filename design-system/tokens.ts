/**
 * 设计令牌 — TypeScript 入口
 *
 * 从 design-tokens.json 读取所有令牌值，
 * 提供类型安全的访问方式供 Tailwind 配置和组件使用。
 */
import tokensJson from '../design-tokens.json';

/** 从 `{ value, type }` 结构中提取纯值 */
type TokenValue = string;
type TokenGroup<T> = {
  [K in keyof T]: T[K] extends { value: infer V } ? V : TokenGroup<T[K]>;
};

/** 扁平化后的令牌类型 */
export interface DesignTokens {
  color: {
    primary: Record<string, TokenValue>;
    accent: Record<string, TokenValue>;
    neutral: Record<string, TokenValue>;
    success: Record<string, TokenValue>;
    warning: Record<string, TokenValue>;
    danger: Record<string, TokenValue>;
    white: TokenValue;
  };
  spacing: Record<string, TokenValue>;
  radius: Record<string, TokenValue>;
  fontSize: Record<string, TokenValue>;
  fontWeight: Record<string, TokenValue>;
  shadow: Record<string, TokenValue>;
}

/** 将 `{ value: X }` 结构递归扁平化为纯值 */
function flattenTokenGroup<T>(group: T): TokenGroup<T> {
  const result: Record<string, unknown> = {};
  for (const [key, val] of Object.entries(group as Record<string, unknown>)) {
    if (val && typeof val === 'object' && 'value' in val) {
      result[key] = (val as { value: TokenValue }).value;
    } else if (val && typeof val === 'object') {
      result[key] = flattenTokenGroup(val);
    }
  }
  return result as TokenGroup<T>;
}

/** 完全扁平化的设计令牌 */
export const tokens = flattenTokenGroup(tokensJson) as unknown as DesignTokens;

/** Tailwind 颜色配置（从 tokens 派生） */
export const tailwindColors = {
  primary: tokens.color.primary,
  accent: tokens.color.accent,
  neutral: tokens.color.neutral,
  success: tokens.color.success,
  warning: tokens.color.warning,
  danger: tokens.color.danger,
  white: tokens.color.white,
};

/** Tailwind 圆角配置（从 tokens 派生） */
export const tailwindBorderRadius = {
  ...tokens.radius,
  DEFAULT: tokens.radius.md,
};

/** Tailwind 阴影配置（从 tokens 派生） */
export const tailwindBoxShadow = {
  ...tokens.shadow,
  DEFAULT: tokens.shadow.md,
};
