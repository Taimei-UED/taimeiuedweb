import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/design-system/Button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/design-system/Card';
import { Input } from '@/design-system/Input';
import { tokens } from '@/design-system/tokens';
import { getAllContent } from '@/lib/content';

export const metadata: Metadata = {
  title: '设计语言',
  description: '探索设计原则、用户体验原则与设计系统',
};

const colorGroups = [
  {
    name: 'Primary',
    colors: tokens.color.primary as Record<string, string>,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    name: 'Accent',
    colors: tokens.color.accent as Record<string, string>,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    name: 'Neutral',
    colors: tokens.color.neutral as Record<string, string>,
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    name: 'Success',
    colors: tokens.color.success as Record<string, string>,
    shades: [50, 500, 600, 700],
  },
  {
    name: 'Warning',
    colors: tokens.color.warning as Record<string, string>,
    shades: [50, 500, 600, 700],
  },
  {
    name: 'Danger',
    colors: tokens.color.danger as Record<string, string>,
    shades: [50, 500, 600, 700],
  },
] as const;

export default function DesignSystemPage() {
  const articles = getAllContent('design-system');

  return (
    <div className="container-page py-24">
      {/* Header */}
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        设计语言
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Design System — 组件库、设计令牌与使用指南
      </p>

      {/* Articles from content/design-system */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-neutral-900">文档</h2>
        <p className="mt-2 text-sm text-neutral-500">
          设计原则、用户体验原则与设计系统文档
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.slug} href={`/design-system/${article.slug}`}>
              <Card
                variant="default"
                padding="md"
                className="h-full transition-shadow hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-neutral-900">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  {article.description}
                </p>
                <p className="mt-4 text-xs text-primary-600">阅读全文 →</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Color Tokens */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-neutral-900">色彩令牌</h2>
        <p className="mt-2 text-sm text-neutral-500">
          所有颜色来自 design-tokens.json，通过 Tailwind 绑定使用。
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {colorGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 text-sm font-semibold text-neutral-700">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.shades.map((shade) => (
                  <div key={shade} className="text-center">
                    <div
                      className="h-12 w-12 rounded-lg border border-neutral-200"
                      style={{ backgroundColor: group.colors[String(shade)] }}
                    />
                    <span className="mt-1 block text-[10px] text-neutral-400">
                      {shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Button */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-neutral-900">Button 组件</h2>
        <p className="mt-2 text-sm text-neutral-500">
          5 种变体 × 3 种尺寸，支持 loading / disabled / icon。
        </p>

        <Card variant="elevated" padding="lg" className="mt-8">
          <h3 className="mb-4 text-sm font-semibold text-neutral-700">
            Variants
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </div>

          <h3 className="mb-4 mt-8 text-sm font-semibold text-neutral-700">
            Sizes
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>

          <h3 className="mb-4 mt-8 text-sm font-semibold text-neutral-700">
            States & Icons
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              }
            >
              添加
            </Button>
            <Button
              variant="outline"
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              }
            >
              下一步
            </Button>
          </div>
        </Card>
      </section>

      {/* Card */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-neutral-900">Card 组件</h2>
        <p className="mt-2 text-sm text-neutral-500">
          3 种变体，包含 Header / Content / Footer 可组合结构。
        </p>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Default */}
          <Card variant="default">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>默认变体</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                标准卡片样式，白底带细边框。
              </p>
            </CardContent>
          </Card>

          {/* Outlined */}
          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Outlined Card</CardTitle>
              <CardDescription>描边变体</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                透明背景，强调边框轮廓。
              </p>
            </CardContent>
          </Card>

          {/* Elevated with Footer */}
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>悬浮变体 + Footer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-neutral-600">
                带阴影效果，适合强调重要内容。
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm">
                  取消
                </Button>
                <Button variant="primary" size="sm">
                  确认
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Input */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-neutral-900">Input 组件</h2>
        <p className="mt-2 text-sm text-neutral-500">
          支持 label / hint / error / icon，3 种尺寸。
        </p>

        <Card variant="elevated" padding="lg" className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input
              label="用户名"
              placeholder="请输入用户名"
              hint="2-20 个字符"
            />
            <Input
              label="邮箱"
              placeholder="name@example.com"
              hint="请使用工作邮箱"
            />
            <Input
              label="密码"
              placeholder="请输入密码"
              error="密码长度至少 8 位"
            />
            <Input label="禁用字段" placeholder="不可编辑" disabled />
            <Input
              label="搜索"
              placeholder="输入关键词"
              leftIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              }
            />
            <Input
              label="日期"
              placeholder="选择日期"
              inputSize="lg"
              rightIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              }
            />
          </div>
        </Card>
      </section>

      {/* Link to Storybook */}
      <section className="mt-16">
        <Card variant="default" padding="lg">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900">
                Storybook 组件文档
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                在 Storybook 中查看完整的交互式组件文档与 Controls 面板。
              </p>
            </div>
            <code className="rounded-lg bg-neutral-100 px-4 py-2 text-sm text-neutral-700">
              npm run storybook
            </code>
          </div>
        </Card>
      </section>
    </div>
  );
}
