'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageProvider';

// Products data
const products = [
  {
    id: '1',
    name: 'POUR BEAUTY BIOLOGICAL Magic Glow',
    description: 'Our signature beauty product for a radiant glow.',
    price: 89,
    image: '/512-1.jpg',
    slug: 'magicGlow',
  },
  {
    id: '2',
    name: 'POUR BEAUTY BIOLOGICAL Magic Lips',
    description: 'Hydrating lip treatment for soft, plump lips.',
    price: 40,
    image: '/512-2.jpg',
    slug: 'magicLips',
  },
  {
    id: '3',
    name: 'POUR BEAUTY BIOLOGICAL Magic Elixir',
    description: 'Advanced formula for youthful, rejuvenated skin.',
    price: 65,
    image: '/missglowlogo.png',
    slug: 'magicElixir',
  },
  {
    id: '4',
    name: 'POUR BEAUTY BIOLOGICAL Fresh Eyes',
    description: 'Intensive treatment mask for deep hydration.',
    price: 55,
    image: '/missglowlogo.png',
    slug: 'freshEyes',
  },
];

export default function ShopPage() {
  const { language } = useLanguage();

  return (
    <div className='container mx-auto py-12 px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600'>
        {language === 'de' ? 'Unsere Produkte' : 'Our Products'}
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {products.map((product) => (
          <div
            key={product.id}
            className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300'>
            <div className='relative h-64 w-full'>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className='object-cover'
              />
            </div>

            <div className='p-6'>
              <h2 className='text-xl font-semibold text-gray-800 mb-2'>
                {product.name}
              </h2>
              <p className='text-gray-600 mb-4'>{product.description}</p>
              <div className='flex justify-between items-center'>
                <span className='text-pink-600 font-bold text-lg'>
                  €{product.price}
                </span>
                <Link href={`/${product.slug}`}>
                  <Button className='bg-pink-500 hover:bg-pink-600 text-white'>
                    {language === 'de' ? 'Produkt anzeigen' : 'View Product'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
