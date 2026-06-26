import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '设计语言',
  description: 'Wiz iDM 设计系统 — 设计令牌、组件库与使用指南',
};

/**
 * “设计语言”页。
 * 通过 iframe 承载完整的 Wiz iDM 设计系统指南（静态资源位于 public/wiz-idm/）。
 * 外层博客的 Navbar / Footer 由 app/layout.tsx 自动包裹（方案 C）。
 * Navbar 高度为 h-16 (64px)，故 iframe 填满其下方的视口高度。
 */
export default function DesignSystemPage() {
  return (
    <iframe
      src="/wiz-idm/index.html"
      title="Wiz iDM 设计系统"
      className="block w-full border-0"
      style={{ height: 'calc(100vh - 64px)' }}
      allow="clipboard-write; clipboard-read"
    />
  );
}
