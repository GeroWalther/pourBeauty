import React from 'react';
import HeroComp from '../../components/components/homepage/Hero';
import Subscribe from '@/components/components/homepage/EmailSubscription';
import TestimonialsSection from '@/components/components/homepage/Testimonials';
import FeaturesSection from './_components/Features';
import ProductSectionMissGlowLips from './_components/ProductSectionMissGlowLips';

export default function HomePage() {
  return (
    <>
      <HeroComp />
      <FeaturesSection />
      <ProductSectionMissGlowLips />
      <TestimonialsSection />
      <Subscribe />
    </>
  );
}
