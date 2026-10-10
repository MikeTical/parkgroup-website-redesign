import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { Testimonials } from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Residential Service',
  description:
    'Park Group of Companies provides residential heating, cooling, gas, and mechanical service for homeowners in Hamilton, Ancaster, Dundas, Burlington, Stoney Creek, and surrounding areas.'
};

const serviceItems = [
  {
    title: 'Furnace Service & Replacement',
    description: 'Annual tune-ups, emergency repairs, and full system replacements for gas and electric furnaces. We work with all major brands and help guide equipment selection when it is time for an upgrade.'
  },
  {
    title: 'Air Conditioning',
    description: 'Central air conditioning installation, seasonal maintenance, refrigerant checks, and emergency repairs to keep your home cool and comfortable all summer long.'
  },
  {
    title: 'Boilers & Radiant Heat',
    description: 'Boiler repairs, replacements, and new in-floor radiant heating installations for consistent, even warmth without the noise, dust, or dry air of forced-air systems.'
  },
  {
    title: 'Hot Water Tanks & Tankless',
    description: 'Water heater repairs and replacements — traditional tank units and on-demand tankless systems — for reliable hot water and improved energy efficiency throughout your home.'
  },
  {
    title: 'Heat Pumps',
    description: 'Heat pump installation, service, and seasonal maintenance for year-round home comfort from a single, energy-efficient system that handles both heating and cooling.'
  },
  {
    title: 'HRVs & Indoor Air Quality',
    description: 'Heat recovery ventilator installation, cleaning, and service to bring fresh outdoor air into your home year-round while retaining indoor warmth and reducing stuffiness.'
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

const processSteps = [
  { title: 'Reach out', description: 'Call or submit a request online and tell us what’s going on with your home comfort system.' },
  { title: 'Diagnose', description: 'A technician assesses the issue or project and identifies what’s actually needed — no guesswork.' },
  { title: 'Explain costs', description: 'We walk you through the findings and the cost before any work begins, so there are no surprises.' },
  { title: 'Complete the work', description: 'Once you approve, we get the job done with the same care and attention on every visit.' }
];

const pricingFactors = [
  'The type of system involved (furnace, A/C, boiler, water heater, etc.)',
  'The cause of the problem and how much diagnostic work is required',
  'The parts or equipment required and their availability',
  'The complexity of the repair or installation'
];

const faqs = [
  { question: 'Do you install customer-provided equipment?', answer: '[confirm: policy on customer-supplied equipment]' },
  { question: 'How often should my AC be serviced?', answer: '[confirm: recommended service interval]' },
  { question: 'When should I replace my HVAC system?', answer: '[confirm: typical replacement guidance]' },
  { question: 'Why should I install an ERV?', answer: '[confirm: ERV benefits messaging]' }
];

export default function ResidentialPage() {
  return (
    <>
      <section className="bg-slate-950 text-white">
        <div className="container py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">Residential Service</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Helping homeowners stay comfortable through Ontario winters and hot summers.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Reliable home comfort starts with a service you can trust. Park Group brings experience,
              quality workmanship, and a transparent approach to your home&apos;s heating, cooling, gas,
              and mechanical needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">How we can help</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Your home comfort, taken care of
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
              From everyday repairs to full system installations, Park Group supports homeowners with
              dependable service across all the major home comfort systems.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {serviceItems.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col gap-4 rounded-2xl border border-slate-200 p-6 md:flex-row md:items-start md:gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse bg-slate-50' : 'bg-white'
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-slate-950">
                  {String(index + 1).padStart(2, '0')}
                </div>
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
              Common reasons homeowners reach out
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Whether your system has stopped working or you just want peace of mind heading into the next
              season, Park Group is here to help with a straightforward assessment and honest advice.
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
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">What to expect</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Our process, from first call to finished job
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="card p-6">
                <span className="text-sm font-bold text-amber-600">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            What determines the cost of a repair or installation
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Every home and every system is different, so we don&apos;t quote exact pricing up front. Instead,
            cost depends on a few key factors:
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
            {pricingFactors.map((factor) => (
              <li key={factor} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                {factor}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-base leading-8 text-slate-600">
            We&apos;ll diagnose the issue and explain the costs before proceeding with any work — so you
            always know what to expect before we start.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Featured service</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">Ceiling-mounted infrared patio heating</h2>
            <p className="mt-4 text-slate-600">
              Extend your outdoor season with ceiling-mounted infrared patio heaters. They work great over
              decks and patios — and can also be installed in a garage, which is a popular option for
              homeowners converting the space into a home gym, man cave, or project area.
            </p>
          </div>
          <PlaceholderImage label="Patio heater photo" aspect="aspect-[4/3]" />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map((item) => (
              <div key={item.question} className="py-5">
                <h3 className="font-bold text-slate-900">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500 italic">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Testimonials eyebrow="What homeowners say" title="A couple of recent residential reviews" />
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-600">Connect with Park Group</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Let&apos;s keep your home comfortable
              </h2>
              <p className="mt-4 max-w-2xl text-slate-600">
                Whether you need a repair, routine maintenance, or you&apos;re considering an upgrade, Park
                Group is ready to help keep your home comfortable and your essential systems running reliably.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book Home Service | Plan An Upgrade
              </Link>
              <a href={`tel:${siteConfig.phone}`} className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
