/* eslint-disable react/prop-types */

import Wrapper from "../../Atom/Wrapper/Wrapper"
import Typography from "../../Atom/Typography/Typography"
import { changeState } from "./utils"


const TabBtn = ({ btnState, setBtnState, count }) => {
    return (
        <Wrapper className="w-60 h-3 ml-4 flex items-center overflow-hidden rounded-md">
            <Wrapper
                onClick={() => changeState(1, setBtnState)}
                className={`w-8 h-full rounded-sm ${btnState.redLevel ? 'bg-color-red' : 'bg-color-red-variant'} flex items-center justify-center cursor-pointer group hover:bg-color-red ml-2`}>
                <Wrapper className="w-4 h-3 flex items-center justify-center ">
                    <Typography tag="span" text={count.red} className={`text-[8px] ${btnState.redLevel ? 'text-white' : 'text-color-red'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>

            <Wrapper
                onClick={() => changeState(2, setBtnState)}
                className={`w-8 h-full rounded-sm ${btnState.orangeLevel ? 'bg-color-orange' : 'bg-color-orange-variant'} flex items-center justify-center cursor-pointer group hover:bg-color-orange ml-2`}>
                <Wrapper className="w-4 h-3 flex items-center justify-center ">
                    <Typography tag="span" text={count.orange} className={`text-[8px] ${btnState.orangeLevel ? 'text-white' : 'text-color-orange'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>

            <Wrapper
                onClick={() => changeState(3, setBtnState)}
                className={`w-8 h-full rounded-sm ${btnState.blueLevel ? 'bg-color-blue' : 'bg-color-blue-variant'} flex items-center justify-center cursor-pointer group hover:bg-color-blue ml-2`}>
                <Wrapper className="w-4 h-3 rounded-full flex items-center justify-center ">
                    <Typography tag="span" text={count.blue} className={`text-[8px] ${btnState.blueLevel ? 'text-white' : 'text-color-blue'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>

            <Wrapper
                onClick={() => changeState(4, setBtnState)}
                className={`w-8 h-full rounded-sm ${btnState.normalLevel ? 'bg-black dark:bg-[#999da6f5]' : 'bg-[#86888c6d]'} flex items-center justify-center cursor-pointer group hover:bg-black hover:dark:bg-[#999da6f5] ml-2`}>
                <Wrapper className="w-4 h-3 flex items-center justify-center rounded-md">
                    <Typography tag="span" text={count.normal} className={`text-[8px] mt-[0px] ${btnState.normalLevel ? 'text-white' : 'text-black dark:text-[#999da6f5]'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default TabBtn
