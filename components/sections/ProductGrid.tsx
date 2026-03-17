'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  profile: string[];
  tags: string[];
  image: {
    src: string;
    alt: string;
  };
}

interface ProductGridProps {
  items: ProductItem[];
  maxItems?: number;
}

export default function ProductGrid({ items, maxItems }: ProductGridProps) {
  const displayItems = maxItems ? items.slice(0, maxItems) : items;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Tags */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/90 backdrop-blur-sm text-tropical-green text-xs font-body font-semibold rounded-full capitalize"
                >
                  {tag.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 data-publisher-field={`fruits.items[${index}].name`} className="text-xl font-display font-bold text-foreground mb-2">
              {item.name}
            </h3>
            <p data-publisher-field={`fruits.items[${index}].description`} className="text-foreground/70 font-body text-sm leading-relaxed mb-4">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.profile.map((prof) => (
                <span
                  key={prof}
                  className="px-3 py-1 bg-mint text-tropical-green text-xs font-body rounded-full capitalize"
                >
                  {prof}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
