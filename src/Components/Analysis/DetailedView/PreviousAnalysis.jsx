/* eslint-disable react/prop-types */

import ReactApexChart from 'react-apexcharts'
import FlagIcon from '../../../Assets/icons/FlagIcon'
import MapPointerIcon from '../../../Assets/icons/MapPointerIcon'
import Typography from '../../AtomicDesign/Atom/Typography/Typography'
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'
import Pichart from '../../AtomicDesign/Molecule/Pichart/Pichart'
import { useCallback, useContext, useEffect, useState } from 'react'
import { getColor, donutStyles, inflowStyles, getWaterLevelStyles, getCardData } from '../utils'
import Media from '../../AtomicDesign/Atom/Media/Media'
import drop from "../../../Assets/drop.png"
import { useLocation, useNavigate } from 'react-router-dom'
import SettingsContext from '../../Contexts/SettingsContext/SettingsContext'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { getDamData, getRaingaugeData } from '../../../API/Handler/getDataHandler'
import moment from 'moment'
import { BsDatabaseFillSlash } from 'react-icons/bs'
import { alertColor as rainAlertColor } from "../../AtomicDesign/Molecule/Gauge/utils"
import { processRainfallData } from '../../RainGauge/utils'
import { IoMdRainy } from 'react-icons/io'

