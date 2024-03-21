import PageTitle from '@/components/common/PageTitle';
import { allPosts } from '@/contentlayer/generated';

export default function Posts() {
  return (
    <div>
      <PageTitle title='Posts'>
        개발하면서 공부한 지식들을 기록하는 곳입니다.
      </PageTitle>
      <ul>
        {allPosts.map((post: any) => (
          <li key={post.url}>
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
