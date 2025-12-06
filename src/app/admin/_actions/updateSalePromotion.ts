'use server';
import db from '@/db';
import { revalidatePath } from 'next/cache';

export async function updateSalePromotion(data: {
  salePercentage: number;
  saleName: string;
  saleStartDate: string; // ISO date string
  saleUntil: string; // ISO date string
}) {
  try {
    console.log('Attempting to save sale promotion:', data);
    
    // Auto-calculate isActive based on date range
    const now = new Date();
    const startDate = new Date(data.saleStartDate);
    const endDate = new Date(data.saleUntil);
    const isActive = now >= startDate && now <= endDate;
    
    console.log('Auto-calculated isActive:', isActive);

    // Always create new sale promotion
    const created = await db.salePromotion.create({
      data: {
        isActive,
        salePercentage: data.salePercentage,
        saleName: data.saleName,
        saleStartDate: startDate,
        saleUntil: endDate,
      },
    });
    console.log('Created sale promotion:', created);

    revalidatePath('/admin/salepromotion');
    return { success: true };
  } catch (error) {
    console.error('Error updating sale promotion:', error);
    return { success: false, error: 'Failed to update sale promotion' };
  }
}
