import {
  FRESHEZESPRICE,
  PRICEMAGICGLOW,
  MAGICLIPSPRICE,
  FACECLEANSERPRICE,
  MAGICELIXIRPRICE,
  BETOXPRICE,
  productImgsLips,
  productImgsBetox,
  productImagesGlowCreme,
  productImagesFresh,
  productImagesMagicElixir,
  productImagesFaceCleanser,
} from '../../consts';

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
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Revitalizing Serum',
    slug: 'revitalizing-serum',
    priceInCents: 8900,
    image: '/luxury-serum-bottle-on-white-background.jpg',
    images: ['/luxury-serum-bottle-on-white-background.jpg'],
    description: {
      en: 'Advanced anti-aging formula that reduces fine lines and wrinkles by 64% within one month.',
      de: 'Fortschrittliche Anti-Aging-Formel, die feine Linien und Falten innerhalb eines Monats um 64% reduziert.',
    },
    shortDescription: {
      en: 'Advanced anti-aging formula that reduces fine lines and wrinkles by 64% within one month.',
      de: 'Fortschrittliche Anti-Aging-Formel, die Linien und Falten um 64% reduziert.',
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
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((product) => product.slug === slug);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};
