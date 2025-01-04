/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Wrapper from '../../Atom/Wrapper/Wrapper'
import ErrorIcon from '../../../../Assets/icons/ErrorIcon';
import Typography from '../../Atom/Typography/Typography';

const ErrorPopUp = ({ error }) => {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsActive(true), 1)
        setTimeout(() => setIsActive(false), 6000)
    }, [setIsActive])

    if (!error) return null;

    return (
        <Wrapper
            className={`w-[30rem] h-7 flex items-center justify-center rounded-md absolute transition-all ease-linear duration-500 ${isActive ? 'translate-y-0' : '-translate-y-48'}`}
        >
            <Wrapper className='w-auto h-full flex items-center bg-color-red rounded-md'>
                <ErrorIcon className='size-5 ml-2 text-white' />
                <Typography tag="p" className="text-white text-sm pr-2 pl-2 " text={error} />
            </Wrapper>

        </Wrapper>
    )
}

export default ErrorPopUp
