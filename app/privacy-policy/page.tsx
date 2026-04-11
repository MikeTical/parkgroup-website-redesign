import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy placeholder for Park Group of Companies website redesign project.'
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-6 text-slate-600">
          Add the final privacy policy here, especially if the website uses contact forms, analytics, cookies, or remarketing tags.
        </p>
      </div>
    </section>
  );
}
