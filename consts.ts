export const SHIPPING = 5;

//prizes
export const FRESHEZESPRICE = 64;
export const PRICEMAGICGLOW = 79;
export const MAGICLIPSPRICE = 69;
export const FACECLEANSERPRICE = 21;
export const MAGICELIXIRPRICE = 94;

//images
export const productImgsLips = ['/MagicLips.jpg', '/lippen.jpg'];
export const productImagesGlowCreme = [
  '/MagicGlowCreme1.JPG',
  '/MagicGlowCreme.JPG',
];
export const productImagesFresh = ['/freshEyes.JPG', '/fresheyes2.jpg'];

export const productImagesMagicElixir = [
  '/MagicElixirProdBottleSolo.jpg',
  '/MagicElixir.jpg',
];

export const productImagesFaceCleanser = [
  '/FaceCleanserProductBottleSolo.jpg',
  '/FaceCleanser.jpeg',
];

// testimonials gallery
export const galleryImages = [
  '/gallery1.jpg',
  '/MagicGlowCreme.JPG',
  '/FRESH.png',
  '/gallery3.jpeg',
  '/gallery5.jpg',
  '/Kundenkarte.jpeg',
  '/magicGlowBlond.png',

  '/gallery6.jpg',
  '/Kundenkarte3.png',
  '/MagicGlowCreme1.JPG',
  '/lippen.jpg',
  '/freshEyes.JPG',
];

// Centralized products data
export const PRODUCTS = [
  {
    id: '1',
    name: 'POUR BEAUTY BIOLOGICAL Magic Glow',
    description: 'Our signature beauty product for a radiant glow.',
    price: PRICEMAGICGLOW,
    image: productImagesGlowCreme[0],
    images: productImagesGlowCreme,
    slug: 'magicGlow',
    quantity: 1,
  },
  {
    id: '2',
    name: 'POUR BEAUTY BIOLOGICAL Magic Lips',
    description: 'Hydrating lip treatment for soft, plump lips.',
    price: MAGICLIPSPRICE,
    image: productImgsLips[0],
    images: productImgsLips,
    slug: 'magicLips',
    quantity: 1,
  },
  {
    id: '3',
    name: 'POUR BEAUTY BIOLOGICAL Magic Elixir',
    description: 'Advanced formula for youthful, rejuvenated skin.',
    price: MAGICELIXIRPRICE,
    image: productImagesMagicElixir[0],
    images: productImagesMagicElixir,
    slug: 'magicElixir',
    quantity: 1,
  },
  {
    id: '4',
    name: 'POUR BEAUTY BIOLOGICAL Fresh Eyes',
    description: 'Intensive treatment for youthful, vibrant eyes.',
    price: FRESHEZESPRICE,
    image: productImagesFresh[0],
    images: productImagesFresh,
    slug: 'freshEyes',
    quantity: 1,
  },
  {
    id: '5',
    name: 'POUR BEAUTY BIOLOGICAL Face Cleanser',
    description: 'Gentle cleansing formula for all skin types.',
    price: FACECLEANSERPRICE,
    image: productImagesFaceCleanser[0],
    images: productImagesFaceCleanser,
    slug: 'faceCleanser',
    quantity: 1,
  },
];
