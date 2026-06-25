import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '设计资源',
  description: '设计团队的设计资源库',
};

export default function ResourcesPage() {
  return (
    <div className="container-page py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        设计资源
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        Resources — 设计模板、图标库与工具集
      </p>
      <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
        <p className="text-slate-400">页面建设中...</p>
      </div>
    </div>
  );
}
