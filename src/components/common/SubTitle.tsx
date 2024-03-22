import React from 'react';

type SubTitleProps = {
  title: string;
};

export default function SubTitle({ title }: SubTitleProps) {
  return <h3 className='font-roboto text-[28px] font-black'>{title}</h3>;
}
