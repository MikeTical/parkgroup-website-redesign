import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Park Group of Companies, serving Hamilton, Dundas, Ancaster, Burlington, Stoney Creek, and surrounding areas with HVAC, plumbing, gas, and commercial mechanical services.'
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="About Park Group"
          title="A dependable mechanical service company for residential and commercial clients"
          description="Park Group of Companies supports customers across the Hamilton area with HVAC, plumbing, gas, and commercial mechanical services. The goal of this page is to clearly communicate experience, capabilities, and the kind of service customers can expect when they reach out."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900">What Park Group is built on</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Park Group is positioned as a trusted local service company focused on quality workmanship,
              responsive communication, and practical solutions for both everyday service needs and more
              complex mechanical requirements. Whether the job involves heating, cooling, plumbing, gas,
              or commercial equipment, customers want to know they are working with a team that values
              reliability and professionalism.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This redesign gives Park Group a stronger digital presence that better reflects the company’s
              capabilities and helps customers find the right service more quickly.
            </p>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900">Service coverage</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Park Group serves customers in {siteConfig.serviceAreas.join(', ')} and nearby communities.
              The business supports residential service calls, commercial properties, and broader mechanical
              requirements where dependable HVAC, plumbing, and gas expertise are essential.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Core service focus</p>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
                {siteConfig.primaryServices.map((service) => (
                  <li key={service}>• {service}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Residential service</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Support for homeowners who need dependable help with heating, cooling, plumbing, gas, and
              maintenance-related work.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Commercial capability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Practical service support for buildings, facilities, and business environments where system
              performance and reliability matter.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Customer-first approach</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Clear communication, responsive service, and a focus on doing the job properly from the
              start help build long-term trust.
            </p>
          </div>
        </div>

        <div className="mt-10 card p-8">
          <h2 className="text-2xl font-bold text-slate-900">What should be added in the next content pass</h2>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-600 md:grid-cols-2">
            <div>• Company history and years in business</div>
            <div>• Certifications, licences, and safety credentials</div>
            <div>• Team experience and trade specialties</div>
            <div>• Real project examples or customer testimonials</div>
            <div>• Manufacturer or partner affiliations</div>
            <div>• Emergency or priority service details if applicable</div>
          </div>
        </div>
      </div>
    </section>
  );
}