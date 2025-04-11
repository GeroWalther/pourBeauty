'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { PRIMARYBUTTONCOLOR } from '../../consts';

export default function Nav({
  children,
  admin = false,
}: {
  children: React.ReactNode;
  admin?: boolean;
}) {
  return (
    <nav
      className={`md:flex justify-center px-4 gap-4 p-2 ${
        admin ? 'bg-primary flex' : 'bg-white hidden'
      }`}>
      {children}
    </nav>
  );
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        `p-2 mx-1 rounded-md hover:bg-[${PRIMARYBUTTONCOLOR}] hover:text-black text-sm font-extralight tracking-widest uppercase focus-visible:bg-[${PRIMARYBUTTONCOLOR}] focus-visible:text-black transition-colors`,
        pathname === props.href
          ? `bg-[${PRIMARYBUTTONCOLOR}] text-black`
          : 'text-black'
      )}
    />
  );
}
