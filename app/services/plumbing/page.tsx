import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description:
    'Park Group of Companies provides residential and commercial plumbing services including repairs, installations, pumps, water treatment, fixtures, rough-ins, and specialty piping support.'
};

const items = [
  'Residential plumbing repairs and installations',
  'Commercial plumbing servicing and rough-ins',
  'Pumps, pressure tanks, and water treatment',
  'Fixtures, finishing, and replacements',
  'Back-flow preventers and code-related support',
  'High-pressure piping and specialty applications'
];

export default function PlumbingPage() {
  return (
    <section className="section bg-slate-50">
      <div className="container">
        <SectionIntro
          eyebrow="Plumbing Services"
          title="Reliable plumbing support for homes, businesses, and commercial properties"
          description="Park Group provides plumbing services for a wide range of residential and commercial needs. From repairs and replacements to system upgrades and new work, the goal is to give customers a clear understanding of available services and a simple path to request help."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900">Plumbing services we support</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Plumbing issues can range from simple fixture problems to larger infrastructure needs in
              commercial or specialty environments. Park Group’s plumbing page should clearly show the
              range of services available and help customers feel confident about reaching out.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {items.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900">When customers usually call</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Visitors should be able to quickly recognize their problem and understand that Park Group
              can help with both common plumbing needs and more specialized applications.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Common plumbing needs</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
                <li>• Fixture replacement or installation</li>
                <li>• Water pressure or pump-related issues</li>
                <li>• Plumbing repairs and service calls</li>
                <li>• Rough-ins and finishing work</li>
                <li>• Water treatment and system upgrades</li>
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                Request Plumbing Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Residential Plumbing</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Practical plumbing support for homeowners who need repairs, upgrades, replacements, or new installations.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Commercial Plumbing</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Dependable service for business and facility plumbing needs, including rough-ins, repairs, and system support.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Specialty Applications</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Support for pumps, pressure systems, water treatment, and other plumbing requirements that call for deeper expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}