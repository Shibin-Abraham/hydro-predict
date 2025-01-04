/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import Wrapper from "../../Atom/Wrapper/Wrapper"

const InputPopUp = ({
    className,
    children
}) => {

    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setTimeout(() => setIsActive(true), 1)
        //setTimeout(() => { setIsActive(false); setForgotPassword(false) }, 9000)
    }, [setIsActive])

    return (
        <Wrapper className={className}>
            <Wrapper
                className={`w-[30%] max-h-[60%] border-[1px] bg-white dark:border-none dark:bg-[#121721f5] rounded-md flex flex-col items-center absolute transition-all ease-linear duration-300 ${isActive ? 'translate-y-0' : '-translate-y-[1720px]'}`}
            >
                {children}
            </Wrapper>
        </Wrapper>

    )
}

export default InputPopUp
