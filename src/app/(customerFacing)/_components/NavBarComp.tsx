'use client';
import Nav, { NavLink } from '@/components/Nav';
import React from 'react';
import Cart from './Cart';
import LanguageSwitcher from './SwitchLang';
import MobilNav from '@/components/MobileNav';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function NavBarComp() {
  const { language } = useLanguage();
  return (
    <>
      <Nav>
        <NavLink href='/'>{language == 'de' ? 'Start' : 'Home'}</NavLink>
        <NavLink href='/magicLips'>Magic Lips</NavLink>
        <NavLink href='/magicGlow'>Magic Glow</NavLink>
        <NavLink href='/freshEyes'>Fresh Eyes</NavLink>
        <NavLink href='/about'>
          {language == 'de' ? 'Über uns' : 'About'}
        </NavLink>
        <div className='flow-root mr-5 mt-2'>
          <Cart />
        </div>
        <LanguageSwitcher />
      </Nav>
      <MobilNav>
        <LanguageSwitcher mobile />
      </MobilNav>
    </>
  );
}
