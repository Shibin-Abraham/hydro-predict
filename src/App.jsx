import { useEffect, useState } from "react"
import Wrapper from "./Components/AtomicDesign/Wrapper/Wrapper";
import Typography from "./Components/AtomicDesign/Typography/Typography";
import Button from "./Components/AtomicDesign/Button/Button";

function App() {
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'default'; // Default to system preference
  });

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (mode === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      // Default: System Preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (mediaQuery.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', 'default');
    }
  }, [mode]);

  const handleModeChange = (newTheme) => {
    setMode(newTheme);
  };

  return (
    <Wrapper className="bg-slate-100 dark:bg-slate-700 w-full h-screen">
      <Typography tag="h3" text="Hello world!" className="text-3xl font-bold dark:text-slate-300">
        <Button
          variant="primary"
          variantType="outline"
          type="button"
          onClick={() => handleModeChange('light')}
          className={`px-4 py-2 rounded ${mode === 'light' ? 'bg-blue-500 text-white' : ''
            }`}
        >
          Light
        </Button>
        <Button
          onClick={() => handleModeChange('dark')}
          className={`px-4 py-2 rounded ${mode === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
        >
          Dark
        </Button>
        <Button
          onClick={() => handleModeChange('default')}
          className={`px-4 py-2 rounded ${mode === 'default' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
        >
          Default
        </Button>
      </Typography>
    </Wrapper>
  )
}

export default App
