import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import HeroSection from '@/components/sections/HeroSection';
import { imageLibrary } from '@/data/images';
import Image from 'next/image';

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const steps = [
    {
      number: '01',
      title: dict.experience.ritual.step1.title,
      description: dict.experience.ritual.step1.description,
    },
    {
      number: '02',
      title: dict.experience.ritual.step2.title,
      description: dict.experience.ritual.step2.description,
    },
    {
      number: '03',
      title: dict.experience.ritual.step3.title,
      description: dict.experience.ritual.step3.description,
    },
  ];

  return (
    <>
      {/* Hero */}
      <HeroSection
        label="Frozen Island"
        title={dict.experience.hero.title}
        subtitle={dict.experience.hero.subtitle}
        imageSrc={imageLibrary.hero.lifestyle.src}
        imageAlt={imageLibrary.hero.lifestyle.alt}
      />

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {dict.experience.intro.title}
            </h2>
            <p className="text-lg font-body text-foreground/70 leading-relaxed">
              {dict.experience.intro.description}
            </p>
          </div>
        </div>
      </section>

      {/* Ritual Steps */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16">
            {dict.experience.ritual.title}
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
                    <h3 className="text-2xl font-display font-bold text-tropical-green">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-lg font-body text-foreground/70 leading-relaxed">
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
      <section className="py-20 bg-tropical-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
              {dict.experience.ambiance.title}
            </h2>
            <p className="text-lg font-body text-white/90 leading-relaxed mb-8 text-center">
              {dict.experience.ambiance.description}
            </p>
            <blockquote className="text-2xl font-display italic text-center text-mango">
              {dict.experience.ambiance.quote}
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
