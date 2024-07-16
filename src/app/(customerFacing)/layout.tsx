import React, { useContext } from 'react';
import Nav, { NavLink } from '../../components/Nav';
import { Canvas } from '../../components/components/homepage/Hero';
import Cart from './_components/Cart';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageProvider';

export const dynamic = 'force-dynamic';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <>
        <Nav>
          <NavLink href='/'>Home</NavLink>
          <NavLink href='/missGlow'>Miss Glow Beauty</NavLink>
          <NavLink href='/about'>About</NavLink>
          <div className='flow-root mr-5 mt-2'>
            <Cart />
          </div>
          <LanguageSwitcher />
        </Nav>
        <Canvas className='absolute top-0 left-0 -z-10' />
        <div className=''>{children}</div>
      </>
    </LanguageProvider>
  );
}

const LanguageSwitcher = () => {
  const { language } = useLanguage();

  // const toggleLanguage = () => {
  //   setLanguage(language === 'de' ? 'en' : 'de');
  // };

  return (
    <div>
      <p>{language.toUpperCase()}</p>
      {/* <button onClick={toggleLanguage}> */}
      Switch to {language === 'de' ? 'German' : 'English'}
      {/* </button> */}
    </div>
  );
};
