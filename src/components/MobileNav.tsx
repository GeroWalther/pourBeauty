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
          className='flex flex-col bg-pink-500'>
          <ScrollArea>
            <nav className='grid gap-6 text-lg font-medium'>
              <div className='flex items-center mb-2'>
                <div className='bg-pink-700 p-5 rounded-md'>
                  <Cart />
                </div>
              </div>
              <Link
                onClick={() => setOpen(false)}
                href='/'
                className='flex items-center rounded-xl text-white hover:text-foreground'>
                <span>{language == 'de' ? 'Start' : 'Home'}</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/magicLips'
                className='flex items-center rounded-xl  text-white text-muted-foreground hover:text-foreground'>
                <span>MAGIC LIPS SERUM</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/freshEyes'
                className='flex items-center rounded-xl  text-white text-muted-foreground hover:text-foreground'>
                <span>FRESH EYES SERUM</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/magicGlow'
                className='flex items-center rounded-xl  text-white text-muted-foreground hover:text-foreground'>
                <span>MAGIC GLOW CREAM</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/magicElixir'
                className='flex items-center rounded-xl  text-white text-muted-foreground hover:text-foreground'>
                <span>MAGIC ELIXIR</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/faceCleanser'
                className='flex items-center rounded-xl  text-white text-muted-foreground hover:text-foreground'>
                <span>FACE CLEANSER</span>
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href='/betoxserum'
                className='flex items-center rounded-xl  text-white text-muted-foreground hover:text-foreground'>
                <span>BETOX SERUM</span>
              </Link>

              <Link
                onClick={() => setOpen(false)}
                href='/about'
                className='flex  text-white  items-center rounded-xl text-muted-foreground hover:text-foreground'>
                <span>{language == 'de' ? 'Über uns' : 'About'}</span>
              </Link>
              <div>{children}</div>
            </nav>
            <SheetFooter className='mt-10 bg-pink-300 flex rounded-full justify-center'>
              <Image
                src='/missglowlogo.png'
                width={250}
                height={50}
                alt='logo'
                className=' mt-1 -mb-10'
              />
            </SheetFooter>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
