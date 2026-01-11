import React from 'react';
import Image from 'next/image';

export function BeautyShowcase() {
  return (
    <section className="relative w-full overflow-hidden md:px-8 lg:px-16">
      <div className="w-full aspect-video md:aspect-auto md:h-[600px] relative">
        <Image
          src="/beauty.gif"
          alt="Beauty showcase"
          fill
          className="md:object-cover"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
