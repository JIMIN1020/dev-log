import React from 'react';
import { IoLogoGithub } from 'react-icons/io';
import { BiLogoGmail } from 'react-icons/bi';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full h-[150px] flex flex-col gap-2 items-center justify-center text-lightText dark:text-darkText'>
      <div className='flex gap-2 text-stone-600 dark:text-stone-300'>
        <Link href='https://github.com/JIMIN1020'>
          <IoLogoGithub className='w-[30px] h-[30px]' />
        </Link>
        <Link href='mailto:jimins4920@gmail.com'>
          <BiLogoGmail className='w-[30px] h-[30px]' />
        </Link>
      </div>
      <span className='text-sm text-stone-500 dark:text-stone-400'>
        Jimin Ryu © 2024 • Powered by Next.js, Github Pages
      </span>
    </div>
  );
}
