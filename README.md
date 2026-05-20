# Park Group of Companies Website Redesign

This is a modern starter project for a complete rebuild of the current Park Group of Companies website.

## Why this starter exists

The current website has a number of issues that make a redesign worthwhile:

- navigation appears duplicated in the current build
- the About link returns a 404
- service content is present but thin and inconsistently structured
- the contact page is minimal
- spelling and polish issues weaken trust
- the site has limited on-page SEO structure for HVAC searches

## Recommended stack

This starter uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- built-in metadata and sitemap support
- a placeholder contact API route
- optional Google Analytics integration via GA4

Official docs used for this setup approach:

- Next.js App Router installation and project structure: https://nextjs.org/docs/app/getting-started/installation
- Tailwind with Next.js: https://tailwindcss.com/docs/guides/nextjs
- Google Analytics for websites: https://developers.google.com/analytics/devguides/collection/ga4/web
- Google Business Profile basics and local ranking tips: https://support.google.com/business/answer/7039811?hl=en and https://support.google.com/business/answer/7091?hl=en

## How to start in VS Code

1. Open this folder in VS Code.
2. Open a terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Visit `http://localhost:3000`

## Key folders

- `app/` = pages and routes
- `components/` = reusable UI pieces
- `lib/` = site config and content
- `app/api/contact/route.ts` = placeholder contact form endpoint

## Suggested next steps

### Phase 1 — Foundation

- confirm final page map
- gather real brand assets and preferred colors
- replace placeholder copy with approved content
- add real project photos and team imagery

### Phase 2 — Lead generation

- connect contact form to email or CRM
- track form submissions, phone clicks, and CTA clicks in GA4
- add service-area sections and FAQs to core pages

### Phase 3 — Local SEO and Google Business

- make Business Profile data match the website exactly
- verify categories, hours, service areas, and service descriptions
- add review-request process and local landing pages if appropriate

## Content recommendations

Core pages to keep:

- Home
- About
- HVAC Services
- Commercial / Industrial Services
- Contact
- Privacy Policy

Optional later pages:

- Gas Services
- Radiant Heating
- Service Areas
- Reviews / Testimonials
- Maintenance Plans
- Careers

## Notes on Google Business Profile

Google says businesses should keep profile information complete and accurate, and consistent with what customers see online. That includes address, service details, and other business info. Google also notes that complete, accurate profiles are more likely to show up for relevant local searches.

## Notes on analytics

Google’s documentation recommends tagging your site to start collecting data, and notes that Google Tag Manager is recommended for easier configuration changes.

