import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Park Group of Companies for HVAC, gas, and commercial mechanical service in Hamilton, Dundas, Ancaster, Burlington, Stoney Creek, and surrounding areas.'
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container py-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Contact Park Group</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Request service, get a quote, or ask a question.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Fill out the form below and our team will follow up promptly. Or reach us directly by phone or email.
          </p>
          <div className="mt-6 flex flex-wrap gap-8 text-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-1 block font-semibold text-white transition hover:text-amber-400"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block font-semibold text-white transition hover:text-amber-400"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Address</p>
              <p className="mt-1 font-semibold text-white">
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{' '}
                {siteConfig.address.addressRegion}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-6">
            <div className="card p-6">
              <div className="mb-4 h-1.5 w-10 rounded-full bg-amber-500" />
              <h2 className="text-lg font-bold text-slate-900">Service Area</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Park Group serves customers in{' '}
                {siteConfig.serviceAreas.join(', ')} and surrounding communities.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-400">What to include</p>
              <div className="mt-3 grid gap-3">
                {[
                  'The type of service you need',
                  'Your location or service address',
                  'A short description of the issue or project',
                  'The best way to reach you',
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-300 to-sky-700 p-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-900">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm leading-7 text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Hours</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Monday – Friday<br />
                <span className="font-semibold text-white">8:00 AM – 5:00 PM</span>
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                For urgent service needs, call us directly at{' '}
                <a href={`tel:${siteConfig.phone}`} className="font-semibold text-amber-400 hover:text-amber-300">
                  {siteConfig.phoneDisplay}
                </a>
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
