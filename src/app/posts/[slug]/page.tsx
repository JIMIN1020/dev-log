import { allPosts } from '@/contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import React from 'react';
import MdxComponents from '@/components/posts/MdxComponents';

import PostTitle from '@/components/posts/PostTitle';

interface PostProps {
  params: {
    slug: string;
  };
}

export const generatedStaticParams = () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

export function generateMetadata({ params }: PostProps): Metadata {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  return {
    title: post?.title,
    description: post?.description,
    authors: [{ name: 'Jimin Ryu', url: 'https://jimin1020.github.io' }],
    openGraph: {
      type: 'article',
      title: post?.title,
      description: post?.description,
      locale: 'ko-KR',
      siteName: 'jimin1020.github.io',
      url: `${'https://jimin1020.github.io/' + slug + '/'}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function page({ params }: PostProps) {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  if (!post) notFound();

  return (
    <article className='w-full flex flex-col'>
      <PostTitle post={post} />
      <MdxComponents post={post} />
    </article>
  );
}
