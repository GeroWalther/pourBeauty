import React from 'react';
import Nav, { NavLink } from '@/components/Nav';

export const dynamic = 'force-dynamic';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav admin>
        <NavLink href='/admin'>Dashboard</NavLink>
        {/* <NavLink href='/admin/products'>Produkte</NavLink> */}
        <NavLink href='/admin/customers'>Kunden</NavLink>
        <NavLink href='/admin/orders'>Bestellungen</NavLink>
        <NavLink href='/admin/discountcode'>Rabattcodes</NavLink>
      </Nav>
      <div className='container my-6'>{children}</div>
    </>
  );
}
