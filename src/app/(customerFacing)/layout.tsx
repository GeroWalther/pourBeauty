import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageProvider';
import { SaleProvider } from '@/contexts/SaleProvider';
import { Toaster } from 'sonner';

import { Footer } from './_components/components/footer';
import SaleBanner from './_components/SaleBanner';
import { Header } from './_components/components/header';

export const dynamic = 'force-dynamic';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <SaleProvider>
        <div className='min-h-screen flex flex-col'>
          <SaleBanner />
          <Header />
          <main className='flex-1'>
            {children}
          </main>
          <Footer />
          <Toaster position='top-center' richColors />
        </div>
      </SaleProvider>
    </LanguageProvider>
  );
}
