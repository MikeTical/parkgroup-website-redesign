import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HVAC Services',
  description:
    'Park Group of Companies provides HVAC services including heating, cooling, furnaces, boilers, ductless systems, rooftop equipment, repairs, maintenance, and replacements.'
};

const serviceItems = [
  {
    title: 'Heating Systems',
    description: 'Furnaces, boilers, and heat pumps serviced with a focus on reliable comfort and seasonal performance.'
  },
  {
    title: 'Air Conditioning',
    description: 'Cooling repairs, tune-ups, and replacements to keep spaces comfortable during warmer months.'
  },
  {
    title: 'Ductless & Heat Pumps',
    description: 'Flexible options for areas that need efficient heating and cooling without traditional ductwork.'
  },
  {
    title: 'Ventilation & Air Quality',
    description: 'Airflow, filtration, and humidity solutions that help improve indoor comfort and air quality.'
  },
  {
    title: 'Commercial HVAC Equipment',
    description: 'Service for rooftop units and larger equipment used in commercial and light industrial settings.'
  },
  {
    title: 'Maintenance & System Upgrades',
    description: 'Planned maintenance and equipment upgrades to help reduce breakdowns and extend system life.'
  }
];

const commonNeeds = [
  'Your furnace or air conditioner is not working properly',
  'Some rooms feel too hot or too cold',
  'You notice unusual noises, weak airflow, or inconsistent operation',
  'It is time for seasonal maintenance or a tune-up',
  'Your equipment is older and may be nearing replacement',
  'Your commercial space is having heating or cooling performance issues'
];

export default function HVACPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">HVAC Services</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              HVAC service for residential and commercial properties.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Park Group provides heating and cooling service for homes, businesses, and facilities across
              the Hamilton area. From repairs and maintenance to equipment upgrades and replacements, the
              focus is on clear communication, quality workmanship, and systems that operate the way they should.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request HVAC Service
              </Link>
              <a
                href="tel:905-572-7275"
                className="btn-secondary border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">What we handle</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Heating and cooling services
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              From everyday repairs to planned equipment upgrades, Park Group handles heating and cooling work
              for homes, businesses, and commercial properties throughout the Hamilton area.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-amber-500" />
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">When to call</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Signs your HVAC system needs attention
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Some issues are obvious, while others build gradually over time. If your system is no longer heating,
              cooling, or circulating air the way it should, it may be time to have it checked.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
            <div className="divide-y divide-slate-200">
              {commonNeeds.map((item) => (
                <div key={item} className="py-4 first:pt-0 last:pb-0">
                  <p className="text-base leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Talk to Park Group</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Need HVAC service?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Contact Park Group for heating and cooling repairs, maintenance, upgrades, or replacement work.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Service
              </Link>
              <a href="tel:905-572-7275" className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}