const PreviousAnalysis = ({mode,theme}) => {
  const color = getColor({theme}) 
  const [loadingDamData,setLoadingDamData] = useState(false)
  const [prevRainfallData,setPrevRainfallData] = useState([])

  const location = useLocation()
  const { id,previousDate } = location.state || {}
  //const { raingaugeData } = useContext(RaingaugeContext)
  const { dates, averages } = processRainfallData(prevRainfallData.filter(item=>parseInt(item.catchment_dam_id)===parseInt(id)));
    console.log('previous date',previousDate)

  const [filteredDamData,setFilteredDamData] = useState()
  const parsedDate = moment(previousDate, 'DD-MM-YYYY');
  const initialDate = parsedDate.isValid() ? parsedDate.toDate() : new Date();
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const navigate = useNavigate();

  const [donutState, setDonutState] = useState(donutStyles({data:filteredDamData?.[0]}));
  const [stateInflow, setStateInflow] = useState(inflowStyles({data:filteredDamData?.[0],rainfall:averages,date:dates}));
  const [state, setState] = useState(getWaterLevelStyles({mode,color,data:filteredDamData?.[0]}));

  const{expand} = useContext(SettingsContext)

  const {liveStorage,liveStorageAtFRL,percentage,formattedTime,alertColor,date,name} = getCardData({item:filteredDamData?.[0]})

  const fetchAllDamData = useCallback(async (params = {})=>{
          try {
              setLoadingDamData(true)
              const {data} = await getDamData(params)
              setFilteredDamData(data.filter((item)=>item.id===id))
          } catch (error) {
              console.error("Error fetching dam data:", error)
          }finally{
            setLoadingDamData(false)
          }
      },[id])
  const fetchAllRaingaugeData = useCallback(async (params = {}) => {
          try {
              const { data } = await getRaingaugeData(params);
              console.log('Raingauge Data', data);
  
              // Filter raingauges with and without data
              const raingaugesWithData = data.filter(rg => rg.raingauge_data.length > 0);
              const raingaugesWithoutData = data.filter(rg => rg.raingauge_data.length === 0);
  
              // Sort raingauges with data by latest value in descending order
              const sortedRaingaugesWithData = raingaugesWithData.sort((a, b) => {
                  const valA = parseFloat(a.raingauge_data[0].value) || 0;
                  const valB = parseFloat(b.raingauge_data[0].value) || 0;
                  return valB - valA; // Sorts in descending order
              });
  
              // Combine sorted raingauges with data and those without
              const sortedData = [...sortedRaingaugesWithData, ...raingaugesWithoutData];
  
              // Update state with sorted data
              setPrevRainfallData(sortedData);
          } catch (error) {
              console.error("Error fetching Raingauge data:", error);
              const errorMsg = error.response?.data?.error || 
                               error.response?.data?.message || 
                               'An error occurred while fetching Raingauge data.';
              console.error(errorMsg);
          } 
      }, []);
  
  useEffect(() => {
    const isValidDate = previousDate && moment(previousDate, 'DD-MM-YYYY').isValid();
    let formattedDate;
    if (isValidDate) {
      formattedDate = moment(previousDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
    } else {
      console.error("Invalid previousDate:", previousDate);
      formattedDate = moment().subtract(1, 'year').format('YYYY-MM-DD');
    }
    fetchAllDamData({ date: formattedDate, id: id }); //pass parameters- fetchAllDamData({test:'Test: An error occurred while fetching dam data.'});
    fetchAllRaingaugeData({ date: formattedDate });
  }, [fetchAllDamData,id,previousDate,fetchAllRaingaugeData])

  useEffect(() => {
    if (filteredDamData?.[0]&&filteredDamData?.[0].dam_data.length!==0) {
      setState(getWaterLevelStyles({mode, color, data: filteredDamData[0] }));
      setDonutState(donutStyles({data:filteredDamData?.[0]}))
      setStateInflow(inflowStyles({data:filteredDamData?.[0],rainfall:averages,date:dates}))
    }
  }, [filteredDamData, color,mode]);

  useEffect(() => {
    if (selectedDate) {
      fetchAllDamData({
        date: moment(selectedDate).format('YYYY-MM-DD'),
        id: id
      });
      fetchAllRaingaugeData({ date: moment(selectedDate).format('YYYY-MM-DD') });
    }
  }, [fetchAllDamData, id, selectedDate]);

  if (!filteredDamData || filteredDamData?.length === 0 || !filteredDamData?.[0]?.dam_data || filteredDamData?.[0]?.dam_data?.length === 0) {
    return <Wrapper className='pl-8 pt-8 text-[#595959] dark:text-[#7d8da1]'>
              <Wrapper className='w-full flex items-center gap-4' >
                <Typography tag="p" className='font-medium text-base capitalize' >
                    Same day previous year - 
                    <Typography tag='span' className='text-primary pl-1' text={name} />
                </Typography>
                <DatePicker  
                  selected={selectedDate} 
                  onChange={(date) => setSelectedDate(date)} 
                  maxDate={new Date()} 
                  dateFormat="d MMMM, yyyy"
                  className='font-medium text-sm w-36 outline-none pl-1 rounded-md bg-transparent border border-color-border'
                />
            </Wrapper>
          <Typography tag='h5' className='pt-4 text-lg'>{filteredDamData?.[0]?.dam_data?.length===0?<><BsDatabaseFillSlash className='size-12' /> Empty</>:'fetching data...'}</Typography>
          </Wrapper>
      }

  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex overflow-hidden ${expand?'pl-8':'pl-16'}`}>
         <Wrapper className='w-[50%] h-full'>
            <Wrapper className='w-full mt-4 flex items-center gap-4' >
            <Typography tag="p" className='font-medium text-base capitalize' >
                Same day previous year - 
                <Typography tag='span' className='text-primary pl-1' text={name} />
            </Typography>
            <DatePicker  
              selected={selectedDate} 
              onChange={(date) => setSelectedDate(date)} 
              maxDate={new Date()} 
              dateFormat="d MMMM, yyyy"
              className='font-medium text-sm w-36 outline-none pl-1 rounded-md bg-transparent border border-color-border'
             />

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
                    <Typography tag="p" className="text-[#595959] dark:text-[#7d8da196] text-xs mt-6" text="Inflow 7 days" />
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
              prevRainfallData.filter(item=>parseInt(item.catchment_dam_id)===parseInt(id)).map((data,index)=>{
                  const value = parseFloat(data?.raingauge_data?.[0]?.value) || 0;
                  const date = data?.raingauge_data?.[0]?.date|| 0;
                  const redLevel = parseFloat(data?.red_level);
                  const orangeLevel = parseFloat(data?.orange_level);
                  const yellowLevel = parseFloat(data?.yellow_level);
                  const color = rainAlertColor(value, 'text', redLevel, orangeLevel, yellowLevel);

                  return(
                    <Wrapper key={index} className='w-[90%] p-6 h-12 rounded-xl flex justify-start items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] pl-2 cursor-pointer hover:ml-1 transition-all ease-linear duration-200'>
                      <IoMdRainy />    
                      <Typography tag="span" className="text-xs text-black dark:text-[#7d8da196] ml-1">
                      {data?.station_name}- 
                        <Typography tag='span' className={`${color}`} text={value} />
                        mm
                        </Typography>
                        <Typography tag='span' className='text-xs text-black dark:text-[#7d8da196] ml-auto' text={date}></Typography>
                      </Wrapper>
                  )
              })
            }
            {
              prevRainfallData.filter(item=>parseInt(item.catchment_dam_id)===parseInt(id)).length===0&&
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
                <Wrapper className='w-60 mt-1 h-24 rounded-xl border-2 border-primary-hover dark:bg-[#121721f5] pl-2 cursor-pointer overflow-y-scroll no-scrollbar p-2'>
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

export default PreviousAnalysis
