'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import React from 'react';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutPage() {
  const { language } = useLanguage();
  return (
    <MaxWidthWrapper className='mb-10'>
      <div className='bg-gradient-to-r from-amber-400 via-amber-600 to-red-400 p-2 rounded-lg shadow-2xl'>
        <h1 className='font-bold text-white text-center text-3xl mb-2'>
          {language === 'de' ? 'Was steckt dahinter' : 'The story behind.'}
        </h1>
        <Card className='bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
          <div>
            <div className='space-y-4'>
              <h3 className='text-gray-800 text-xl font-semibold'>
                {language === 'de'
                  ? 'PURE BEAUTY BIOLOGICAL setzt auf eine gesündere Haut, trendige, hochwertige biologische Kosmetikprodukte, die wirklich wirken und für jeden zugänglich sind. die deine Haut sichtbar verbessern und verjüngen und dir einen frischen, strahlenden GLOW Look verleihen. PURE BEAUTY BIOLOGICAL widmet sich der Herstellung von Produkten, die auf wissenschaftlichen Erkenntnissen und grossartigen Formulierungen basieren, wirksame Produkte vereinfachen die Hautpflege und Ihre Haut sichtbar verbessern mit einem GLOW Look.'
                  : 'PURE BEAUTY BIOLOGICAL focuses on healthier skin, trendy, high-quality organic cosmetic products that really work and are accessible to everyone. that visibly improve and rejuvenate your skin and give you a fresh, radiant GLOW look. PURE BEAUTY BIOLOGICAL is dedicated to creating products based on scientific knowledge and great formulations, effective products simplify skincare and visibly improve your skin with a GLOW look.'}
              </h3>
              <p className='text-gray-700 text-lg'>
                {language === 'de'
                  ? 'Entdecke, wie PURE BEAUTY BIOLOGICAL dir dabei hilft, deinen einzigartigen Stil auszudrücken und mit SELBSTBEWUSSTSEIN zu glänzen.'
                  : 'Discover how PURE BEAUTY BIOLOGICAL helps you express your unique style and shine with CONFIDENCE.'}
              </p>
            </div>

            <div className='space-y-4 mt-5'>
              <h3 className='text-gray-800 text-xl font-semibold'>
                {language === 'de' ? 'HOL DIR DEINEN ' : 'GET YOUR '}
                <span className='font-bold text-amber-500 mb-10'>
                  {' '}
                  GLOW LOOK!
                </span>
              </h3>
              <p className='text-gray-700 text-lg'>
                {language === 'de'
                  ? 'Lass dich von PURE BEAUTY BIOLOGICAL inspirieren und werde Teil einer Community, die SCHÖNHEIT neu definiert.'
                  : 'Be inspired by PURE BEAUTY BIOLOGICAL and become part of a community that redefines BEAUTY.'}
              </p>
              <p className='text-gray-700 text-lg'>
                {language === 'de'
                  ? 'Schreib uns, auch gerne eine WhatsApp, um am kostenlosen PURE BEAUTY BIOLOGICAL WORKSHOP teilzunehmen.'
                  : 'Write to us, also gladly via WhatsApp, to participate in the free PURE BEAUTY BIOLOGICAL WORKSHOP.'}
              </p>
            </div>
            <address className='text-lg flex-col md:flex mt-5'>
              <div className='mb-2'>
                <p>Whats App</p>
                <a
                  href='tel:0049015151906996'
                  className='text-gray-600 hover:text-gray-400'>
                  (0049) 015151906996
                </a>
              </div>
              <div>
                <p>E-Mail</p>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                  className='text-gray-600 hover:text-gray-400'>
                  {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </a>
              </div>
            </address>
          </div>

          <Image
            src='/werdeTeil.jpg'
            alt='werde teil von PURE BEAUTY BIOLOGICAL Foto'
            width={500}
            height={1000}
            className='rounded-lg shadow-lg mt-10'
          />
        </Card>
      </div>
    </MaxWidthWrapper>
  );
}
