import DarkModeButton from './DarkModeButton';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='w-full flex py-7 justify-between items-center'>
      <Nav />
      <DarkModeButton />
    </header>
  );
}
