'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoOverlay: React.FC = () => {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-gradient-to-b from-white via-amber-50 to-white'>
          <div className='relative flex flex-col items-center justify-center'>
            {/* Decorative elements */}
            <div className='absolute -top-40 -left-40 w-80 h-80 rounded-full border border-amber-200 opacity-30' />
            <div className='absolute -bottom-40 -right-40 w-80 h-80 rounded-full border border-amber-200 opacity-30' />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 opacity-40 blur-md' />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='relative z-10 mb-8'>
              <Image
                src='/PUREBEAUTYLOGO.png.PNG'
                width={400}
                height={300}
                alt='PURE BEAUTY BIOLOGICAL'
                priority={true}
                className='mx-auto'
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='relative z-10'>
              <div className='h-px w-40 bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-6' />
              <p className='text-stone-700 text-xl md:text-2xl font-light tracking-wide text-center'>
                Willkommen - Welcome - Bienvenue
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoOverlay;
