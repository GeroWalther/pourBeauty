'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export default function Nav({
  children,
  admin = false,
}: {
  children: React.ReactNode;
  admin?: boolean;
}) {
  return (
    <nav
      className={`text-primary-foreground md:flex justify-center px-4 gap-4 p-2 ${
        admin ? 'bg-primary flex' : 'bg-transparent hidden'
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
        'p-2 mx-1 rounded-md hover:bg-amber-100 text-sm font-semibold hover:text-yellow-700 focus-visible:bg-amber-100 focus-visible:text-yellow-700',
        pathname === props.href
          ? 'bg-amber-100 text-yellow-700'
          : 'text-amber-100'
      )}
    />
  );
}
