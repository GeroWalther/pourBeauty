'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { formatCurrency } from '@/lib/formatters';
import { StarFilledIcon } from '@radix-ui/react-icons';
import AddToCartButton from './AddToCartButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type pType = {
  id: string;
  name: string;
  price: number;
  priceBeforeDiscount: number;
  description: string;
  productImgs: string[];
  productLink: string;
};

const ProductInfo = ({
  id,
  name,
  price,
  priceBeforeDiscount,
  description,
  productImgs,
  productLink,
}: pType) => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <section id='shop' className='py-20'>
      <div className='w-[89%] m-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-2 items-center md:gap-10'>
        {/* LEFT SIDE */}
        <div className='flex md:gap-4 items-center mr-2 -mb-10 md:mb-0'>
          <div className='flex flex-col gap-4 -mr-2'>
            {productImgs.map((img: string, i: number) => (
              <Image
                key={i}
                src={img}
                width={100}
                height={100}
                alt='product image'
                onClick={() => setCurrImg(i)}
                className='rounded-md cursor-pointer'
              />
            ))}
          </div>
          <div className='flex items-center'>
            <motion.div
              initial={{ opacity: 0, y: 0, x: -100, scale: 0.5 }}
              animate={{
                opacity: 1,
                y: 0,
                x: 20,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              key={currImg}>
              <Image
                src={productImgs[currImg]}
                width={480}
                height={480}
                alt='main product image'
                className='rounded-md'
              />
            </motion.div>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className='text-center flex flex-col items-center px-10 md:mt-0 mt-12'>
          <h2 className='text-3xl font-bold text-dark mb-5'>{name}</h2>
          <div className='flex gap-1 text-yellow-400 justify-center items-center mb-5'>
            <StarFilledIcon width={25} height={25} />
            <StarFilledIcon width={25} height={25} />
            <StarFilledIcon width={25} height={25} />
            <StarFilledIcon width={25} height={25} />
            <StarFilledIcon width={25} height={25} />
            <span>(5.0)</span>
          </div>
          <div className='mb-5 flex items-center'>
            <span className='text-2xl font-semibold mr-3 text-dark'>
              {formatCurrency(price)}
            </span>
            <span className='text-gray-400 line-through'>
              {formatCurrency(priceBeforeDiscount)}
            </span>
          </div>
          <p className='mb-5'>{description}</p>
          <div className='flex justify-center items-center gap-5'>
            {/* Add to Cart / Product link */}
            <div className='mt-10'>
              <Link href={productLink}>
                <Button>Shop</Button>
              </Link>
              {/* <AddToCartButton
                product={{
                  id,
                  name,
                  price,
                  image: productImgs[0],
                  quantity: 1,
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
