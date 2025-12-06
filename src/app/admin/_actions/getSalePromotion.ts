'use server';
import db from '@/db';

export async function getAllSalePromotions() {
  try {
    const salePromotions = await db.salePromotion.findMany({
      orderBy: {
        saleStartDate: 'desc',
      },
    });

    return salePromotions;
  } catch (error) {
    console.error('Error fetching sale promotions:', error);
    return [];
  }
}

export async function deleteSalePromotion(id: string) {
  try {
    await db.salePromotion.delete({
      where: { id },
    });
    return { success: true };
  } catch (error) {
    console.error('Error deleting sale promotion:', error);
    return { success: false };
  }
}

export type SalePromotionType = Awaited<ReturnType<typeof getAllSalePromotions>>[0];
