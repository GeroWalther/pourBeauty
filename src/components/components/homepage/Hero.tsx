'use client';
import { Button, buttonVariants } from '../../ui/button';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

export default function HeroComp() {
  return (
    <>
      <section className='relative h-[90vh]'>
        {/* <Canvas className='absolute top-0 left-0 -z-10' /> */}
        <div className='py-8 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <div className='relative'>
            <h1
              className='sm:mb-8 text-4xl font-bold tracking-tight text-stone-700 sm:text-6xl md:mt-20'
              style={{ mixBlendMode: 'color-burn' }}>
              MISS GLOW BEAUTY
              <span className='text-stone-400 mt-4 block'>
                Die moderne Naturkosmetik.
              </span>
            </h1>
            <p
              aria-hidden='true'
              className='sm:mb-8 text-4xl font-bold tracking-tight text-stone-700 sm:text-6xl md:mt-20 absolute top-0 left-0 -z-30'
              style={{ mixBlendMode: 'revert' }}>
              MISS GLOW BEAUTY
              <span className='text-stone-400 mt-4 block'>
                Die moderne Naturkosmetik.
              </span>
            </p>
          </div>
          <div className='relative'>
            <p
              className='mt-6 text-lg max-w-prose text-muted-foreground '
              style={{ mixBlendMode: 'color-burn' }}>
              Willkommen zu deiner neuen Lieblingsmarke.
            </p>
            <p
              aria-hidden='true'
              className='mt-6 text-lg max-w-prose text-muted-foreground absolute top-0 left-0 -z-30'
              style={{ mixBlendMode: 'revert' }}>
              Willkommen zu deiner neuen Lieblingsmarke.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link
              href='/about'
              className={buttonVariants({ variant: 'outline' })}>
              Was steckt dahinter
            </Link>
            <Link
              href='/missGlow'
              className={buttonVariants({ className: ' bg-pink-600' })}>
              Shop
            </Link>
          </div>
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
        height: '85vh',
        background:
          'linear-gradient(45deg, rgb(255, 126, 193), rgb(255, 126, 193))',
      }}
      width='32'
      height='32'
      ref={canvasRef}></canvas>
  );
}
