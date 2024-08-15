'use client';
import React from 'react';
import ProductInfo from './ProductInfo';
import { useLanguage } from '@/contexts/LanguageProvider';
import { MAGICLIPSPRICE, productImgsLips } from '../../../../consts';

export default function ProductSectionMagicLips() {
  const { language } = useLanguage();
  return (
    <ProductInfo
      id='1'
      productImgs={productImgsLips}
      name='MAGIC LIPS SERUM'
      description={
        language === 'de'
          ? 'MAGIC LIPS SERUM  mit einem erstaunlichen LIP PLUMPING EFFEKT bis zu 78% mehr Lippenvolumen, verleiht absolute volle Aufpolsterung der Lippen und intensive Pflege. MAGIC LIPS SERUM enthält hocheffektive WIRKSTOFFKOSMETIK zum steigern der Attraktivität.'
          : 'MAGIC LIPS SERUM with an amazing LIP PLUMPING EFFECT up to 78% more lip volume, gives absolute full plumping of the lips and intensive care. MAGIC LIPS SERUM contains highly effective ACTIVE COSMETICS to increase attractiveness.'
      }
      price={MAGICLIPSPRICE}
      priceBeforeDiscount={129}
    />
  );
}
