import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'

const GaugeCardSkeleton = ({mode}) => {
    const baseColor = mode === 'dark' ? '#0d1117' : '#d1d9e0'
    const highlightColor = mode === 'dark' ? '#5d6670aa' : '#f0f2f5'
  return (
        <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
            <Wrapper className="w-[265px] h-60 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 ">
                      <Wrapper className='w-full h-14 flex items-center justify-between'>
                            <Wrapper className='h-full flex items-center'>
                                <Skeleton className='ml-2' width={30} height={10} />
                            </Wrapper>
                            <Skeleton className='mr-2' width={25} height={10} />
                        </Wrapper>
                        <Wrapper className="w-full flex items-start justify-between pt-2">
                            <Wrapper className='h-full ml-2'>
                                <Skeleton className='' width={90} height={30} />
                                <Skeleton className='' width={70} height={15} />
                                <Skeleton className='' width={80} height={15} />
                                <Skeleton className='' width={90} height={15} />
                                <Skeleton className='' width={150} height={10} />
                            </Wrapper>
                            <Wrapper className='w-24 h-36 flex flex-col items-center relative'>
                            <Wrapper className='absolute top-1 h-20 w-8 left-0 flex flex-col items-end z-10'>
                                
                            </Wrapper>

                            <Wrapper className='w-7 h-24  border-b-transparent absolute z-10 flex items-end justify-center top-[2px] rounded-t-sm'>
                                <Skeleton width={30} height={90}  className={`w-[80%] rounded-t-sm `} />
                            </Wrapper>

                            <Wrapper className='w-11 h-11   border-t-transparent bottom-2 absolute rounded-full z-10 flex items-center justify-center'>
                                <Skeleton width={50} height={50} circle className={` h-[90%] w-[90%] rounded-full flex items-center justify-center`} />
                            </Wrapper>
                        </Wrapper>
                        </Wrapper>
                    </Wrapper>
        </SkeletonTheme>
  )
}
GaugeCardSkeleton.propTypes = {
    mode: PropTypes.string.isRequired,
}

export default GaugeCardSkeleton