'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroComp() {
  const { language } = useLanguage();

  return (
    <section className='relative min-h-[90vh] bg-white overflow-hidden'>
      {/* Gold accent elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className='absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-100 to-transparent opacity-70'
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className='absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-t from-amber-50 to-transparent'
      />

      {/* Decorative circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className='absolute -top-20 -right-20 w-80 h-80 rounded-full border border-amber-200 opacity-50'
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
        className='absolute top-40 -left-40 w-96 h-96 rounded-full border border-amber-100 opacity-30'
      />

      <div className='container mx-auto px-4 pt-20 md:pt-32 relative z-10'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          {/* Text content */}
          <div className='md:w-1/2 text-center md:text-left mb-12 md:mb-0'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className='inline-block mb-4 px-4 py-1 bg-amber-50 border-l-2 border-amber-400 text-amber-800'>
              <span className='text-sm font-medium tracking-wider'>
                {language === 'de'
                  ? 'PREMIUM NATURKOSMETIK'
                  : 'PREMIUM NATURAL COSMETICS'}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-800 mb-4'>
              <span className='font-medium text-amber-700'>PURE</span> BEAUTY
              <span className='block mt-2 text-amber-800'>BIOLOGICAL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-xl md:text-2xl text-stone-600 font-light max-w-xl mb-8'>
              {language === 'de'
                ? 'Die moderne Naturkosmetik für strahlende Schönheit und jugendliche Ausstrahlung.'
                : 'The modern natural cosmetics for radiant beauty and youthful glow.'}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <Link
                href='/about'
                className={buttonVariants({
                  variant: 'outline',
                  className:
                    'border-amber-300 text-amber-800 hover:bg-amber-50 hover:text-amber-900 group',
                })}>
                {language === 'de' ? 'Unsere Geschichte' : 'Our Story'}
                <ChevronRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
              </Link>

              <Link
                href='/magicGlow'
                className={buttonVariants({
                  className: 'bg-amber-700 hover:bg-amber-800 text-white',
                })}>
                {language === 'de' ? 'Produkte entdecken' : 'Discover Products'}
              </Link>
            </motion.div>
          </div>

          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='md:w-1/2 relative'>
            <div className='relative w-72 h-72 md:w-96 md:h-96 mx-auto'>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className='absolute inset-0 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 shadow-lg'></motion.div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}>
                <Image
                  src='/MagicElixir.jpg'
                  width={400}
                  height={400}
                  alt='Premium cosmetic product'
                  className='relative z-10 p-8 rounded-full'
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-10 bg-black/5 blur-xl rounded-full'></motion.div>
            </div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.3,
                type: 'spring',
                stiffness: 200,
              }}
              className='absolute top-10 right-10 w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center'>
              <span className='text-amber-800 font-medium text-sm'>
                {language === 'de' ? 'NEU' : 'NEW'}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Tagline at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className='text-center mt-16 md:mt-24 mb-6'>
          <h2 className='text-xl md:text-2xl text-stone-700 font-light '>
            {language === 'de' ? 'Hol dir deinen' : 'Get your '}
            <span className='font-medium text-amber-700'> Glow Look!</span>
          </h2>
        </motion.div>
      </div>

      {/* Gold accent line at bottom */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 origin-left'></motion.div>
    </section>
  );
}
