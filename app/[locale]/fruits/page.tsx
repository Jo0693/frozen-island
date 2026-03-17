'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import ProductGrid from '@/components/sections/ProductGrid';
import { fruits } from '@/data/fruits';
import type { FruitTag } from '@/data/fruits';

interface FruitsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default function FruitsPage({ params }: FruitsPageProps) {
  const [locale, setLocale] = useState<Locale>('fr');
  const [activeFilter, setActiveFilter] = useState<'all' | FruitTag>('all');

  // Unwrap params
  params.then((p) => setLocale(p.locale));

  const filters: { key: 'all' | FruitTag; label: { fr: string; en: string } }[] = [
    { key: 'all', label: { fr: 'Tous', en: 'All' } },
    { key: 'signature', label: { fr: 'Signatures', en: 'Signatures' } },
    { key: 'best-seller', label: { fr: 'Best-sellers', en: 'Best-sellers' } },
    { key: 'kids-friendly', label: { fr: 'Kids Friendly', en: 'Kids Friendly' } },
  ];

  const filteredFruits =
    activeFilter === 'all'
      ? fruits
      : fruits.filter((fruit) => fruit.tags.includes(activeFilter));

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-publisher-section="header" className="text-center mb-12">
          <h1 data-publisher-field="fruits.title" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {locale === 'fr' ? 'Fruits Givrés' : 'Frozen Fruits'}
          </h1>
          <p data-publisher-field="fruits.subtitle" className="text-lg font-body text-foreground/70 max-w-2xl mx-auto">
            {locale === 'fr'
              ? 'Chaque fruit est une œuvre d\'art glacée.'
              : 'Each fruit is a frozen work of art.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2.5 rounded-full font-body font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-tropical-green text-white shadow-lg'
                  : 'bg-white text-foreground/70 hover:text-tropical-green hover:shadow-md'
              }`}
            >
              {filter.label[locale]}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-sm font-body text-foreground/60 mb-8">
          {filteredFruits.length}{' '}
          {locale === 'fr'
            ? `fruit${filteredFruits.length > 1 ? 's' : ''}`
            : `fruit${filteredFruits.length > 1 ? 's' : ''}`}
        </p>

        {/* Grid */}
        <ProductGrid fruits={filteredFruits} locale={locale} />
      </div>
    </div>
  );
}
