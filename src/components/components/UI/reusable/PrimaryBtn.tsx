import React, { ReactNode } from 'react';

type PrimaryBtnProps = {
  children: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function PrimaryBtn({ children, onClick }: PrimaryBtnProps) {
  return (
    <button
      onClick={onClick}
      className='bg-dark py-2 px-5 rounded-xl text-stone-200 hover:bg-primary transition-all duration-500 text-base'>
      {children}
    </button>
  );
}
