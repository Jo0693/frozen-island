import { getContent, getSeo } from '@/lib/content';
import type { Locale } from '@/lib/i18n/config';
import HeroSection from '@/components/sections/HeroSection';
import FeatureCards from '@/components/sections/FeatureCards';
import ProductGrid from '@/components/sections/ProductGrid';
import ImageCarousel from '@/components/sections/ImageCarousel';
import CallToActionBand from '@/components/sections/CallToActionBand';
import { imageLibrary } from '@/data/images';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo('home', locale);
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

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = getContent('home', locale);
  const drinksData = getContent('drinks', locale) as {
    items: { id: string; name: string; description: string; tags: string[]; image: { src: string; alt: string } }[];
  };
  const fruitsData = getContent('fruits', locale) as {
    items: { id: string; name: string; description: string; profile: string[]; tags: string[]; image: { src: string; alt: string } }[];
  };

  const features = [
    {
      title: (data as any).why.natural.title,
      description: (data as any).why.natural.description,
      icon: '🌿',
    },
    {
      title: (data as any).why.authentic.title,
      description: (data as any).why.authentic.description,
      icon: '🥥',
    },
    {
      title: (data as any).why.vibe.title,
      description: (data as any).why.vibe.description,
      icon: '✨',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        label={(data as any).hero.label}
        title={(data as any).hero.title}
        subtitle={(data as any).hero.subtitle}
        ctaPrimary={{
          text: (data as any).hero.ctaPrimary,
          href: `/${locale}/experience`,
        }}
        ctaSecondary={{
          text: (data as any).hero.ctaSecondary,
          href: `/${locale}/fruits`,
        }}
        imageSrc={imageLibrary.hero.fruit.src}
        imageAlt={imageLibrary.hero.fruit.alt}
      />

      {/* Why Frozen Island */}
      <FeatureCards title={(data as any).why.title} features={features} />

      {/* Fruits Section */}
      <section data-publisher-section="fruits" className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 data-publisher-field="fruits.title" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {(data as any).fruits.title}
            </h2>
            <p data-publisher-field="fruits.description" className="text-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">
              {(data as any).fruits.description}
            </p>
          </div>

          <ProductGrid items={fruitsData.items} maxItems={3} />

          <div className="text-center mt-12">
            <Link
              href={`/${locale}/fruits`}
              className="inline-block px-8 py-3 border-2 border-tropical-green text-tropical-green rounded-full font-body font-semibold hover:bg-tropical-green hover:text-white transition-all duration-300"
            >
              <span data-publisher-field="fruits.viewAll">{(data as any).fruits.viewAll}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <section data-publisher-section="drinks" className="py-20 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 data-publisher-field="drinks.title" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {(data as any).drinks.title}
            </h2>
            <p data-publisher-field="drinks.description" className="text-foreground/70 font-body text-lg max-w-2xl mx-auto mb-8">
              {(data as any).drinks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drinksData.items.map((drink, index) => (
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
                    {drink.name}
                  </h3>
                  <p data-publisher-field={`drinks.items[${index}].description`} className="text-sm text-foreground/70 font-body mb-3">
                    {drink.description}
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
              <span data-publisher-field="drinks.viewAll">{(data as any).drinks.viewAll}</span>
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
                {(data as any).experience.title}
              </h2>
              <p data-publisher-field="experience.subtitle" className="text-xl font-display text-tropical-green mb-6">
                {(data as any).experience.subtitle}
              </p>
              <p data-publisher-field="experience.description" className="text-foreground/70 font-body leading-relaxed mb-8">
                {(data as any).experience.description}
              </p>
              <Link
                href={`/${locale}/experience`}
                className="inline-block px-8 py-3 bg-tropical-green text-white rounded-full font-body font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span data-publisher-field="experience.cta">{(data as any).experience.cta}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <ImageCarousel
        images={imageLibrary.gallery.fruits.slice(0, 5)}
        title={(data as any).gallery.title}
      />

      {/* Final CTA */}
      <CallToActionBand
        title={(data as any).finalCta.title}
        description={(data as any).finalCta.description}
        ctaText={(data as any).finalCta.cta}
        ctaHref={`/${locale}/contact`}
      />
    </>
  );
}
