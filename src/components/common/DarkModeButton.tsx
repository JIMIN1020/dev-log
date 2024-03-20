'use client';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeButton() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='bg-lightBg hover:bg-light_hover 0 px-2 py-2 rounded-lg dark:bg-darkBg dark:hover:bg-dark_hover'
    >
      {currentTheme === 'light' ? (
        <BsFillSunFill className='fill-yellow-400 w-6 h-6' />
      ) : (
        <BsFillMoonFill className='fill-yellow-400 w-6 h-6' />
      )}
    </button>
  );
}
