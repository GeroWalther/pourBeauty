'use client';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useDiscount } from '@/contexts/DiscountProvider';
import { FormEvent, useState } from 'react';

export function AddtDiscount() {
  const { setDiscount } = useDiscount();
  const [date, setDate] = useState<Date | undefined>();
  const [error, setError] = useState<string | undefined>();
  // const [data, setData] = useState<string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const code = data.code;
    const amount = data.amount;
    // console.log('DATA: ', data.code, data.amount);

    if (!date || !code || !amount) {
      alert('Please select a date');
      return;
    }

    fetch('/api/discount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, date, amount }),
    })
      .then((response) => response.json())
      .then((data) => {
        setDiscount((prev) => [...prev, data.discount]);
      })
      .catch((error) => setError('An error occurred while creating discount'));
  };
  // console.log('DATE: ', date);

  return (
    <div className='flex flex-col items-center self-start mb-10'>
      <form onSubmit={handleSubmit} className='flex flex-col '>
        {/* <p>{data}</p> */}
        <div className='mb-4 flex flex-col'>
          <label htmlFor='code' className='mb-2'>
            Rabattcode
          </label>
          <input
            type='text'
            name='code'
            placeholder='z.B: SOMMER30'
            className='rounded-md border shadow p-2 w-80 mb-1'
          />
        </div>
        <div className='mb-4 flex flex-col'>
          <label htmlFor='amount' className='mb-2'>
            Rabatt in Prozent
          </label>
          <input
            type='number'
            name='amount'
            placeholder='30 (%)'
            className='rounded-md border shadow p-2 w-80 mb-1'
          />
        </div>
        <div className='mb-4 flex flex-col'>
          <label className='mb-2'>Ablaufdatum</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant='outline' size='default' className='w-80 mb-2' type='button'>
                {date ? date.toLocaleDateString('de-DE', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                }) : 'Datum auswählen'}
              </Button>
            </PopoverTrigger>
            <PopoverContent align='start' className='w-auto p-0'>
              <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
              />
            </PopoverContent>
          </Popover>
          {date && (
            <p className='text-sm text-gray-600 mt-1'>
              Gewählt: {date.toLocaleDateString('de-DE', {
                weekday: 'long',
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          )}
        </div>
        <Button type='submit' className='w-80 mb-2'>
          Einrichten
        </Button>
        {error && <p className='text-red-700'>{error}</p>}
      </form>
    </div>
  );
}
