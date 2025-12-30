'use server';
import db from '@/db';

export async function getAllProducts() {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductById(id: string) {
  try {
    const product = await db.product.findUnique({
      where: { id },
    });
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const product = await db.product.findUnique({
      where: { slug },
    });
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export async function createProduct(data: {
  name: string;
  slug: string;
  priceInCents: number;
  image: string;
  images: string[];
  descriptionEn: string;
  descriptionDe: string;
  shortDescriptionEn: string;
  shortDescriptionDe: string;
  keyBenefitsEn: string[];
  keyBenefitsDe: string[];
  howToUseEn: string[];
  howToUseDe: string[];
  isAvailableForPurchase?: boolean;
}) {
  try {
    const product = await db.product.create({
      data,
    });
    return { success: true, product };
  } catch (error) {
    console.error('Error creating product:', error);
    return { success: false, error: 'Failed to create product' };
  }
}

export async function updateProduct(
  id: string,
  data: {
    name: string;
    slug: string;
    priceInCents: number;
    image: string;
    images: string[];
    descriptionEn: string;
    descriptionDe: string;
    shortDescriptionEn: string;
    shortDescriptionDe: string;
    keyBenefitsEn: string[];
    keyBenefitsDe: string[];
    howToUseEn: string[];
    howToUseDe: string[];
    isAvailableForPurchase?: boolean;
  }
) {
  try {
    const product = await db.product.update({
      where: { id },
      data,
    });
    return { success: true, product };
  } catch (error) {
    console.error('Error updating product:', error);
    return { success: false, error: 'Failed to update product' };
  }
}

export async function deleteProduct(id: string) {
  try {
    await db.product.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false };
  }
}

export type ProductType = Awaited<ReturnType<typeof getAllProducts>>[0];
