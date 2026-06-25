import Link from 'next/link';

const teamStats = [
  { value: '10+', label: '团队成员' },
  { value: '50+', label: '完成项目' },
  { value: '5年', label: '设计经验' },
  { value: '100%', label: '用户导向' },
];

export default function TeamIntro() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
              关于我们
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              一支追求卓越的设计团队
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              我们由产品设计师、交互设计师、视觉设计师和设计研究员组成，
              致力于将复杂的问题转化为简洁、优雅且高效的解决方案。
              我们相信，好的设计不仅仅是视觉的美感，更是对用户需求的深刻理解和系统性思考。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              团队以设计思维为方法论，以设计系统为基础设施，
              通过持续迭代和创新，为每一位用户带来有价值的产品体验。
            </p>
            <div className="mt-8">
              <Link href="/team" className="btn-primary">
                认识团队成员
              </Link>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {teamStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-4xl font-bold text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
