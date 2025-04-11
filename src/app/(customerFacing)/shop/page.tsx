'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageProvider';
import {
  PRODUCTS,
  PRIMARYBUTTONCOLOR,
  HOVERBUTTONCOLOR,
} from '../../../../consts';

// Define product type
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  slug: string;
  quantity: number;
};

export default function ShopPage() {
  const { language } = useLanguage();

  return (
    <div className='container mx-auto py-12 px-4'>
      <h1 className='text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800'>
        {language === 'de'
          ? 'Premium Naturkosmetik'
          : 'Premium Nature Cosmetics'}
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {PRODUCTS.map((product: Product) => (
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
                <span
                  className={`text-[${PRIMARYBUTTONCOLOR}] font-bold text-lg`}>
                  €{product.price}
                </span>
                <Link href={`/${product.slug}`}>
                  <Button className='bg-amber-200 hover:bg-amber-300 text-black'>
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
