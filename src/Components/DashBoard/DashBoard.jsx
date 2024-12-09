/* eslint-disable react/prop-types */
import FlagIcon from "../../assets/icons/FlagIcon"
import MapPointerIcon from "../../assets/icons/MapPointerIcon"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Pichart from "../AtomicDesign/Molecule/Pichart.jsx/Pichart"


const DashBoard = () => {

    return (
        <Wrapper className="w-full h-full text-black dark:text-[#7d8da1] text-lg">
            <Wrapper className='w-full flex items-start justify-between'>

                <Wrapper className="w-52 h-36 border-[1.5px] border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-8 ml-8">
                    <Wrapper className='w-full h-[30%] flex items-center justify-between'>
                        <Wrapper className='h-full flex items-center'>
                            <MapPointerIcon className='size-3 text-black dark:text-[#7d8da196] ml-4' />
                            <Typography tag="p" text='idukki dam' className='text-black dark:text-[#7d8da196] text-xs ml-1' />
                        </Wrapper>
                        <FlagIcon className='size-3 text-black dark:text-[#7d8da196] mr-6' />
                    </Wrapper>
                    <Wrapper className="w-full h-[70%] flex items-center justify-between">
                        <Wrapper className='h-full ml-4'>
                            <Typography tag="p" className="text-sm font-semibold mt-4" text="Water Level" />
                        </Wrapper>
                        <Pichart
                            percentage={60}
                            className="w-24 h-24 grid place-items-center mr-2"
                            subClassName="relative w-16 h-16 rounded-full grid place-items-center before:content-[''] before:absolute before:h-[85%]
                         before:w-[85%] before:bg-[#ffffff] before:dark:bg-[#121720] before:rounded-full"
                            innerClassName="text-primary relative text-xs"
                            speed={20}
                        />
                    </Wrapper>

                </Wrapper>


            </Wrapper>

        </Wrapper>
    )
}

export default DashBoard
