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
      name='Magic Lips Serum'
      description={
        language === 'de'
          ? 'Ein hochwertiges Lippenprodukt, das speziell für einen glamourösen Look entwickelt wurde. Es bietet langanhaltende Farbe, intensive Feuchtigkeit und ein angenehmes Tragegefühl. Die einzigartige Formel sorgt für volle und geschmeidige Lippen, während sie gleichzeitig pflegt und schützt. Perfekt für jeden Anlass und jede Stimmung!'
          : 'A high-quality lip product designed specifically for a glamorous look. It provides long-lasting color, intense moisture, and a comfortable feel. The unique formula creates full and smooth lips while nourishing and protecting them. Perfect for any occasion and mood!'
      }
      price={MAGICLIPSPRICE}
      priceBeforeDiscount={129}
    />
  );
}
