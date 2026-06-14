import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential Service',
  description:
    'Park Group of Companies provides residential heating, cooling, gas, and mechanical service for homeowners in Hamilton, Ancaster, Dundas, Burlington, Stoney Creek, and surrounding areas.'
};

const serviceItems = [
  {
    title: 'Furnace Service & Replacement',
    description: 'Repairs, tune-ups, and full replacements for gas and electric furnaces, including seasonal maintenance to keep systems running efficiently.'
  },
  {
    title: 'Air Conditioning',
    description: 'Central A/C repairs, installations, and annual tune-ups to keep your home cool and comfortable through warmer months.'
  },
  {
    title: 'Boilers & Radiant Heat',
    description: 'Service and installation of residential boiler systems and in-floor radiant heating for reliable, even warmth throughout the home.'
  },
  {
    title: 'Hot Water Tanks & Tankless',
    description: 'Traditional water heater repairs and replacements, plus tankless system installations for on-demand hot water efficiency.'
  },
  {
    title: 'Heat Pumps',
    description: 'Heat pump installation and service for year-round heating and cooling comfort with improved energy efficiency.'
  },
  {
    title: 'HRVs & Indoor Air Quality',
    description: 'Heat recovery ventilator installation and maintenance to improve fresh air circulation and indoor air quality in your home.'
  }
];

const commonNeeds = [
  'Your furnace, boiler, or heating system is not working or heating unevenly',
  'Your air conditioner is not cooling properly or has stopped working',
  'You need a new hot water tank or are considering a tankless system',
  'Your home feels stuffy or you have concerns about indoor air quality',
  'You want to add or upgrade a heat pump for year-round comfort',
  'You are due for seasonal maintenance or a system inspection'
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Residential Service</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Home comfort service you can count on.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Park Group provides residential heating, cooling, gas, and mechanical service for homeowners
              across the Hamilton area. Whether you need a repair, a seasonal tune-up, or a full system
              replacement, the focus is on reliable work and straightforward communication.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Residential Service
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
              Residential heating, cooling, and mechanical service
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              From everyday repairs to full system installations, Park Group supports homeowners with
              dependable service across all the major home comfort systems.
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
              Common reasons homeowners reach out
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Whether your system has stopped working or you just want peace of mind heading into the next
              season, Park Group is here to help with a straightforward assessment and honest advice.
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
                Need residential service?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Contact Park Group for heating, cooling, gas, or hot water service at your home.
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
