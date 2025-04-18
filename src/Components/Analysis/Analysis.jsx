/* eslint-disable react/prop-types */

import ReactApexChart from 'react-apexcharts'
import FlagIcon from '../../Assets/icons/FlagIcon'
import MapPointerIcon from '../../Assets/icons/MapPointerIcon'
import Select from '../AtomicDesign/Atom/Input/Select'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Pichart from '../AtomicDesign/Molecule/Pichart/Pichart'
import { useCallback, useContext, useEffect, useState } from 'react'
import { getColor, donutStyles, inflowStyles, getWaterLevelStyles, getCardData, getPreviousYearDate } from './utils'
import Button from '../AtomicDesign/Atom/Button/Button'
import AddSolidIcon from '../../Assets/icons/AddSolidIcon'
import { useNavigate } from 'react-router-dom'
import DamDataContext from '../Contexts/DamDataContext/DamDataContext'
import SettingsContext from '../Contexts/SettingsContext/SettingsContext'
import { LuHistory } from 'react-icons/lu'
import moment from 'moment'
import { BiCloudUpload } from 'react-icons/bi'
import { IoMdRainy } from "react-icons/io";
import { getDamData } from '../../API/Handler/getDataHandler'
import { checkDamHandlingUser } from '../../API/Handler/setDataHandler'
import { AuthContext } from '../Contexts/AuthContext'
import { MdMoreHoriz } from 'react-icons/md'
import { FiAlertOctagon } from 'react-icons/fi'
import RaingaugeContext from '../Contexts/RaingaugeContext/RaingaugeContext'
import { alertColor as rainAlertColor } from "../AtomicDesign/Molecule/Gauge/utils"
import { processRainfallData } from '../RainGauge/utils'

