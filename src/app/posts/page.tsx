import PageTitle from '@/components/common/PageTitle';
import Category from '@/components/posts/Category';
import PostList from '@/components/posts/PostList';
// import { useState } from 'react';

export default function Posts() {
  // const [category, setCategory] = useState<number>(0);
  return (
    <div>
      <PageTitle title='Posts'>
        개발하면서 공부한 지식들을 기록하는 곳입니다.
      </PageTitle>
      <div className='flex'>
        <Category />
        <PostList />
      </div>
    </div>
  );
}
