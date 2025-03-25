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
        <NavLink href='/magicLips'>MAGIC LIPS</NavLink>
        <NavLink href='/magicGlow'>MAGIC GLOW</NavLink>
        <NavLink href='/freshEyes'>FRESH EYES</NavLink>
        <NavLink href='/magicElixir'>MAGIC ELIXIR</NavLink>
        <NavLink href='/faceCleanser'>FACE CLEANSER</NavLink>
        <NavLink href='/about'>
          {language == 'de' ? 'Über uns' : 'About'}
        </NavLink>
        <div className='flow-root mr-5 self-center'>
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
