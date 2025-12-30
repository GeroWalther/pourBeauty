'use client';

import Link from 'next/link';
import React, { ReactNode } from 'react';

interface NavProps {
  children: ReactNode;
  admin?: boolean;
}

export const NavLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <Link href={href} className='px-4 py-2 hover:bg-gray-200 rounded'>
      {children}
    </Link>
  );
};

export default function Nav({ children, admin = false }: NavProps) {
  return (
    <nav className={`flex gap-2 p-4 ${admin ? 'bg-gray-100' : 'bg-white'}`}>
      {children}
    </nav>
  );
}
