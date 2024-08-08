import React from 'react';
import HeroComp from '../../components/components/homepage/Hero';
import Subscribe from '@/components/components/homepage/EmailSubscription';
import TestimonialsSection from '@/components/components/homepage/Testimonials';
import FeaturesSection from './_components/Features';
import ProductInfo from './_components/ProductInfo';

const productImgs = ['/512-1.jpg', '/512-2.jpg', '/512.jpg'];

export default function HomePage() {
  return (
    <>
      <HeroComp />
      <FeaturesSection />
      <ProductInfo
        id='1'
        productImgs={productImgs}
        name='Miss Glow Lips'
        description='Ein hochwertiges Lippenprodukt, das speziell für einen glamourösen Look entwickelt wurde. Es bietet langanhaltende Farbe, intensive Feuchtigkeit und ein angenehmes Tragegefühl. Die einzigartige Formel sorgt für volle und geschmeidige Lippen, während sie gleichzeitig pflegt und schützt. Perfekt für jeden Anlass und jede Stimmung!'
        price={89}
        priceBeforeDiscount={129}
      />
      <TestimonialsSection />
      <Subscribe />
    </>
  );
}
