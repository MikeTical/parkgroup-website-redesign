import type { Metadata } from 'next';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { PlaceholderLogoRow } from '@/components/PlaceholderLogoRow';

export const metadata: Metadata = {
  title: 'HVAC Services',
  description:
    'Park Group of Companies provides HVAC services including heating, cooling, furnaces, boilers, ductless systems, rooftop equipment, repairs, maintenance, and replacements.'
};

const serviceItems = [
  {
    title: 'Heating Systems',
    description: 'Furnaces, boilers, and heat pumps for residential and commercial properties. We handle repairs, emergency calls, seasonal tune-ups, and full replacements to keep your heating running reliably year-round.'
  },
  {
    title: 'Air Conditioning',
    description: 'Central A/C, ductless units, and heat pump cooling — including seasonal tune-ups, refrigerant checks, repairs, and complete system replacements when your unit has reached end of life.'
  },
  {
    title: 'Ductless & Heat Pumps',
    description: 'Mini-split and multi-zone ductless systems for homes and businesses that need flexible, energy-efficient heating and cooling without the need for traditional ductwork.'
  },
  {
    title: 'Ventilation & Air Quality',
    description: 'HRV installation and service, duct inspections, and airflow balancing to ensure fresh, well-circulated air and improved indoor comfort throughout your home or building.'
  },
  {
    title: 'Commercial HVAC Equipment',
    description: 'Service and maintenance for rooftop units, make-up air systems, and larger commercial HVAC equipment across offices, warehouses, and light industrial environments.'
  },
  {
    title: 'Maintenance & System Upgrades',
    description: 'Seasonal inspection and tune-up programs, filter service, and planned upgrades to extend system life, improve efficiency, and reduce the risk of unexpected breakdowns.'
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
        <div className="container grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">HVAC Services</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Trusted HVAC services for residential & commercial properties.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Providing reliable heating and cooling solutions for homes, businesses and commercial
              facilities throughout the Hamilton area. From routine maintenance and repairs to system
              upgrades and complete equipment replacements, we deliver dependable workmanship,
              straightforward service, and HVAC solutions built for lasting comfort and performance.
            </p>
          </div>
          <PlaceholderImage label="HVAC service photo" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">What we handle</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Year-round comfort solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              Whether it&apos;s restoring comfort when something goes wrong or improving the performance
              of an existing system, Park Group delivers dependable service with practical solutions
              built around your needs.
            </p>
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            {serviceItems.map((item, index) => (
              <div key={item.title} className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-8">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-amber-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
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

      <section className="section">
        <div className="container">
          <PlaceholderLogoRow label="Equipment brands we install and service" count={5} />
        </div>
      </section>
    </>
  );
}
