import React from 'react';
import { Canvas } from '../../components/components/homepage/Hero';
import { LanguageProvider } from '@/contexts/LanguageProvider';

import Image from 'next/image';
import { Toaster } from 'sonner';
import Footer from './_components/Footer';
import LogoOverlay from './_components/LogoOverlay';
import NavBarComp from './_components/NavBarComp';

export const dynamic = 'force-dynamic';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <main className='relative'>
        <LogoOverlay />
        <div className='flex items-center justify-around md:-mt-12 md:-mb-20 gap-10'>
          <div className='mt-1 -mb-14 mr-5 flex-shrink-0 md:mr-0 w-48 md:w-36 md:mt-10 md:mb-0 lg:w-60'>
            <Image src='/lippe.png' width={350} height={100} alt='logo' />
          </div>
          <NavBarComp />
          <Image
            src='/award.png'
            width={700}
            height={700}
            alt='award'
            className='fixed max-w-32 md:right-32 md:top-48 md:max-w-32 right-2 bottom-2 z-50'
          />
        </div>
        <Canvas className='absolute top-0 left-0 -z-10' />
        <div className=''>{children}</div>
        <Footer />
        <Toaster position='top-center' richColors />
      </main>
    </LanguageProvider>
  );
}
