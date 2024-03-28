'use client';

import { Toc } from '@/types/toc-type';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { MdNotes } from 'react-icons/md';

interface TocProps {
  tableOfContents: Toc[];
}

export default function Toc({ tableOfContents }: TocProps) {
  const observer = useRef<IntersectionObserver>();
  const [activeToc, setActiveToc] = useState('');

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveToc(entry.target.id);
        });
      },
      {
        rootMargin: `0px 0px -90% 0px`,
        threshold: 0.1,
      }
    );
    const headingElements = document.querySelectorAll('.prose h1,h2,h3');
    headingElements.forEach((element) => observer.current?.observe(element));
    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className='w-[300px] h-fit sticky top-[50px] right-0 flex flex-col p-5 gap-3 border-stone-300 border rounded-[10px]'>
      <h4 className='text-base font-black font-roboto border-b pb-[10px] border-stone-300 flex items-center gap-[8px] text-stone-700 dark:text-darkText'>
        <MdNotes
          style={{ width: '22px', height: '22px' }}
          className='dark:fill-stone-200 fill-stone-700'
        />
        On this page
      </h4>
      <ul className='flex flex-col gap-[8px]'>
        {tableOfContents.map((toc) => {
          return (
            <li key={toc.slug} className={`${toc.level === 2 ? 'pl-4' : ''}`}>
              <Link
                href={`#${toc.slug}`}
                className={`text-sm text-lightgray dark:text-darkText break-all hover:text-lightText ${activeToc === toc.slug ? 'font-black text-stone-700 dark:text-darkText' : ''} transition-all ease-linear`}
              >
                {toc.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
