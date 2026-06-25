import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllContent, getContent } from '@/lib/content';
import MdxContent from '@/components/MdxContent';

export function generateStaticParams() {
  return getAllContent('blog').map((item) => ({
    slug: item.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const item = getContent('blog', params.slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.description,
  };
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getContent('blog', params.slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="container-page py-24">
      <Link
        href="/insights"
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
        返回博客
      </Link>

      <article className="mx-auto max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          {item.category && (
            <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-700">
              {item.category}
            </span>
          )}
          <span className="text-sm text-neutral-400">{item.date}</span>
          {item.author && (
            <span className="text-sm text-neutral-400">· {item.author}</span>
          )}
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900">
          {item.title}
        </h1>
        <p className="mt-4 text-lg text-neutral-600">{item.description}</p>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <hr className="my-8 border-neutral-200" />

        <MdxContent source={item.content} />
      </article>
    </div>
  );
}
