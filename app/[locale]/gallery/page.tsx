import { getContent, getSeo } from '@/lib/content';
import type { Locale } from '@/lib/i18n/config';
import { imageLibrary } from '@/data/images';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo('gallery', locale);
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

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const data = getContent('gallery', locale) as {
    title: string;
    subtitle: string;
    categories: { fruits: string; location: string; merch: string };
  };

  const allImages = [
    ...imageLibrary.gallery.fruits,
    ...imageLibrary.gallery.location,
    ...imageLibrary.gallery.merch,
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-publisher-section="header" className="text-center mb-16">
          <h1 data-publisher-field="gallery.title" className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            {data.title}
          </h1>
          <p data-publisher-field="gallery.subtitle" className="text-lg font-body text-foreground/70 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Masonry Grid */}
        <div data-publisher-section="masonry-grid" className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {allImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-green/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-display font-semibold text-lg px-4 py-2 bg-tropical-green/50 backdrop-blur-sm rounded-full">
                    Taste the Tropics
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div data-publisher-section="categories" className="mt-20">
          <h2 className="text-2xl font-display font-bold text-center text-foreground mb-8">
            {locale === 'fr' ? 'Par catégorie' : 'By category'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fruits */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-display font-bold text-tropical-green mb-4">
                {data.categories.fruits}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {imageLibrary.gallery.fruits.slice(0, 4).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-display font-bold text-tropical-green mb-4">
                {data.categories.location}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {imageLibrary.gallery.location.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Merch */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-display font-bold text-tropical-green mb-4">
                {data.categories.merch}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {imageLibrary.gallery.merch.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
