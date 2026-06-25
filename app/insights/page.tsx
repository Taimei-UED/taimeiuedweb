import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllContent, getBlogTags } from '@/lib/content';
import { Card } from '@/design-system/Card';

export const metadata: Metadata = {
  title: '博客',
  description: '设计团队博客 — 洞见与思考',
};

export default function InsightsPage() {
  const posts = getAllContent('blog');
  const tags = getBlogTags();

  // 按分类分组
  const categories = Array.from(
    new Set(posts.map((p) => p.category).filter(Boolean)),
  ) as string[];

  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
        博客
      </h1>
      <p className="mt-4 text-lg text-neutral-600">
        Insights — 设计团队的文章与洞见
      </p>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/insights?tag=${tag}`}
              className="rounded-md bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500 transition-colors hover:bg-primary-100 hover:text-primary-700"
            >
              #{tag}
            </Link>
          ))}
        </div>
      )}

      {/* Posts by Category */}
      {categories.length > 0 ? (
        categories.map((category) => (
          <section key={category} className="mt-12">
            <h2 className="text-xl font-bold text-neutral-900">{category}</h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts
                .filter((p) => p.category === category)
                .map((post) => (
                  <Link key={post.slug} href={`/insights/${post.slug}`}>
                    <Card
                      variant="default"
                      padding="md"
                      className="h-full transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <span>{post.date}</span>
                        {post.author && (
                          <>
                            <span>·</span>
                            <span>{post.author}</span>
                          </>
                        )}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-500">
                        {post.description}
                      </p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-400"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Card>
                  </Link>
                ))}
            </div>
          </section>
        ))
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={`/insights/${post.slug}`}>
              <Card
                variant="default"
                padding="md"
                className="h-full transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <span>{post.date}</span>
                  {post.author && (
                    <>
                      <span>·</span>
                      <span>{post.author}</span>
                    </>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-neutral-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-500">
                  {post.description}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-neutral-100 px-2 py-0.5 text-[10px] text-neutral-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </Link>
          ))}
        </div>
      )}

      {posts.length === 0 && (
        <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-12 text-center">
          <p className="text-neutral-400">暂无文章</p>
        </div>
      )}
    </div>
  );
}
