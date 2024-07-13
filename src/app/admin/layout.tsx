import Nav, { NavLink } from '@/components/Nav';
import React from 'react';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href='/admin'>Dashboard</NavLink>
        <NavLink href='/admin/products'>Produkte</NavLink>
        <NavLink href='/admin/customers'>Kunden</NavLink>
        <NavLink href='/admin/orders'>Bestellungen</NavLink>
      </Nav>
      <div className='container my-6'>{children}</div>
    </>
  );
}
