'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const LogoOverlay: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);
  const isDesktop = useMediaQuery('(min-width: 688px)');
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const glowLogoWidth = isDesktop ? '500' : '400';
  const glowLogoheight = isDesktop ? '100' : '80';
  return (
    <div>
      {showLogo ? (
        <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-gradient-to-r from-[#ad00ad] to-white'>
          <div className='flex-col items-center justify-center'>
            <Image
              src='/lippe.png'
              width={glowLogoWidth}
              height={glowLogoheight}
              alt='logo'
              className='-mt-36'
            />

            <p className='text-stone-700 ml-6 md:text-4xl text-xl md:-ml-8 md:-mt-36 -mt-40 font-semibold '>
              Willkommen - Welcome - Bienvenue
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LogoOverlay;
