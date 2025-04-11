'use client';
import React, { ReactNode, useState } from 'react';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from './ui/scroll-area';
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import Cart from '@/app/(customerFacing)/_components/Cart';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageProvider';
import { PRIMARYBUTTONCOLOR } from '../../consts';

export default function MobilNav({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  return (
    <div>
      <Sheet open={open}>
        <SheetTrigger asChild>
          <Button
            onClick={() => setOpen((p) => !p)}
            variant='outline'
            size='icon'
            className='shrink-0 md:hidden'>
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle mobile navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          setOpen={setOpen}
          side='left'
          className='flex flex-col bg-white text-black'>
          <ScrollArea>
            <nav className='grid gap-6 text-lg font-extralight tracking-widest'>
              <div className='flex items-center mb-2'>
                <div
                  className={`bg-white border border-[${PRIMARYBUTTONCOLOR}] p-5 rounded-md`}>
                  <Cart />
                </div>
              </div>
              <Link
                onClick={() => setOpen(false)}
                href='/'
                className={`flex items-center rounded-xl text-black hover:text-[${PRIMARYBUTTONCOLOR}] transition-colors`}>
                <span>{language == 'de' ? 'START' : 'HOME'}</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/shop'
                className={`flex items-center rounded-xl text-black hover:text-[${PRIMARYBUTTONCOLOR}] transition-colors`}>
                <span>SHOP</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/about'
                className={`flex items-center rounded-xl text-black hover:text-[${PRIMARYBUTTONCOLOR}] transition-colors`}>
                <span>{language == 'de' ? 'ÜBER UNS' : 'ABOUT'}</span>
              </Link>
              <div>{children}</div>
            </nav>
            <SheetFooter className='mt-10 flex justify-center'>
              <Image
                src='/missglowlogo.png'
                width={250}
                height={50}
                alt='logo'
                className='mt-1 -mb-10 opacity-90 filter invert'
              />
            </SheetFooter>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
