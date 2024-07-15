'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ComponentProps } from 'react';

export default function Nav({
  children,
  admin = false,
}: {
  children: React.ReactNode;
  admin?: boolean;
}) {
  return (
    <nav
      className={`text-primary-foreground flex justify-center px-4 gap-10 p-2 ${
        admin ? 'bg-primary' : 'bg-transparent'
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
        'p-2 rounded-md hover:bg-secondary text-sm font-semibold hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground ',
        pathname === props.href ? 'bg-secondary text-secondary-foreground' : ''
      )}
    />
  );
}
