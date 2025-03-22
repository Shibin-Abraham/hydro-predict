import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"

// eslint-disable-next-line react/prop-types
const UserCardLoader = ({mode}) => {
    const baseColor = mode === 'dark' ? '#0d1117' : '#d1d9e0'
    const highlightColor = mode === 'dark' ? '#5d6670aa' : '#f0f2f5'
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <Wrapper className='w-full rounded-md h-16 border-2 border-color-border dark:border-none dark:bg-[#121721f5] flex justify-between gap-4 items-center px-4 py-2'>
            <Skeleton className='' circle width={50} height={50} />
            <Wrapper>
                <Skeleton className='pl-1 ' width={60} height={12} />
                <Skeleton className='pl-1' width={40} height={10} />
            </Wrapper>
            <Skeleton className='ml-14' width={200} height={12} />
            <Skeleton className='ml-10' circle width={10} height={10} />
            <Skeleton className='ml-[1px]' width={30} height={10} />
            <Skeleton className='ml-10' width={50} height={25} />
        </Wrapper>
    </SkeletonTheme>
  )
}

export default UserCardLoader