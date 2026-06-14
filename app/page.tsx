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
              HVAC • Gas • Residential Service • Commercial Service
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

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request Service
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-secondary border border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <a
                href="https://www.facebook.com/share/1B1SgaQ3So/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-white/70 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/parkgroupofcompanies?igsh=MTZ5cm13YnY1c3ZnZA=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-white/70 transition hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
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
            eyebrow="Core Service and Installation"
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