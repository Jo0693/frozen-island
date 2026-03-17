'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CallToActionBandProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaHref: string;
}

export default function CallToActionBand({
  title,
  description,
  ctaText,
  ctaHref,
}: CallToActionBandProps) {
  return (
    <section data-publisher-section="finalCta" className="py-20 bg-gradient-to-r from-tropical-green to-tropical-green/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4" data-publisher-field="finalCta.title">
            {title}
          </h2>
          {description && (
            <p className="text-white/90 font-body text-lg mb-8 max-w-2xl mx-auto" data-publisher-field="finalCta.description">
              {description}
            </p>
          )}
          <Link
            href={ctaHref}
            className="inline-block px-10 py-4 bg-white text-tropical-green rounded-full font-body font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-mango hover:text-white"
            data-publisher-field="finalCta.cta"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
