import { imageLibrary } from './images';

export type DrinkBenefit = 'hydrating' | 'energizing' | 'vitamin-rich' | 'detox';
export type DrinkTag = 'signature' | 'cold' | 'fresh' | 'detox';

export interface Drink {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  benefits: {
    fr: string[];
    en: string[];
  };
  tags: DrinkTag[];
  image: {
    src: string;
    alt: string;
  };
}

export const drinks: Drink[] = [
  {
    id: 'coconut-water',
    name: {
      fr: 'Eau de Coco Fraîche',
      en: 'Fresh Coconut Water',
    },
    description: {
      fr: 'Hydratation pure directement de la noix, naturellement sucrée.',
      en: 'Pure hydration straight from the nut, naturally sweet.',
    },
    benefits: {
      fr: ['Hydratation intense', 'Riche en électrolytes', 'Faible en calories'],
      en: ['Intense hydration', 'Rich in electrolytes', 'Low in calories'],
    },
    tags: ['signature', 'cold', 'fresh'],
    image: imageLibrary.drinks.coconutWater,
  },
  {
    id: 'mango-lassi',
    name: {
      fr: 'Lassi Mangue',
      en: 'Mango Lassi',
    },
    description: {
      fr: 'Onctuosité tropicale, yaourt et mangue fraîche.',
      en: 'Tropical creaminess, yogurt and fresh mango.',
    },
    benefits: {
      fr: ['Probiotiques naturels', 'Riche en vitamines A & C', 'Énergisant'],
      en: ['Natural probiotics', 'Rich in vitamins A & C', 'Energizing'],
    },
    tags: ['signature', 'fresh'],
    image: imageLibrary.drinks.mangoLassi,
  },
  {
    id: 'passion-juice',
    name: {
      fr: 'Jus de Fruit de la Passion',
      en: 'Passion Fruit Juice',
    },
    description: {
      fr: 'Intensité acidulée et parfumée, 100% pur jus.',
      en: 'Tangy and aromatic intensity, 100% pure juice.',
    },
    benefits: {
      fr: ['Riche en vitamine C', 'Antioxydants', 'Stimulant naturel'],
      en: ['Rich in vitamin C', 'Antioxidants', 'Natural stimulant'],
    },
    tags: ['cold', 'fresh'],
    image: imageLibrary.drinks.passionfruiJuice,
  },
  {
    id: 'dragon-smoothie',
    name: {
      fr: 'Smoothie Dragon',
      en: 'Dragon Smoothie',
    },
    description: {
      fr: 'Fruit du dragon, banane et lait de coco, crémeux et rose.',
      en: 'Dragon fruit, banana and coconut milk, creamy and pink.',
    },
    benefits: {
      fr: ['Détoxifiant', 'Riche en fibres', 'Boost immunitaire'],
      en: ['Detoxifying', 'High in fiber', 'Immune boost'],
    },
    tags: ['signature', 'detox'],
    image: imageLibrary.drinks.dragonfruitSmoothie,
  },
];
