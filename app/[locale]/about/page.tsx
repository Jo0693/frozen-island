import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { imageLibrary } from '@/data/images';
import Image from 'next/image';

export default async function AboutPage({
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
        <div data-publisher-section="header" className="text-center mb-16">
          <h1 data-publisher-field="about.title" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {dict.about.title}
          </h1>
        </div>

        {/* Story Section */}
        <section data-publisher-section="story" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={imageLibrary.hero.lifestyle.src}
                alt="Frozen Island Bali"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 data-publisher-field="story.title" className="text-3xl font-display font-bold text-tropical-green mb-6">
                {dict.about.story.title}
              </h2>
              <p data-publisher-field="story.description" className="text-lg font-body text-foreground/70 leading-relaxed">
                {dict.about.story.description}
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section data-publisher-section="values" className="mb-20">
          <h2 data-publisher-field="values.title" className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12">
            {dict.about.values.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌿</div>
              <h3 data-publisher-field="values.natural.title" className="text-xl font-display font-bold text-tropical-green mb-3">
                {dict.about.values.natural.title}
              </h3>
              <p data-publisher-field="values.natural.description" className="text-foreground/70 font-body leading-relaxed">
                {dict.about.values.natural.description}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🥭</div>
              <h3 data-publisher-field="values.local.title" className="text-xl font-display font-bold text-tropical-green mb-3">
                {dict.about.values.local.title}
              </h3>
              <p data-publisher-field="values.local.description" className="text-foreground/70 font-body leading-relaxed">
                {dict.about.values.local.description}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">♻️</div>
              <h3 data-publisher-field="values.sustainable.title" className="text-xl font-display font-bold text-tropical-green mb-3">
                {dict.about.values.sustainable.title}
              </h3>
              <p data-publisher-field="values.sustainable.description" className="text-foreground/70 font-body leading-relaxed">
                {dict.about.values.sustainable.description}
              </p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section data-publisher-section="location" className="bg-gradient-to-br from-tropical-green to-tropical-green/90 rounded-3xl p-12 text-white text-center max-w-4xl mx-auto">
          <h2 data-publisher-field="location.title" className="text-3xl font-display font-bold mb-4">
            {dict.about.location.title}
          </h2>
          <p data-publisher-field="location.description" className="text-xl font-body mb-6">{dict.about.location.description}</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-tropical-green rounded-full font-body font-semibold hover:bg-mango hover:text-white transition-all duration-300"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 text-white rounded-full font-body font-semibold hover:bg-white hover:text-tropical-green transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
