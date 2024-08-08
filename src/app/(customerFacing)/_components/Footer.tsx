'use client';
import FaceBookIcon from '@/components/svg/FacebookIcon';
import InstagramIcon from '@/components/svg/InstagramIcon';
import TikTokIcon from '@/components/svg/TikTokIcon';
import { useLanguage } from '@/contexts/LanguageProvider';
import React from 'react';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className='flex justify-center  md:justify-start bg-orange-400'>
      <div className='px-4 pt-4 grid grid-cols-2 md:grid-cols-3 md:gap-14'>
        <div className='mb-5 mr-20'>
          <ul className='flex gap-6 '>
            <li>
              <a href='#'>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <FaceBookIcon />
              </a>
            </li>
            <li>
              <a href='#'>
                <TikTokIcon />
              </a>
            </li>
          </ul>
          <p className='text-sm text-gray-600 mt-3'>
            &copy; <span>{currentYear}</span> Miss Glow Beauty <br />-{' '}
            {language == 'de'
              ? 'Alle Rechte Vorbehalten.'
              : 'All rights reserved.'}
          </p>
        </div>
        <div className='pb-2'>
          <p className='text-lg font-semibold mb-2'>
            {language == 'de' ? 'Kundenservice' : 'Customer service'}
          </p>
          <address className='text-sm flex-col md:flex'>
            <div className='mb-2'>
              <p>Whats App</p>
              <a
                href='tel:0049015151906996'
                className='text-gray-600 hover:text-gray-400'>
                (0049) 015151906996
              </a>
            </div>
            <div>
              <p>E-Mail</p>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_ADMINEMAIL}`}
                className='text-gray-600 hover:text-gray-400'>
                {process.env.NEXT_PUBLIC_ADMINEMAIL}
              </a>
            </div>
          </address>
        </div>
        <nav className='pb-4'>
          <p className='text-lg font-semibold mb-2'>Miss Glow Beauty</p>
          <ul className='flex gap-2'>
            <li>
              <a href='#' className='text-gray-600 hover:text-gray-400'>
                {language == 'de' ? 'Impressum' : 'Imprint'}
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-gray-400'>
                {language == 'de' ? 'Datenschutz' : 'Privacy Policy'}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
