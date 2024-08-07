'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LogoOverlay: React.FC = () => {
  const [showLogo, setShowLogo] = useState(() => true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {showLogo ? (
        <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-gradient-to-r from-[#ad00ad] to-white'>
          <div className='flex-col items-center justify-center'>
            <Image
              src='/lippe.png'
              width={500}
              height={100}
              alt='logo'
              priority={true}
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
