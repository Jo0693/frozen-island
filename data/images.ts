// TODO: Remplacer ces URLs par de vraies photos (shoots produits ou IA)
// Ces placeholders garantissent que le site ne soit jamais vide visuellement

export const imageLibrary = {
  hero: {
    fruit: {
      src: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&h=600&fit=crop',
      alt: 'Frozen tropical fruit in natural shell',
    },
    lifestyle: {
      src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop',
      alt: 'Tropical Bali atmosphere',
    },
  },

  gallery: {
    fruits: [
      {
        src: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&h=600&fit=crop',
        alt: 'Frozen mango in shell',
      },
      {
        src: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=600&h=600&fit=crop',
        alt: 'Fresh tropical coconut',
      },
      {
        src: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=600&h=600&fit=crop',
        alt: 'Dragon fruit preparation',
      },
      {
        src: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=600&h=600&fit=crop',
        alt: 'Passion fruit frozen',
      },
      {
        src: 'https://images.unsplash.com/photo-1605027990121-cbae9d3b5c3c?w=600&h=600&fit=crop',
        alt: 'Pineapple frozen dessert',
      },
      {
        src: 'https://images.unsplash.com/photo-1568471173238-64359358f0f4?w=600&h=600&fit=crop',
        alt: 'Papaya frozen creation',
      },
    ],
    location: [
      {
        src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
        alt: 'Frozen Island Bali location',
      },
      {
        src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop',
        alt: 'Tropical bamboo interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        alt: 'Bali beach atmosphere',
      },
    ],
    merch: [
      {
        src: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
        alt: 'Frozen Island bamboo bottle',
      },
      {
        src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop',
        alt: 'Eco-friendly tote bag',
      },
      {
        src: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=600&h=600&fit=crop',
        alt: 'Tropical keychain',
      },
    ],
  },

  merch: {
    bottle: {
      src: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop',
      alt: 'Reusable water bottle',
    },
    bambooBottle: {
      src: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&h=600&fit=crop',
      alt: 'Bamboo water bottle',
    },
    keychain: {
      src: 'https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=600&h=600&fit=crop',
      alt: 'Tropical fruit keychain',
    },
    tote: {
      src: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop',
      alt: 'Canvas tote bag',
    },
  },

  products: {
    mango: {
      src: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&h=600&fit=crop',
      alt: 'Frozen mango sorbet in natural shell',
    },
    coconut: {
      src: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=600&h=600&fit=crop',
      alt: 'Frozen coconut cream in shell',
    },
    dragonFruit: {
      src: 'https://images.unsplash.com/photo-1547514701-42782101795e?w=600&h=600&fit=crop',
      alt: 'Frozen dragon fruit sorbet',
    },
    passion: {
      src: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?w=600&h=600&fit=crop',
      alt: 'Frozen passion fruit',
    },
    pineapple: {
      src: 'https://images.unsplash.com/photo-1605027990121-cbae9d3b5c3c?w=600&h=600&fit=crop',
      alt: 'Frozen pineapple sorbet',
    },
    papaya: {
      src: 'https://images.unsplash.com/photo-1568471173238-64359358f0f4?w=600&h=600&fit=crop',
      alt: 'Frozen papaya creation',
    },
  },

  drinks: {
    coconutWater: {
      src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
      alt: 'Fresh coconut water',
    },
    mangoLassi: {
      src: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=600&h=600&fit=crop',
      alt: 'Tropical mango lassi',
    },
    passionfruiJuice: {
      src: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop',
      alt: 'Fresh passion fruit juice',
    },
    dragonfruitSmoothie: {
      src: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=600&fit=crop',
      alt: 'Dragon fruit smoothie bowl',
    },
  },
};

// Fallback component props pour images non disponibles
export const imageFallback = {
  className: 'bg-gradient-to-br from-mango/20 via-tropical-green/10 to-mint flex items-center justify-center text-tropical-green/40 text-sm font-body',
  text: 'Image à venir – Frozen Island',
};
