import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type ContentCategory = 'design-system' | 'blog' | 'design-thinking';

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category?: string;
  tags?: string[];
  author?: string;
  order?: number;
}

export interface ContentItem extends ContentMeta {
  content: string;
}

/**
 * 获取某个分类目录下所有 MDX 文件的元数据列表
 */
export function getAllContent(category: ContentCategory): ContentMeta[] {
  const dir = path.join(CONTENT_DIR, category);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  const items = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);

    return {
      slug,
      title: (data.title as string) ?? slug,
      description: (data.description as string) ?? '',
      date: (data.date as string) ?? '',
      category: data.category as string | undefined,
      tags: data.tags as string[] | undefined,
      author: data.author as string | undefined,
      order: data.order as number | undefined,
    } satisfies ContentMeta;
  });

  // 按 order 排序（无 order 的按 date 降序）
  items.sort((a, b) => {
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return items;
}

/**
 * 读取指定分类和 slug 的 MDX 文件（含 frontmatter + 原始内容）
 */
export function getContent(
  category: ContentCategory,
  slug: string,
): ContentItem | null {
  const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: (data.title as string) ?? slug,
    description: (data.description as string) ?? '',
    date: (data.date as string) ?? '',
    category: data.category as string | undefined,
    tags: data.tags as string[] | undefined,
    author: data.author as string | undefined,
    order: data.order as number | undefined,
    content,
  };
}

/**
 * 获取所有分类下的文章（用于全局搜索等）
 */
export function getAllContentFlat(): (ContentMeta & {
  category: ContentCategory;
})[] {
  const categories: ContentCategory[] = [
    'design-system',
    'blog',
    'design-thinking',
  ];

  return categories.flatMap((category) =>
    getAllContent(category).map((item) => ({ ...item, category })),
  );
}

/**
 * 获取 Blog 分类下的所有标签
 */
export function getBlogTags(): string[] {
  const posts = getAllContent('blog');
  const tagSet = new Set<string>();

  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

/**
 * 按 tag 筛选 Blog 文章
 */
export function getBlogPostsByTag(tag: string): ContentMeta[] {
  return getAllContent('blog').filter((post) => post.tags?.includes(tag));
}
