import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Design System/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '输入框尺寸',
    },
    label: {
      control: 'text',
      description: '标签文本',
    },
    hint: {
      control: 'text',
      description: '辅助提示文本',
    },
    error: {
      control: 'text',
      description: '错误信息',
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态',
    },
    placeholder: {
      control: 'text',
      description: '占位文本',
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: '用户名',
    placeholder: '请输入用户名',
    inputSize: 'md',
  },
};

export const WithHint: Story = {
  args: {
    label: '邮箱',
    placeholder: 'name@example.com',
    hint: '请使用工作邮箱注册',
    inputSize: 'md',
  },
};

export const WithError: Story = {
  args: {
    label: '密码',
    placeholder: '请输入密码',
    error: '密码长度至少 8 位',
    inputSize: 'md',
  },
};

export const WithoutLabel: Story = {
  args: {
    placeholder: '搜索...',
    inputSize: 'md',
  },
};

export const Small: Story = {
  args: {
    label: '小输入框',
    placeholder: 'sm size',
    inputSize: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: '中输入框',
    placeholder: 'md size',
    inputSize: 'md',
  },
};

export const Large: Story = {
  args: {
    label: '大输入框',
    placeholder: 'lg size',
    inputSize: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    label: '只读字段',
    value: '不可编辑内容',
    disabled: true,
    inputSize: 'md',
  },
};

export const WithLeftIcon: Story = {
  args: {
    label: '搜索',
    placeholder: '输入关键词搜索',
    inputSize: 'md',
    leftIcon: (
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
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    label: '日期',
    placeholder: '选择日期',
    inputSize: 'md',
    rightIcon: (
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
    ),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input label="Small" placeholder="sm" inputSize="sm" />
      <Input label="Medium" placeholder="md" inputSize="md" />
      <Input label="Large" placeholder="lg" inputSize="lg" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input label="默认" placeholder="正常状态" />
      <Input label="提示" placeholder="带提示" hint="请输入有效信息" />
      <Input label="错误" placeholder="错误状态" error="此字段为必填项" />
      <Input label="禁用" placeholder="禁用状态" disabled />
    </div>
  ),
};
