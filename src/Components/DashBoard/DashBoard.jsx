/* eslint-disable react/prop-types */
import FlagIcon from "../../assets/icons/FlagIcon"
import MapPointerIcon from "../../assets/icons/MapPointerIcon"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Pichart from "../AtomicDesign/Molecule/Pichart.jsx/Pichart"


const DashBoard = () => {

    return (
        <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg">

            <Wrapper className='w-[65%] h-full'>
                <Wrapper className='w-full flex items-start justify-between'>
                    <Wrapper className="w-64 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-8 ml-8">
                        <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-4' />
                                <Typography tag="p" text='Idukki' className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                            </Wrapper>
                            <FlagIcon className='size-4 text-[#595959] dark:text-[#7d8da196] mr-4' />
                        </Wrapper>
                        <Wrapper className="w-full h-[70%] flex items-start justify-between">
                            <Wrapper className='h-full ml-4 mt-1'>
                                <Typography tag="p" className="text-xl font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                                <Typography tag="p" text=" 317.54 / 444.85" className="text-sm font-medium  mt-1" />
                                <Typography tag="p" text="Today 7:00 AM" className="text-xs mt-1" />
                            </Wrapper>
                            <Pichart
                                percentage={60}
                                className="w-24 h-24 grid place-items-center mr-2"
                                subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                         before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                                innerClassName="text-primary relative text-xs"
                                speed={20}
                            />
                        </Wrapper>
                    </Wrapper>

                    <Wrapper className="w-64 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-8 ml-8">
                        <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-4' />
                                <Typography tag="p" text='Idukki' className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                            </Wrapper>
                            <FlagIcon className='size-4 text-[#595959] dark:text-[#7d8da196] mr-4' />
                        </Wrapper>
                        <Wrapper className="w-full h-[70%] flex items-start justify-between">
                            <Wrapper className='h-full ml-4 mt-1'>
                                <Typography tag="p" className="text-xl font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                                <Typography tag="p" text=" 317.54 / 444.85" className="text-sm font-medium  mt-1" />
                                <Typography tag="p" text="Today 7:00 AM" className="text-xs mt-1" />
                            </Wrapper>
                            <Pichart
                                percentage={60}
                                className="w-24 h-24 grid place-items-center mr-2"
                                subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                         before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                                innerClassName="text-primary relative text-xs"
                                speed={20}
                            />
                        </Wrapper>
                    </Wrapper>

                    <Wrapper className="w-64 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-8 ml-8">
                        <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <MapPointerIcon className='size-4 text-[#595959] dark:text-[#7d8da196] ml-4' />
                                <Typography tag="p" text='Idukki' className='text-[#595959] dark:text-[#7d8da196] text-sm ml-1' />
                            </Wrapper>
                            <FlagIcon className='size-4 text-[#595959] dark:text-[#7d8da196] mr-4' />
                        </Wrapper>
                        <Wrapper className="w-full h-[70%] flex items-start justify-between">
                            <Wrapper className='h-full ml-4 mt-1'>
                                <Typography tag="p" className="text-xl font-bold mt-2 text-[#1f2328] dark:text-[#7d8da1]" text="Live Storage" />
                                <Typography tag="p" text=" 317.54 / 444.85" className="text-sm font-medium  mt-1" />
                                <Typography tag="p" text="Today 7:00 AM" className="text-xs mt-1" />
                            </Wrapper>
                            <Pichart
                                percentage={60}
                                className="w-24 h-24 grid place-items-center mr-2"
                                subClassName="relative w-20 h-20 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[84%]
                         before:w-[84%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                                innerClassName="text-primary relative text-xs"
                                speed={20}
                            />
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>

        </Wrapper>
    )
}

export default DashBoard
