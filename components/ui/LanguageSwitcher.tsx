'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  return (
    <div className="flex items-center gap-1 bg-mint/30 rounded-full p-1">
      <Link
        href={switchLocale('fr')}
        className={`px-3 py-1 rounded-full text-sm font-body font-medium transition-all ${
          currentLocale === 'fr'
            ? 'bg-white text-tropical-green shadow-sm'
            : 'text-foreground/60 hover:text-tropical-green'
        }`}
      >
        FR
      </Link>
      <Link
        href={switchLocale('en')}
        className={`px-3 py-1 rounded-full text-sm font-body font-medium transition-all ${
          currentLocale === 'en'
            ? 'bg-white text-tropical-green shadow-sm'
            : 'text-foreground/60 hover:text-tropical-green'
        }`}
      >
        EN
      </Link>
    </div>
  );
}
