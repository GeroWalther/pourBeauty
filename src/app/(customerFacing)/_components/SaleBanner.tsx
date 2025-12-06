'use client';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageProvider';
import { useSale } from '@/contexts/SaleProvider';

export default function SaleBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const { isActive, salePercentage, saleName, saleUntil } = useSale();
  const { language } = useLanguage();
  if (!isVisible || !isActive ) return null;

  // Format the date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'de') {
      return date.toLocaleDateString('de-DE', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric' 
      });
    }
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className='relative bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400 text-white py-3 px-4 shadow-lg z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-center gap-2 text-center'>
        <div className='flex flex-col md:flex-row items-center gap-1 md:gap-2 text-sm md:text-base font-semibold'>
          <span className='animate-pulse'>🔥</span>
          <span>{saleName}</span>
          <span className='hidden md:inline'>•</span>
          <span className='text-lg md:text-xl font-bold'> - {salePercentage}% OFF</span>
          <span className='hidden md:inline'>•</span>
          <span className='text-xs md:text-sm font-normal'>
            {language === 'de' ? 'Bis' : 'Until'} {formatDate(saleUntil)}
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className='absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded-full transition-colors'
          aria-label='Close banner'
        >
          <X className='w-4 h-4 md:w-5 md:h-5' />
        </button>
      </div>
    </div>
  );
}
