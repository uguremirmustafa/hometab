import useLocalState from '@src/hooks/useLocalState';
import React, { useEffect } from 'react';
import { ColorName } from './themes';

// On page load or when changing themes, best to add inline in `head` to avoid FOUC

function ThemeSwitcher() {
  const [mode, setMode] = useLocalState('hometab-mod', 'dark');
  const [primary, setPrimary] = useLocalState<ColorName>('hometab-primary-color', 'chestnut-rose');
  const [secondary, setSecondary] = useLocalState<ColorName>(
    'hometab-secondary-color',
    'pink-salmon'
  );

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return (
    <div>
      <button onClick={() => setMode('dark')}>dark</button>
      <button onClick={() => setMode('')}>light</button>
    </div>
  );
}

export default ThemeSwitcher;
