/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import Wrapper from "../../Atom/Wrapper/Wrapper"

const InputPopUp = ({
    className,
    children,
    width,
    height,
    ...restProps
}) => {

    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setTimeout(() => setIsActive(true), 1)
    }, [setIsActive])

    return (
        <Wrapper className={className} {...restProps}>
            <Wrapper
                className={`w-[30%] max-h-[80%] border-[1px] bg-white dark:border-none dark:bg-[#121721] rounded-md flex flex-col items-center absolute transition-all ease-linear duration-300 ${isActive ? 'translate-y-0' : '-translate-y-[1720px]'} w-[${width}] max-h-[${height}] overflow-hidden`}
            >
                {children}
            </Wrapper>
        </Wrapper>

    )
}

export default InputPopUp
