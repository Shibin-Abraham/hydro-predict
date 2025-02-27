
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import PropTypes from 'prop-types'

const DamAlertCardSkeleton = ({mode}) => {
    const baseColor = mode === 'dark' ? '#0d1117' : '#d1d9e0'
    const highlightColor = mode === 'dark' ? '#5d6670aa' : '#f0f2f5'
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <Wrapper className='w-[100%] h-16 flex items-center'>
            <Skeleton className='ml-6' width={30} height={30} />
            <Wrapper className="w-[75%] flex items-center">
                <Wrapper className='w-24 '>
                    <Skeleton className='ml-6 ' width={30} height={11} />
                    <Skeleton className='ml-6' width={100} height={10} />
                </Wrapper>
            </Wrapper>
        </Wrapper>
    </SkeletonTheme>
  )
}
DamAlertCardSkeleton.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default DamAlertCardSkeleton

