import React from 'react';
import {
  productImagesFresh,
  productImagesGlowCreme,
  productImgsLips,
} from '../../../../consts';
import ProdDispComp from './ProdDispComp';

export default function ProductDisplay() {
  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-3 md:-mt-6 gap-6 pb-10 md:mx-2'>
        <ProdDispComp
          name='MAGIC LIPS SERUM'
          productImg={productImgsLips[0]}
          link='/magicLips'
        />
        <ProdDispComp
          name='MAGIC GLOW CREAM'
          productImg={productImagesGlowCreme[0]}
          link='/magicGlow'
        />
        <ProdDispComp
          name='FRESH EYES SERUM'
          productImg={productImagesFresh[0]}
          link='/freshEyes'
        />
      </section>
    </>
  );
}
