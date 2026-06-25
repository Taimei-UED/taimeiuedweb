import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '团队',
  description: '认识我们的设计团队',
};

export default function TeamPage() {
  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">团队</h1>
      <p className="mt-4 text-lg text-slate-600">
        Team — 认识我们的设计团队成员
      </p>
      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
        <p className="text-slate-400">页面建设中...</p>
      </div>
    </div>
  );
}
