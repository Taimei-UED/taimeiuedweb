import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { useMDXComponents } from '@/mdx-components';

/**
 * MDX 内容渲染器
 *
 * 接收原始 MDX 字符串，使用 next-mdx-remote 渲染为 React 组件。
 * 自动注入 Design System 组件（Button、Card 等）和样式化 HTML 元素。
 */
export default function MdxContent({ source }: { source: string }) {
  const components = useMDXComponents({});

  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [],
        },
      }}
    />
  );
}
