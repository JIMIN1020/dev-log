import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { Post } from '@/contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

const components: MDXComponents = {
  img: (props) => (
    <Image
      sizes='100vw'
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
};

interface MdxComponentsProps {
  post: Post;
}

export default function MdxComponents({ post }: MdxComponentsProps) {
  const MdxComponent = useMDXComponent(post.body.code);

  return (
    <div className='prose prose-stone dark:prose-invert'>
      <MdxComponent components={components} />
    </div>
  );
}
