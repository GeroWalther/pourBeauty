'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const LogoOverlay: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {showLogo ? (
        <div className='fixed top-0 left-0 w-screen h-screen bg-[#000000f0] flex justify-center items-center z-50 '>
          <div className='flex-col items-center justify-center '>
            <Image
              src='/missglowlogo.png'
              width={500}
              height={100}
              alt='logo'
              className='-mt-30 md:mt-40'
            />
            {/* <p className='text-pink-300 text-2xl ml-28 -mt-40 font-semibold'>
              Willkommen
            </p> */}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LogoOverlay;