const Analysis = ({mode,theme,setAddDamData,setAddDamAlert,setAddBulkUpload}) => {
  const color = getColor({theme})
  const [selectedDamId,setSelectedDamId] = useState(1) //default damid eg: 1-idukki
  const [damHandlingUser,setDamHandlingUser] = useState() 

  const [filteredDamData,setFilteredDamData] = useState()
  const previousDate = getPreviousYearDate(moment(filteredDamData?.[0]?.dam_data?.[0]?.date).format('DD-MM-YYYY'))

  const navigate = useNavigate();

  const { auth } = useContext(AuthContext)
  const {damData,setDamData} = useContext(DamDataContext)
  const { raingaugeData } = useContext(RaingaugeContext)
  const { dates, averages } = processRainfallData(raingaugeData.filter(item=>parseInt(item.catchment_dam_id)===parseInt(selectedDamId)));
  //console.log('filterd dam analysis',damData)

  const [donutState, setDonutState] = useState(donutStyles({data:filteredDamData?.[0]}));
  const [stateInflow, setStateInflow] = useState(inflowStyles({data:filteredDamData?.[0],rainfall:averages,date:dates}));
  const [state, setState] = useState(getWaterLevelStyles({mode,color,data:filteredDamData?.[0]}));

  const{expand} = useContext(SettingsContext)

  const {liveStorage,liveStorageAtFRL,percentage,formattedTime,alertColor,date,name} = getCardData({item:filteredDamData?.[0]})

  const fetchAllDamData = useCallback(async (params = {})=>{
          try {
              const {data} = await getDamData(params)
              setDamData(data)
          } catch (error) {
              console.error("Error fetching dam data:", error)
          }
      },[setDamData])

  const checkUserIsAssigned = useCallback(async (object)=>{
          try {
              const {data} = await checkDamHandlingUser(object)
              setDamHandlingUser(data)
          } catch (error) {
              console.error("Error checkDamHandlingUser:", error)
              setDamHandlingUser()
          }
      },[])

  useEffect(()=>{
    setFilteredDamData(damData.filter((item)=>item.id===selectedDamId))
  },[selectedDamId,damData])

  useEffect(() => {
    if (filteredDamData?.[0]) {
      setState(getWaterLevelStyles({mode, color, data: filteredDamData[0] }));
      setDonutState(donutStyles({data:filteredDamData?.[0]}))
      setStateInflow(inflowStyles({data:filteredDamData?.[0],rainfall:averages,date:dates}))
    }
  }, [filteredDamData, color,mode]);

  useEffect(()=>{
    if(auth?.user?.position.toUpperCase()!=='ADMIN'){
      checkUserIsAssigned({user_id:auth?.user?.id,dam_id:selectedDamId})
    }
  },[checkUserIsAssigned,selectedDamId,auth?.user?.id,auth?.user?.position])

  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex overflow-hidden ${expand?'pl-8':'pl-16'}`}>
         <Wrapper className='w-[50%] h-full'>
            <Wrapper className='w-full  mt-4 flex items-center gap-4' >
                <Select 
                options={damData} 
                onChange={(e)=>setSelectedDamId(parseInt(e.target.value))}
                className='w-28 h-6 bg-inherit rounded-md text-sm border border-color-border dark:border-[#161d29f5] outline-none cursor-pointer' 
                firstOptionClassName="dark:bg-[#121721f5]"
                childClassName="dark:bg-[#121721f5]"
                placeholder="Select Dam" 
                defaultValue={selectedDamId}
                />
                <Button onClick={()=>navigate('/analysis/previous', { state: { id:selectedDamId,previousDate:previousDate } })} className='h-6 text-[12px] font-normal border border-color-border dark:border-[#161d29f5] hover:bg-[#7d8da1f6] hover:text-white'>
                <LuHistory />
                  Previous year
                  </Button>
                  {
                    (damHandlingUser||auth?.user?.position.toUpperCase()==='ADMIN')
                    &&
                    <>
                    <AddSolidIcon title='add dam data' className='size-6 cursor-pointer hover:text-[#7d8da1f6]' onClick={()=>setAddDamData({state:true,damId:selectedDamId,fetchAllDamData:fetchAllDamData})} />
                    {
                      (auth?.user?.position.toUpperCase()==='ADMIN'&&damData.length!==0)
                      &&
                      <FiAlertOctagon title='add dam alert' onClick={()=>setAddDamAlert({state:true,damName:filteredDamData?.[0]?.name,damId:selectedDamId,fetchAllDamData:fetchAllDamData})} className='size-5 cursor-pointer' />
                    }
                    {
                      auth?.user?.position.toUpperCase()==='ADMIN'
                      &&
                      <BiCloudUpload onClick={()=>setAddBulkUpload({state:true,fetchAllDamData:fetchAllDamData})} title='bulk upload' className='size-6 cursor-pointer' />
                    }
                    <MdMoreHoriz title='more..' className='size-6 cursor-pointer' />
                    </>
                  }
                
                {/* <Button onClick={()=>navigate('/analysis/damdata', { state: { id:'1' } })}>navigate {id}</Button> ******/}
            </Wrapper>

            <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                <Wrapper className="w-[48%] h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ">
                    <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                        <Wrapper className='h-full flex items-center'>
                            <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-6' />
                            <Typography tag="p" text={name} className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                        </Wrapper>
                        <FlagIcon className={`size-4 ${alertColor} mr-6`} />
                    </Wrapper>
                    <Wrapper className="w-full h-[70%] flex items-start justify-between">
                        <Wrapper className='h-full ml-6 mt-1'>
                          <Typography tag="p" className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                          <Typography tag="p" text={`${liveStorage} / ${liveStorageAtFRL}`} className="text-sm font-medium  mt-1" />
                          <Typography tag="p" text={`${date} ${formattedTime}`} className="text-xs mt-1" />
                          {/* &&moment(date).format("dddd MMM YY") */}
                        </Wrapper>
                        <Pichart
                            percentage={percentage}
                            className="w-24 h-24 grid place-items-center mr-4"
                            subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                                before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                            innerClassName="text-primary relative text-xs"
                            speed={20}
                        />
                    </Wrapper>
                </Wrapper>

                <Wrapper onDoubleClick={()=>navigate('/analysis/inflow', { state: { id:'1' } })} className="w-[48%] h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 cursor-pointer">
                    
                    <Wrapper className="w-full h-full flex flex-col items-center justify-center">
                    <Typography tag="p" className="text-[#595959] dark:text-[#7d8da196] text-xs mt-6" text="Inflow vs Rainfall" />
                    <ReactApexChart options={stateInflow.options} series={stateInflow.series} type="area" width='100%' height='100%' />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            <Typography tag="h4" className="text-lg font-bold mt-2">
               Water Level 
            </Typography>
            <Wrapper className="w-full h-[50%] flex justify-between" >
            <Wrapper onDoubleClick={()=>navigate('/analysis/water-level', { state: { id:'1' } })} className="w-[800px] h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2">
            <ReactApexChart 
                    options={state.options}
                    series={state.series}  
                    type='bar'
                    height='95%'
                    width='100%'
                    className='px-2 pt-4'
                 />
            </Wrapper>
            </Wrapper>
         </Wrapper>
         <Wrapper className='w-[50%] h-full flex'>
          <Wrapper className='w-[60%] h-full'>
              <Typography tag="h4" className="text-lg font-bold mt-2 ml-8" text="Readings" />
              <Wrapper className='pt-4 w-[350px] h-44 flex justify-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ml-8'>
                <ReactApexChart options={donutState.options} series={donutState.series} type="donut" width={300} height={400} />
              </Wrapper>
              <Typography tag="h4" className="text-lg font-bold mt-6 pl-8" text="Dam Constant Metrics" />
              <Wrapper className='h-full pl-8 mt-1 flex flex-col gap-3'>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium" >
                            Maximum Water Level(MWL): <Typography tag='span' className="text-primary" text={filteredDamData?.[0]?.MWL} /> (meter)
                      </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium mt-1" >
                            Full Reservoir Level(FRL): <Typography tag='span' className="text-primary" text={filteredDamData?.[0]?.FRL} /> (meter)
                      </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium mt-1" >
                            Spillway Crest Level: <Typography tag='span' className="text-primary" text={filteredDamData?.[0]?.spillway_crest_level} /> (meter)
                      </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <Typography tag="p" className="text-xs font-medium mt-1" >
                            Live Storage at FRL: <Typography tag='span' className="text-primary" text={filteredDamData?.[0]?.live_storage_at_FRL} /> (Million Cubic Meters)
                        </Typography>
                 </Wrapper>
                 <Wrapper className='w-[90%] p-6 h-12 rounded-xl gap-4 flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                        <Typography tag="p" className="text-xs font-medium mt-1" >
                            Rule Level: <Typography tag='span' className="text-primary" text={filteredDamData?.[0]?.dam_data?.[0]?.alert?.rule_level} /> (meter)
                        </Typography>
                 </Wrapper>  
                 <Wrapper className='w-[90%] h-12 flex items-center'>
                        <Wrapper className='size-3 bg-color-blue rounded-full'/>
                        <Typography tag='span' className="text-xs font-medium pl-2"  text={filteredDamData?.[0]?.dam_data?.[0]?.alert?.blue_level} />
                        <Wrapper className='size-3 bg-color-orange rounded-full ml-4'/>
                        <Typography tag='span' className="text-xs font-medium pl-2"  text={filteredDamData?.[0]?.dam_data?.[0]?.alert?.orange_level} />
                        <Wrapper className='size-3 bg-color-red rounded-full ml-4'/>
                        <Typography tag='span' className="text-xs font-medium pl-2"  text={filteredDamData?.[0]?.dam_data?.[0]?.alert?.red_level} />
                        
                 </Wrapper>             
              </Wrapper>
          </Wrapper>
          <Wrapper className='w-[40%] h-full'>
          <Wrapper className={`w-full ${filteredDamData?.[0]?.dam_data?.[0]?.remarks===null?'h-full':'h-[63vh]'} overflow-y-scroll no-scrollbar`}>
          <Typography tag="h4" className="text-lg font-bold mt-2 " text="Rainfall" />
          <Wrapper className='w-full h-[80vh] flex flex-col gap-3 overflow-y-scroll no-scrollbar mt-2 '>
            {
              raingaugeData.filter(item=>parseInt(item.catchment_dam_id)===parseInt(selectedDamId)).map((data,index)=>{
                  const value = parseFloat(data?.raingauge_data?.[0]?.value) || 0;
                  const date = data?.raingauge_data?.[0]?.date|| 0;
                  const redLevel = parseFloat(data?.red_level);
                  const orangeLevel = parseFloat(data?.orange_level);
                  const yellowLevel = parseFloat(data?.yellow_level);
                  const color = rainAlertColor(value, 'text', redLevel, orangeLevel, yellowLevel);

                  return(
                    <Wrapper key={index} className='w-60 p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200 overflow-x-scroll no-scrollbar'>
                      <IoMdRainy /> 
                      <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1 ">
                      {data?.station_name}- 
                        <Typography tag='span' className={`${color}`} text={value} />
                        mm
                        </Typography>
                        <Typography tag='span' className='text-[10px] text-black dark:text-[#7d8da196] ml-auto' text={date&&moment(date).format("dd MM YYYY")}></Typography>
                      </Wrapper>
                  )
              })
            }
            {
              raingaugeData.filter(item=>parseInt(item.catchment_dam_id)===parseInt(selectedDamId)).length===0&&
                    <Wrapper className='w-60 p-6 h-12 rounded-xl flex justify-center items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200 overflow-x-scroll no-scrollbar'>
                        <Typography tag='span' className='text-[11px] text-color-red'>
                          No rainfall data available for this dam
                        </Typography>
                    </Wrapper>
            }
          </Wrapper>
          
          </Wrapper>
          { filteredDamData?.[0]?.dam_data?.[0]?.remarks &&  <Wrapper className='w-full h-auto pt-2'>
                <Typography tag="h4" className="text-lg font-bold mt-2 " text="Remarks" />
                <Wrapper className='w-60 mt-1 h-auto max-h-24 rounded-xl border border-primary dark:bg-[#121721f5] pl-2 cursor-pointer overflow-y-scroll no-scrollbar p-2 '>
                  <Typography tag="p" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                    {filteredDamData?.[0]?.dam_data?.[0]?.remarks}
                  </Typography>
                </Wrapper>
            </Wrapper>}
           </Wrapper>
           
         </Wrapper>
    </Wrapper>
  )
}

export default Analysis
