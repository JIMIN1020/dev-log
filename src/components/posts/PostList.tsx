import React from 'react';
import { Post, allPosts } from '@/contentlayer/generated';
import SubTitle from '../common/SubTitle';
import PostItem from './PostItem';

type PostListProps = {
  category: string;
};

function PostList({ category }: PostListProps) {
  return (
    <div className='flex flex-col flex-1 gap-2'>
      <div className='flex items-end pl-5 gap-[10px]'>
        <SubTitle title='All Posts' />
        <span className='mb-[7px] text-lightgray'>
          {category === 'All' ? '' : `— ${category}`}
        </span>
      </div>

      <div>
        {allPosts.map((post: Post) => {
          if (category === 'All' || category === post.category) {
            return <PostItem key={post.id} postData={post} />;
          }
        })}
      </div>
    </div>
  );
}

export default PostList;
