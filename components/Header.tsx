'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/lib/site';

const filteredNavItems = navItems.filter((item) => item.href !== '/contact');

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-[220px] sm:h-16 sm:w-[260px] md:h-18 md:w-[320px]">
            <Image
              src="/images/park-logo.webp"
              alt="Park Group logo"
              fill
              className="object-contain object-left"
              sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 320px"
              priority
            />
          </div>
        </Link>

        <button
          type="button"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {filteredNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-semibold text-slate-700 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="btn-primary px-5 py-3 text-sm">
            Request Service
          </Link>
        </nav>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="container flex flex-col py-3">
            {filteredNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-2 inline-flex w-full justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400"
              onClick={() => setOpen(false)}
            >
              Request Service
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}