import Link from 'next/link';
import { BiSolidTerminal } from 'react-icons/bi';

export default function Nav() {
  return (
    <div className='flex gap-1 items-end'>
      <Link
        href='/'
        className='flex items-center gap-1 px-3 py-2 hover:bg-stone-200 rounded-lg'
      >
        <BiSolidTerminal className='w-6 h-6' />
        <h1 className='text-xl font-bold'>JM</h1>
      </Link>
      <Link href='/posts' className='px-3 py-2 hover:bg-stone-200 rounded-lg'>
        <h2 className='font-semibold'>Posts</h2>
      </Link>
    </div>
  );
}
