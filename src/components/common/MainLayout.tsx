import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen flex justify-center bg-lightBg dark:bg-darkBg transition-all ease-linear'>
      <div className='w-full flex flex-col max-w-6xl mx-auto px-4 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText transition-all ease-linear'>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
