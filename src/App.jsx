import {  useState } from "react"
import Wrapper from "./Components/AtomicDesign/Atom/Wrapper/Wrapper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import SignUp from "./Components/Auth/SignUp/SignUp";
import Login from "./Components/Auth/Login/Login";
import Verify from "./Components/Auth/Varify/Verify";
import ErrorPopUp from "./Components/AtomicDesign/Molecule/PopUp/ErrorPopUp";
import { usePopUp } from "./Components/Contexts/PopUpContext";
import SuccessPopUp from "./Components/AtomicDesign/Molecule/PopUp/SuccessPopUp";
import ResetPassword from "./Components/Auth/Login/ResetPassword";
import Analysis from "./Components/Analysis/Analysis";
import Home from "./Components/Home/Home";
import AddDamData from "./Components/Analysis/Popup/AddDamData";
import RainGauge from "./Components/RainGauge/RainGauge";
import Map from "./Components/RainGauge/Popup/Map";
import useThemeMode from "./Components/hooks/useThemeMode";
import Prediction from "./Components/Prediction/Prediction";
import ProtectedLayout from "./ProtectedLayout";
import InfoPopUp from "./Components/AtomicDesign/Molecule/PopUp/InfoPopUp";
import DamDataProvider from "./Components/Contexts/DamDataContext/DamDataProvider";
import Settings from "./Components/Settings/Settings";
import Inflow from "./Components/Analysis/DetailedView/Inflow";
import WaterLevel from "./Components/Analysis/DetailedView/WaterLevel";
import PreviousAnalysis from "./Components/Analysis/DetailedView/PreviousAnalysis";
import Users from "./Components/Users/Users";
import UserAssignment from "./Components/Users/Popup/UserAssignment";

function App() {

  const [addDamData,setAddDamData] = useState({state:false,damId:undefined})
  const [openMap,setOpenMap] = useState(false)
  const [openUserAssignment,setOpenUserAssignment] = useState({state:false,users:[],damId:undefined,dmaName:'',fetchDamHandlingUsers:()=>{}})

  const { mode, setMode, theme, setTheme } = useThemeMode();

  //const [auth, setAuth] = useState(false)

  const { error, success,info } = usePopUp()

  return (
    <Wrapper className={`bg-[#ffffff] dark:bg-[#0d1117] w-screen h-screen font-roboto theme-${theme}`}>

      <Wrapper className='left-[50%] min-h-12 rounded-md fixed z-50 flex flex-col items-center justify-end '>
        {
          error !== null && <ErrorPopUp error={error} />
        }
        {
          success !== null && <SuccessPopUp success={success} />
        }
        {
          info !== null && <InfoPopUp info={info} />
        }
      </Wrapper>
      {
        addDamData.state&&<AddDamData addDamData={addDamData} setAddDamData={setAddDamData}  />
      }
      {
        openMap&&<Map setOpenMap={setOpenMap} />
      }
      {
        openUserAssignment.state&&<UserAssignment openUserAssignment={openUserAssignment} setOpenUserAssignment={setOpenUserAssignment} />
      }
      <BrowserRouter>
      <DamDataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          <Route
            path="/dashboard"
            element={
              <ProtectedLayout theme={theme}>
                
                <DashBoard mode={mode} setMode={setMode} setTheme={setTheme} />
             
              </ProtectedLayout>
            }
          />
          <Route
            path="/analysis"
            element={
              <ProtectedLayout theme={theme}>

                <Analysis mode={mode} theme={theme} setAddDamData={setAddDamData} />
            
              </ProtectedLayout>
            }
          />
          <Route
            path="/analysis/inflow/"
            element={
              <ProtectedLayout theme={theme}>

                <Inflow theme={theme} setAddDamData={setAddDamData} />
            
              </ProtectedLayout>
            }
          />
          <Route
            path="/analysis/water-level/"
            element={
              <ProtectedLayout theme={theme}>

                <WaterLevel theme={theme} setAddDamData={setAddDamData} />
            
              </ProtectedLayout>
            }
          />
          <Route
            path="/analysis/previous/"
            element={
              <ProtectedLayout theme={theme}>

                <PreviousAnalysis mode={mode} theme={theme} setAddDamData={setAddDamData} />
            
              </ProtectedLayout>
            }
          />
          <Route
            path="/rain gauge"
            element={
              <ProtectedLayout theme={theme}>
                <RainGauge theme={theme} setOpenMap={setOpenMap} />
              </ProtectedLayout>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedLayout theme={theme}>
                
                <Users mode={mode} setMode={setMode} setTheme={setTheme} setOpenUserAssignment={setOpenUserAssignment} />
             
              </ProtectedLayout>
            }
          />
          <Route
            path="/predict"
            element={
              <ProtectedLayout theme={theme}>
                <Prediction mode={mode} />
              </ProtectedLayout>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedLayout theme={theme}>
                
                <Settings mode={mode} theme={theme} setMode={setMode} setTheme={setTheme} />
             
              </ProtectedLayout>
            }
          />
          
        </Routes>
        </DamDataProvider>
      </BrowserRouter>
    </Wrapper>
  )
}

export default App
