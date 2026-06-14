import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';
import { ServiceCards } from '@/components/ServiceCards';
import { HeroButtons } from '@/components/HeroButtons';
import { siteConfig } from '@/lib/site';

const reasons = [
  'Experienced HVAC, gas, and mechanical service support',
  'Residential, commercial, and light industrial solutions',
  'Fast response and straightforward communication',
  'Preventative maintenance, repairs, and installations',
  'Local service focused on quality workmanship and reliability',
  'Clear contact options for service calls and quote requests',
];


export default function HomePage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container grid gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              HVAC • Gas • Residential Service • Commercial Service
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Reliable HVAC and gas solutions for homes and businesses across the Hamilton area.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Park Group provides dependable heating, cooling, gas, and mechanical service for homes
              and businesses across the Hamilton area. Whether you need a repair, a seasonal tune-up,
              a new installation, or a quote — we&apos;re here to help.
            </p>

            <HeroButtons />

            <div className="mt-10 grid max-w-2xl gap-4 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Residential Service</p>
                <p className="mt-2">Repairs, installations, maintenance, and upgrades.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Commercial Support</p>
                <p className="mt-2">Practical service solutions for buildings and facilities.</p>
              </div>
            </div>
          </div>

          <div className="card p-6 text-slate-900 md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Why customers choose Park Group</p>
            <h2 className="mt-3 text-2xl font-bold">Built around trust, service, and long-term relationships</h2>
            <ul className="mt-6 grid gap-3 text-sm leading-7 text-slate-600">
              {reasons.map((reason) => (
                <li key={reason}>• {reason}</li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-slate-100 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Need service now?</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Call us directly or use the contact form to request service, get a quote, or ask a question. We&apos;ll get back to you promptly.
              </p>
              <div className="mt-4">
                <Link href="/contact" className="text-sm font-semibold text-slate-900 underline underline-offset-4">
                  Go to the contact page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Core Service and Installation"
            title="HVAC, gas, residential, and commercial service — all under one roof"
            description="Park Group handles the full range of heating, cooling, gas, and mechanical service needs for homeowners, businesses, and property managers across the Hamilton area."
          />
          <ServiceCards />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="card p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Residential and commercial</p>
            <h2 className="mt-3 text-2xl font-bold">Support for everyday service needs and larger mechanical requirements</h2>
            <p className="mt-4 text-slate-600">
              Park Group supports both homeowners and commercial clients with repairs, system replacements,
              gas service, and ongoing maintenance. Whatever the job, the focus is on quality workmanship
              and clear communication from start to finish.
            </p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Easy to reach</p>
            <h2 className="mt-3 text-2xl font-bold">Get in touch quickly — by phone, email, or online form</h2>
            <p className="mt-4 text-slate-600">
              Call, email, or submit a service request online. Park Group will follow up promptly to help
              you find the right solution for your home or business.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Service area</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight">Proudly serving Hamilton and surrounding communities</h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Park Group serves customers in Hamilton, Ancaster, Dundas, Stoney Creek, Binbrook, Burlington, and surrounding communities.
          </p>
        </div>
      </section>

      <section className="section bg-slate-950 text-white">
        <div className="container rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Get started</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Need HVAC or gas service from a team you can rely on?
              </h2>
              <p className="mt-4 max-w-2xl text-slate-300">
                Use the contact page to request service, ask for a quote, or connect with Park Group about your
                residential or commercial needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
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