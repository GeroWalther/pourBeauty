import { Quote, QuoteIcon, TextQuoteIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const testimonials = [
  {
    img: '/lippe.png',
    alt: 'Foto von Kundin Hannah Smith',
    text: 'Ich habe MissGlow für die ganze Familie und es spart so viel Zeit! Außerdem ist alles biologisch und vegan und ohne Plastik.',
    name: 'Hannah',
  },
  {
    img: '/lippe.png',
    alt: 'Tatiana',
    text: 'Eine großartige Erfahrung! Die Produkte sind von hoher Qualität und haben meine Haut verbessert.',
    name: 'Tatiana',
  },
  {
    img: '/lippe.png',
    alt: 'Heidi',
    text: 'Ich bin begeistert von den Kosmetikprodukten! Sie sind effektiv und haben meine Hautprobleme gelöst.',
    name: 'Heidi',
  },
  {
    img: '/lippe.png',
    alt: 'Foto von Kundin Sabine',
    text: 'Die Kosmetikprodukte von Miss Glow Beauty sind fantastisch! Sie haben meine Haut zum Strahlen gebracht und ich fühle mich großartig.',
    name: 'Sabine',
  },
];

const galleryImages = [
  '/512-1.jpg',
  '/512-2.jpg',
  '/Kundenkarte.jpeg',
  '/lippe.png',
  '/Kundenkarte2.jpeg',
  '/newsletter.webp',
  '/512-1.jpg',
  '/512-2.jpg',
  '/Kundenkarte.jpeg',
  '/lippe.png',
  '/Kundenkarte2.jpeg',
  '/newsletter.webp',
];

const TestimonialsSection = () => {
  return (
    <section id='Test' className='bg-pink-200 grid items-center'>
      <div className='p-8 md:p-24'>
        <div className='text-center mb-12'>
          <span className='text-lg text-stone-700 font-semibold'>
            Was Kunden sagen.
          </span>
          <h2 className='text-4xl text-stone-700 font-bold mt-2 mb-12'>
            Unsere Kunden sind schon überzeugt.
          </h2>
        </div>
        <div className='grid md:grid-cols-2 gap-y-5 md:gap-y-12 md:gap-x-20'>
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className='bg-yellow-100 p-6 rounded-lg shadow-xl'>
              <div className='flex justify-center items-center gap-5'>
                <Image
                  className='w-16 h-16 rounded-full mb-4 -mt-20'
                  alt={testimonial.alt}
                  src={testimonial.img}
                  width={100}
                  height={100}
                />
                <blockquote className='text-gray-700 mb-4 text-lg leading-normal mt-10 self-end'>
                  <QuoteIcon />
                  {testimonial.text}
                </blockquote>
              </div>
              <p className='text-lg text-gray-500 ml-20'>
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
