'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import React from 'react';

export default function AboutPage() {
  const { language } = useLanguage();
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {language === 'de' ? 'Über uns' : 'About Us'}
        </h1>
        <div className="h-1 w-20 bg-[oklch(0.52_0.12_195)]" />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 space-y-8">
        <div className='space-y-6'>
          <h3 className='text-gray-900 text-2xl font-bold'>
            {language === 'de'
              ? 'Glow. Beauty. Power.'
              : 'Glow. Beauty. Power.'}
          </h3>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Bei PureBeauty glauben wir daran, dass Hautpflege mehr ist als nur ein Produkt – sie ist ein Gefühl, ein Ritual, ein Moment der Wertschätzung für dich selbst. Unsere Mission ist es, biologische, hochwertige Kosmetik zu schaffen, die Ergebnisse liefert und sichtbar Ausstrahlung von innen nach außen schenkt.'
              : 'At PureBeauty, we believe that skincare is more than just a product – it is a feeling, a ritual, a moment of appreciation for yourself. Our mission is to create organic, high-quality cosmetics that deliver results and visibly grant radiance from the inside out.'}
          </p>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'PureBeauty wurde aus einer klaren Vision heraus gegründet: Menschen Produkte zu geben, die nicht nur schön aussehen, sondern sich gut anfühlen – innen wie außen.'
              : 'PureBeauty was created from a clear vision: to give people products that not only look beautiful, but feel good – inside and out.'}
          </p>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Wir wollten eine Pflegeroutine schaffen, die den Alltag veredelt. Ein kleines tägliches Luxusritual, das die Haut stärkt, regeneriert und mit jeder Anwendung ein Stück mehr zum Strahlen bringt. Kosmetik, die den Alterungsprozess sichtbar verlangsamt, verjüngend wirkt und echte Hautlösungen bietet.'
              : 'We wanted to create a care routine that elevates everyday life. A small daily luxury ritual that strengthens, regenerates the skin and makes it shine a little more with each application. Cosmetics that visibly slow down the aging process, have a rejuvenating effect and offer real skin solutions.'}
          </p>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Unsere exklusive Clean & Green Beauty Formel wird mit größter Sorgfalt entwickelt. Jeder Inhaltsstoff ist bewusst ausgewählt, jede Komponente durchdacht – für eine Pflege, die wirksam, rein und nachhaltig ist.'
              : 'Our exclusive Clean & Green Beauty formula is developed with the greatest care. Every ingredient is consciously selected, every component well thought out – for care that is effective, pure and sustainable.'}
          </p>
          
          <div className='border-l-4 border-[oklch(0.52_0.12_195)] pl-6 py-4 my-8 bg-[oklch(0.97_0.02_195)]'>
            <p className='text-gray-900 text-lg font-bold mb-2'>
              {language === 'de'
                ? 'PureBeauty ist mehr als ein Produkt.'
                : 'PureBeauty is more than a product.'}
            </p>
            <p className='text-gray-700 text-lg'>
              {language === 'de'
                ? 'Es ist ein Gefühl.'
                : 'It is a feeling.'}
            </p>
            <p className='text-gray-700 text-lg'>
              {language === 'de'
                ? 'Ein Ritual.'
                : 'A ritual.'}
            </p>
            <p className='text-gray-700 text-lg'>
              {language === 'de'
                ? 'Ein Moment nur für dich und deine Schönheit.'
                : 'A moment just for you and your beauty.'}
            </p>
          </div>
          
          <p className='text-gray-700 text-lg font-bold'>
            {language === 'de'
              ? 'Getreu dem Motto:'
              : 'True to the motto:'}
          </p>
          <p className='text-2xl font-bold text-[oklch(0.52_0.12_195)] italic'>
            &quot;Age doesn&apos;t matter.&quot;
          </p>
          
          <p className='text-gray-700 text-lg italic mt-4'>
            {language === 'de'
              ? 'Mit Liebe entwickelt.'
              : 'Developed with love.'}
          </p>
        </div>

        <div className='space-y-4 pt-8 border-t-2 border-gray-100'>
          <h3 className='text-gray-900 text-xl font-bold'>
            {language === 'de' ? 'KONTAKTIERE UNS' : 'CONTACT US'}
          </h3>
          <p className='text-gray-700 text-lg'>
            {language === 'de'
              ? 'Hast du Fragen oder möchtest du mehr erfahren? Wir sind für dich da.'
              : 'Do you have questions or want to learn more? We are here for you.'}
          </p>
          <address className='text-lg space-y-4 not-italic'>
            <div>
              <p className="font-bold text-gray-900">WhatsApp</p>
              <a
                href='tel:0049015151906996'
                className='text-[oklch(0.52_0.12_195)] hover:text-[oklch(0.45_0.12_195)]'>
                (0049) 015151906996
              </a>
            </div>
            <div>
              <p className="font-bold text-gray-900">E-Mail</p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                className='text-[oklch(0.52_0.12_195)] hover:text-[oklch(0.45_0.12_195)]'>
                {process.env.NEXT_PUBLIC_ADMINEMAIL}
              </a>
            </div>
          </address>
        </div>
      </div>
    </div>
  );
}
