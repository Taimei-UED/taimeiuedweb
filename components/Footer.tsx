import Link from 'next/link';

const footerLinks = {
  设计语言: [
    { href: '/design-system', label: '设计原则' },
    { href: '/design-system', label: '用户体验原则' },
    { href: '/design-system', label: '设计系统' },
  ],
  设计思维: [
    { href: '/design-thinking', label: 'LUMA 方法' },
    { href: '/insights', label: '博客文章' },
  ],
  关于: [
    { href: '/team', label: '团队介绍' },
    { href: '/resources', label: '设计资源' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-sm font-bold text-white">
                D
              </div>
              <span className="text-lg font-bold text-slate-900">
                Design Team
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              以用户为中心，用设计创造价值。
              探索设计语言、设计系统与设计思维的最佳实践。
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-primary-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-sm text-slate-400">
            © {new Date().getFullYear()} Design Team. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
