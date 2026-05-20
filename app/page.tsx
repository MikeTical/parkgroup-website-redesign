import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';
import { ServiceCards } from '@/components/ServiceCards';
import { siteConfig } from '@/lib/site';

const reasons = [
  'Experienced HVAC, gas, and mechanical service support',
  'Residential, commercial, and light industrial solutions',
  'Fast response and straightforward communication',
  'Preventative maintenance, repairs, and installations',
  'Local service focused on quality workmanship and reliability',
  'Clear contact options for service calls and quote requests',
];

const serviceAreas = ['Hamilton', 'Ancaster', 'Dundas', 'Stoney Creek', 'Binbrook', 'Burlington'];

export default function HomePage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container grid gap-12 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              HVAC • Gas • Commercial Service
            </p>

            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
              Reliable HVAC and gas solutions for homes and businesses across the Hamilton area.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Park Group helps residential and commercial customers with dependable heating, cooling,
              gas, and mechanical service support. The new website is built to make it easier
              for customers to understand your services, get in touch quickly, and trust the quality of
              your work from the first visit.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Request Service
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-secondary border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Call {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-4 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Residential Service</p>
                <p className="mt-2">Repairs, installations, maintenance, and upgrades.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Commercial Support</p>
                <p className="mt-2">Practical service solutions for buildings and facilities.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Local Coverage</p>
                <p className="mt-2">Serving Hamilton and surrounding communities.</p>
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
                Make it simple for customers to call, request a quote, or send a service inquiry from any device.
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
            eyebrow="Core services"
            title="Clear service paths for homeowners, businesses, and property managers"
            description="The homepage should quickly show what Park Group does and where to go next. These service sections give visitors a clearer route to HVAC, gas, and commercial information."
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
              The redesigned site should make it clear that Park Group can support both homeowners and commercial
              clients. That includes repair work, system replacements, gas-related service, and
              ongoing maintenance requirements.
            </p>
          </div>

          <div className="card p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Fast contact and lead capture</p>
            <h2 className="mt-3 text-2xl font-bold">Make it easy for customers to call, request service, or ask for a quote</h2>
            <p className="mt-4 text-slate-600">
              A stronger homepage should move visitors toward action. Prominent phone links, contact forms,
              and quote-focused calls to action help turn website traffic into real service inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Service area</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Proudly serving Hamilton and surrounding communities</h2>
            <p className="mt-4 max-w-xl text-slate-600">
              Local visibility matters. Adding service-area content helps customers quickly confirm they are in your
              coverage area and creates a stronger local SEO foundation for Google search.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <div key={area} className="card p-5">
                <p className="font-semibold text-slate-900">{area}</p>
                <p className="mt-2 text-sm text-slate-600">HVAC, gas, and commercial service support.</p>
              </div>
            ))}
          </div>
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