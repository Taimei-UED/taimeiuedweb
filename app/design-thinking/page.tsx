import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllContent } from '@/lib/content';
import { Card } from '@/design-system/Card';

export const metadata: Metadata = {
  title: '设计思维',
  description: '基于 LUMA 方法论的设计思维实践',
};

export default function DesignThinkingPage() {
  const articles = getAllContent('design-thinking');

  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        设计思维
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Design Thinking (LUMA) — 以人本设计驱动创新
      </p>

      {/* Overview Banner */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary-600 to-accent-500 p-8 text-white">
        <h2 className="text-2xl font-bold">LUMA 方法论</h2>
        <p className="mt-2 text-white/90">
          LUMA 将创新过程拆解为 Looking（观察）、Understanding（理解）、
          Making（创造）三大方法群，通过可组合的创新方法驱动设计实践。
        </p>
      </div>

      {/* Articles */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Link key={article.slug} href={`/design-thinking/${article.slug}`}>
            <Card
              variant="default"
              padding="lg"
              className="h-full transition-shadow hover:shadow-md"
            >
              <div className="text-xs font-medium text-primary-600">
                {article.date}
              </div>
              <h3 className="mt-3 text-xl font-bold text-neutral-900">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">
                {article.description}
              </p>
              <p className="mt-6 text-sm font-medium text-primary-600">
                阅读全文 →
              </p>
            </Card>
          </Link>
        ))}
      </div>

      {articles.length === 0 && (
        <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
          <p className="text-neutral-400">暂无内容</p>
        </div>
      )}
    </div>
  );
}
