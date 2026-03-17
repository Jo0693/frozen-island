'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/i18n/config';
import ProductGrid from '@/components/sections/ProductGrid';
import type { ProductItem } from '@/components/sections/ProductGrid';

interface FruitsData {
  title: string;
  subtitle: string;
  filterAll: string;
  filterSignature: string;
  filterBestSeller: string;
  filterKidsFriendly: string;
  items: ProductItem[];
}

interface FruitsPageClientProps {
  data: FruitsData;
  locale: Locale;
}

type FilterKey = 'all' | 'signature' | 'best-seller' | 'kids-friendly';

export default function FruitsPageClient({ data, locale }: FruitsPageClientProps) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: data.filterAll },
    { key: 'signature', label: data.filterSignature },
    { key: 'best-seller', label: data.filterBestSeller },
    { key: 'kids-friendly', label: data.filterKidsFriendly },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? data.items
      : data.items.filter((item) => item.tags.includes(activeFilter));

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-publisher-section="header" className="text-center mb-12">
          <h1 data-publisher-field="fruits.title" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {data.title}
          </h1>
          <p data-publisher-field="fruits.subtitle" className="text-lg font-body text-foreground/70 max-w-2xl mx-auto">
            {data.subtitle}
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
              {filter.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-center text-sm font-body text-foreground/60 mb-8">
          {filteredItems.length}{' '}
          {locale === 'fr'
            ? `fruit${filteredItems.length > 1 ? 's' : ''}`
            : `fruit${filteredItems.length > 1 ? 's' : ''}`}
        </p>

        {/* Grid */}
        <ProductGrid items={filteredItems} />
      </div>
    </div>
  );
}
