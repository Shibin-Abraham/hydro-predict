/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import SuccessIcon from "../../Assets/icons/SuccessIcon"

const SuccessPopUp = ({ success }) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsActive(true), 1)
        setTimeout(() => setIsActive(false), 6000)
    }, [setIsActive])

    if (!success) return null;
    return (
        <Wrapper
            className={`w-[30rem] h-7 mt-1 mb-1 flex items-center justify-center absolute transition-all ease-linear duration-500 ${isActive ? 'translate-y-0' : '-translate-y-48'}`}
        >
            <Wrapper className='w-auto h-full flex items-center bg-primary rounded-md'>
                <SuccessIcon className='size-5 ml-2 text-white' />
                <Typography tag="p" className="text-sm pr-2 pl-2 text-white" text={success} />
            </Wrapper>
        </Wrapper>
    )
}

export default SuccessPopUp
