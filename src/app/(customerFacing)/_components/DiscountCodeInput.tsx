import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageProvider';
import React from 'react';

export default function DiscountCodeInput() {
  const { language } = useLanguage();
  return (
    <div className='space-y-1-5 text-sm m-5'>
      <Input
        type='text'
        placeholder={
          language == 'de' ? 'Gutscheincode eingeben' : 'Enter discount code'
        }
        className='border border-pink-300 rounded-md px-3 py-2 w-'
      />
    </div>
  );
}
