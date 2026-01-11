'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import Image from 'next/image';
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
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Wir die Gründer von PURE BEAUTY BIOLOGICAL denken Kosmetik und Schönheit neu, als Teil der Gesundheit wird Schönheit heute verstanden.'
              : 'We, the founders of PURE BEAUTY BIOLOGICAL, rethink cosmetics and beauty, beauty is now understood as part of health.'}
          </p>

          <h3 className='text-gray-900 text-2xl font-bold'>
            {language === 'de'
              ? 'SCHÖNHEIT BEDEUTET GESUNDHEIT'
              : 'BEAUTY MEANS HEALTH'}
          </h3>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Schönheit als Teil der Gesundheit, statt nur "schön auszusehen" geht es um sichtbares Wohlbefinden.'
              : 'Beauty as part of health, instead of just "looking good" it is about visible well-being.'}
          </p>

          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Was heisst das konkret? Die Haut und die Haare gelten als die zugänglichen BIOMARKER des Körpers, PURE BEAUTY BIOLOGICAL hat sich auf die PRÄVENTION, ANTI-AGING und BEAUTY LONGEVITY spezialisiert um die Hautalterung gezielt hinaus zu zögern.'
              : 'What does that mean concretely? The skin and hair are considered the accessible BIOMARKERS of the body, PURE BEAUTY BIOLOGICAL specializes in PREVENTION, ANTI-AGING and BEAUTY LONGEVITY to specifically delay skin aging.'}
          </p>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Mit smarter persönlichen Pflegeroutine länger die Jugendlichkeit beizubehalten, nicht nur zu pflegen sondern natürlich zu transformieren.'
              : 'With a smart personal care routine to maintain youthfulness longer, not just to care for but to naturally transform.'}
          </p>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Sensorische Erlebnisse, sind das neue Luxusgut für die Haut. Eine Kombination aus medizinischen Heilpflanzen, Longevity Inhaltsstoffen und die Meerestherapie Thalassa vereinen einen BEAUTY COCKTAIL für die Hautzellen und ihre Jugend.'
              : 'Sensory experiences are the new luxury good for the skin. A combination of medicinal healing plants, longevity ingredients and the sea therapy Thalassa unite a BEAUTY COCKTAIL for the skin cells and their youth.'}
          </p>
          
          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'Die HAUT und das WOHLBEFINDEN partizipieren von der Nachhaltigkeit der natürlichen Wirkstoffe, jedes einzelne Produkt aus unserer Pure Beauty Biological Linie besitzt eine intensive Zell verjüngende Eigenschaft, selbst auf die sensible Haut wurde bei dieser Linie geachtet, so das auch eine zu Rötungen neigende Haut eine hervorragende Hautpflege und Wohlbefinden erhält.'
              : 'The SKIN and the WELL-BEING benefit from the sustainability of the natural active ingredients, each individual product from our Pure Beauty Biological line has an intensive cell rejuvenating property, even sensitive skin has been taken into account in this line, so that even skin prone to redness receives excellent skin care and well-being.'}
          </p>
          
          <div className='border-l-4 border-[oklch(0.52_0.12_195)] pl-6 py-4 my-8 bg-[oklch(0.97_0.02_195)]'>
            <p className='text-gray-900 text-lg font-bold mb-4'>
              {language === 'de'
                ? 'CLEAN BEAUTY ist in unserer Pure Beauty Biological Linie selbstverständlich, grossen Wert legen wir auf Sicherheit, Transparenz, hochwertige Natürliche Wirkstoffe, belegbare Studien.'
                : 'CLEAN BEAUTY is a matter of course in our Pure Beauty Biological line, we place great value on safety, transparency, high-quality natural active ingredients, and verifiable studies.'}
            </p>
            <p className='text-gray-900 text-lg font-semibold mb-2'>
              {language === 'de'
                ? 'Wir verzichten auf:'
                : 'We avoid:'}
            </p>
            <ul className='text-gray-700 text-lg space-y-2 list-disc list-inside'>
              <li>
                {language === 'de'
                  ? 'Bedenkliche Inhaltsstoffe, wie Mineralöl, Parabene, Silikone, etc. und auf chemische Konservierungsstoffe'
                  : 'Questionable ingredients such as mineral oil, parabens, silicones, etc. and chemical preservatives'}
              </li>
              <li>
                {language === 'de'
                  ? 'Keine Tierversuche, bei der Verpackung achten wir auf Sicherheitsbewertungen und Chemiefreie nachhaltige Verpackungen'
                  : 'No animal testing, we pay attention to safety assessments and chemical-free sustainable packaging'}
              </li>
            </ul>
          </div>

          <p className='text-gray-700 text-lg leading-relaxed'>
            {language === 'de'
              ? 'SCHÖNHEIT ist ein Teil ganzheitlicher Gesundheit, Pure Beauty Biological ist nicht nur PFLEGE, es sind Produkte mit echtem Wirkstoff nutzen, SKINCARE FIRST Philosophie, Echter GLOW entsteht durch eine gestärkte Hautbarriere und mit echter Wirkstoffpflege entsteht die Transformation, die Jugendlichkeit bewahrt.'
              : 'BEAUTY is part of holistic health, Pure Beauty Biological is not just CARE, these are products with real active ingredient benefits, SKINCARE FIRST philosophy, Real GLOW comes from a strengthened skin barrier and with real active ingredient care, transformation occurs that preserves youthfulness.'}
          </p>
          
          <p className='text-2xl font-bold text-[oklch(0.52_0.12_195)] italic text-center mt-8'>
            PURE BEAUTY BIOLOGICAL<br />
            Naturally Pure, Naturally Beautiful
          </p>
        </div>

          <div className='flex flex-col md:flex-row justify-between items-center -mt-4'>
        <div className='space-y-4 pt-8 border-t-2 border-gray-100 '>
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
          <Image
            src='/purenature.png'
            alt='Pure Nature Logo'
            width={300}
            height={200}
            className='md:mt-20 mt-10'/>
        </div>
      </div>
    </div>
  );
}
