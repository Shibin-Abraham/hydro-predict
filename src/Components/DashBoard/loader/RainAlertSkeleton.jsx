
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'

// eslint-disable-next-line react/prop-types
const RainAlertSkeleton = ({mode}) => {
    const baseColor = mode === 'dark' ? '#0d1117' : '#d1d9e0'
    const highlightColor = mode === 'dark' ? '#5d6670aa' : '#f0f2f5'
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
    <Wrapper className='w-full p-2 flex items-center border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg'>
        <Skeleton circle width={36} height={36} />
        <Skeleton className='ml-2' width={150} height={14} />
        <Skeleton circle className='ml-24' width={14} height={14} />
        {/* <Media mediaType="image" mediaSrc={drop} className="w-9 h-9 mt-1 ml-2 rounded-md" imgClass="rounded-none" />
        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-2" text="IDUKKI" />
        <Typography tag="h6" className="text-xs text-black dark:text-[#7d8da196] leading-3 ml-4" text="Rainfall-12.11mm" />
        <Wrapper className='w-2 h-2 rounded-full bg-[#ff0d3e]  ml-auto mr-4' /> */}
    </Wrapper>
    </SkeletonTheme>
  )
}

export default RainAlertSkeleton