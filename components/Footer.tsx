import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div>
          <div className="relative h-20 w-[280px] sm:h-24 sm:w-[340px]">
            <Image
              src="/images/park-logo.webp"
              alt="Park Group logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 280px, 340px"
            />
          </div>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
            Park Group of Companies provides dependable HVAC, gas, and mechanical service
            support for residential, commercial, and industrial clients across the Hamilton area.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">Contact</h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <p>
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
            </p>
            <p>
              <a className="font-medium text-slate-900 transition hover:text-amber-600" href={`tel:${siteConfig.phone}`}>
                {siteConfig.phoneDisplay}
              </a>
              <br />
              <a className="font-medium text-slate-900 transition hover:text-amber-600" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="https://www.instagram.com/parkgroupofcompanies?igsh=MTZ5cm13YnY1c3ZnZA=="
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-900"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1B1SgaQ3So/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-slate-900"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">Explore</h3>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link className="transition hover:text-slate-900" href="/about">
              About
            </Link>
            <Link className="transition hover:text-slate-900" href="/services/hvac">
              HVAC
            </Link>
            <Link className="transition hover:text-slate-900" href="/services/commercial">
              Commercial / Industrial
            </Link>
            <Link className="transition hover:text-slate-900" href="/contact">
              Request Service
            </Link>
            <Link className="transition hover:text-slate-900" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="container flex flex-col gap-3 py-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Park Group of Companies. All rights reserved.</p>
          <p>Serving Hamilton, Dundas, Ancaster, Burlington, Stoney Creek, and surrounding areas.</p>
        </div>
      </div>
    </footer>
  );
}