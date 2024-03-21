import Link from 'next/link';
import { BiSolidTerminal } from 'react-icons/bi';

export default function Nav() {
  return (
    <nav className='flex items-end'>
      <Link
        href='/'
        className='flex items-center gap-2 px-3 py-[6px] hover:bg-light_hover rounded-lg dark:hover:bg-dark_hover'
      >
        <BiSolidTerminal className='w-6 h-6' />
        <h1 className='text-xl font-roboto font-bold'>Devlog</h1>
      </Link>
      <Link
        href='/posts'
        className='px-3 py-[6px] hover:bg-light_hover rounded-lg dark:hover:bg-dark_hover'
      >
        <h2 className='text-[16px]'>Posts</h2>
      </Link>
    </nav>
  );
}
