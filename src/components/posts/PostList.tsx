import React from 'react';
import { Post, allPosts } from '@/contentlayer/generated';
import SubTitle from '../common/SubTitle';
import PostItem from './PostItem';

function PostList() {
  return (
    <div className='flex flex-col flex-1 gap-2'>
      <SubTitle title='All Posts' />
      <div>
        {allPosts.map((post: Post) => (
          <PostItem key={post.id} postData={post} />
        ))}
      </div>
    </div>
  );
}

export default PostList;
