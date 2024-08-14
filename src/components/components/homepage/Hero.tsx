'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Button, buttonVariants } from '../../ui/button';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function HeroComp() {
  const { language } = useLanguage();
  return (
    <>
      <section className='relative h-[70vh] md:h-[90vh]'>
        {/* <Canvas className='absolute top-0 left-0 -z-10' /> */}
        <div className='pt-8 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <div className='relative'>
            <h1
              className='sm:mb-8 text-4xl font-semibold tracking-tight text-stone-700 sm:text-6xl md:mt-20'
              style={{ mixBlendMode: 'color-burn' }}>
              MISS GLOW BEAUTY
              <span className='text-stone-700 mt-4 block text-2xl font-light'>
                {language == 'de'
                  ? 'Die moderne Naturkosmetik.'
                  : 'The modern natural cosmetics.'}
              </span>
            </h1>
            <p
              aria-hidden='true'
              className='sm:mb-8 text-4xl font-semibold tracking-tight text-stone-700 sm:text-6xl md:mt-20 absolute top-0 left-0 -z-30'
              style={{ mixBlendMode: 'revert' }}>
              MISS GLOW BEAUTY
              <span className='text-stone-700 mt-4 block text-2xl font-light'>
                {language == 'de'
                  ? 'Die moderne Naturkosmetik.'
                  : 'The modern natural cosmetics.'}
              </span>
            </p>
          </div>
          <div className='relative'>
            <p
              className='md:-mt-3 text-2xl max-w-prose text-stone-900 font-light'
              style={{ mixBlendMode: 'color-burn' }}>
              {language == 'de'
                ? 'Willkommen zu deiner neuen Lieblingsmarke.'
                : 'Welcome to your new favorite brand.'}
            </p>
            <p
              aria-hidden='true'
              className='md:-mt-3 text-2xl max-w-prose text-stone-900 font-light absolute top-0 left-0 -z-30'
              style={{ mixBlendMode: 'revert' }}>
              {language == 'de'
                ? 'Willkommen zu deiner neuen Lieblingsmarke.'
                : 'Welcome to your new favorite brand.'}
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 mt-10'>
            <Link
              href='/about'
              className={buttonVariants({ variant: 'outline' })}>
              {language == 'de' ? 'Was steck dahinter' : 'The story'}
            </Link>
            {/* <Link href='/magicLips' className={buttonVariants()}>
              Shop
            </Link> */}
          </div>
          <h2 className='mt-12 text-2xl max-w-prose text-stone-900 font-light'>
            Hol dir deinen Glow{' '}
            <span className='font-bold text-pink-500'>Look!</span>
          </h2>
        </div>
      </section>
    </>
  );
}

export function Canvas({ className }: any) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const col = (x: number, y: number, r: number, g: number, b: number) => {
      if (ctx) ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx?.fillRect(x, y, 1, 1);
    };

    const R = (x: number, y: number, t: number) => {
      return Math.floor(255 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = (x: number, y: number, t: number) => {
      return Math.floor(
        128 +
          64 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    const B = (x: number, y: number, t: number) => {
      return Math.floor(
        192 +
          64 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    let t = 0;

    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, 255, G(x, y, t), 220); // Change G(x, y, t) to G(x, y, t)
        }
      }
      t = t + 0.01;
      window.requestAnimationFrame(run);
    };

    run();
  }, []);

  return (
    <canvas
      id='canv'
      className={`w-full ${className}`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0% 100%)',
        height: '100vh',
        background:
          'linear-gradient(45deg, rgb(255, 126, 193), rgb(255, 126, 193))',
      }}
      width='32'
      height='32'
      ref={canvasRef}></canvas>
  );
}
