import Nav from './Nav';
import { IoIosMoon } from 'react-icons/io';

export default function Header() {
  return (
    <header className='w-full flex py-7 justify-between items-center'>
      <Nav />
      <button className='px-2 py-2 hover:bg-stone-200 rounded-lg'>
        <IoIosMoon className='fill-yellow-400 w-6 h-6' />
      </button>
    </header>
  );
}
