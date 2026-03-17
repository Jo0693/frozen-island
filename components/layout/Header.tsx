'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import LanguageSwitcher from '../ui/LanguageSwitcher';

interface HeaderProps {
  locale: Locale;
  dict: {
    home: string;
    experience: string;
    fruits: string;
    drinks: string;
    gallery: string;
    about: string;
    contact: string;
    cta: string;
  };
}

export default function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: dict.home, href: `/${locale}` },
    { name: dict.experience, href: `/${locale}/experience` },
    { name: dict.fruits, href: `/${locale}/fruits` },
    { name: dict.drinks, href: `/${locale}/drinks` },
    { name: dict.gallery, href: `/${locale}/gallery` },
    { name: dict.about, href: `/${locale}/about` },
    { name: dict.contact, href: `/${locale}/contact` },
  ];

  return (
    <header
      data-publisher-section="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-off-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex-shrink-0">
            <div className="flex items-center gap-2">
              {/* TODO: Remplacer par le vrai logo dans public/branding/logo-frozen-island.png */}
              <div className="w-12 h-12 bg-gradient-to-br from-tropical-green to-mango rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">FI</span>
              </div>
              <span className="font-display font-bold text-xl text-tropical-green hidden sm:block">
                Frozen Island
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-body transition-colors ${
                    isActive
                      ? 'text-tropical-green font-semibold'
                      : 'text-foreground/70 hover:text-tropical-green'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA and Language Switcher */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href={`/${locale}/contact`}
              className="px-6 py-2.5 bg-gradient-to-r from-tropical-green to-tropical-green/90 text-white rounded-full font-body font-medium text-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              {dict.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg font-body text-sm transition-colors ${
                      isActive
                        ? 'bg-tropical-green/10 text-tropical-green font-semibold'
                        : 'text-foreground/70 hover:bg-mint'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="flex items-center justify-between px-4 pt-2">
                <LanguageSwitcher currentLocale={locale} />
                <Link
                  href={`/${locale}/contact`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-2.5 bg-gradient-to-r from-tropical-green to-tropical-green/90 text-white rounded-full font-body font-medium text-sm"
                >
                  {dict.cta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
