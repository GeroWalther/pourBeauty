import React from 'react';
import HeroComp from '../../components/components/homepage/Hero';
import Subscribe from '@/components/components/homepage/EmailSubscription';
import TestimonialsSection from '@/components/components/homepage/Testimonials';
import FeaturesSection from './_components/Features';
import ProductSectionMagicLips from './_components/ProductSectionMagicLips';

export default function HomePage() {
  return (
    <>
      <HeroComp />
      <FeaturesSection />
      <ProductSectionMagicLips />
      <TestimonialsSection />
      <Subscribe />
    </>
  );
}
