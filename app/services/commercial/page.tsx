import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';

export const metadata: Metadata = {
  title: 'Commercial & Industrial Services',
  description:
    'Park Group of Companies provides commercial and industrial HVAC, plumbing, gas, radiant heating, rooftop equipment, and mechanical service support for buildings, facilities, and larger environments.'
};

const capabilities = [
  'Commercial HVAC service and maintenance',
  'Industrial heating and mechanical system support',
  'Radiant heating systems',
  'Rooftop units and larger equipment servicing',
  'Commercial plumbing and gas-related work',
  'Preventative maintenance and ongoing service support'
];

export default function CommercialPage() {
  return (
    <section className="section">
      <div className="container">
        <SectionIntro
          eyebrow="Commercial & Industrial Services"
          title="Mechanical service support for facilities, buildings, and larger operating environments"
          description="Park Group provides commercial and industrial support for customers who need dependable HVAC, plumbing, gas, radiant heating, and broader mechanical service capability. This page should clearly separate larger-scale service needs from residential work and show that Park Group can support demanding environments with practical, reliable solutions."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900">Commercial and industrial capabilities</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Businesses, facilities, warehouses, and industrial environments often require a different level
              of service planning, responsiveness, and equipment knowledge. Park Group’s commercial page should
              quickly communicate that the company is equipped to support both ongoing service requirements and
              larger mechanical challenges.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="card p-8">
            <h2 className="text-2xl font-bold text-slate-900">Where this support is valuable</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Commercial and industrial customers are often looking for a team that can help minimize downtime,
              maintain performance, and respond effectively when critical equipment or systems need attention.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-slate-900">Typical environments</h3>
              <ul className="mt-3 grid gap-2 text-sm leading-7 text-slate-600">
                <li>• Commercial buildings and offices</li>
                <li>• Warehouses and industrial spaces</li>
                <li>• Multi-unit and larger properties</li>
                <li>• Production or operational facilities</li>
                <li>• Sites with rooftop, radiant, or specialty equipment</li>
              </ul>
            </div>

            <div className="mt-6">
              <Link href="/contact" className="btn-primary">
                Request Commercial Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Service & Maintenance</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Ongoing support to help keep commercial and industrial systems operating reliably and efficiently.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Equipment Expertise</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Support for larger HVAC, radiant, plumbing, gas, and facility-related mechanical systems.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-xl font-bold text-slate-900">Operational Reliability</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              A strong commercial service partner helps reduce disruption, manage risk, and support long-term performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}