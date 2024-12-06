import { useEffect, useState } from "react"

import Wrapper from "./Components/AtomicDesign/Wrapper/Wrapper";
import Typography from "./Components/AtomicDesign/Typography/Typography";
import Button from "./Components/AtomicDesign/Button/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import NavBar from "./Components/NavBar/NavBar";

const themes = ['blue', 'green']

function App() {
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return "dark"
    //return savedTheme || 'default'; // Default to system preference
  });
  const [theme, setTheme] = useState(themes[0])

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
    <Wrapper className={`flex bg-slate-100 dark:bg-[#0d1117] w-screen h-screen font-roboto theme-${theme}`}>
      <BrowserRouter>
        <NavBar theme={theme} />
        <Routes>
          <Route path="/main" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
