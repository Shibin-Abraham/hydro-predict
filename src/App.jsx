import { useEffect, useState } from "react"

import Wrapper from "./Components/AtomicDesign/Atom/Wrapper/Wrapper";
import Typography from "./Components/AtomicDesign/Atom/Typography/Typography";
import Button from "./Components/AtomicDesign/Atom/Button/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import NavBar from "./Components/NavBar/NavBar";
import TopBar from "./Components/TopBar/TopBar";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/Login/Login";
import Verify from "./Components/Auth/Varify/Verify";
import ErrorPopUp from "./Components/PopUp/ErrorPopUp";
import { ErrorProvider, useError } from "./Components/Contexts/ErrorContext";

const themes = ['blue', 'green']

function App() {
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return "light"
    //return savedTheme || 'default'; // Default to system preference
  });

  const [theme, setTheme] = useState(themes[1])

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
  const [auth, setAuth] = useState(false)

  const { error } = useError()


  return (
    <Wrapper className={`bg-[#ffffff] dark:bg-[#0d1117] w-screen h-screen font-roboto theme-${theme}`}>

      <Wrapper className='left-[50%] min-h-12 rounded-md fixed z-50 flex flex-col items-center justify-end '>
        {
          error !== null && <ErrorPopUp error={error} />
        }

      </Wrapper>

      <BrowserRouter>
        {
          auth ?
            <>
              <TopBar theme={theme} />
              <Wrapper className='flex w-screen h-[87vh]' >
                <NavBar theme={theme} />
                <Routes>
                  <Route path="/dashboard" element={<DashBoard ></DashBoard>} />
                </Routes>
              </Wrapper>
            </>
            :
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/verify" element={<Verify />} />
            </Routes>
        }
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
