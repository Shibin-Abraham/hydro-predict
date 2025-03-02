import { useEffect, useState } from 'react'
import Wrapper from '../../Atom/Wrapper/Wrapper'
import InfoIcon from '../../../../Assets/icons/InfoIcon'
import Typography from '../../Atom/Typography/Typography'

// eslint-disable-next-line react/prop-types
const InfoPopUp = ({info}) => {
    const [isActive, setIsActive] = useState(false)
    
        useEffect(() => {
            setTimeout(() => setIsActive(true), 1)
            setTimeout(() => setIsActive(false), 6000)
        }, [setIsActive])
    
        if (!info) return null;
  return (
    <Wrapper className={`w-[40rem] h-7 mt-1 mb-1 flex items-center justify-center absolute transition-all ease-linear duration-500 ${isActive ? 'translate-y-0' : '-translate-y-48'}`}>
        <Wrapper className='w-auto h-full flex items-center bg-primary rounded-md'>
        <InfoIcon className='size-5 ml-2 text-white'/>
        <Typography tag="p" className="text-white text-sm pr-2 pl-2 ">
            <Typography tag='span' className='text-white text-sm font-semibold' text='Info: ' />
            {
                info
            }
        </Typography>
        </Wrapper>
    </Wrapper>
  )
}


export default InfoPopUp
