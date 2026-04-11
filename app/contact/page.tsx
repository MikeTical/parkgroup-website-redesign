import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { SectionIntro } from '@/components/SectionIntro';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Park Group of Companies for HVAC, plumbing, gas, and commercial mechanical service in Hamilton, Dundas, Ancaster, Burlington, Stoney Creek, and surrounding areas.'
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionIntro
            eyebrow="Contact Park Group"
            title="Request service, ask a question, or get in touch with our team"
            description="Whether you need HVAC, plumbing, gas, or commercial mechanical support, Park Group is here to help. Use the form on this page or contact us directly by phone or email."
          />

          <div className="mt-8 card p-6 text-sm leading-7 text-slate-600">
            <p>
              <strong>Phone:</strong>{' '}
              <a className="font-medium text-slate-900 hover:text-amber-600" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="mt-3">
              <strong>Email:</strong>{' '}
              <a className="font-medium text-slate-900 hover:text-amber-600" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <p className="mt-3">
              <strong>Address:</strong> {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality},{' '}
              {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
            </p>
          </div>

          <div className="mt-6 card p-6">
            <h2 className="text-xl font-bold text-slate-900">Service Area</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Park Group serves customers in {siteConfig.serviceAreas.join(', ')} and surrounding communities.
            </p>
          </div>

          <div className="mt-6 card p-6">
            <h2 className="text-xl font-bold text-slate-900">What to include in your message</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-slate-600">
              <li>• The type of service you need</li>
              <li>• Your location</li>
              <li>• A short description of the issue or project</li>
              <li>• The best way to reach you</li>
            </ul>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}