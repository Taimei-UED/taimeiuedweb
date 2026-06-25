import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary-100 blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent-100 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700">
            Design Team
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            用设计创造价值，
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              以用户驱动未来
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            我们是一支以设计思维为核心的创新团队。通过系统化的设计语言和以人为本的设计方法，
            为产品注入卓越的用户体验与商业价值。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/design-system" className="btn-primary">
              探索设计系统
            </Link>
            <Link href="/design-thinking" className="btn-secondary">
              了解设计思维
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
