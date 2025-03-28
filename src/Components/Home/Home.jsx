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
import { data } from './utils'
import './style.css'
import TabBtn from "../AtomicDesign/Molecule/TabBtn/TabBtn"
import { useState } from "react"



const Home = () => {
    const [btnState, setBtnState] = useState({
        redLevel: true,
        orangeLevel: false,
        blueLevel: false,
        normalLevel: false
    })

    return (
        <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex">

            <Wrapper className='w-[70%] h-full'>

                <Wrapper className='w-full h-[30%] flex items-center justify-between'>

                    <Wrapper className="w-72 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-8 ml-8">
                        <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-6' />
                                <Typography tag="p" text='Idukki' className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                            </Wrapper>
                            <FlagIcon className='size-4 text-[#595959] dark:text-[#7d8da196] mr-6' />
                        </Wrapper>
                        <Wrapper className="w-full h-[70%] flex items-start justify-between">
                            <Wrapper className='h-full ml-6 mt-1'>
                                <Typography tag="p" className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                                <Typography tag="p" text=" 317.54 / 444.85" className="text-sm font-medium  mt-1" />
                                <Typography tag="p" text="Today 7:00 AM" className="text-xs mt-1" />
                            </Wrapper>
                            <Pichart
                                percentage={60}
                                className="w-24 h-24 grid place-items-center mr-4"
                                subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                                    before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                                innerClassName="text-primary relative text-xs"
                                speed={20}
                            />
                        </Wrapper>
                    </Wrapper>

                    <Wrapper className="w-72 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-8 ml-8">
                        <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-6' />
                                <Typography tag="p" text='Idukki' className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                            </Wrapper>
                            <FlagIcon className='size-4 text-[#595959] dark:text-[#7d8da196] mr-6' />
                        </Wrapper>
                        <Wrapper className="w-full h-[70%] flex items-start justify-between">
                            <Wrapper className='h-full ml-6 mt-1'>
                                <Typography tag="p" className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                                <Typography tag="p" text=" 317.54 / 444.85" className="text-sm font-medium  mt-1" />
                                <Typography tag="p" text="Today 7:00 AM" className="text-xs mt-1" />
                            </Wrapper>
                            <Pichart
                                percentage={60}
                                className="w-24 h-24 grid place-items-center mr-4"
                                subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                                    before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                                innerClassName="text-primary relative text-xs"
                                speed={20}
                            />
                        </Wrapper>
                    </Wrapper>

                    <Wrapper className="w-72 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-8 ml-8">
                        <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-6' />
                                <Typography tag="p" text='Idukki' className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                            </Wrapper>
                            <FlagIcon className='size-4 text-[#595959] dark:text-[#7d8da196] mr-6' />
                        </Wrapper>
                        <Wrapper className="w-full h-[70%] flex items-start justify-between">
                            <Wrapper className='h-full ml-6 mt-1'>
                                <Typography tag="p" className="text-lg font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                                <Typography tag="p" text=" 317.54 / 444.85" className="text-sm font-medium  mt-1" />
                                <Typography tag="p" text="Today 7:00 AM" className="text-xs mt-1" />
                            </Wrapper>
                            <Pichart
                                percentage={60}
                                className="w-24 h-24 grid place-items-center mr-4"
                                subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                                    before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                                innerClassName="text-primary relative text-xs"
                                speed={20}
                            />
                        </Wrapper>
                    </Wrapper>
                </Wrapper>

                <Typography tag="h4" className="text-lg font-bold mt-4 ml-8" text="Inflow Chart" />
                <Wrapper className="w-full h-[60%] flex justify-between">
                    <Wrapper className="w-[800px] h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-1 ml-8">
                        <ResponsiveLine
                            data={data}
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
                            colors={['#ff0d3e', '#8575ff', '#66ff66', '#fd7418']}
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
                                tickSize: 10,
                                tickPadding: 0,
                                tickRotation: 0,
                                legendPosition: 'middle',
                                truncateTickAt: 20
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
                    </Wrapper>
                    <Wrapper className="w-24 h-full flex flex-col items-center justify-center border-2 border-color-border dark:border-none
                     dark:bg-[#121721f5] rounded-lg mt-1">
                        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e] mt-2' />
                        <Typography tag="p" className="text-[10px] font-light mt-1" text="IDUKKI" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#66ff66] mt-2' />
                        <Typography tag="p" className="text-[10px] font-light mt-1" text="LOWER PERIYAR" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#fd7418] mt-2' />
                        <Typography tag="p" className="text-[10px] font-light mt-1" text="PONMUDI" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#8575ff] mt-2' />
                        <Typography tag="p" className="text-[10px] font-light mt-1" text="KALLARKUTTY" />
                    </Wrapper>
                </Wrapper>

            </Wrapper>
            {/* alert section */}
            <Wrapper className='w-[30%] h-full mr-5 ml-9'>
                <Wrapper className="w-full flex items-center">
                    <Typography tag="h4" className="text-lg font-bold" text="Alert" />
                    <TabBtn btnState={btnState} setBtnState={setBtnState} count={{ red: 2, orange: 1, blue: 2, normal: 2 }} />
                </Wrapper>

                <Wrapper className="w-full h-48 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg overflow-y-scroll no-scrollbar">

                    {
                        btnState.redLevel && <>
                            <Wrapper className='w-[100%] h-16 flex items-center bg-color-red-variant'>
                                <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                <Wrapper className="w-[75%] flex items-center">

                                    <Wrapper className='w-24 '>
                                        <Typography tag="p" className="text-sm ml-2" text="Idukki" />
                                        <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text="Live: 730.88 m" />
                                    </Wrapper>

                                    <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                    <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="730.56" />
                                    <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="730.87" />
                                </Wrapper>
                                <Wrapper className="w-[10%] mr-2" >
                                    <FlagIcon className="size-4 ml-2 text-color-red" />
                                </Wrapper>
                            </Wrapper>
                            <Wrapper className='w-[100%] h-16 flex items-center bg-color-red-variant'>
                                <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                <Wrapper className="w-[75%] flex items-center">

                                    <Wrapper className='w-24 '>
                                        <Typography tag="p" className="text-sm ml-2" text="Idukki" />
                                        <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text="Live: 730.88 m" />
                                    </Wrapper>

                                    <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                    <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="730.56" />
                                    <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="730.87" />
                                </Wrapper>
                                <Wrapper className="w-[10%] mr-2" >
                                    <FlagIcon className="size-4 ml-2 text-color-red" />
                                </Wrapper>
                            </Wrapper>
                        </>
                    }

                    {
                        btnState.orangeLevel && <Wrapper className='w-[100%] h-16 flex items-center bg-color-orange-variant'>
                            <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                            <Wrapper className="w-[75%] flex items-center">

                                <Wrapper className='w-24 '>
                                    <Typography tag="p" className="text-sm ml-2" text="Idukki" />
                                    <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text="Live: 727.23 m" />
                                </Wrapper>

                                <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                            </Wrapper>
                            <Wrapper className="w-[10%] mr-2" >
                                <FlagIcon className="size-4 ml-2 text-color-orange" />
                            </Wrapper>
                        </Wrapper>
                    }
                    {
                        btnState.blueLevel && <>
                            <Wrapper className='w-[100%] h-16 flex items-center bg-color-blue-variant'>
                                <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                <Wrapper className="w-[75%] flex items-center">

                                    <Wrapper className='w-24 '>
                                        <Typography tag="p" className="text-sm ml-2" text="Lower Periyar" />
                                        <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text="Live: 728.74 m" />
                                    </Wrapper>

                                    <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                    <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                    <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                </Wrapper>
                                <Wrapper className="w-[10%] mr-2" >
                                    <FlagIcon className="size-4 ml-2 text-color-blue" />
                                </Wrapper>
                            </Wrapper>
                            <Wrapper className='w-[100%] h-16 flex items-center bg-color-blue-variant'>
                                <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                                <Wrapper className="w-[75%] flex items-center">

                                    <Wrapper className='w-24 '>
                                        <Typography tag="p" className="text-sm ml-2" text="Lower Periyar" />
                                        <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text="Live: 728.74 m" />
                                    </Wrapper>

                                    <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                    <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                    <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                    <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                </Wrapper>
                                <Wrapper className="w-[10%] mr-2" >
                                    <FlagIcon className="size-4 ml-2 text-color-blue" />
                                </Wrapper>
                            </Wrapper>
                        </>
                    }
                    {
                        btnState.normalLevel && <Wrapper className='w-[100%] h-16 flex items-center'>
                            <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                            <Wrapper className="w-[75%] flex items-center">

                                <Wrapper className='w-24 '>
                                    <Typography tag="p" className="text-sm ml-2" text="Anayirankal" />
                                    <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text="Live: 727.23 m" />
                                </Wrapper>

                                <Wrapper className='w-2 h-2 bg-color-blue relative rounded-full ml-2' />
                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                <Wrapper className='w-2 h-2 bg-color-orange relative rounded-full ml-2' />
                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                                <Wrapper className='w-2 h-2 bg-color-red relative rounded-full ml-2' />
                                <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                            </Wrapper>
                            <Wrapper className="w-[10%] mr-2" >
                                <FlagIcon className="size-4 ml-2" />
                            </Wrapper>
                        </Wrapper>
                    }

                </Wrapper>

                <Typography tag="h4" className="text-lg font-bold mt-3" text="Rainfall Alert" />
                <Wrapper className="w-full h-[55%] overflow-y-scroll no-scrollbar mt-2">
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e]  ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e]  ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e] ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <Wrapper className='w-2 h-2 rounded-full bg-[#fd7418] ml-auto mr-4' />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <FlagIcon className="size-4 ml-28 text-color-blue" />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <FlagIcon className="size-4 ml-28 text-color-blue" />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                        <FlagIcon className="size-4 ml-28 text-color-blue" />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                    </Wrapper>
                    <Wrapper className='w-full h-14 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-3'>
                        <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
                        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
                    </Wrapper>
                </Wrapper>

            </Wrapper>

        </Wrapper>
    )
}

export default Home
