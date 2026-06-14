import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroButtons } from '@/components/HeroButtons';

export const metadata: Metadata = {
  title: 'Commercial & Industrial Services',
  description:
    'Park Group of Companies provides commercial and industrial HVAC, gas, radiant heating, rooftop equipment, and mechanical service support for buildings, facilities, and larger environments.'
};

const serviceItems = [
  {
    title: 'Commercial HVAC',
    description: 'Heating and cooling service for offices, retail spaces, warehouses, and commercial buildings. We handle rooftop units, split systems, and larger mechanical equipment across a wide range of facility types.'
  },
  {
    title: 'Industrial Heating',
    description: 'Mechanical heating support for production facilities, warehouses, and industrial spaces — including make-up air units, unit heaters, and radiant systems common in demanding environments.'
  },
  {
    title: 'Radiant Heating',
    description: 'In-floor and overhead radiant heating systems for commercial and industrial spaces that require consistent, even heat distribution without traditional forced-air delivery.'
  },
  {
    title: 'Rooftop Units',
    description: 'Service, maintenance, and replacement of commercial rooftop HVAC units — including seasonal tune-ups, filter changes, coil cleaning, and emergency repairs to minimize downtime.'
  },
  {
    title: 'Commercial Gas',
    description: 'Gas line installation, repairs, and appliance connections for restaurants, commercial kitchens, and industrial facilities with higher-capacity supply and code-compliance requirements.'
  },
  {
    title: 'Preventative Maintenance',
    description: 'Scheduled service programs to keep commercial and industrial HVAC systems running efficiently, extend equipment life, and reduce the risk of unexpected failures and costly downtime.'
  }
];

const commonNeeds = [
  'Your commercial heating or cooling system has stopped working or is underperforming',
  'You need a rooftop unit serviced, repaired, or replaced',
  'Your facility requires a new gas line or gas appliance connection',
  'You are looking for a reliable maintenance partner for ongoing HVAC service',
  'You are building out or renovating a commercial space and need mechanical work',
  'Your industrial heating system needs inspection, repair, or an upgrade'
];

export default function CommercialPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Commercial & Industrial</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Mechanical service support for facilities and businesses.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Park Group provides commercial and industrial HVAC, gas, and mechanical service for businesses,
              facilities, and larger operating environments across the Hamilton area. The focus is on minimizing
              downtime, maintaining performance, and responding effectively when equipment needs attention.
            </p>

            <HeroButtons />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">What we handle</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Commercial and industrial service capabilities
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              From routine maintenance to emergency repairs and larger installations, Park Group supports
              commercial and industrial clients with the mechanical service expertise their environments require.
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
              Common reasons commercial clients reach out
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Commercial and industrial environments often require quick response and a team that understands
              the stakes. If your equipment is underperforming or you need reliable service support, Park Group is ready to help.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {commonNeeds.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-300 to-sky-700 p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-900">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-7 text-white">{item}</p>
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
                Need commercial or industrial service?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Contact Park Group for commercial HVAC, gas, radiant heating, rooftop equipment, or mechanical service support.
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
