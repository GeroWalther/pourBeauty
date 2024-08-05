import FaceBookIcon from '@/components/svg/FacebookIcon';
import InstagramIcon from '@/components/svg/InstagramIcon';
import TikTokIcon from '@/components/svg/TikTokIcon';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='border-t flex justify-center md:justify-start bg-pink-200'>
      <div className='p-4 grid grid-cols-2 md:grid-cols-3 md:gap-14'>
        <div className='mb-5'>
          {/* <a href='#' className='mb-0'>
            <Image
              src='/missglowlogo.png'
              height={150}
              width={150}
              alt='missglowlogo'
            />
          </a> */}
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
            &copy; <span>{currentYear}</span> Miss Glow Beautz <br />- Alle
            Rechte Vorbehalten.
          </p>
        </div>

        <nav>
          <p className='text-lg font-semibold mb-2'>Miss Glow Beauty</p>
          <ul className='flex gap-2'>
            <li>
              <a href='#' className='text-gray-600 hover:text-gray-400'>
                Impressum
              </a>
            </li>
            <li>
              <a href='#' className='text-gray-600 hover:text-gray-400'>
                Datenschutz
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <p className='text-lg font-semibold mb-2'>Kundenservice</p>
          <address className='text-sm flex gap-4'>
            <div>
              <p>Whats App</p>
              <a
                href='tel:415-201-6370'
                className='text-gray-600 hover:text-gray-400'>
                098765432567
              </a>
            </div>
            <div>
              <p>E-Mail</p>
              <a
                href='mailto:hello@omnifood.com'
                className='text-gray-600 hover:text-gray-400'>
                {process.env.ADMINEMAIL}
              </a>
            </div>
          </address>
        </div>
      </div>
    </footer>
  );
}
