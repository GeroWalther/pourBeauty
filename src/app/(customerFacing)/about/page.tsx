'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import React from 'react';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';
import Image from 'next/image';
import { PRIMARYBUTTONCOLOR } from '../../../../consts';

export default function AboutPage() {
  const { language } = useLanguage();
  return (
    <MaxWidthWrapper className='mt-12 mb-20'>
      <div className='bg-black text-white p-12'>
        <h1 className='font-light tracking-wide text-3xl md:text-4xl text-center mb-12'>
          {language === 'de' ? 'WAS STECKT DAHINTER' : 'THE STORY BEHIND'}
        </h1>

        <div className='max-w-4xl mx-auto'>
          <div className='space-y-8'>
            <p className='text-lg font-light leading-relaxed'>
              {language === 'de'
                ? 'PURE BEAUTY BIOLOGICAL setzt auf eine gesündere Haut, trendige, hochwertige biologische Kosmetikprodukte, die wirklich wirken und für jeden zugänglich sind. die deine Haut sichtbar verbessern und verjüngen und dir einen frischen, strahlenden GLOW Look verleihen. PURE BEAUTY BIOLOGICAL widmet sich der Herstellung von Produkten, die auf wissenschaftlichen Erkenntnissen und grossartigen Formulierungen basieren, wirksame Produkte vereinfachen die Hautpflege und Ihre Haut sichtbar verbessern mit einem GLOW Look.'
                : 'PURE BEAUTY BIOLOGICAL focuses on healthier skin, trendy, high-quality organic cosmetic products that really work and are accessible to everyone. that visibly improve and rejuvenate your skin and give you a fresh, radiant GLOW look. PURE BEAUTY BIOLOGICAL is dedicated to creating products based on scientific knowledge and great formulations, effective products simplify skincare and visibly improve your skin with a GLOW look.'}
            </p>
            <p className='text-lg font-light leading-relaxed'>
              {language === 'de'
                ? 'Entdecke, wie PURE BEAUTY BIOLOGICAL dir dabei hilft, deinen einzigartigen Stil auszudrücken und mit SELBSTBEWUSSTSEIN zu glänzen.'
                : 'Discover how PURE BEAUTY BIOLOGICAL helps you express your unique style and shine with CONFIDENCE.'}
            </p>
          </div>

          <div className='my-12 border-t border-b border-amber-100/20 py-10'>
            <h2 className='text-2xl font-light text-center mb-8'>
              {language === 'de' ? 'HOL DIR DEINEN ' : 'GET YOUR '}
              <span className='font-medium text-amber-200'> GLOW LOOK!</span>
            </h2>
            <p className='text-lg font-light leading-relaxed text-center'>
              {language === 'de'
                ? 'Lass dich von PURE BEAUTY BIOLOGICAL inspirieren und werde Teil einer Community, die SCHÖNHEIT neu definiert.'
                : 'Be inspired by PURE BEAUTY BIOLOGICAL and become part of a community that redefines BEAUTY.'}
            </p>
            <p className='text-lg font-light leading-relaxed text-center mt-4'>
              {language === 'de'
                ? 'Schreib uns, auch gerne eine WhatsApp, um am kostenlosen PURE BEAUTY BIOLOGICAL WORKSHOP teilzunehmen.'
                : 'Write to us, also gladly via WhatsApp, to participate in the free PURE BEAUTY BIOLOGICAL WORKSHOP.'}
            </p>
          </div>

          <div className='flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md:space-y-0 mt-12'>
            <address className='text-lg flex flex-col not-italic'>
              <div className='mb-4'>
                <p className='text-gray-400 mb-1'>WhatsApp</p>
                <a
                  href='tel:0049015151906996'
                  className='text-white hover:text-amber-200 transition-colors'>
                  (0049) 015151906996
                </a>
              </div>
              <div>
                <p className='text-gray-400 mb-1'>E-Mail</p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                  className='text-white hover:text-amber-200 transition-colors'>
                  {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </a>
              </div>
            </address>

            <Image
              src='/werdeTeil.jpg'
              alt='werde teil von PURE BEAUTY BIOLOGICAL Foto'
              width={400}
              height={400}
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
