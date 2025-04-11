'use client';
import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageProvider';
import { Loader2 } from 'lucide-react';

function Subscribe() {
  const { language } = useLanguage();
  const inputEl = useRef<HTMLInputElement | null>(null);
  const inputElRep = useRef<HTMLInputElement | null>(null);
  const inputName = useRef<HTMLInputElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const emailIsTheSame = (email: string, repeatEmail: string) => {
    if (email !== repeatEmail) {
      return false;
    } else {
      return true;
    }
  };

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    toast.success('Subscribed!');
    console.log('Subscribed');
    //for now we don't need to send the email to the API - later in Production we need the necessary API Key from Resend to make that work.
    // const emailIsValid = emailIsTheSame(
    //   (inputEl.current?.value ?? '') as string,
    //   (inputElRep.current?.value ?? '') as string
    // );
    // try {
    //   //Send a request to our API with the user's email address.
    //   const res = await fetch('/api/subscribe', {
    //     body: JSON.stringify({
    //       email: inputEl.current?.value,
    //       name: inputName.current?.value,
    //       emailIsValid,
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     method: 'POST',
    //   });
    //   const { msg, error } = await res.json();
    //   if (error) {
    //     toast.error(error);
    //   }
    //   if (msg) {
    //     toast.success(msg);
    //   }

    //   //  Clear the input value and show a success message.
    //   if (inputEl.current) {
    //     inputEl.current.value = '';
    //   }
    //   if (inputElRep.current) {
    //     inputElRep.current.value = '';
    //   }
    //   if (inputName.current) {
    //     inputName.current.value = '';
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <>
      <section>
        <form onSubmit={subscribe} className='bg-white p-8'>
          <h3 className='text-center text-gray-900 mb-4 text-4xl font-semibold'>
            Newsletter
          </h3>
          <div className='bg-cover bg-center rounded-md shadow-xl md:flex grid grid-flow-cols-1 md:items-center justify-center'>
            <div className='w-full p-4 md:p-10'>
              <p className='mb-2 text-base text-gray-900 font-semibold'>
                {language == 'de' ? 'Genießen Sie ' : 'Enjoy '}
                <span className='text-xl text-amber-500'>15 %</span>
                {language == 'de'
                  ? ' Rabatt auf Ihre erste Bestellung'
                  : ' Discount on your first order'}
                <br />
                {language == 'de'
                  ? 'UND ERFAHREN SIE ALS ERSTER'
                  : 'AND BE THE FIRST TO KNOW'}
              </p>
              <ul className='mb-6 text-base text-gray-900 font-semibold'>
                <li>
                  -{' '}
                  {language == 'de'
                    ? 'Einführung neuer Produkte'
                    : 'Introduction to new products'}
                </li>
                <li>
                  -{' '}
                  {language == 'de'
                    ? 'bevorstehende Live-Events'
                    : 'upcoming live-events'}{' '}
                </li>
                <li>
                  -{' '}
                  {language == 'de' ? 'Fachkundige Beratung' : 'Expert advice'}
                </li>
                <li>
                  -{' '}
                  {language == 'de'
                    ? 'Kundenkarte genießen und mit Rabatt einkaufen'
                    : 'Enjoy a loyalty card and shop with a discount'}
                </li>
              </ul>
              <div className='mb-4'>
                <input
                  className='text-base font-inherit text-inherit p-3 rounded border border-gray-300 bg-white bg-opacity-75 w-full block transition-all duration-300 focus:outline-none focus:shadow-lg focus:border-gray-500'
                  id='email-input'
                  name='email'
                  placeholder='E-Mail'
                  ref={inputEl}
                  required
                  type='email'
                />
                {/* <label
                  htmlFor='email-input'
                  className='block mt-2 text-base font-bold ml-4 transition-all duration-300 text-amber-800'>
                  {'E-Mail'}
                </label> */}
              </div>
              <div className='mb-4'>
                <input
                  className='text-base font-inherit text-inherit p-3 rounded border border-gray-300 bg-white bg-opacity-75 w-full block transition-all duration-300 focus:outline-none focus:shadow-lg focus:border-gray-500'
                  id='email-repeat'
                  name='email-rp'
                  placeholder={
                    language == 'de' ? 'E-Mail wiederholen' : 'Repeate E-Mail'
                  }
                  ref={inputElRep}
                  required
                  type='email'
                />
                {/* <label
                  htmlFor='email-repeat'
                  className='block mt-2 text-base font-bold ml-4 transition-all duration-300 text-amber-800'>
                  {'E-Mail wiederholen'}
                </label> */}
              </div>
              <div className='mb-4'>
                <input
                  className='text-base font-inherit text-inherit p-3 rounded border border-gray-300 bg-white bg-opacity-75 w-full block transition-all duration-300 focus:outline-none focus:shadow-lg focus:border-gray-500'
                  id='Name-input'
                  name='name'
                  placeholder='Name'
                  ref={inputName}
                  required
                  type='text'
                />
                {/* <label
                  htmlFor='Name-input'
                  className='block mt-2 text-base font-bold ml-4 transition-all duration-300 text-amber-800'>
                  {'Name'}
                </label> */}
              </div>
              <div className='mt-4 mb-8 text-gray-900 text-sm'>
                <p>
                  {language == 'de'
                    ? '*Kein Spam. Durch Klicken auf " Einschreiben " erklären Sie sich mit den Datenschutzbestimmungen,Haftungsausschlüssen und Nutzungsbedingungen von Miss GlowBeauty einverstanden und gelesen haben. Die Kundenkarte mit attraktiven Konditionen ist nur auf Anfrage bei unseremKundenservice erhältlich.'
                    : 'No spam. By clicking "Subscribe", you agree to and have read Miss GlowBeauty privacy policy, disclaimers, and terms of use. The loyalty card with attractive benefits is only available upon request from our customer service.'}
                </p>
              </div>
              <Button
                type='submit'
                variant='default'
                className='w-full'
                disabled={isLoading}>
                {isLoading && (
                  <Loader2 size={20} className='animate-spin mr-3' />
                )}
                {language == 'de' ? ' Einschreiben' : 'Subscribe'}
              </Button>
            </div>
            <div className='w-full md:pb-4'>
              <Image
                src='/Kundenkarte.jpeg'
                alt='Newsletter'
                width={500}
                height={500}
                className='rounded-md mb-5'
              />
              <Image
                src='/Kundenkarte3.png'
                alt='Newsletter'
                width={500}
                height={500}
                className='rounded-md'
              />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Subscribe;
