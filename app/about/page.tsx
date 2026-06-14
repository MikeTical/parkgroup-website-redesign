import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { HeroButtons } from '@/components/HeroButtons';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Park Group of Companies, serving Hamilton, Dundas, Ancaster, Burlington, Stoney Creek, and surrounding areas with HVAC, gas, and commercial mechanical services.'
};

const values = [
  {
    title: 'Residential Service',
    description: 'Support for homeowners who need dependable help with heating, cooling, gas, hot water, and maintenance-related work across the Hamilton area.'
  },
  {
    title: 'Commercial Capability',
    description: 'Practical service support for buildings, facilities, and business environments where system performance and reliability matter.'
  },
  {
    title: 'Customer-First Approach',
    description: 'Clear communication, responsive service, and a focus on doing the job properly from the start — building trust that lasts beyond a single service call.'
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">About Park Group</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              A dependable mechanical service company for the Hamilton area.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Park Group of Companies provides HVAC, gas, and commercial mechanical service for residential
              and commercial customers across the Hamilton region. Built on quality workmanship, honest
              communication, and long-term customer relationships.
            </p>
            <HeroButtons />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-amber-500" />
            <h2 className="text-2xl font-bold text-slate-900">What Park Group is built on</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Park Group is a trusted local service company focused on quality workmanship, responsive
              communication, and practical solutions for both everyday service needs and more complex
              mechanical requirements. Whether the job involves heating, cooling, gas, or commercial
              equipment, customers can rely on a team that values reliability and professionalism.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              From single-family homes to commercial facilities, Park Group handles the full range of
              mechanical service needs with the same level of care and attention to detail on every job.
            </p>
          </div>

          <div className="card p-8">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-amber-500" />
            <h2 className="text-2xl font-bold text-slate-900">Service coverage</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Park Group serves customers in {siteConfig.serviceAreas.join(', ')} and nearby communities.
              The business supports residential service calls, commercial properties, and broader mechanical
              requirements where dependable HVAC and gas expertise are essential.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-600">Core service focus</p>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
                {siteConfig.primaryServices.map((service) => (
                  <li key={service} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">How we work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Service built around trust and long-term relationships
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Every job — whether a routine tune-up or a full system replacement — is approached with the
              same commitment to quality, safety, and clear communication.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-amber-500" />
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-950 text-white">
        <div className="container rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Get in touch</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Ready to book service or ask a question?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Contact Park Group for HVAC, gas, residential, or commercial mechanical service across the Hamilton area.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Service
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-secondary border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
