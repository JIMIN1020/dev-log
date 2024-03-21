import React, { ReactNode } from 'react';

type TitleBannerProps = {
  title: string;
  children: React.ReactNode;
};

export default function PageTitle({ title, children }: TitleBannerProps) {
  return (
    <div className='flex flex-col gap-4 py-[40px]'>
      <h2 className='text-4xl font-roboto font-black'>{title}</h2>
      <p className='text-base leading-7'>{children}</p>
    </div>
  );
}
