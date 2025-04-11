import React from 'react';
import { Canvas } from '@/components/ui/Canvas';
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
        <div className='flex items-center justify-between px-6 md:px-12'>
          <div className='flex-shrink-0 w-40 md:w-32 lg:w-44'>
            <Image
              src='/PUREBEAUTYLOGO.png.PNG'
              width={100}
              height={40}
              alt='logo'
              className='object-contain'
            />
          </div>
          <NavBarComp />
        </div>
        {/* <Canvas className='absolute top-0 left-0 -z-10' /> */}
        <div className=''>{children}</div>
        <Footer />
        <Toaster position='top-center' richColors />
      </main>
    </LanguageProvider>
  );
}
