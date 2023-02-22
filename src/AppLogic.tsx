import { useEffect, useState } from 'react';

export const AppLogic = () => {
  const [theme, setTheme] = useState<string>('theme1');

  useEffect(()=> {
    document.title = 'Calculator';
    const defaultTheme = localStorage.getItem('theme') as string;
    if (defaultTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('theme1');
    } else {
      setTheme('theme2');
    }
  
    if (defaultTheme) {
      setTheme(defaultTheme);
    }
  },[]);
  

  return {
    theme,
    setTheme
  };
};