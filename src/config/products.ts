import { ProductType } from '@/app/admin/_actions/product';

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

// Transform DB product to match the old Product interface
export function transformDbProduct(dbProduct: ProductType): Product {
  return {
    id: dbProduct.id,
    name: dbProduct.name,
    slug: dbProduct.slug,
    priceInCents: dbProduct.priceInCents,
    image: dbProduct.image,
    images: dbProduct.images,
    description: {
      en: dbProduct.descriptionEn,
      de: dbProduct.descriptionDe,
    },
    shortDescription: {
      en: dbProduct.shortDescriptionEn,
      de: dbProduct.shortDescriptionDe,
    },
    keyBenefits: {
      en: dbProduct.keyBenefitsEn,
      de: dbProduct.keyBenefitsDe,
    },
    howToUse: {
      en: dbProduct.howToUseEn,
      de: dbProduct.howToUseDe,
    },
  };
}

// Export transformed products array (async function for compatibility)
export async function getProducts(): Promise<Product[]> {
  const { getAllProducts } = await import('@/app/admin/_actions/product');
  const dbProducts = await getAllProducts();
  return dbProducts.map(transformDbProduct);
}

// For synchronous client components, we need a different approach
// These files will need to be converted to async or use useEffect
export const products: Product[] = []; // Empty placeholder - client components should use async data fetching

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const { getProductBySlug: getDbProductBySlug } = await import('@/app/admin/_actions/product');
  const dbProduct = await getDbProductBySlug(slug);
  return dbProduct ? transformDbProduct(dbProduct) : undefined;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const { getProductById: getDbProductById } = await import('@/app/admin/_actions/product');
  const dbProduct = await getDbProductById(id);
  return dbProduct ? transformDbProduct(dbProduct) : undefined;
}
