'use client';

import { FormEvent, useState } from 'react';

const PRODUCTS = [
  { id: 'furnaces', label: 'Furnaces' },
  { id: 'ac', label: 'A/C' },
  { id: 'boilers', label: 'Boilers' },
  { id: 'hot-water', label: 'Hot Water Tanks / Tankless Systems' },
  { id: 'pool-heaters', label: 'Pool Heaters' },
  { id: 'hrvs', label: 'HRVs' },
  { id: 'heat-pumps', label: 'Heat Pumps' },
] as const;

type ProductId = (typeof PRODUCTS)[number]['id'];

function ProductIcon({ id }: { id: ProductId }) {
  const cls = 'h-7 w-7';
  switch (id) {
    case 'furnaces':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
        </svg>
      );
    case 'ac':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M6.343 6.343l11.314 11.314M17.657 6.343L6.343 17.657" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.5L10 3.5M12 5.5l2-2M12 18.5l-2 2M12 18.5l2 2M5.5 12l-2-2M5.5 12l-2 2M18.5 12l2-2M18.5 12l2 2" />
        </svg>
      );
    case 'boilers':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25h13.5v11.25a2.25 2.25 0 01-2.25 2.25H7.5a2.25 2.25 0 01-2.25-2.25V5.25zM9 2.25v3M15 2.25v3M12 10.5v3M10.5 12h3" />
        </svg>
      );
    case 'hot-water':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25S6 8.25 6 13.5a6 6 0 0012 0c0-5.25-6-11.25-6-11.25z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 16.5a2.25 2.25 0 004.5 0" />
        </svg>
      );
    case 'pool-heaters':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75c1.667 0 3.333-1.5 5-1.5s3.333 1.5 5 1.5 3.333-1.5 5-1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 19.5c1.667 0 3.333-1.5 5-1.5s3.333 1.5 5 1.5 3.333-1.5 5-1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c0 0-3.75 3.375-3.75 6a3.75 3.75 0 007.5 0c0-2.625-3.75-6-3.75-6z" />
        </svg>
      );
    case 'hrvs':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      );
    case 'heat-pumps':
      return (
        <svg className={cls} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
      );
  }
}

type SubmittedData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  preferredContact: string;
  message: string;
  products: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [selectedProducts, setSelectedProducts] = useState<ProductId[]>([]);
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  function toggleProduct(id: ProductId) {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  }

  function handleReset() {
    setStatus('idle');
    setSubmittedData(null);
    setSelectedProducts([]);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      products:
        selectedProducts.length > 0
          ? selectedProducts
              .map((id) => PRODUCTS.find((p) => p.id === id)?.label)
              .join(', ')
          : 'None selected',
    } as SubmittedData;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmittedData(payload);
        setStatus('success');
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success' && submittedData) {
    return (
      <div className="card grid gap-6 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-600">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
          </span>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Request submitted</h2>
            <p className="mt-1 text-sm leading-7 text-slate-600">
              Once email delivery is configured, the following would be sent to Park Group.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 font-mono text-sm text-slate-700">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 not-italic" style={{fontFamily: 'inherit'}}>
            To: contact@parkgroupofcompanies.com
          </p>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 not-italic mt-0.5" style={{fontFamily: 'inherit'}}>
            Subject: New Service Request — {submittedData.name}
          </p>

          <div className="mt-5 border-t border-slate-200 pt-5 grid gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Equipment Selected</p>
              <p className="mt-1">{submittedData.products}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Name</p>
                <p className="mt-1">{submittedData.name}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Phone</p>
                <p className="mt-1">{submittedData.phone}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Email</p>
                <p className="mt-1">{submittedData.email}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Preferred Contact</p>
                <p className="mt-1">{submittedData.preferredContact}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Service Needed</p>
                <p className="mt-1">{submittedData.service}</p>
              </div>
              {submittedData.address && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Service Address</p>
                  <p className="mt-1">{submittedData.address}</p>
                </div>
              )}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-600 not-italic" style={{fontFamily: 'inherit'}}>Message</p>
              <p className="mt-1 whitespace-pre-wrap">{submittedData.message}</p>
            </div>
          </div>
        </div>

        <button type="button" onClick={handleReset} className="btn-secondary w-full sm:w-fit">
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-6 p-6 md:p-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Request Service</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Fill out the form below and a member of the Park Group team can follow up regarding your service request.
        </p>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-600">Step 1</p>
        <p className="mt-1 text-base font-semibold text-slate-900">
          What equipment can we help you with?
        </p>
        <p className="mt-0.5 text-sm text-slate-500">Select all that apply.</p>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {PRODUCTS.map((product) => {
            const selected = selectedProducts.includes(product.id);
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => toggleProduct(product.id)}
                className={`group relative flex flex-col items-center gap-3 rounded-2xl px-3 py-5 text-center transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  selected
                    ? 'bg-amber-500 shadow-lg shadow-amber-500/30'
                    : 'bg-gradient-to-br from-sky-300 to-sky-700 shadow-md shadow-black/20 hover:shadow-lg hover:brightness-110'
                }`}
              >
                <span
                  className={`absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-150 ${
                    selected
                      ? 'border-slate-900 bg-slate-900'
                      : 'border-white/30 bg-transparent'
                  }`}
                >
                  {selected && (
                    <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>

                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-150 ${
                    selected
                      ? 'bg-slate-900/15 text-slate-900'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  <ProductIcon id={product.id} />
                </span>

                <span
                  className={`text-xs font-semibold leading-tight transition-colors duration-150 ${
                    selected ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {product.label}
                </span>
              </button>
            );
          })}
        </div>

        {selectedProducts.length > 0 && (
          <p className="mt-3 text-xs text-slate-500">
            Selected:{' '}
            <span className="font-medium text-amber-600">
              {selectedProducts.map((id) => PRODUCTS.find((p) => p.id === id)?.label).join(', ')}
            </span>
          </p>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-slate-200" />
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Step 2 — Your details</p>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          'The type of service you need',
          'Your location or service address',
          'A short description of the issue or project',
          'The best way to reach you',
        ].map((item, index) => (
          <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-slate-900">
              {index + 1}
            </span>
            <p className="text-sm leading-6 text-slate-600">{item}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full Name
          <input
            name="name"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
            placeholder="Your name"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone Number
          <input
            name="phone"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
            placeholder="Best number to reach you"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email Address
          <input
            type="email"
            name="email"
            required
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Service Needed
          <select
            name="service"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
            defaultValue="Heating / HVAC"
          >
            <option>Heating / HVAC</option>
            <option>Air Conditioning</option>
            <option>Gas Services</option>
            <option>Commercial / Industrial</option>
            <option>Maintenance / Service Agreement</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Service Address
          <input
            name="address"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
            placeholder="Street, city, or area"
          />
        </label>

        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Preferred Contact Method
          <select
            name="preferredContact"
            className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
            defaultValue="Phone"
          >
            <option>Phone</option>
            <option>Email</option>
            <option>No Preference</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-500"
          placeholder="Please describe the service you need, the issue you are experiencing, or the project you would like to discuss."
        />
      </label>

      <p className="text-xs leading-6 text-slate-500">
        By submitting this form, you are asking Park Group to contact you regarding your service request.
      </p>

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary w-full sm:w-fit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending...' : 'Send Request'}
        </button>

        {status === 'error' && (
          <p className="text-sm font-medium text-red-700">
            Something went wrong. Please try again or contact us by phone.
          </p>
        )}
      </div>
    </form>
  );
}
