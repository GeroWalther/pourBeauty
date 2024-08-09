import React from 'react';
import HeroComp from '../../components/components/homepage/Hero';
import Subscribe from '@/components/components/homepage/EmailSubscription';
import TestimonialsSection from '@/components/components/homepage/Testimonials';
import FeaturesSection from './_components/Features';
import ProductSectionMagicLips from './_components/ProductSectionMagicLips';

export default function HomePage() {
  console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
  console.log(process.env.STRIPE_SECRET_KEY);
  console.log(process.env.STRIPE_WEBHOOK_SECRET);
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
