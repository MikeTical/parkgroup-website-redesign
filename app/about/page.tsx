import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { Testimonials } from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Park Group of Companies, serving Hamilton, Dundas, Ancaster, Burlington, Stoney Creek, and surrounding areas with HVAC, gas, and commercial mechanical services.'
};

const whyChooseUs = [
  { title: 'Licensed & insured technicians', description: '[confirm: licensing details to display]' },
  { title: 'Background-checked technicians', description: '[confirm: background check policy]' },
  { title: 'Workmanship warranties', description: '[confirm: warranty terms to display]' },
  { title: 'Same-day service', description: '[confirm: is same-day service available?]' },
  { title: '24/7 emergency service', description: '[confirm: is 24/7 emergency service offered?]' },
  { title: 'Financing options', description: '[confirm: are financing options available?]' },
  { title: 'Satisfaction guaranteed', description: '[confirm: guarantee wording to display]' }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">About Park Group</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Built on Quality. Driven by Service.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Park Group of Companies is a trusted HVAC and mechanical service provider serving
              residential, commercial and industrial clients. Our reputation is built on skilled
              workmanship, clear communication, and a commitment to doing the job right — while
              building lasting relationships with the people and businesses we serve.
            </p>
          </div>
          <PlaceholderImage label="Company photo" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-amber-500" />
            <h2 className="text-2xl font-bold text-slate-900">The Park Group Difference</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              [Add founding story: how long Park Group has been in business, why the company was
              started, and the vision behind it.]
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              [Add a short note on how you want customers to feel when working with Park Group —
              short, sweet, and simple.]
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
            <div className="mt-4">
              <Link href="/contact" className="text-sm font-semibold text-slate-900 underline underline-offset-4">
                Click here to see what areas we cover →
              </Link>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-600">Core service focus</p>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
                {siteConfig.primaryServices.map((service) => (
                  <li key={service.label} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <Link href={service.href} className="transition hover:text-amber-600 hover:underline">
                      {service.label}
                    </Link>
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Why choose us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              What sets Park Group apart
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Every job — whether a routine tune-up or a full system replacement — is approached with the
              same commitment to quality, safety, and clear communication.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card p-6">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-amber-500" />
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500 italic">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Meet the team</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            The people behind the work
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((placeholder) => (
              <div key={placeholder} className="card p-6">
                <PlaceholderImage label="Team headshot" aspect="aspect-square" />
                <p className="mt-4 text-sm font-semibold text-slate-400">[Name / role / area of expertise]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <Testimonials eyebrow="What customers say" title="Trusted by homeowners and businesses" />
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
                Book Service | Request a Quote
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
