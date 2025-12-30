import React from 'react';

interface ErrorComponentProps {
  message: string;
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-red-600 mb-4'>Error</h1>
        <p className='text-xl text-gray-700'>{message}</p>
      </div>
    </div>
  );
}
