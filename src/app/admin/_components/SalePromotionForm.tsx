'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Label } from '@/components/ui/label';
import { FormEvent, useState, useRef } from 'react';
import { updateSalePromotion } from '../_actions/updateSalePromotion';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function SalePromotionForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const saleName = formData.get('saleName') as string;
    const salePercentage = parseFloat(formData.get('salePercentage') as string);

    if (!startDate || !endDate || !saleName || !salePercentage) {
      toast.error('Bitte fülle alle Felder aus');
      setIsLoading(false);
      return;
    }

    if (startDate >= endDate) {
      toast.error('Startdatum muss vor dem Enddatum liegen');
      setIsLoading(false);
      return;
    }

    const result = await updateSalePromotion({
      salePercentage,
      saleName,
      saleStartDate: startDate.toISOString(),
      saleUntil: endDate.toISOString(),
    });

    setIsLoading(false);

    if (result.success) {
      toast.success('Rabattaktion erfolgreich gespeichert');
      // Clear form
      setStartDate(undefined);
      setEndDate(undefined);
      formRef.current?.reset();
      router.refresh();
    } else {
      toast.error('Fehler beim Speichern der Rabattaktion');
    }
  };

  return (
    <div className='flex flex-col items-center self-start'>
      <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col w-full max-w-lg'>
        <div className='mb-4 p-3 bg-blue-50 border border-blue-200 rounded-md'>
          <p className='text-sm text-blue-800'>
            💡 Die Aktion wird automatisch aktiv, wenn das aktuelle Datum zwischen Start- und Enddatum liegt.
          </p>
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='saleName' className='mb-2'>
            Name der Aktion
          </Label>
          <input
            type='text'
            name='saleName'
            id='saleName'
            placeholder='z.B: WINTER FLASH SALE'
            className='rounded-md border shadow p-2 w-full mb-1'
            required
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label htmlFor='salePercentage' className='mb-2'>
            Rabatt in Prozent
          </Label>
          <input
            type='number'
            name='salePercentage'
            id='salePercentage'
            placeholder='30'
            min='1'
            max='100'
            className='rounded-md border shadow p-2 w-full mb-1'
            required
          />
        </div>

        <div className='mb-4 flex flex-col'>
          <Label className='mb-2'>Startdatum</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline' size='default' className='w-full mb-2'>
                {startDate ? startDate.toLocaleDateString('de-DE') : 'Startdatum auswählen'}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode='single'
                selected={startDate}
                onSelect={setStartDate}
                className='rounded-md border shadow'
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className='mb-4 flex flex-col'>
          <Label className='mb-2'>Enddatum</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline' size='default' className='w-full mb-2'>
                {endDate ? endDate.toLocaleDateString('de-DE') : 'Enddatum auswählen'}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode='single'
                selected={endDate}
                onSelect={setEndDate}
                className='rounded-md border shadow'
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button type='submit' className='w-full' disabled={isLoading}>
          {isLoading ? 'Wird gespeichert...' : 'Speichern'}
        </Button>
      </form>
    </div>
  );
}
