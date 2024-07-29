'use client';

import { Button } from '@/components/ui/button';
import { useDiscount } from '@/contexts/DiscountProvider';
import { useState } from 'react';

const CheckDiscount = () => {
  const { discount, setDiscount } = useDiscount();

  const [error, setError] = useState<string | null>(null);

  const deleteDiscount = (id: string) => {
    fetch('/api/discount', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((data) =>
        setDiscount((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((error) => setError(error.message));
  };

  return (
    <div className='flex-col shadow m-2 p-2'>
      <h3>Actuelle Rabattcodes</h3>
      <div className='grid grid-cols-1 gap-4 h-full md:grid-cols-2 lg:grid-cols-3'>
        {error && <p>{error}</p>}
        {discount.length > 0 ? (
          discount.map((discount, index) => (
            <div
              key={index}
              className='flex flex-col shadow  p-4 border border-emerald-100'>
              {/* <p className="shadow-sm p-1 m-1">{discount.id}</p> */}
              <p className=' shadow-sm p-1 m-1'>
                Code: &quot;{discount.code}&quot;
              </p>
              <p className=' shadow-sm p-1 m-1'>
                Rabatt: {discount.discountInPercent}%
              </p>
              <p className=' shadow-sm p-1 m-1'>
                Gültig bis zum:{' '}
                {new Date(discount.expiresAt).toLocaleDateString('de-DE')}
              </p>
              <Button
                variant='destructive'
                className='mt-2'
                onClick={() => deleteDiscount(discount.id)}>
                Löschen
              </Button>
            </div>
          ))
        ) : (
          <div className='flex flex-col shadow m-4 p-4'>
            <h3>Keine Rabattcode vorhanden</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckDiscount;
