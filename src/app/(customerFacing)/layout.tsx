import React from 'react';
import Nav, { NavLink } from '../../components/Nav';
import { Canvas } from '../../components/components/homepage/Hero';

export const dynamic = 'force-dynamic';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Nav>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/missGlow'>Miss Glow Beauty</NavLink>
        <NavLink href='/about'>About</NavLink>
      </Nav>
      <Canvas className='absolute top-0 left-0 -z-10' />
      <div className=''>{children}</div>
    </>
  );
}
