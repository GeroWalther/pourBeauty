import React from 'react';
import { Card } from '@/components/ui/card';
import { getAllSalePromotions } from '../_actions/getSalePromotion';
import SalePromotionForm from '../_components/SalePromotionForm';
import SalePromotionList from '../_components/SalePromotionList';

export default async function SalePromotionPage() {
  const salePromotions = await getAllSalePromotions();

  return (
    <section>
      <h3 className='text-lg w-full mb-2 text-left'>
        Richte hier eine Rabattaktion für alle Produkte ein. Die Aktion wird
        automatisch aktiv, wenn das aktuelle Datum im angegebenen Zeitraum liegt.
      </h3>
      <Card className='mb-4 p-5'>
        <SalePromotionForm />
      </Card>
      
      <SalePromotionList salePromotions={salePromotions} />
    </section>
  );
}
