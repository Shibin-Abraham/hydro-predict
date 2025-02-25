import { useContext, useEffect, useState } from "react"

import Wrapper from "./Components/AtomicDesign/Atom/Wrapper/Wrapper";
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
import AddDamData from "./Components/Analysis/Popup/AddDamData";
import RainGauge from "./Components/RainGauge/RainGauge";
import Map from "./Components/RainGauge/Popup/Map";
import useThemeMode from "./Components/hooks/useThemeMode";


function App() {

  const [addDamData,setAddDamData] = useState(false)
  const [openMap,setOpenMap] = useState(false)

  const { auth } = useContext(AuthContext)

  const { mode, setMode, theme, setTheme } = useThemeMode();


  //const [auth, setAuth] = useState(false)

  const { error, success } = usePopUp()

  

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
        addDamData&&<AddDamData setAddDamData={setAddDamData} />
      }
      {
        openMap&&<Map setOpenMap={setOpenMap} />
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
                <Route path="/dashboard" element={<DashBoard mode={mode} setMode={setMode}/>} />
                <Route path="/analysis" element={<Analysis theme={theme} setAddDamData={setAddDamData} />} />
                <Route path="/rain gauge" element={<RainGauge theme={theme} setOpenMap={setOpenMap} />} />
              </Routes>
            </Wrapper>
          </>
        }
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
