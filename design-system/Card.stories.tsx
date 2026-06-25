import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
      description: '卡片变体样式',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: '内边距',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[360px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
    padding: 'md',
    children: (
      <>
        <CardHeader>
          <CardTitle>卡片标题</CardTitle>
          <CardDescription>这是卡片的描述文本。</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">
            这是卡片的内容区域。可以放置任意内容，包括文本、图片或其他组件。
          </p>
        </CardContent>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    padding: 'md',
    children: (
      <>
        <CardHeader>
          <CardTitle>描边卡片</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">
            使用 outline 变体，无背景色，仅有边框。
          </p>
        </CardContent>
      </>
    ),
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    padding: 'md',
    children: (
      <>
        <CardHeader>
          <CardTitle>悬浮卡片</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-neutral-600">
            使用 elevated 变体，带阴影效果，适合强调内容。
          </p>
        </CardContent>
      </>
    ),
  },
};

export const WithFooter: Story = {
  render: () => (
    <Card variant="default" padding="md">
      <CardHeader>
        <CardTitle>带底部的卡片</CardTitle>
        <CardDescription>包含 Header、Content 和 Footer。</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">
          这里的内容区域展示了卡片的主体内容。
        </p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end gap-2">
          <button className="rounded-lg px-3 py-1.5 text-xs font-medium text-neutral-600 hover:bg-neutral-100">
            取消
          </button>
          <button className="rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-primary-700">
            确认
          </button>
        </div>
      </CardFooter>
    </Card>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Card variant="default" padding="none">
      <CardHeader>
        <CardTitle className="px-6 pt-6">无内边距卡片</CardTitle>
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm text-neutral-600">
          padding="none" 时需手动在各子组件中设置内边距。
        </p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <p className="text-xs text-neutral-400">适用于图片贴边的场景。</p>
      </CardFooter>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Card variant="default" padding="sm">
        <CardTitle>Default</CardTitle>
      </Card>
      <Card variant="outlined" padding="sm">
        <CardTitle>Outlined</CardTitle>
      </Card>
      <Card variant="elevated" padding="sm">
        <CardTitle>Elevated</CardTitle>
      </Card>
    </div>
  ),
};
