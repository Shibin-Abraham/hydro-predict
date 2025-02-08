import Wrapper from '../../Atom/Wrapper/Wrapper'
import Typography from '../../Atom/Typography/Typography'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const Gauge = ({ rainFall, speed = 50, maxRainFall = 100, maxHeight = 96 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                // Calculate the next step (scaled to max height)
                const nextValue = prevCount + Math.ceil(maxRainFall / maxHeight);
                return nextValue >= rainFall ? rainFall : nextValue;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [rainFall, speed, maxRainFall, maxHeight]);

    // Calculate the bar height based on rainfall
    const barHeight = (count / maxRainFall) * maxHeight;

    return (
        <Wrapper className='w-32 h-36 flex flex-col items-center relative'>
            {/* Scale Labels */}
            <Wrapper className='absolute top-1 h-20 w-8 left-5 flex flex-col items-end z-30'>
               
                    <Wrapper  className='flex items-center gap-[1px]'>  
                        <Typography text='85' className='text-[8px]' />
                        <Wrapper className='w-1 h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                    </Wrapper>
                    <Wrapper  className='flex items-center gap-[1px]'>  
                        <Typography text='55' className='text-[8px]' />
                        <Wrapper className='w-1 h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                    </Wrapper>
                    <Wrapper  className='flex items-center gap-[1px]'>  
                        <Typography text='25' className='text-[8px]' />
                        <Wrapper className='w-1 h-[1px] bg-[#595959] dark:bg-[#7d8da196]' />
                    </Wrapper>
                
            </Wrapper>

            {/* Gauge Container */}
            <Wrapper className='w-7 h-24 border border-[#7d8da1] border-b-transparent absolute z-20 flex items-end justify-center top-[2px] rounded-t-sm'>
                <Wrapper style={{ height: `${barHeight}px` }} className='w-full bg-primary rounded-t-sm' />
            </Wrapper>

            {/* Bottom Indicator */}
            <Wrapper className='w-11 h-11 border border-[#7d8da1] border-t-transparent rounded-full bottom-2 absolute z-10 bg-primary flex items-center justify-center'>
                <Typography text={`${count} mm`} className='text-[10px] text-white' />
            </Wrapper>
        </Wrapper>
    );
};

export default Gauge;
