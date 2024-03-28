import { allPosts } from '@/contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import MdxComponents from '@/components/posts/MdxComponents';
import PostTitle from '@/components/posts/PostTitle';
import { parseToc } from '@/libs/parseToc';
import Toc from '@/components/posts/Toc';

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

  const toc = parseToc(post.body.raw);

  return (
    <article className='w-full h-fit flex flex-col'>
      <PostTitle post={post} />
      <div className='flex gap-[20px] justify-between border-b border-stone-300 pb-[70px] mb-[100px]'>
        <MdxComponents post={post} />
        <Toc tableOfContents={toc} />
      </div>
    </article>
  );
}
