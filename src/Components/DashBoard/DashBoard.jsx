/* eslint-disable react/prop-types */
import FlagIcon from "../../assets/icons/FlagIcon"
import MapPointerIcon from "../../assets/icons/MapPointerIcon"
import Media from "../AtomicDesign/Atom/Media/Media"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Pichart from "../AtomicDesign/Molecule/Pichart.jsx/Pichart"
import iconDam from "../../assets/dam.png"
import './style.css'


const DashBoard = () => {

    return (
        <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex">

            <Wrapper className='w-[70%] h-full'>

                <Wrapper className='w-full flex items-start justify-between'>

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
                <Typography tag="h4" className="text-lg font-bold mt-6 ml-8" text="Alert" />
                <Wrapper className="w-full flex justify-between">
                    <Wrapper className="w-[490px] relative h-[355px] border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ml-8">

                    </Wrapper>
                    <Wrapper className="w-[390px] relative h-[320px] border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2">

                    </Wrapper>
                </Wrapper>

            </Wrapper>
            {/* alert section */}
            <Wrapper className='w-[30%] h-full pr-6 pl-9'>
                <Typography tag="h4" className="text-lg font-bold" text="Alert" />

                <Wrapper className="w-full h-48 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg overflow-y-scroll no-scrollbar">

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

                    <Wrapper className='w-[100%] h-16 flex items-center'>
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

                    <Wrapper className='w-[100%] h-16 flex items-center bg-color-orange-variant'>
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

                    <Wrapper className='w-[100%] h-16 flex items-center'>
                        <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant ml-4 rounded-md" imgClass="rounded-none" />
                        <Wrapper className="w-[75%] flex items-center">

                            <Wrapper className='w-24 '>
                                <Typography tag="p" className="text-sm ml-2" text="Idukki" />
                                <Typography tag="p" className="text-[10px] ml-2 dark:text-[#7d8da196] leading-3" text="Live: 727.23 m" />
                            </Wrapper>

                            <Wrapper className='w-2 h-2 bg-[#8575ff] relative rounded-full ml-2' />
                            <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                            <Wrapper className='w-2 h-2 bg-[#fd7418] relative rounded-full ml-2' />
                            <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                            <Wrapper className='w-2 h-2 bg-[#ff0d3e] relative rounded-full ml-2' />
                            <Typography tag="p" className="text-[10px] dark:text-[#7d8da196] leading-3 ml-1" text="728.73" />
                        </Wrapper>
                        <Wrapper className="w-[10%] mr-2" >
                            <FlagIcon className="size-4 ml-2" />
                        </Wrapper>
                    </Wrapper>

                </Wrapper>
            </Wrapper>

        </Wrapper>
    )
}

export default DashBoard
