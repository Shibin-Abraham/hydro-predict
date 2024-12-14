/* eslint-disable react/prop-types */

import Wrapper from "../../Atom/Wrapper/Wrapper"
import Typography from "../../Atom/Typography/Typography"
import { changeState } from "./utils"


const TabBtn = ({ btnState, setBtnState, count }) => {
    return (
        <Wrapper className="w-60 h-4 ml-4 flex items-center justify-between overflow-hidden rounded-md">
            <Wrapper
                onClick={() => changeState(1, setBtnState)}
                className={`w-14 h-full ${btnState.redLevel ? 'bg-color-red' : 'border-[1px] border-color-red'} flex items-center justify-center  rounded-s-full cursor-pointer group hover:bg-color-red`}>
                <Wrapper className="w-4 h-3 rounded-full flex items-center justify-center ">
                    <Typography tag="span" text={count.red} className={`text-[12px] ${btnState.redLevel ? 'text-white' : 'text-color-red'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>

            <Wrapper
                onClick={() => changeState(2, setBtnState)}
                className={`w-14 h-full ${btnState.orangeLevel ? 'bg-color-orange' : 'border-[1px] border-color-orange'} flex items-center justify-center cursor-pointer group hover:bg-color-orange`}>
                <Wrapper className="w-4 h-3 rounded-full flex items-center justify-center ">
                    <Typography tag="span" text={count.orange} className={`text-[12px] ${btnState.orangeLevel ? 'text-white' : 'text-color-orange'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>

            <Wrapper
                onClick={() => changeState(3, setBtnState)}
                className={`w-14 h-full ${btnState.blueLevel ? 'bg-color-blue' : 'border-[1px] border-color-blue'} flex items-center justify-center cursor-pointer group hover:bg-color-blue`}>
                <Wrapper className="w-4 h-3 rounded-full flex items-center justify-center ">
                    <Typography tag="span" text={count.blue} className={`text-[12px] ${btnState.blueLevel ? 'text-white' : 'text-color-blue'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>

            <Wrapper
                onClick={() => changeState(4, setBtnState)}
                className={`w-14 h-full ${btnState.normalLevel ? 'bg-black dark:bg-[#999da6f5]' : 'border-[1px]  border-black dark:border-[#999da6f5]'} flex items-center justify-center rounded-e-full cursor-pointer group hover:bg-black hover:dark:bg-[#999da6f5]`}>
                <Wrapper className="w-4 h-3 rounded-full flex items-center justify-center ">
                    <Typography tag="span" text={count.normal} className={`text-[12px] mt-[0px] ${btnState.normalLevel ? 'text-white' : 'text-black dark:text-[#999da6f5]'} group-hover:text-white`} />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default TabBtn
