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

const FRESHEZESPRICE = 64;

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
          ? 'Ist das Produkt klinisch getested?'
          : 'Is the product clinically tested?',
      answer:
        language == 'de'
          ? 'Ja, das Produkt wurde dermatologisch getestet und ist für die meisten Hauttypen geeignet.'
          : 'Yes, the product has been dermatologically tested and is suitable for most skin types.',
    },
    {
      id: 8,
      question:
        language == 'de'
          ? 'Welchen effekt hat MAGIC LIPS SERUM'
          : 'What effect does MAGIC LIPS SERUM have?',
      answer:
        language == 'de'
          ? 'Das Produkt hat eine aufpolsternde Wirkung auf die Lippen. Nach nur 1 Anwendung sind sofort sichtbar volle Lippen. Es verleiht der Lippenpartie ein volles und definiertes Aussehen und reduziert Rillen und Lippenfältchen. Eine verbesserte Definition der Lippen, ebenfalls wird das natürliche Lippenrot hervorgehoben. Lippen aufpolsternde Wirkung bis zu 78%. Wohlgeformte weiche Lippen.'
          : 'The product has a plumping effect on the lips. Visible full lips after just 1 application. It gives the lip area a full and defined appearance and reduces lip lines and wrinkles. Improved definition of the lips, also enhances the natural lip color. Lip plumping effect up to 78%. Well-shaped soft lips.',
    },
    {
      id: 9,
      question:
        language == 'de'
          ? 'Für wen ist MAGIC LIPS SERUM geeignet?'
          : 'Who is MAGIC LIPS SERUM suitable for?',
      answer:
        language == 'de'
          ? 'MAGIC LIPS SERUM ist eine hilfe für jede Frau, um die hautalterung hinauszuzögern, die Mundpartie zu verfüngen und die lippen zu aufzupolstern.'
          : 'MAGIC LIPS SERUM is a help for every women. To delay skin aging, to shape the mouth area and to plump the lips.',
    },
    {
      id: 10,
      question:
        language == 'de'
          ? 'Welche Inhaltsstoffe sind in MAGIC LIPS SERUM enthalten?'
          : 'What ingredients are in MAGIC LIPS SERUM?',
      answer:
        language == 'de'
          ? 'MAGIC LIPS SERUM besteht aus hoch effektiven biologischen Inhaltsstoffen, die die Lippen bis zu 78% aufpolstern. Die Formel besitzt einen wertvollen Wirkstoffkomplex aus einer 8-fachen Hyaluronsäure, OLIGO-Aminosäuren,Biologischer Senfsprossen extrakt, Vitanin ACE, Wurzel von Baikal-Helmkraut und eclipta prostrata ( die verjüngend wirkt und den Alterungsprozess verlangsamt) und ecologischer Aloe Vera. Diese Inhaltsstoffe sorgen für eine intensive Lippenaufpolsterung, Lippeneuchtigkeit und Pflege der Lippen nach nur einer Anwendung.'
          : 'MAGIC LIPS SERUM consists of highly effective organic ingredients that plump the lips up to 78%. The formula has a valuable active ingredient complex of an 8-fold hyaluronic acid, OLIGO amino acids, purified extract of organic mustard sprouts, Vitanin ACE, root of Baikal skullcap and eclipta prostrata (which has a rejuvenating effect and slows down the aging process) and ecological aloe vera. These ingredients provide intensive lip plumping, lip moisture and lip care after just one application.',
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
                Miss Glow Beauty
              </span>
            </div>
          </div>

          <section className='mt-4'>
            <div className='flex items-center'>
              <p className='font-medium text-stone-900 text-xl'>
                {formatCurrency(FRESHEZESPRICE)}
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
              <ul className='list-disc ml-5'>
                <li className='text-lg text-muted-foreground'>
                  {language == 'de'
                    ? '78% Aufpolsternde Wirkung auf die Lippen'
                    : '78% Plumping effect on the lips'}
                </li>
                <li className='text-lg text-muted-foreground'>
                  {language == 'de'
                    ? 'Nach nur 1 Anwendung sofort sichtbar volle Lippen'
                    : 'Visible full lips after just 1 application'}
                </li>
                <li className='text-lg text-muted-foreground'>
                  {language == 'de'
                    ? 'Verleiht der Lippenpartie ein volles und definiertes Aussehen'
                    : 'Gives the lip area a full and defined appearance'}
                </li>
                <li className='text-lg text-muted-foreground'>
                  {language == 'de'
                    ? 'Reduziert Rillen und Lippenfältchen'
                    : 'Reduces lip lines and wrinkles'}
                </li>
                <li className='text-lg text-muted-foreground'>
                  {language == 'de'
                    ? 'Eine verbesserte Definition der Lippen, ebenfalls wird das natürliche Lippenrot'
                    : 'Improved definition of the lips, also enhances the natural lip color'}
                </li>
              </ul>
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
                  price: FRESHEZESPRICE,
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
