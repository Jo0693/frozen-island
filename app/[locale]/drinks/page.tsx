import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { drinks } from '@/data/drinks';
import Image from 'next/image';

export default async function DrinksPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {dict.drinks.title}
          </h1>
          <p className="text-lg font-body text-foreground/70 max-w-2xl mx-auto">
            {dict.drinks.subtitle}
          </p>
        </div>

        {/* Drinks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {drinks.map((drink) => (
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
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {drink.name[locale]}
                  </h3>
                  <p className="text-foreground/70 font-body mb-6 leading-relaxed">
                    {drink.description[locale]}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-body font-semibold text-tropical-green mb-2 uppercase">
                      {dict.drinks.benefits}
                    </h4>
                    <ul className="space-y-1">
                      {drink.benefits[locale].map((benefit, index) => (
                        <li key={index} className="text-sm font-body text-foreground/70 flex items-start gap-2">
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
