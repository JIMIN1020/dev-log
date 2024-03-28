import { Post } from '@/contentlayer/generated';
import React from 'react';
import { BsCalendar4Week } from 'react-icons/bs';
import { VscListSelection } from 'react-icons/vsc';
import dayjs from '../../libs/dayjs';

interface PostTitleProps {
  post: Post;
}

export default function PostTitle({ post }: PostTitleProps) {
  return (
    <div className='w-full flex flex-col items-center gap-[12px] pt-2 pb-8 border-b border-stone-300 mb-8'>
      <span className='text-lightgray dark:text-light_hover font-light flex items-center gap-[6px]'>
        <VscListSelection className='w-[12px] h-[12px]' />
        {post.category}
      </span>
      <h2 className='font-black text-3xl'>{post.title}</h2>
      <span className='text-lightgray dark:text-light_hover font-light flex items-center gap-[6px]'>
        <BsCalendar4Week className='w-[12px] h-[12px]' />
        {dayjs(post.createdAt).format('YYYY-MM-DD')}
      </span>
    </div>
  );
}
