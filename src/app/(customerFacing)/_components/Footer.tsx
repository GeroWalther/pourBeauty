'use client';
import FaceBookIcon from '@/components/svg/FacebookIcon';
import InstagramIcon from '@/components/svg/InstagramIcon';
import TikTokIcon from '@/components/svg/TikTokIcon';
import { useLanguage } from '@/contexts/LanguageProvider';
import Link from 'next/link';
import React from 'react';
import { PRIMARYBUTTONCOLOR } from '../../../../consts';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <p className='text-lg font-light tracking-wide mb-6'>
            PURE BEAUTY BIOLOGICAL
          </p>
          <ul className='flex gap-6 mb-4'>
            <li>
              <a
                target='_blank'
                className='hover:text-amber-200 transition-colors'
                href='https://www.instagram.com/miss.glowbeauty?igsh=MmlzNjJyOWI1MHN5'>
                <InstagramIcon />
              </a>
            </li>
            {/* <li>
              <a href='#'>
                <FaceBookIcon />
              </a>
            </li> */}
            <li>
              <a
                target='_blank'
                className='hover:text-amber-200 transition-colors'
                href='https://www.tiktok.com/@miss.glowbeauty?_t=8p5LX0BIWJc&_r=1'>
                <TikTokIcon />
              </a>
            </li>
          </ul>
          <p className='text-sm text-gray-400 mt-3'>
            &copy; <span>{currentYear}</span> PURE BEAUTY BIOLOGICAL <br />
            {language == 'de'
              ? 'Alle Rechte Vorbehalten.'
              : 'All rights reserved.'}
          </p>
        </div>

        <div>
          <p className='text-lg font-light tracking-wide mb-6'>
            {language == 'de' ? 'KUNDENSERVICE' : 'CUSTOMER SERVICE'}
          </p>
          <address className='text-sm flex flex-col not-italic'>
            <div className='mb-4'>
              <p className='text-gray-400 mb-1'>WhatsApp</p>
              <a
                href='tel:0049015151906996'
                className='text-white hover:text-amber-200 transition-colors'>
                (0049) 015151906996
              </a>
            </div>
            <div>
              <p className='text-gray-400 mb-1'>E-Mail</p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                className='text-white hover:text-amber-200 transition-colors'>
                {process.env.NEXT_PUBLIC_ADMINEMAIL}
              </a>
            </div>
          </address>
        </div>

        <div>
          <p className='text-lg font-light tracking-wide mb-6'>
            {language == 'de' ? 'RECHTLICHES' : 'LEGAL'}
          </p>
          <ul className='flex flex-col gap-3'>
            <li>
              <Link
                href='/imprint'
                className='text-white hover:text-amber-200 transition-colors'>
                {language == 'de' ? 'Impressum' : 'Imprint'}
              </Link>
            </li>
            <li>
              <Link
                href='/privacy-policy'
                className='text-white hover:text-amber-200 transition-colors'>
                {language == 'de' ? 'Datenschutz' : 'Privacy Policy'}
              </Link>
            </li>
            <li>
              <Link
                href='/returns'
                className='text-white hover:text-amber-200 transition-colors'>
                {language == 'de'
                  ? 'Widerruf & Rücksendungen'
                  : 'Cancellation & Returns'}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
