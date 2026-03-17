import { getContent, getSeo } from '@/lib/content';
import type { Locale } from '@/lib/i18n/config';
import HeroSection from '@/components/sections/HeroSection';
import { imageLibrary } from '@/data/images';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo('experience', locale);
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

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = getContent('experience', locale) as {
    hero: { title: string; subtitle: string };
    intro: { title: string; description: string };
    ritual: {
      title: string;
      step1: { title: string; description: string };
      step2: { title: string; description: string };
      step3: { title: string; description: string };
    };
    ambiance: { title: string; description: string; quote: string };
  };

  const steps = [
    { number: '01', title: data.ritual.step1.title, description: data.ritual.step1.description },
    { number: '02', title: data.ritual.step2.title, description: data.ritual.step2.description },
    { number: '03', title: data.ritual.step3.title, description: data.ritual.step3.description },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        label="Frozen Island"
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        imageSrc={imageLibrary.hero.lifestyle.src}
        imageAlt={imageLibrary.hero.lifestyle.alt}
      />

      {/* Intro */}
      <section data-publisher-section="intro" className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 data-publisher-field="intro.title" className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {data.intro.title}
            </h2>
            <p data-publisher-field="intro.description" className="text-lg font-body text-foreground/70 leading-relaxed">
              {data.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Ritual Steps */}
      <section data-publisher-section="ritual" className="py-20 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-publisher-field="ritual.title" className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16">
            {data.ritual.title}
          </h2>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-display font-bold text-mango/30">
                      {step.number}
                    </span>
                    <h3 data-publisher-field={`ritual.step${index + 1}.title`} className="text-2xl font-display font-bold text-tropical-green">
                      {step.title}
                    </h3>
                  </div>
                  <p data-publisher-field={`ritual.step${index + 1}.description`} className="text-lg font-body text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className={`relative h-80 rounded-3xl overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={imageLibrary.gallery.fruits[index]?.src || imageLibrary.hero.fruit.src}
                    alt={imageLibrary.gallery.fruits[index]?.alt || 'Frozen Island experience'}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tropical-green/20 to-transparent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance */}
      <section data-publisher-section="ambiance" className="py-20 bg-tropical-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 data-publisher-field="ambiance.title" className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              {data.ambiance.title}
            </h2>
            <p data-publisher-field="ambiance.description" className="text-lg font-body text-white/90 leading-relaxed mb-8 text-center">
              {data.ambiance.description}
            </p>
            <blockquote data-publisher-field="ambiance.quote" className="text-2xl font-display italic text-center text-mango">
              {data.ambiance.quote}
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {imageLibrary.gallery.location.map((image, index) => (
              <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
