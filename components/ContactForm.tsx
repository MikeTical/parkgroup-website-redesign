'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('success');
        event.currentTarget.reset();
        return;
      }

      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-5 p-6 md:p-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Request Service</h2>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          Fill out the form below and a member of the Park Group team can follow up regarding your service request.
        </p>
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

      <button type="submit" className="btn-primary w-full sm:w-fit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Request'}
      </button>

      {status === 'success' && (
        <p className="text-sm font-medium text-green-700">
          Thanks. Your request was submitted successfully.
        </p>
      )}

      {status === 'error' && (
        <p className="text-sm font-medium text-red-700">
          Something went wrong. Please try again or contact us by phone.
        </p>
      )}
    </form>
  );
}