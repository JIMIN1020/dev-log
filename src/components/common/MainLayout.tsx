import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen flex justify-center bg-lightBg dark:bg-darkBg transition-all'>
      <div className='w-full max-w-6xl mx-auto px-4 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-all'>
        {children}
      </div>
    </div>
  );
}
