// Run this script once to initialize the sale promotion in your database
// Usage: npx tsx scripts/initSale.ts

import db from '../src/db';

async function initSale() {
  try {
    // Check if sale promotion already exists
    const existing = await db.salePromotion.findFirst();
    
    if (existing) {
      console.log('Sale promotion already exists:', existing);
      return;
    }

    // Create initial sale promotion
    const salePromotion = await db.salePromotion.create({
      data: {
        isActive: true,
        salePercentage: 30,
        saleName: 'WINTER FLASH SALE',
        saleUntil: new Date('2025-12-31'),
      },
    });

    console.log('Sale promotion created successfully:', salePromotion);
  } catch (error) {
    console.error('Error initializing sale promotion:', error);
  } finally {
    await db.$disconnect();
  }
}

initSale();
