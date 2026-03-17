import { getContent, getSeo } from '@/lib/content';
import type { Locale } from '@/lib/i18n/config';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo('drinks', locale);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.og.title,
      description: seo.og.description,
      type: seo.og.type,
    },
  };
}

export default async function DrinksPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = getContent('drinks', locale) as {
    title: string;
    subtitle: string;
    benefits: string;
    items: {
      id: string;
      name: string;
      description: string;
      benefits: string[];
      tags: string[];
      image: { src: string; alt: string };
    }[];
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-publisher-section="header" className="text-center mb-16">
          <h1 data-publisher-field="drinks.title" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {data.title}
          </h1>
          <p data-publisher-field="drinks.subtitle" className="text-lg font-body text-foreground/70 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Drinks Grid */}
        <div data-publisher-section="drinks-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.items.map((drink, index) => (
            <div
              key={drink.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative h-64 sm:h-full">
                  <Image
                    src={drink.image.src}
                    alt={drink.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 data-publisher-field={`drinks.items[${index}].name`} className="text-2xl font-display font-bold text-foreground mb-3">
                    {drink.name}
                  </h3>
                  <p data-publisher-field={`drinks.items[${index}].description`} className="text-foreground/70 font-body mb-6 leading-relaxed">
                    {drink.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-body font-semibold text-tropical-green mb-2 uppercase">
                      {data.benefits}
                    </h4>
                    <ul className="space-y-1">
                      {drink.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm font-body text-foreground/70 flex items-start gap-2">
                          <span className="text-mango">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {drink.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-mint text-tropical-green text-xs font-body rounded-full capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
