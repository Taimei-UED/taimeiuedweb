import Link from 'next/link';

const banners = [
  {
    href: '/design-system',
    title: '设计系统',
    subtitle: 'Design System',
    description: '统一的设计语言、原则与组件库，构建一致且高效的数字产品体验。',
    gradient: 'from-primary-600 to-primary-400',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.228 3.48a15.994 15.994 0 003.395-1.622M16.5 3.461c-.186.05-.372.097-.556.144M16.5 3.461a3 3 0 015.78 1.128M16.5 3.461a3 3 0 00-2.327 4.637M14.495 7.548a3 3 0 00-2.327-4.637m2.327 4.637L16.5 3.461m-2.327 4.637c.186-.05.372-.097.556-.144M4.5 12.001a3 3 0 015.78-1.128m1.387 2.245a15.994 15.994 0 011.622-3.395M14.495 7.548a3 3 0 005.78-1.128M14.495 7.548c-.186.05-.372.097-.556.144m-4.944 3.231c.186-.05.372-.097.556-.144"
        />
      </svg>
    ),
  },
  {
    href: '/design-thinking',
    title: '设计思维',
    subtitle: 'Design Thinking (LUMA)',
    description:
      '基于 LUMA 方法论的创新实践框架，以人本设计驱动问题发现与解决方案探索。',
    gradient: 'from-accent-600 to-accent-400',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-10 w-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.166a7.5 7.5 0 10-7.517 0c.851.344 1.509 1.184 1.509 2.166V18m2.25-2.625c0-.621.504-1.125 1.125-1.125h1.5a1.125 1.125 0 010 2.25H14.25M15 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75V6a.75.75 0 01.75-.75h4.5A.75.75 0 0115 6v3.75z"
        />
      </svg>
    ),
  },
];

export default function DesignSystemBanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            探索更多
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            设计系统 & 设计思维
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            深入了解我们的设计基础设施与创新方法论，
            发现系统化设计与人本思维的融合之道。
          </p>
        </div>

        {/* Banner Cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {banners.map((banner) => (
            <Link
              key={banner.title}
              href={banner.href}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 p-1 transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${banner.gradient} opacity-90`}
              />

              {/* Content */}
              <div className="relative flex h-full flex-col p-10 text-white">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    {banner.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{banner.title}</h3>
                    <p className="text-sm text-white/70">{banner.subtitle}</p>
                  </div>
                </div>
                <p className="mt-8 text-lg leading-relaxed text-white/90">
                  {banner.description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold">
                  深入了解
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L1 12m0 0l3.248 3.248M1 12h16"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
