import type { MDXComponents } from 'mdx/types';
import { Button } from '@/design-system/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/design-system/Card';

/**
 * MDX 全局组件映射
 *
 * 在 MDX 文件中可以直接使用以下组件：
 * - <Button variant="primary">点击</Button>
 * - <Card>...</Card>
 * - 以及所有 HTML 元素的样式化版本
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 允许在 MDX 中直接使用 Design System 组件
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    // 样式化 HTML 元素
    h1: ({ children }) => (
      <h1 className="mb-4 mt-10 text-4xl font-bold tracking-tight text-neutral-900">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-3 mt-8 text-3xl font-bold tracking-tight text-neutral-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-2 mt-6 text-2xl font-semibold text-neutral-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-5 text-xl font-semibold text-neutral-900">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="my-4 text-base leading-relaxed text-neutral-600">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2 text-base text-neutral-600">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2 text-base text-neutral-600">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    a: ({ children, href }) => (
      <a
        href={href}
        className="font-medium text-primary-600 underline-offset-2 hover:text-primary-700 hover:underline"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-primary-500 bg-primary-50 py-4 pl-6 pr-4 text-neutral-700">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-neutral-700">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-lg bg-neutral-900 p-4 text-sm text-neutral-100">
        {children}
      </pre>
    ),
    table: ({ children }) => (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b-2 border-neutral-200 px-4 py-2 text-left font-semibold text-neutral-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-b border-neutral-100 px-4 py-2 text-neutral-600">
        {children}
      </td>
    ),
    hr: () => <hr className="my-8 border-neutral-200" />,
    ...components,
  };
}
