// useThemeMode.js
import { useState, useEffect } from 'react';

export default function useThemeMode() {
  // Initialize mode from localStorage, defaulting to 'default' if not set
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    return savedMode || 'default';
  });

  // Initialize theme to 'green' (matching the original code's themes[1])
  const [theme, setTheme] = useState('blue');

  // Effect to handle dark mode class and localStorage
  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (mode === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Use system preference for 'default'
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', 'default');
    }
  }, [mode]);

  // Return the state and setters
  return { mode, setMode, theme, setTheme };
}