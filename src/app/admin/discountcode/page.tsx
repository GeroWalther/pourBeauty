import React from 'react';
import { Card } from '../../../components/ui/card';
import { DiscountProvider } from '../../../contexts/DiscountProvider';
import { getDiscounts } from '../_actions/getDiscounts';
import CheckDiscount from '../_components/CheckDiscount';
import { AddtDiscount } from '../_components/DiscountComponent';

export default async function DiscountPage() {
  const getAllDiscounts = await getDiscounts();
  return (
    <section>
      <h3 className='text-lg w-80 mb-2 text-left'>
        Richte hier einen neuen Rabattcode ein. Wähle ein Datum aus, um den
        Gutschein zeitlich zu begrenzen.
      </h3>
      <Card className='mb-4 p-5 flex-col md:flex gap-4'>
        <DiscountProvider discountDetails={getAllDiscounts}>
          <AddtDiscount />
          <CheckDiscount />
        </DiscountProvider>
      </Card>
    </section>
  );
}
