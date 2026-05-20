import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Park Group of Companies | HVAC, Gas & Commercial Mechanical Services',
    template: '%s | Park Group of Companies'
  },
  description:
    'Park Group of Companies provides residential, commercial, and industrial HVAC, gas, and mechanical services in Dundas, Hamilton, Ancaster, Burlington, Stoney Creek, and surrounding areas.',
  keywords: [
    'HVAC Dundas',
    'HVAC Hamilton',
    'gas fitting Dundas',
    'commercial HVAC Hamilton',
    'industrial heating Hamilton',
    'Park Group of Companies'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Park Group of Companies | HVAC, Gas & Commercial Mechanical Services',
    description:
      'Trusted HVAC, gas, and commercial mechanical services for residential and business customers in Dundas, Hamilton, and surrounding areas.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_CA',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Park Group of Companies | HVAC, Gas & Commercial Mechanical Services',
    description:
      'Residential, commercial, and industrial HVAC, gas, and mechanical services in Dundas, Hamilton, and surrounding areas.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.address
    },
    areaServed: siteConfig.serviceAreas,
    serviceType: siteConfig.primaryServices
  };

  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}