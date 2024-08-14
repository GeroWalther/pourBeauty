'use client';
import { useLanguage } from '@/contexts/LanguageProvider';
import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { galleryImages } from '../../../../consts';

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const testimonials = [
    {
      img: '/lippe.png',
      alt: 'Hannah Photo',
      text:
        language == 'de'
          ? 'Ich habe MissGlow für die ganze Familie und es spart so viel Zeit! Außerdem ist alles biologisch und vegan und ohne Plastik.'
          : 'I have MissGlow for the whole family and it saves so much time! Plus everything is organic and vegan and without plastic.',
      name: 'Hannah',
    },
    {
      img: '/lippe.png',
      alt: 'Tatiana Photo',
      text:
        language == 'de'
          ? 'Eine großartige Erfahrung! Die Produkte sind von hoher Qualität und haben meine Haut verbessert.'
          : 'A great experience! The products are of high quality and have improved my skin.',
      name: 'Tatiana',
    },
    {
      img: '/lippe.png',
      alt: 'Heidi Photo',
      text:
        language == 'de'
          ? 'Ich bin begeistert von den Kosmetikprodukten! Sie sind effektiv und haben meine Hautprobleme gelöst.'
          : 'I am thrilled with the cosmetics! They are effective and have solved my skin problems.',
      name: 'Heidi',
    },
    {
      img: '/lippe.png',
      alt: 'Sabine Photo',
      text:
        language == 'de'
          ? 'Die Kosmetikprodukte von Miss Glow Beauty sind fantastisch! Sie haben meine Haut zum Strahlen gebracht und ich fühle mich großartig.'
          : 'The cosmetics from Miss Glow Beauty are fantastic! They have made my skin glow and I feel great.',
      name: 'Sabine',
    },
  ];
  return (
    <section id='Test' className='bg-pink-200 grid items-center'>
      <div className='p-8 md:p-14'>
        <div className='text-center mb-12'>
          <span className='text-lg text-stone-700 font-semibold'>
            {language == 'de' ? 'Was Kunden sagen.' : 'What our customers say.'}
          </span>
          <h2 className='text-4xl text-stone-700 font-bold mt-2 mb-12'>
            {language == 'de'
              ? 'Unsere Kunden sind schon überzeugt.'
              : 'Our customers are already convinced.'}
          </h2>
        </div>
        <div className='grid md:grid-cols-4 gap-y-5 md:gap-y-12 md:gap-x-5'>
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className='bg-white px-2 pb-2 rounded-lg shadow-xl'>
              <div className='flex justify-center items-center gap-5'>
                <blockquote className='text-gray-700 text-lg leading-normal mt-10 self-end'>
                  <QuoteIcon className='-mt-8' />
                  {testimonial.text}
                </blockquote>
              </div>
              <p className='text-lg text-gray-500'>
                &mdash; {testimonial.name}
              </p>
            </figure>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 p-4'>
        {galleryImages.map((src, index) => (
          <figure key={index} className='overflow-hidden'>
            <Image
              src={src}
              alt='Photo of beautifully arranged food'
              width={100}
              height={100}
              className='w-full transition-transform duration-300 transform hover:scale-110 rounded-md'
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
