'use client';
import React from 'react';
import ImageSlider from '../_components/ImageSlider';
import MaxWidthWrapper from '../_components/MaxWidthWrapper';

import { Check, Shield } from 'lucide-react';
import { formatCurrency } from '@/lib/formatters';
import { ShareLink } from '../_components/ShareLink';

import AddToCartButton from '../_components/AddToCartButton';
import FAQComponent from '@/components/components/homepage/FAQComp';
import { useLanguage } from '@/contexts/LanguageProvider';
import Image from 'next/image';

const productImages = ['/512-1.jpg', '/512-2.jpg', '/512.jpg'];

export default function MagicLipshopSite() {
  const { language } = useLanguage();
  const questions = [
    {
      id: 5,
      question:
        language == 'de'
          ? 'Wie lange hält das Produkt?'
          : 'How long does the product last?',
      answer:
        language == 'de'
          ? 'Die Haltbarkeit des Produkts beträgt 12 Monate nach dem Öffnen.'
          : 'The product has a shelf life of 12 months after opening.',
    },
    {
      id: 6,
      question:
        language == 'de'
          ? 'Ist das Produkt tierversuchsfrei?'
          : 'Is the product cruelty-free?',
      answer:
        language == 'de'
          ? 'Ja, das Produkt ist tierversuchsfrei und vegan.'
          : 'Yes, the product is cruelty-free and vegan.',
    },
    {
      id: 7,
      question:
        language == 'de'
          ? 'Gibt es eine Geld-zurück-Garantie?'
          : 'Is there a money-back guarantee?',
      answer:
        language == 'de'
          ? 'Ja, wir bieten eine 30-tägige Geld-zurück-Garantie.'
          : 'Yes, we offer a 30-day money-back guarantee.',
    },
    {
      id: 8,
      question:
        language == 'de'
          ? 'Allergische Reaktionen bekannt?'
          : 'Can it cause allergic reactions?',
      answer:
        language == 'de'
          ? 'Das Produkt wurde dermatologisch getestet und ist für die meisten Hauttypen geeignet. Es kann jedoch bei empfindlicher Haut allergische Reaktionen hervorrufen. Wir empfehlen einen Patch-Test vor der Anwendung.'
          : 'The product has been dermatologically tested and is suitable for most skin types. However, it can cause allergic reactions in sensitive skin. We recommend a patch test before use.',
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 -mt-10 md:mt-0 lg:grid lg:grid-cols-2 lg:max-w-7xl lg:gap-x-8 lg:px-8'>
        {/* product details */}
        <div className='lg:max-w-lg lg:self-end'>
          <div className='mt-4'>
            <h1 className='text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl'>
              Fresh Eyes Serum
            </h1>
            <div className='flex gap-3 mt-6 items-center'>
              <p className='text-lg text-muted-foreground'>
                {language == 'de' ? 'Hersteller' : 'Manufactured by'}
              </p>
              <span className='text-xl text-muted-foreground font-semibold'>
                Miss Glow Beauty GMBH.
              </span>
            </div>
          </div>

          <section className='mt-4'>
            <div className='flex items-center'>
              <p className='font-medium text-stone-900 text-xl'>
                {formatCurrency(89)}
              </p>

              <div className='ml-4 border-l text-muted-foreground border-stone-300 pl-4'>
                <p className='text-lg font-medium'>
                  {language == 'de' ? 'Auf Lager' : 'In stock'}
                </p>
                <p className='text-lg font-medium'>30ml</p>
                <p className='text-lg font-medium'>
                  {language == 'de'
                    ? 'Wird in 1-2 Wochen versendet.'
                    : 'Will be shipped in 1-2 weeks.'}
                </p>
              </div>
            </div>

            <div className='mt-4 space-y-6'>
              <p className='text-lg text-muted-foreground'>
                {language == 'de'
                  ? 'Beschreibung für ein kosmetisches Lippenprodukt.'
                  : 'Description for a cosmetic lip product.'}
              </p>
            </div>

            <div className='mt-6 flex items-center'>
              <Check
                aria-hidden='true'
                className='h-6 w-6 flex-shrink-0 text-green-500'
              />
              <p className='ml-2 text-lg text-muted-foreground'>
                {language == 'de' ? 'Lieferbar' : 'Can be shipped'}
              </p>
            </div>
          </section>
        </div>

        {/* product images */}
        <div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center mb-10'>
          <div className='aspect-square rounded-lg'>
            <ImageSlider urls={productImages} alt={`produkt bilder`} />
          </div>
        </div>

        {/* add to cart part */}
        <div className='mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
          <div>
            <ShareLink
              link={`${process.env.NEXT_PUBLIC_SERVER_URL}/freshEyes`}
            />
            <div className='mt-10'>
              <AddToCartButton
                product={{
                  id: '3',
                  name: 'Fresh Eyes Serum',
                  price: 89,
                  image: '/512-1.jpg',
                  quantity: 1,
                }}
              />
            </div>
            <div className='mt-6 text-center'>
              <div className='group inline-flex text-lg text-medium'>
                <Shield
                  aria-hidden='true'
                  className='mr-2 h-6 w-6 flex-shrink-0 text-stone-400'
                />
                <span className=' text-sm text-muted-foreground hover:text-stone-700'>
                  {language == 'de'
                    ? 'Kunden Service Rund um die Uhr erreichbar unter'
                    : 'Customer Service available 24/7 at '}
                  <br /> E-Mail : {process.env.NEXT_PUBLIC_ADMINEMAIL}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQComponent questions={questions} />

      {/* More images and Product description */}
      <div className='md:px-10 md:pb-20 pb-5'>
        <h4 className=' text-stone-800 font-semibold'>
          {language == 'de' ? 'Produktbeschreibung' : 'Product description'}
        </h4>
        {/* <p className=' text-stone-700'>
          {language == 'de'
            ? 'Ein hochwertiges Lippenprodukt, das speziell für einen glamourösen Look entwickelt wurde. Es bietet langanhaltende Farbe, intensive Feuchtigkeit und ein angenehmes Tragegefühl. Die einzigartige Formel sorgt für volle und geschmeidige Lippen, während sie gleichzeitig pflegt und schützt. Perfekt für jeden Anlass und jede Stimmung!'
            : 'A high-quality lip product designed specifically for a glamorous look. It provides long-lasting color, intense moisture, and a comfortable feel. The unique formula ensures full and smooth lips while nourishing and protecting. Perfect for any occasion and mood!'}
        </p> */}
        <Image
          src='/lipdescr1.png'
          width={1000}
          height={1000}
          alt='description image 1'
        />
        <Image
          src='/lipdescr2-png.png'
          width={1000}
          height={1000}
          alt='description image 2'
        />
      </div>
    </MaxWidthWrapper>
  );
}
