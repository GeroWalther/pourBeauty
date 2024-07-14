import React from 'react';

export default function PageHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h2 className='text-4xl mb-4'>{children}</h2>;
}
