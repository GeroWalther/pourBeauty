export interface Product {
  id: string;
  name: string;
  slug: string;
  priceInCents: number;
  image: string;
  images: string[];
  description: {
    en: string;
    de: string;
  };
  shortDescription: {
    en: string;
    de: string;
  };
  keyBenefits: {
    en: string[];
    de: string[];
  };
  howToUse: {
    en: string[];
    de: string[];
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Revitalizing Serum',
    slug: 'revitalizing-serum',
    priceInCents: 8900,
    image: '/luxury-serum-bottle-on-white-background.jpg',
    images: ['/luxury-serum-bottle-on-white-background.jpg', '/elegant-face-cream-jar-white-background.jpg'],
    description: {
      en: 'Advanced anti-aging formula that reduces fine lines and wrinkles by 64% within one month.',
      de: 'Fortschrittliche Anti-Aging-Formel, die feine Linien und Falten innerhalb eines Monats um 64% reduziert.',
    },
    shortDescription: {
      en: 'Advanced anti-aging formula that reduces fine lines and wrinkles by 64% within one month.',
      de: 'Fortschrittliche Anti-Aging-Formel, die Linien und Falten um 64% reduziert.',
    },
    keyBenefits: {
      en: [
        'Clinically tested formula',
        'Dermatologically approved',
        'Visible results within weeks',
      ],
      de: [
        'Klinisch getestete Formel',
        'Dermatologisch zugelassen',
        'Sichtbare Ergebnisse innerhalb von Wochen',
      ],
    },
    howToUse: {
      en: [
        'Apply to cleansed skin',
        'Gently massage until fully absorbed',
        'Use morning and evening for best results',
      ],
      de: [
        'Auf gereinigte Haut auftragen',
        'Sanft einmassieren bis vollständig eingezogen',
        'Morgens und abends verwenden für beste Ergebnisse',
      ],
    },
  },
  {
    id: '2',
    name: 'Hydrating Day Cream',
    slug: 'hydrating-day-cream',
    priceInCents: 6900,
    image: '/elegant-face-cream-jar-white-background.jpg',
    images: ['/elegant-face-cream-jar-white-background.jpg'],
    description: {
      en: 'Intense moisture with SPF protection for all-day hydration and sun defense.',
      de: 'Intensive Feuchtigkeit mit SPF-Schutz für ganztägige Hydratation und Sonnenschutz.',
    },
    shortDescription: {
      en: 'Intense moisture with SPF protection for all-day hydration and sun defense.',
      de: 'Intensive Feuchtigkeit mit SPF-Schutz für ganztägige Hydratation.',
    },
    keyBenefits: {
      en: [
        'Clinically tested formula',
        'Dermatologically approved',
        'Visible results within weeks',
      ],
      de: [
        'Klinisch getestete Formel',
        'Dermatologisch zugelassen',
        'Sichtbare Ergebnisse innerhalb von Wochen',
      ],
    },
    howToUse: {
      en: [
        'Apply to cleansed skin',
        'Gently massage until fully absorbed',
        'Use morning and evening for best results',
      ],
      de: [
        'Auf gereinigte Haut auftragen',
        'Sanft einmassieren bis vollständig eingezogen',
        'Morgens und abends verwenden für beste Ergebnisse',
      ],
    },
  },
  {
    id: '3',
    name: 'Brightening Eye Treatment',
    slug: 'brightening-eye-treatment',
    priceInCents: 7900,
    image: '/eye-cream-tube-minimalist-white-background.jpg',
    images: ['/eye-cream-tube-minimalist-white-background.jpg'],
    description: {
      en: 'Targets dark circles and puffiness while smoothing the delicate eye area. Reduces signs of fatigue and brightens for a refreshed appearance.',
      de: 'Zielt auf Augenringe und Schwellungen ab, während es die empfindliche Augenpartie glättet. Reduziert Müdigkeitserscheinungen und hellt auf.',
    },
    shortDescription: {
      en: 'Targets dark circles and puffiness while smoothing the delicate eye area.',
      de: 'Zielt auf Augenringe und Schwellungen ab und glättet die Augenpartie.',
    },
    keyBenefits: {
      en: [
        'Clinically tested formula',
        'Dermatologically approved',
        'Visible results within weeks',
      ],
      de: [
        'Klinisch getestete Formel',
        'Dermatologisch zugelassen',
        'Sichtbare Ergebnisse innerhalb von Wochen',
      ],
    },
    howToUse: {
      en: [
        'Apply to cleansed skin',
        'Gently massage until fully absorbed',
        'Use morning and evening for best results',
      ],
      de: [
        'Auf gereinigte Haut auftragen',
        'Sanft einmassieren bis vollständig eingezogen',
        'Morgens und abends verwenden für beste Ergebnisse',
      ],
    },
  },
  {
    id: '4',
    name: 'Purifying Night Mask',
    slug: 'purifying-night-mask',
    priceInCents: 7500,
    image: '/skincare-mask-jar-clean-white-background.jpg',
    images: ['/skincare-mask-jar-clean-white-background.jpg'],
    description: {
      en: 'Overnight treatment that deeply cleanses and rejuvenates while you sleep. Wake up to refreshed, revitalized skin with improved texture and clarity.',
      de: 'Nächtliche Behandlung, die tiefenreinigt und verjüngt, während Sie schlafen. Wachen Sie mit frischer, revitalisierter Haut auf.',
    },
    shortDescription: {
      en: 'Overnight treatment that deeply cleanses and rejuvenates while you sleep.',
      de: 'Nächtliche Behandlung, die tiefenreinigt und verjüngt.',
    },
    keyBenefits: {
      en: [
        'Clinically tested formula',
        'Dermatologically approved',
        'Visible results within weeks',
      ],
      de: [
        'Klinisch getestete Formel',
        'Dermatologisch zugelassen',
        'Sichtbare Ergebnisse innerhalb von Wochen',
      ],
    },
    howToUse: {
      en: [
        'Apply to cleansed skin',
        'Gently massage until fully absorbed',
        'Use morning and evening for best results',
      ],
      de: [
        'Auf gereinigte Haut auftragen',
        'Sanft einmassieren bis vollständig eingezogen',
        'Morgens und abends verwenden für beste Ergebnisse',
      ],
    },
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
