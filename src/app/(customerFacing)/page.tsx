import React from 'react';
import HeroComp from '../../components/components/homepage/Hero';
import Subscribe from '@/components/components/homepage/EmailSubscription';
import TestimonialsSection from '@/components/components/homepage/Testimonials';

export default function HomePage() {
  return (
    <>
      <HeroComp />
      <TestimonialsSection />
      <Subscribe />
    </>
  );
}
