import PageTitle from '@/components/common/PageTitle';

export default function Home() {
  return (
    <div>
      <PageTitle title='Jimin Ryu'>
        JavaScript, TypeScript를 기반으로{' '}
        <strong className='font-black'>웹 개발</strong>을 공부하고 있습니다.{' '}
        <br />
        이곳은 개발을 공부하며 쌓은 지식을 기록하는 공간입니다.
      </PageTitle>
    </div>
  );
}
