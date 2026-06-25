import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllContent, getContent } from '@/lib/content';
import MdxContent from '@/components/MdxContent';

export function generateStaticParams() {
  return getAllContent('design-thinking').map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getContent('design-thinking', params.slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
  };
}

export default function DesignThinkingDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getContent('design-thinking', params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="container-page py-24">
      <Link
        href="/design-thinking"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700"
      >
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
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        返回设计思维
      </Link>

      <article className="mx-auto max-w-3xl">
        <p className="text-sm font-medium text-primary-600">{item.date}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900">
          {item.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-600">{item.description}</p>
        <hr className="my-8 border-neutral-200" />

        <MdxContent source={item.content} />
      </article>
    </div>
  );
}
