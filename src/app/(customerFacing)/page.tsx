import React from 'react';
import HeroComp from '../../components/components/homepage/Hero';
import Subscribe from '@/components/components/homepage/EmailSubscription';

export default function HomePage() {
  return (
    <>
      <HeroComp />
      <Subscribe />
    </>
  );
}
