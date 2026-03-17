import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import HeroSection from '@/components/sections/HeroSection';
import FeatureCards from '@/components/sections/FeatureCards';
import ProductGrid from '@/components/sections/ProductGrid';
import ImageCarousel from '@/components/sections/ImageCarousel';
import CallToActionBand from '@/components/sections/CallToActionBand';
import { fruits } from '@/data/fruits';
import { drinks } from '@/data/drinks';
import { imageLibrary } from '@/data/images';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const features = [
    {
      title: dict.home.why.natural.title,
      description: dict.home.why.natural.description,
      icon: '🌿',
    },
    {
      title: dict.home.why.authentic.title,
      description: dict.home.why.authentic.description,
      icon: '🥥',
    },
    {
      title: dict.home.why.vibe.title,
      description: dict.home.why.vibe.description,
      icon: '✨',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        label={dict.home.hero.label}
        title={dict.home.hero.title}
        subtitle={dict.home.hero.subtitle}
        ctaPrimary={{
          text: dict.home.hero.ctaPrimary,
          href: `/${locale}/experience`,
        }}
        ctaSecondary={{
          text: dict.home.hero.ctaSecondary,
          href: `/${locale}/fruits`,
        }}
        imageSrc={imageLibrary.hero.fruit.src}
        imageAlt={imageLibrary.hero.fruit.alt}
      />

      {/* Why Frozen Island */}
      <FeatureCards title={dict.home.why.title} features={features} />

      {/* Fruits Section */}
      <section data-publisher-section="fruits" className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 data-publisher-field="fruits.title" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {dict.home.fruits.title}
            </h2>
            <p data-publisher-field="fruits.description" className="text-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">
              {dict.home.fruits.description}
            </p>
          </div>

          <ProductGrid fruits={fruits} locale={locale} maxItems={3} />

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/fruits`}
              className="inline-block px-8 py-3 border-2 border-tropical-green text-tropical-green rounded-full font-body font-semibold hover:bg-tropical-green hover:text-white transition-all duration-300"
            >
              <span data-publisher-field="fruits.viewAll">{dict.home.fruits.viewAll}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section data-publisher-section="drinks" className="py-20 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 data-publisher-field="drinks.title" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {dict.home.drinks.title}
            </h2>
            <p data-publisher-field="drinks.description" className="text-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">
              {dict.home.drinks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinks.map((drink, index) => (
              <div
                key={drink.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={drink.image.src}
                    alt={drink.image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 data-publisher-field={`drinks.items[${index}].name`} className="font-display font-bold text-lg text-foreground mb-2">
                    {drink.name[locale]}
                  </h3>
                  <p data-publisher-field={`drinks.items[${index}].description`} className="text-sm text-foreground/70 font-body mb-3">
                    {drink.description[locale]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {drink.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-mint text-tropical-green rounded-full capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/drinks`}
              className="inline-block px-8 py-3 border-2 border-tropical-green text-tropical-green rounded-full font-body font-semibold hover:bg-tropical-green hover:text-white transition-all duration-300"
            >
              <span data-publisher-field="drinks.viewAll">{dict.home.drinks.viewAll}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section data-publisher-section="experience" className="py-20 bg-gradient-to-br from-tropical-green/10 via-mint to-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imageLibrary.hero.lifestyle.src}
                alt={imageLibrary.hero.lifestyle.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div>
              <h2 data-publisher-field="experience.title" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {dict.home.experience.title}
              </h2>
              <p data-publisher-field="experience.subtitle" className="text-xl font-display text-tropical-green mb-6">
                {dict.home.experience.subtitle}
              </p>
              <p data-publisher-field="experience.description" className="text-foreground/70 font-body leading-relaxed mb-8">
                {dict.home.experience.description}
              </p>
              <Link
                href={`/${locale}/experience`}
                className="inline-block px-8 py-3 bg-tropical-green text-white rounded-full font-body font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span data-publisher-field="experience.cta">{dict.home.experience.cta}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <ImageCarousel
        images={imageLibrary.gallery.fruits.slice(0, 5)}
        title={dict.home.gallery.title}
      />

      {/* Final CTA */}
      <CallToActionBand
        title={dict.home.finalCta.title}
        description={dict.home.finalCta.description}
        ctaText={dict.home.finalCta.cta}
        ctaHref={`/${locale}/contact`}
      />
    </>
  );
}
