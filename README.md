# Frozen Island - Bali

Un site web premium pour Frozen Island, un concept de fruits tropicaux givrés servis dans leur écorce naturelle à Bali.

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Lancement en développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Le site redirigera automatiquement vers `/fr` (français par défaut).

## 🌍 Langues disponibles

- **Français** (par défaut) : `/fr`
- **Anglais** : `/en`

## 📁 Structure du projet

```
frozen_island/
├── app/
│   ├── [locale]/          # Pages avec routing i18n
│   │   ├── page.tsx       # Page d'accueil
│   │   ├── experience/    # Page Expérience
│   │   ├── fruits/        # Page Fruits Givrés
│   │   ├── drinks/        # Page Boissons
│   │   ├── gallery/       # Page Galerie
│   │   ├── about/         # Page À propos
│   │   └── contact/       # Page Contact
│   ├── layout.tsx         # Layout racine
│   └── globals.css        # Styles globaux + config Tailwind
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Sections réutilisables
│   └── ui/                # Composants UI
├── data/
│   ├── fruits.ts          # Données des fruits
│   ├── drinks.ts          # Données des boissons
│   └── images.ts          # Bibliothèque d'images
├── lib/
│   └── i18n/              # Configuration i18n
│       ├── config.ts
│       ├── get-dictionary.ts
│       └── dictionaries/  # Traductions FR/EN
└── public/
    └── branding/          # Logo et assets visuels
```

## 🎨 Direction Artistique

### Palette de couleurs

Le projet utilise une palette "Tropical Chic & Pure Freshness" :

- **tropicalGreen** : `#0d7a6f` - Vert profond légèrement bleuté
- **mango** : `#ff9f4a` - Orange mangue vibrant
- **cream** : `#faf7f2` - Beige sable (fond principal)
- **offWhite** : `#fefdfb` - Blanc cassé
- **sunYellow** : `#ffeaa7` - Jaune pastel crémeux
- **mint** : `#e8f8f5` - Vert menthe léger
- **richBrown** : `#8b6f47` - Brun doux (bambou)

### Typographies

- **Baloo 2** : Titres et headings (classe `font-display`)
- **Inter** : Corps de texte (classe `font-body`)

## 🖼️ Images à remplacer

### TODO Important : Remplacer les images placeholder

Actuellement, le site utilise des images Unsplash comme placeholders. Voici les emplacements à mettre à jour :

#### 1. Logo
- **Fichier** : `public/branding/logo-frozen-island.png`
- **Format** : PNG avec transparence
- **Taille recommandée** : 500x500px

#### 2. Images de produits
Mettez à jour les URLs dans `data/images.ts` :

```typescript
products: {
  mango: { src: '/images/products/mango.jpg', alt: '...' },
  coconut: { src: '/images/products/coconut.jpg', alt: '...' },
  // etc.
}
```

## 📄 Pages

### Page d'accueil (`/`)
- Hero avec CTA
- Section "Pourquoi Frozen Island"
- Grid de fruits givrés (3 premiers)
- Boissons tropicales
- Expérience sur place
- Galerie express
- CTA final

### Expérience (`/experience`)
- Hero
- Histoire et concept
- Rituel de dégustation (3 étapes)
- Ambiance & Design

### Fruits Givrés (`/fruits`)
- Grid complète avec filtres
- Filtres : Tous, Signatures, Best-sellers, Kids Friendly

### Boissons (`/drinks`)
- Liste détaillée avec bienfaits
- Grid 2 colonnes responsive

### Galerie (`/gallery`)
- Grille mosaïque (masonry)
- Organisation par catégories

### À propos (`/about`)
- Histoire de la marque
- Nos engagements (3 piliers)
- Localisation

### Contact (`/contact`)
- Formulaire de contact
- Informations pratiques
- Liens sociaux

## 🛠️ Technologies

- **Next.js 14** avec App Router
- **TypeScript**
- **Tailwind CSS** v4
- **Framer Motion** (animations)
- **i18n** custom (FR/EN)
- **Google Fonts** (Baloo 2 + Inter)

## 📱 Responsive

Le site est entièrement responsive avec breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🎯 Prochaines étapes

1. **Remplacer les images** placeholder par de vraies photos (produits, lieu, merch)
2. **Ajouter le logo** dans `public/branding/logo-frozen-island.png`
3. **Intégrer Google Maps** dans la page Contact
4. **Configurer les liens sociaux** (Instagram, WhatsApp) avec les vraies URLs
5. **Optimiser le SEO** (métadonnées, Open Graph)
6. **Configurer l'hébergement** (Vercel recommandé)

## 📦 Build & Déploiement

### Build de production

```bash
npm run build
```

### Lancement en production

```bash
npm start
```

### Déploiement sur Vercel

Le projet est prêt pour un déploiement sur Vercel :

```bash
vercel
```

## 📝 Notes importantes

- Toutes les images utilisent `next/image` pour l'optimisation
- Les animations Framer Motion sont subtiles et respectent le principe "less is more"
- Le design est pensé "mobile-first"
- Les couleurs respectent la DA "Tropical Chic"
- Tous les textes sont traduits en FR et EN

---

**Frozen Island – Taste the Tropics** 🌴🥥
