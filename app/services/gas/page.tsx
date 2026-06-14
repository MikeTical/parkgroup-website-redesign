import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gas Services',
  description:
    'Park Group of Companies provides licensed gas fitting, gas line installation and repair, appliance connections, and gas safety inspections for residential and commercial customers in Hamilton and surrounding areas.'
};

const serviceItems = [
  {
    title: 'Gas Line Installation',
    description: 'New gas line runs for appliances, equipment, or building additions, installed to code by licensed gas fitters.'
  },
  {
    title: 'Gas Line Repair',
    description: 'Diagnosis and repair of gas leaks, damaged lines, or supply issues to restore safe and reliable operation.'
  },
  {
    title: 'Appliance Connections',
    description: 'Safe connection of gas appliances including furnaces, boilers, water heaters, stoves, fireplaces, and BBQ lines.'
  },
  {
    title: 'Gas Pressure Testing',
    description: 'Pressure testing and leak checks to ensure the integrity of gas systems before and after service work.'
  },
  {
    title: 'Pool Heater Gas Lines',
    description: 'Gas supply installation for pool and spa heaters, including new lines and connections to existing systems.'
  },
  {
    title: 'Commercial Gas Work',
    description: 'Gas fitting and line work for commercial kitchens, facilities, and industrial environments requiring larger supply capacity.'
  }
];

const commonNeeds = [
  'You smell gas or suspect a leak in your home or building',
  'You are adding a gas appliance and need a new line run',
  'Your gas pressure seems low or inconsistent',
  'You are renovating and need gas lines relocated or extended',
  'A gas appliance needs to be disconnected or reconnected safely',
  'You need a gas inspection or pressure test for insurance or resale'
];

export default function GasPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Gas Services</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Licensed gas fitting for homes and businesses.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Park Group provides gas line installation, repair, and appliance connections for residential and
              commercial customers across the Hamilton area. All gas work is performed by licensed technicians
              with a focus on safety, code compliance, and reliable results.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Gas Service
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
              Gas fitting and line work
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              From new line installations to appliance hookups and safety inspections, Park Group handles
              gas-related work for homes, businesses, and facilities throughout the Hamilton area.
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
              Common reasons customers contact us for gas work
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Gas issues should always be handled by a licensed professional. If you are unsure whether
              something needs attention, it is always safer to have it checked.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-6 md:p-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {commonNeeds.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-900">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-7 text-slate-300">{item}</p>
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
                Need gas service or a licensed gas fitter?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Contact Park Group for gas line installation, repairs, appliance connections, or safety inspections.
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
