import Wrapper from '../../Atom/Wrapper/Wrapper'
import Typography from '../../Atom/Typography/Typography'
import { useEffect, useState } from 'react'
import { alertColor } from './utils';

// eslint-disable-next-line react/prop-types
const Gauge = ({ rainFall, speed = 50, maxRainFall = 250, maxHeight = 96 }) => {
    const [count, setCount] = useState(0);
    const alert = alertColor(rainFall,'bg')
    console.log(alert)


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                const nextValue = prevCount + Math.ceil(maxRainFall / maxHeight);
                return nextValue >= rainFall ? rainFall : nextValue;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [rainFall, speed, maxRainFall, maxHeight]);

    const barHeight = (count / maxRainFall) * maxHeight;

    return (
        <Wrapper className='w-24 h-36 flex flex-col items-center relative'>
            <Wrapper className='absolute top-1 h-20 w-8 left-0 flex flex-col items-end z-10'>
                <Wrapper className='flex items-center gap-[1px]'>  
                    <Typography text='205' className='text-[8px]' />
                    <Wrapper className='w-1 h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                </Wrapper>
                <Wrapper className='flex items-center gap-[1px]'>  
                    <Typography text='135' className='text-[8px]' />
                    <Wrapper className='w-1 h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                </Wrapper>
                <Wrapper className='flex items-center gap-[1px] '>  
                    <Typography text='65' className='text-[8px]' />
                    <Wrapper className='w-1 h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                </Wrapper>
            </Wrapper>

            <Wrapper className='w-7 h-24 border border-[#7d8da1] border-b-transparent absolute z-10 flex items-end justify-center top-[2px] rounded-t-sm'>
                <Wrapper style={{ height: `${barHeight}px` }} className={`w-[80%] rounded-t-sm ${alert}`} />
            </Wrapper>

            <Wrapper className='w-11 h-11 border border-[#7d8da1] border-t-transparent bottom-2 absolute rounded-full z-10 flex items-center justify-center'>
                <Wrapper className={`${!rainFall?'bg-none':alert} h-[90%] w-[90%] rounded-full flex items-center justify-center`}>
                    <Typography tag='span' text={`${count}mm`} className='text-[10px] text-black dark:text-white absolute' />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
};

export default Gauge;




