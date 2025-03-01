/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import FlagIcon from "../../Assets/icons/FlagIcon"
import MapPointerIcon from "../../Assets/icons/MapPointerIcon"
import Media from "../AtomicDesign/Atom/Media/Media"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Pichart from "../AtomicDesign/Molecule/Pichart/Pichart"
import iconDam from "../../Assets/dam.png"
import drop from "../../Assets/drop.png"
import { ResponsiveLine } from '@nivo/line'
import { damAlertColor, data, getDamAlerts, getDamColor, transformDamData } from './utils'
import './style.css'
import TabBtn from "../AtomicDesign/Molecule/TabBtn/TabBtn"
import { useCallback, useContext, useEffect, useState } from "react"
import { getDamData } from "../../API/Handler/getDataHandler"
import { usePopUp } from "../Contexts/PopUpContext"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Autoplay } from "swiper/modules"
import moment from "moment"
import PichartCardSkeleton from "./loader/PichartCardSkeleton"
import DamAlertCardSkeleton from "./loader/DamAlertCardSkeleton"
import ResposiveLineSkeleton from "./loader/ResposiveLineSkeleton"
import LegendSkeleton from "./loader/LegendSkeleton"



const DashBoard = ({mode,setMode,setTheme}) => {
    const {showError } = usePopUp()
    const [allDamData,setAllDamData] = useState([])
    const [damAlertData,setDamAlertData] = useState([])
    const [chartData,setChartData] = useState()
    const [loadingDamData,setLoadingDamData] = useState(true)
    const [btnState, setBtnState] = useState({})
    const [hasError, setHasError] = useState(false)


    const fetchAllDamData = useCallback(async (params = {})=>{
        try {
            const {data} = await getDamData(params)
            setAllDamData(data)
            setDamAlertData(getDamAlerts(data))// filter dam data for alerts
            setChartData(transformDamData(data))//filter dam data for chart
            setLoadingDamData(false)
        } catch (error) {
            console.error("Error fetching dam data:", error)
            const errorMsg = error.response?.data?.error || error.response?.data?.message || 'An error occurred while fetching dam data.';
            if (!hasError) {
                showError(errorMsg)
                setHasError(true)
            }
        }
    },[showError,hasError])

    useEffect(() => {
        
        fetchAllDamData({offset:0}) //pass parameters- fetchAllDamData({test:'Test: An error occurred while fetching dam data.'});
      }, [fetchAllDamData])


      useEffect(() => {
        if (!damAlertData.length) return
        // Only set initial tab if no tab is active
        const hasActiveTab = Object.values(btnState).some(Boolean)
        if (hasActiveTab) return

        const priorityOrder = [
            { filter: filterRedAlert, stateKey: 'redLevel' },
            { filter: filterOrangeAlert, stateKey: 'orangeLevel' },
            { filter: filterBlueAlert, stateKey: 'blueLevel' },
            { filter: filterNoAlert, stateKey: 'normalLevel' }
        ];

        const activeTab = priorityOrder.find(({ filter }) => 
            filter(damAlertData).length > 0
        );

        if (activeTab) {
            setBtnState({ [activeTab.stateKey]: true });
        }
    }, [damAlertData, btnState]);  
    
      //console.log(allDamData,filterRedAlert(damAlertData))
    

    return (
        <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex">

            <Wrapper className='w-[62vw] pl-8 pt-8'>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 9000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={3}
                    className='w-full flex items-center'
                    >
                        
                    {
                        allDamData?.map((item,index)=>{
                            const liveStorage = item?.dam_data[0]?.live_storage??0
                            const liveStorageAtFRL = item?.live_storage_at_FRL??0

                            const percentage = (liveStorage / liveStorageAtFRL) * 100
                            const formattedTime = moment(item?.dam_data[0]?.time??0, 'HH:mm').format('hh:mm A');

                            const alertColor = damAlertColor({
                                prefix:'text',
                                value:item?.dam_data[0]?.water_level,
                                blueLevel:item?.dam_data[0]?.blue_level,
                                orangeLevel:item?.dam_data[0]?.orange_level,
                                redLevel:item?.dam_data[0]?.red_level,
                                defaultLightColor:'#595959',
                                defaultDarkColor:'#7d8da196',
                            })

                            return (<SwiperSlide key={index}  >
                                        <Wrapper onClick={()=>setMode((prev)=>prev==='dark'?'light':'dark')} className="w-72 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg">
                                            <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                                                <Wrapper className='h-full flex items-center'>
                                                    <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-6' />
                                                    <Typography tag="p" text={`${item.name[0].toUpperCase()}${item.name.slice(1)}`} className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                                                </Wrapper>
                                                <FlagIcon className={`size-4 ${alertColor} mr-6`} />
                                            </Wrapper>
                                            <Wrapper className="w-full h-[70%] flex items-start justify-between">
                                                <Wrapper className='h-full ml-6 mt-1'>
                                                    <Typography tag="p" className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                                                    <Typography tag="p" text={`${liveStorage} / ${liveStorageAtFRL}`} className="text-sm font-medium  mt-1" />
                                                    <Typography tag="p" text={`${item.dam_data[0]?.date} ${formattedTime}`} className="text-xs mt-1" />
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
                                    </SwiperSlide>)
                        })
                        
                    }
                    {loadingDamData && <> 
                    <SwiperSlide><PichartCardSkeleton mode={mode} /></SwiperSlide>
                    <SwiperSlide><PichartCardSkeleton mode={mode} /></SwiperSlide>
                    <SwiperSlide><PichartCardSkeleton mode={mode}/></SwiperSlide>
                    </>}
                    </Swiper>


                <Typography tag="h4" className="text-lg font-bold mt-4" text="Inflow Chart" />
                <Wrapper className="w-full h-[60%] flex justify-between">
                    <Wrapper className="w-[800px] h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mr-4">
                        {
                            !loadingDamData 
                            && 
                            <ResponsiveLine
                                data={chartData}
                                margin={{ top: 20, right: 30, bottom: 50, left: 40 }}
                                lineWidth={3}
                                xScale={{ type: 'point' }}
                                yScale={{
                                    type: 'linear',
                                    min: 'auto',
                                    max: 'auto',
                                    stacked: true,
                                    reverse: false
                                }}
                                colors={({ id }) => getDamColor(id)}
                                yFormat=" >-.2f"
                                gridXValues={{}}
                                axisTop={null}
                                axisRight={null}
                                axisBottom={{
                                    tickSize: 10,
                                    tickPadding: 0,
                                    tickRotation: 0,
                                    legendOffset: 36,
                                    legendPosition: 'middle',
                                    truncateTickAt: 0,
                                }}
                                axisLeft={{
                                    tickValues:0,
                                    legend: 'Inflow',
                                    legendOffset: -10,
                                    legendPosition: 'middle',
                                    
                                }}
                                theme={{
                                    axis: {
                                        ticks: {
                                            text: {
                                                fill: '#7d8da196'
                                            }
                                        },
                                        legend: {
                                            text: {
                                                fill: '#7d8da196'
                                            }
                                        }
                                    },
                                    grid: {
                                        line: {
                                            stroke: '#7d8da196',
                                            strokeWidth: 1,   // Optional: Set grid line thickness
                                            strokeDasharray: '4 4',
                                        }
                                    }
                                }}
                                pointSize={4}
                                pointColor={{ theme: 'background' }}
                                pointBorderWidth={4}
                                pointBorderColor={{ from: 'serieColor' }}
                                pointLabel="data.yFormatted"
                                pointLabelYOffset={-12}
                                enableTouchCrosshair={true}
                                useMesh={true}

                            />
                        }
                        {
                            loadingDamData &&<ResposiveLineSkeleton mode={mode} />
                        }
                        
                    </Wrapper>
                    <Wrapper className="w-24 h-full flex flex-col items-center justify-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg">
                        {
                        !loadingDamData
                        ?
                        chartData?.slice().reverse().map((dam, index) => (
                            <Wrapper key={index} className="w-full flex flex-col items-center">
                            <Wrapper 
                                className='w-2 h-2 rounded-full mt-2' 
                                style={{ backgroundColor: getDamColor(dam.id) }}
                            />
                            <Typography 
                                tag="p" 
                                className="text-[10px] font-light mt-1 text-center"
                                text={dam.id}
                            />
                            </Wrapper>
                        ))
                        :
                        <LegendSkeleton mode={mode} />
                    }

                    </Wrapper>
                </Wrapper>

            </Wrapper>
            {/* alert section */}
            <Wrapper className='w-[30%] h-[85vh] mr-5 ml-9'>
                <Wrapper className="w-full flex items-center">
                    <Typography tag="h4" className="text-lg font-bold" text="Alert" />
                    <TabBtn 
                        btnState={btnState} 
                        setBtnState={setBtnState} 
                        count={{
                            red: filterRedAlert(damAlertData).length,
                            orange: filterOrangeAlert(damAlertData).length,
                            blue: filterBlueAlert(damAlertData).length,
                            normal: filterNoAlert(damAlertData).length
                            }} />
                </Wrapper>

                <Wrapper className="w-full h-48 border-2 border-color-border dark:border-[#121721f5] rounded-lg overflow-y-scroll no-scrollbar">
                    {
                        loadingDamData 
                        && 
                        <DamAlertCardSkeleton mode={mode} />
                    }

                    {
                        btnState?.redLevel && (<>
                        {
                            filterRedAlert(damAlertData).map((item,index)=>{
                                return(
                                    <Wrapper key={index} className='w-[100%] h-16 flex items-center bg-color-red-variant'>
                                        <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                        <Wrapper className="w-[75%] flex items-center">
                                            <Wrapper className='w-24 '>
                                                <Typography tag="p" className="text-sm ml-2 capitalize" text={item.name} />
                                                <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text={`Live: ${item.water_level}`} />
                                            </Wrapper>
                                            <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                            <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.blue_level} />
                                            <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                            <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.orange_level} />
                                            <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                            <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.red_level} />
                                        </Wrapper>
                                        <Wrapper className="w-[10%] mr-2" >
                                            <FlagIcon className="size-4 ml-2 text-color-red" />
                                        </Wrapper>
                                    </Wrapper>
                                )
                            })
                        }
                        </>)
                    }
                    {
                        btnState?.orangeLevel && (<>
                            {
                                filterOrangeAlert(damAlertData).map((item,index)=>{
                                    return(
                                        <Wrapper key={index} className='w-[100%] h-16 flex items-center bg-color-orange-variant'>
                                            <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                            <Wrapper className="w-[75%] flex items-center">

                                                <Wrapper className='w-24 '>
                                                    <Typography tag="p" className="text-sm ml-2" text={item.name} />
                                                    <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text={`Live: ${item.water_level}`} />
                                                </Wrapper>

                                                <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.blue_level} />
                                                <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.orange_level} />
                                                <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.red_level} />
                                            </Wrapper>
                                            <Wrapper className="w-[10%] mr-2" >
                                                <FlagIcon className="size-4 ml-2 text-color-orange" />
                                            </Wrapper>
                                        </Wrapper>
                                    )
                                })
                            }
                            </>)
                    }
                    {
                        btnState?.blueLevel && (<>
                            {
                                filterBlueAlert(damAlertData).map((item,index)=>{
                                    return(
                                        <Wrapper key={index} className='w-[100%] h-16 flex items-center bg-color-blue-variant'>
                                            <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                            <Wrapper className="w-[75%] flex items-center">
            
                                                <Wrapper className='w-24 '>
                                                    <Typography tag="p" className="text-sm ml-2" text={item.name} />
                                                    <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text={`Live: ${item.water_level}`} />
                                                </Wrapper>
            
                                                <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.blue_level} />
                                                <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.orange_level} />
                                                <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.red_level} />
                                            </Wrapper>
                                            <Wrapper className="w-[10%] mr-2" >
                                                <FlagIcon className="size-4 ml-2 text-color-blue" />
                                            </Wrapper>
                                    </Wrapper>
                                    )
                                })
                            }
                            </>)
                    }

                    {
                        btnState?.normalLevel && (<>
                            {
                                filterNoAlert(damAlertData).map((item,index)=>{
                                    return(
                                        <Wrapper key={index} className='w-[100%] h-16 flex items-center bg-[#57575740]'>
                                            <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                            <Wrapper className="w-[75%] flex items-center">

                                                <Wrapper className='w-24 '>
                                                    <Typography tag="p" className="text-sm ml-2" text={item.name} />
                                                    <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text={`Live: ${item.water_level}`} />
                                                </Wrapper>

                                                <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.blue_level} />
                                                <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.orange_level} />
                                                <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text={item.red_level} />
                                            </Wrapper>
                                            <Wrapper className="w-[10%] mr-2" >
                                                <FlagIcon className="size-4 ml-2" />
                                            </Wrapper>
                                        </Wrapper>
                                    )
                                })
                            }
                            </>)
                    }
                </Wrapper>

                <Typography tag="h4" className="text-lg font-bold mt-3" text="Rainfall Alert" />
                <Wrapper className="w-full h-[46vh] overflow-y-scroll no-scrollbar mt-2 flex flex-col gap-3">
                    <Wrapper onClick={()=>setTheme('green')} className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e]  ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper onClick={()=>setTheme('blue')} className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e]  ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e] ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#fd7418] ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full ml-auto mr-4' />
                    </Wrapper>
                    
                </Wrapper>

            </Wrapper>

        </Wrapper>
    )
}

export default DashBoard


const filterRedAlert = (data)=>data.filter((item)=>item.alert==='red')
const filterOrangeAlert = (data)=>data.filter((item)=>item.alert==='orange')
const filterBlueAlert = (data)=>data.filter((item)=>item.alert==='blue')
const filterNoAlert = (data)=>data.filter((item)=>item.alert==='no')
