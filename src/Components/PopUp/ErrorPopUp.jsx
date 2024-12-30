/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import ErrorIcon from '../../Assets/icons/ErrorIcon';
import Typography from '../AtomicDesign/Atom/Typography/Typography';

const ErrorPopUp = ({ error }) => {
    console.log(error)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsActive(true), 1)
        setTimeout(() => setIsActive(false), 6000)
    }, [setIsActive])

    if (!error) return null;

    return (
        <Wrapper
            className={`w-72 min-h-6 flex items-center border-[1px] bg-color-red rounded-md absolute transition-all ease-linear duration-500 ${isActive ? 'translate-y-0' : '-translate-y-48'}`}
        >
            <ErrorIcon className='size-5 ml-2' />
            <Typography tag="p" className="text-black text-sm pr-2 pl-2 " text={error} />
        </Wrapper>
    )
}

export default ErrorPopUp
