import React from 'react';
import Nav, { NavLink } from '../../components/Nav';
import { Canvas } from '../../components/components/homepage/Hero';
import Cart from './_components/Cart';
import { LanguageProvider } from '@/contexts/LanguageProvider';
import LanguageSwitcher from './_components/SwitchLang';

import Image from 'next/image';
import MobilNav from '@/components/MobileNav';
import { Toaster } from 'sonner';
import Footer from './_components/Footer';
import LogoOverlay from './_components/LogoOverlay';

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
          <div className='mt-1 -mb-14 mr-5 flex-shrink-0 md:mr-0 w-60 md:w-44 md:mt-10 md:mb-0 lg:w-72'>
            <Image src='/lippe.png' width={350} height={100} alt='logo' />
          </div>
          <Nav>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/missGlow'>Miss Glow Beauty</NavLink>
            <NavLink href='/about'>About</NavLink>
            <div className='flow-root mr-5 mt-2'>
              <Cart />
            </div>
            <LanguageSwitcher />
          </Nav>
          <MobilNav>
            <LanguageSwitcher mobile />
          </MobilNav>
        </div>
        <Canvas className='absolute top-0 left-0 -z-10' />
        <div className=''>{children}</div>
        <Footer />
        <Toaster position='top-center' richColors />
      </main>
    </LanguageProvider>
  );
}
