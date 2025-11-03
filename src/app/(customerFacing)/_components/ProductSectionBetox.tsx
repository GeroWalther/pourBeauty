'use client';
import React from 'react';
import ProductInfo from './ProductInfo';
import { useLanguage } from '@/contexts/LanguageProvider';
import { BETOXPRICE, productImgsBetox } from '../../../../consts';

export default function ProductSectionBetox() {
  const { language } = useLanguage();
  return (
    <div className='-mt-20'>
      <ProductInfo
        id='6'
        productImgs={productImgsBetox}
        name='BETOX SERUM'
        description={
          language === 'de'
            ? 'Augenpflege mit „Botox Effekt“: BETOX Serum reduziert Falten innerhalb eines Monats um 64 %, zusätzlich zu dieser Wirkung kommt eine intensive Feuchtigkeit für die empfindliche Augenpartie, Fältchen werden aufgepolstert und entspannt'
            : 'Eye care with “Botox Effect”: BETOX Serum reduces wrinkles within one month by 64%, in addition to this effect, there is an intensive moisture for the sensitive eye area, wrinkles are plumped and relaxed'
        }
        price={BETOXPRICE}
        priceBeforeDiscount={99}
        productLink='/betoxserum'
      />
    </div>
  );
}
