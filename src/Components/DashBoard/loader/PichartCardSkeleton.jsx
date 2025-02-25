import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import PropTypes from 'prop-types';



const PichartCardSkeleton = ({mode}) => {
    const baseColor = mode === 'dark' ? '#0d1117' : '#d1d9e0'
    const highlightColor = mode === 'dark' ? '#5d6670aa' : '#f0f2f5'
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
    <Wrapper className="w-72 h-40 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg ">
        <Wrapper className='w-full h-[30%] flex items-center justify-between'>
            <Wrapper className='h-full flex items-center'>
                <Skeleton className='ml-6' width={50} />
            </Wrapper>
        </Wrapper>
        <Wrapper className="w-full h-[70%] flex items-start justify-between bg">
            <Wrapper className='h-full ml-6 mt-1'>
            <Skeleton count={3} width={150} />
            </Wrapper>
            <Skeleton circle={true} width={70} height={70} className='mr-6 mt-3' />
        </Wrapper>
    </Wrapper>
    </SkeletonTheme>
  )
}
PichartCardSkeleton.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default PichartCardSkeleton

