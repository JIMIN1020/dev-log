import { allPosts } from '@/contentlayer/generated';
import { Metadata } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import dayjs from '../../../components/libs/dayjs';
import React from 'react';

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
      url: `${'https://jimin1020.github.io' + slug + '/'}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
  };
}

export default function page({ params }: PostProps) {
  const { slug } = params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  const MDXComponent = useMDXComponent(post!.body.code);

  if (!post) notFound();

  return (
    <article>
      <h2>{post.title}</h2>
      <span>{dayjs(post.createdAt).format('YYYY-MM-DD')}</span>
      <MDXComponent />
    </article>
  );
}
