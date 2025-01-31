import { useContext, useEffect, useState } from "react"

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
import ErrorPopUp from "./Components/AtomicDesign/Molecule/PopUp/ErrorPopUp";
import { usePopUp } from "./Components/Contexts/PopUpContext";
import SuccessPopUp from "./Components/AtomicDesign/Molecule/PopUp/SuccessPopUp";
import { AuthContext } from "./Components/Contexts/AuthContext";
import ResetPassword from "./Components/Auth/Login/ResetPassword";
import Analysis from "./Components/Analysis/Analysis";
import Home from "./Components/Home/Home";
import InputPopUp from "./Components/AtomicDesign/Molecule/PopUp/InputPopUp";
import CloseIcon from "./Assets/icons/CloseIcon";
import Input from "./Components/AtomicDesign/Atom/Input/Input";
import Form from "./Components/AtomicDesign/Atom/Form/Form";

const themes = ['blue', 'green']

function App() {
  const [toggleBtn,setToggleBtn] = useState(true)
  const [addData,setAddData] = useState(false)
  const [mode, setMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return "light"
    //return savedTheme || 'default'; // Default to system preference
  });

  const [theme, setTheme] = useState(themes[1])
  const { auth } = useContext(AuthContext)

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
  //const [auth, setAuth] = useState(false)

  const { error, success } = usePopUp()

  const handleToggle = () => {
    setToggleBtn(prevToggle => !prevToggle);
};


  return (
    <Wrapper className={`bg-[#ffffff] dark:bg-[#0d1117] w-screen h-screen font-roboto theme-${theme}`}>

      <Wrapper className='left-[50%] min-h-12 rounded-md fixed z-50 flex flex-col items-center justify-end '>
        {
          error !== null && <ErrorPopUp error={error} />
        }
        {
          success !== null && <SuccessPopUp success={success} />
        }
      </Wrapper>
      {
        addData&&<InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20" >
          <CloseIcon onClick={() => setAddData(false)} className="absolute size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer" />
        <Wrapper className="w-full flex flex-col items-center justify-center p-0">
        <Wrapper onClick={handleToggle} className="w-full flex justify-center mt-4 cursor-pointer">
                            <Wrapper className="relative w-[250] sm:w-[288px] h-6 bg-primary dark:bg-primary-variant rounded-3xl flex items-center">
                                {/* Moving white background */}
                                <Wrapper
                                    className={`absolute top-[3px] bottom-[3px] w-[114px] sm:w-[144px] bg-white rounded-3xl transition-transform duration-300 ease-in-out ${toggleBtn ? 'translate-x-[111px] sm:translate-x-[141px]' : 'translate-x-[3px]'}`}
                                />
                                {/* Monthly and One-time text */}
                                <Wrapper className="w-[114px] sm:w-[144px] h-[80%] flex items-center justify-center z-10">
                                    <Typography
                                        tag="p"
                                        className={`font-normal text-xs select-none ${!toggleBtn ? 'text-primary' : 'text-[#ffffff]'}`}
                                        text="Add New Dam"
                                    />
                                </Wrapper>
                                <Wrapper className="w-[114px] sm:w-[144px] h-[80%] flex items-center justify-center z-10">
                                    <Typography
                                        tag="p"
                                        className={`font-normal text-xs select-none ${toggleBtn ? 'text-primary' : 'text-[#ffffff]'}`}
                                        text="Daily Updates"
                                    />
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        {
                          !toggleBtn?<Form
                          className='w-full mt-4 px-6'>
                          <Input type='text'
                              placeholder='Dam Name'
                              autoComplete='off'
                              className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                  placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                  `}
                          />
                          <Input type='text'
                              placeholder='Maximum Water Level(MWL)'
                              autoComplete='off'
                              className={`w-full h-10 mt-2 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                  placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                  `}
                          />
                          <Input type='text'
                              placeholder='Full Reservoir Level(FRL)'
                              autoComplete='off'
                              className={`w-full h-10 mt-2 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                  placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                  `}
                          />
                           <Input type='text'
                              placeholder='Spillway Crest Level'
                              autoComplete='off'
                              className={`w-full h-10 mt-2 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                  placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                  `}
                          />
                           <Input type='text'
                              placeholder='Live Storage at FRL'
                              autoComplete='off'
                              className={`w-full h-10 mt-2 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                  placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                  `}
                          />
                          
                          <Button
                              type="submit"
                              className="w-full mt-4 h-10 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
                              containerClass="text-sm flex items-center justify-center gap-3"
                             
                          >
                              submit
                          </Button>
                      </Form>
                      :
                      <Form
                        className='w-full mt-4 px-6'>
                        <Input type='text'
                            placeholder='Water Level'
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Input type='text'
                            placeholder='Inflow'
                            autoComplete='off'
                            className={`w-full h-10 mt-2 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Input type='text'
                            placeholder='Power House Discharge'
                            autoComplete='off'
                            className={`w-full h-10 mt-2 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Input type='text'
                            placeholder='Spillway release'
                            autoComplete='off'
                            className={`w-full h-10 mt-2 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                         
                        
                        <Button
                            type="submit"
                            className="w-full mt-4 h-10 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
                            containerClass="text-sm flex items-center justify-center gap-3"
                           
                        >
                            submit
                        </Button>
                    </Form>
                        }
            
        </Wrapper>

        <Typography tag="p" className="text-sm mt-6 px-6" >
            
        </Typography>
        
    </InputPopUp>
      }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
        {
          auth.isAuthorized
          &&
          <>
            <TopBar theme={theme} />
            <Wrapper className='flex w-screen h-[87vh]' >
              <NavBar theme={theme} />
              <Routes>
                <Route path="/dashboard" element={<DashBoard ></DashBoard>} />
                <Route path="/analysis" element={<Analysis theme={theme} setAddData={setAddData} />} />
              </Routes>
            </Wrapper>
          </>
        }
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
