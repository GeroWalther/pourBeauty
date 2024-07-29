'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageProvider';
import { useCart } from '@/hooks/use-cart-hook';
import React from 'react';

export default function DiscountCodeInput() {
  const { language } = useLanguage();
  const { setDiscount } = useCart();
  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputValue = e.currentTarget.elements[0] as HTMLInputElement;
    setDiscount(Number(inputValue.value));
  }
  return (
    <form
      onSubmit={submitHandler}
      className='space-y-1-5 text-sm m-5 flex gap-4'>
      <Input
        type='text'
        placeholder={
          language == 'de' ? 'Gutscheincode eingeben' : 'Enter discount code'
        }
        className='border border-pink-300 rounded-md px-3 py-2 w-'
      />
      <Button variant='outline'>
        {language == 'en' ? 'Apply' : 'Anwenden'}
      </Button>
    </form>
  );
}
