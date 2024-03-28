import { Post } from '@/contentlayer/generated';
import Link from 'next/link';
import React from 'react';
import dayjs from '../../libs/dayjs';
import { BsCalendar4Week } from 'react-icons/bs';

type PostItemProps = {
  postData: Post;
};

export default function PostItem({ postData }: PostItemProps) {
  const { title, description, createdAt, category, url } = postData;
  return (
    <Link
      href={url}
      className='flex flex-col gap-2 p-5 rounded-xl text-sm hover:bg-light_hover transition-all ease-linear dark:hover:bg-dark_hover'
    >
      <div className='flex justify-between'>
        <h4 className='font-black text-[18px]'>{title}</h4>
        <span className='px-2 py-[3px] border-[1px] border-stone-300 dark:border-stone-700 bg-stone-100 rounded-lg text-gray dark:bg-stone-600 dark:text-stone-100'>
          {category}
        </span>
      </div>
      <p className='font-normal'>{description}</p>
      <span className='text-lightgray dark:text-light_hover font-light flex items-center gap-[6px]'>
        <BsCalendar4Week className='w-[12px] h-[12px]' />
        {dayjs(createdAt).format('YYYY-MM-DD')}
      </span>
    </Link>
  );
}
