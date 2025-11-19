import { imageLibrary } from './images';

export type FruitProfile = 'fruity' | 'creamy' | 'tangy' | 'sweet';
export type FruitTag = 'signature' | 'best-seller' | 'kids-friendly' | 'new';

export interface Fruit {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  profile: FruitProfile[];
  tags: FruitTag[];
  image: {
    src: string;
    alt: string;
  };
}

export const fruits: Fruit[] = [
  {
    id: 'mango',
    name: {
      fr: 'Mangue Givrée',
      en: 'Frozen Mango',
    },
    description: {
      fr: 'Douceur veloutée et sucrée, la mangue de Bali dans toute sa splendeur tropicale.',
      en: 'Velvety smooth sweetness, Bali mango in all its tropical splendor.',
    },
    profile: ['fruity', 'sweet'],
    tags: ['signature', 'best-seller'],
    image: imageLibrary.products.mango,
  },
  {
    id: 'coconut',
    name: {
      fr: 'Coco Glacée',
      en: 'Frozen Coconut',
    },
    description: {
      fr: 'Crème onctueuse et rafraîchissante, servie dans sa noix naturelle.',
      en: 'Creamy and refreshing, served in its natural shell.',
    },
    profile: ['creamy', 'sweet'],
    tags: ['signature', 'best-seller', 'kids-friendly'],
    image: imageLibrary.products.coconut,
  },
  {
    id: 'dragon-fruit',
    name: {
      fr: 'Fruit du Dragon Gelé',
      en: 'Frozen Dragon Fruit',
    },
    description: {
      fr: 'Fraîcheur exotique et légèrement sucrée, avec une texture unique.',
      en: 'Exotic freshness, lightly sweet, with a unique texture.',
    },
    profile: ['fruity', 'tangy'],
    tags: ['signature'],
    image: imageLibrary.products.dragonFruit,
  },
  {
    id: 'passion',
    name: {
      fr: 'Passion Givrée',
      en: 'Frozen Passion Fruit',
    },
    description: {
      fr: 'Acidulé intense et parfumé, pour les amateurs de saveurs vibrantes.',
      en: 'Intensely tangy and aromatic, for lovers of vibrant flavors.',
    },
    profile: ['tangy', 'fruity'],
    tags: ['best-seller'],
    image: imageLibrary.products.passion,
  },
  {
    id: 'pineapple',
    name: {
      fr: 'Ananas Givré',
      en: 'Frozen Pineapple',
    },
    description: {
      fr: 'Fraîcheur tropicale sucrée-acidulée, un classique revisité.',
      en: 'Sweet-tangy tropical freshness, a reinvented classic.',
    },
    profile: ['fruity', 'tangy', 'sweet'],
    tags: ['kids-friendly'],
    image: imageLibrary.products.pineapple,
  },
  {
    id: 'papaya',
    name: {
      fr: 'Papaye Glacée',
      en: 'Frozen Papaya',
    },
    description: {
      fr: 'Douceur crémeuse et subtile, une invitation au voyage.',
      en: 'Creamy and subtle sweetness, an invitation to travel.',
    },
    profile: ['creamy', 'sweet'],
    tags: ['new'],
    image: imageLibrary.products.papaya,
  },
];
