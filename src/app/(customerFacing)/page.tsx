import React from 'react';
import { HeroSection } from './_components/components/hero-section';
import { FeaturesSection } from './_components/components/features-section';
import { ProductGallery } from './_components/components/product-gallery';
import { TestimonialsSection } from './_components/components/testimonials-section';
import { CTASection } from './_components/components/cta-section';
import { NewsletterSection } from './_components/components/newsletter-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductGallery />
      <TestimonialsSection />
      <CTASection />
      <NewsletterSection />
    </>
  );
}
