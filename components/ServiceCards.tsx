import Link from 'next/link';
import { services } from '@/lib/content';

export function ServiceCards() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.href}
          className="card flex h-full flex-col p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="flex-1">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-600">Service</p>
            <h3 className="mt-3 text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
            <Link
              href={service.href}
              className="inline-flex text-sm font-semibold text-slate-900 transition hover:text-amber-600"
            >
              View service details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}