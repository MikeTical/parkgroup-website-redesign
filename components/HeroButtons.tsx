import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function HeroButtons({ label = 'Book Service | Request a Quote' }: { label?: string }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link href="/contact" className="btn-primary">
        {label}
      </Link>
      <a
        href={`tel:${siteConfig.phone}`}
        className="btn-secondary border border-white/20 bg-transparent text-white hover:bg-white/10"
      >
        Call {siteConfig.phoneDisplay}
      </a>
    </div>
  );
}
