'use client';

import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureCardsProps {
  title?: string;
  features: Feature[];
}

export default function FeatureCards({ title, features }: FeatureCardsProps) {
  return (
    <section data-publisher-section="features" className="py-20 bg-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-center text-foreground mb-16"
            data-publisher-field="features.title"
          >
            {title}
          </motion.h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {feature.icon && (
                <div className="text-4xl mb-4">{feature.icon}</div>
              )}
              <h3 className="text-xl font-display font-bold text-tropical-green mb-3" data-publisher-field={`features.items[${index}].title`}>
                {feature.title}
              </h3>
              <p className="text-foreground/70 font-body leading-relaxed" data-publisher-field={`features.items[${index}].description`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
