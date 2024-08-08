'use client';
import { useCart } from '@/hooks/use-cart-hook';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageProvider';

export default function AddToCartButton({ product }: { product: any }) {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { language } = useLanguage();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  return (
    <Button
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
      size='lg'
      className='w-full'>
      {isSuccess && language === 'de' && 'Hinzugefügt!'}
      {!isSuccess && language === 'de' && 'In den Warenkorb'}{' '}
      {isSuccess && language === 'en' && 'Added!'}
      {!isSuccess && language === 'en' && 'Add to Cart'}
    </Button>
  );
}
