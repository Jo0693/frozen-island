'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  label: string;
  title: string;
  subtitle: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  imageSrc?: string;
  imageAlt?: string;
}

export default function HeroSection({
  label,
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-mango/20 via-cream to-off-white overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tropical-green rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-mango rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm font-body text-tropical-green mb-4 uppercase tracking-wider"
            >
              {label}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg font-body text-foreground/70 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {ctaPrimary && (
                <Link
                  href={ctaPrimary.href}
                  className="px-8 py-4 bg-gradient-to-r from-tropical-green to-tropical-green/90 text-white rounded-full font-body font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {ctaPrimary.text}
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  href={ctaSecondary.href}
                  className="px-8 py-4 bg-white text-tropical-green rounded-full font-body font-semibold border-2 border-tropical-green hover:bg-tropical-green hover:text-white transition-all duration-300"
                >
                  {ctaSecondary.text}
                </Link>
              )}
            </motion.div>
          </motion.div>

          {/* Image */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tropical-green/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-mango text-white px-6 py-3 rounded-2xl font-display font-bold text-lg shadow-lg">
                Taste the Tropics
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
