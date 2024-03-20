import React from 'react';

export default function TitleBanner() {
  return (
    <div className='flex flex-col gap-4 py-[40px]'>
      <h2 className='text-4xl font-roboto font-black'>Jimin Ryu</h2>
      <p className='text-base leading-7'>
        JavaScript, TypeScript를 기반으로{' '}
        <strong className='font-black'>웹 개발</strong>을 공부하고 있습니다.{' '}
        <br />
        이곳은 개발을 공부하며 쌓은 지식을 기록하는 공간입니다.
      </p>
    </div>
  );
}
