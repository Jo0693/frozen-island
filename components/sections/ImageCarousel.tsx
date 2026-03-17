'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  title?: string;
}

export default function ImageCarousel({ images, title }: ImageCarouselProps) {
  return (
    <section data-publisher-section="gallery" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-12"
            data-publisher-field="gallery.title"
          >
            {title}
          </motion.h2>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tropical-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-display font-semibold text-sm">
                  Taste the Tropics
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
