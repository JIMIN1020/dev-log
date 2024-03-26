import React from 'react';
import SubTitle from '../common/SubTitle';
import { allPosts } from '@/contentlayer/generated';

type Category = {
  category: string;
  setCategory: (num: string) => void;
};

export default function Category({ category, setCategory }: Category) {
  /* ----- 카테고리 수집 함수 ----- */
  const getCategory = () => {
    const categoryCounts: { [key: string]: number } = { All: allPosts.length };

    // 카테고리별 포스트 수 카운팅
    allPosts.forEach((post) => {
      if (categoryCounts[post.category]) {
        categoryCounts[post.category]++;
      } else {
        categoryCounts[post.category] = 1;
      }
    });

    // 사전 순으로 정렬
    const categoryArr = Object.keys(categoryCounts).map((cat) => ({
      category: cat,
      count: categoryCounts[cat],
    }));

    // count를 기준으로 내림차순 정렬
    categoryArr.sort((a, b) => b.count - a.count);

    return categoryArr;
  };

  const categories = getCategory(); // 카테고리 데이터

  return (
    <div className='w-[230px] flex flex-col gap-4'>
      <SubTitle title='Category' />
      <div className='flex flex-col gap-1'>
        {categories.map((data, i) => {
          return (
            <button
              key={i}
              onClick={() => setCategory(data.category)}
              className={`w-full flex justify-between p-[10px] rounded-[10px] hover:bg-light_hover dark:hover:bg-dark_hover cursor-pointer transition-all ease-linear text-sm ${category === data.category ? `bg-light_hover dark:bg-dark_hover` : ``}`}
            >
              <span>{data.category}</span>
              <span className='text-stone-600 font-thin dark:text-darkText'>
                {data.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
