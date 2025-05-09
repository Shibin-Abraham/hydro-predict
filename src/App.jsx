import {  useContext, useState } from "react"
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
import { AuthContext } from "./Components/Contexts/AuthContext";
import AddDamAlert from "./Components/Analysis/Popup/AddDamAlert";
import BulkUpload from "./Components/Analysis/Popup/BulkUpload";
import AddRaingauge from "./Components/RainGauge/Popup/AddRaingauge";
import RaingaugeProvider from "./Components/Contexts/RaingaugeContext/RaingaugeProvider";
import RainGaugeUserAssignment from "./Components/Users/Popup/RainGaugeUserAssignment";
import AddRaingaugeData from "./Components/RainGauge/Popup/AddRaingaugeData";
import RainBulkUpload from "./Components/RainGauge/Popup/RainBulkUpload";
import Statistics from "./Components/Statistics/Statistics";

function App() {

  const [addDamData,setAddDamData] = useState({state:false,damId:undefined,fetchAllDamData:()=>{}})
  const [addRaingauge,setAddRaingauge] = useState({state:false,fetchAllRaingaugeData:()=>{}})
  const [addRaingaugeData,setAddRaingaugeData] = useState({state:false})
  const [addDamAlert,setAddDamAlert] = useState({state:false,damId:undefined,damName:'',fetchAllDamData:()=>{}})
  const [addBulkUpload,setAddBulkUpload] = useState({state:false,fetchAllDamData:()=>{}})
  const [addRainBulkUpload,setAddRainBulkUpload] = useState({state:false,fetchAllRaingaugeData:()=>{}})
  const [openMap,setOpenMap] = useState(false)
  const [openUserAssignment,setOpenUserAssignment] = useState({state:false,users:[],damId:undefined,dmaName:'',fetchDamHandlingUsers:()=>{}})
  const [openRainGaugeUserAssignment,setOpenRainGaugeUserAssignment] = useState({
    state:false,
    raingaugeId:undefined,
    users:[],
    raingaugeName:'',
    fetchRaingaugeHandlingUsers:()=>{}
  })

  const { mode, setMode, theme, setTheme } = useThemeMode();

  //const [auth, setAuth] = useState(false)

  const { error, success,info } = usePopUp()

  const { auth } = useContext(AuthContext)

  return (
    <DamDataProvider>
      <RaingaugeProvider>
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
          addDamAlert.state&&<AddDamAlert addDamAlert={addDamAlert} setAddDamAlert={setAddDamAlert}  />
        }
        {
          addRaingaugeData.state&&<AddRaingaugeData addRaingaugeData={addRaingaugeData} setAddRaingaugeData={setAddRaingaugeData}  />
        }
        {
          addBulkUpload.state&&<BulkUpload setAddBulkUpload={setAddBulkUpload}  />
        }
        {
          addRainBulkUpload.state&&<RainBulkUpload setAddRainBulkUpload={setAddRainBulkUpload}  />
        }
        {
          openMap&&<Map setOpenMap={setOpenMap} />
        }
        {
          openUserAssignment.state&&<UserAssignment openUserAssignment={openUserAssignment} setOpenUserAssignment={setOpenUserAssignment} />
        }
        {
          openRainGaugeUserAssignment.state
          &&
          <RainGaugeUserAssignment 
            openRainGaugeUserAssignment={openRainGaugeUserAssignment} 
            setOpenRainGaugeUserAssignment={setOpenRainGaugeUserAssignment}
           />
        }
        {
          addRaingauge.state&&<AddRaingauge addRaingauge={addRaingauge} setAddRaingauge={setAddRaingauge}  />
        }
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
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

                  <Analysis mode={mode} theme={theme} setAddDamData={setAddDamData} setAddDamAlert={setAddDamAlert} setAddBulkUpload={setAddBulkUpload} />
              
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
                  <RainGauge theme={theme} mode={mode} setOpenMap={setOpenMap} setAddRaingauge={setAddRaingauge} setAddRainBulkUpload={setAddRainBulkUpload} setAddRaingaugeData={setAddRaingaugeData} />
                </ProtectedLayout>
              }
            />
            {/* <Route
              path="/Statistics"
              element={
                <ProtectedLayout theme={theme}>

                  <Statistics mode={mode} theme={theme} />
              
                </ProtectedLayout>
              }
            /> */}
            {auth?.user?.position.toUpperCase()==='ADMIN'&&<Route
              path="/users"
              element={
                <ProtectedLayout theme={theme}>
                  
                  <Users 
                    mode={mode} 
                    setMode={setMode} 
                    setTheme={setTheme} 
                    setOpenUserAssignment={setOpenUserAssignment}
                    setOpenRainGaugeUserAssignment={setOpenRainGaugeUserAssignment}
                    />
              
                </ProtectedLayout>
              }
            />}
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
        </BrowserRouter>
      </Wrapper>
      </RaingaugeProvider>
    </DamDataProvider>
  )
}

export default App
