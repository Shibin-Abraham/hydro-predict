import PropTypes from 'prop-types'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'

const ResposiveLineSkeleton = ({mode}) => {
    const baseColor = mode === 'dark' ? '#0d1117' : '#d1d9e0'
    const highlightColor = mode === 'dark' ? '#5d6670aa' : '#f0f2f5'
  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
    <Wrapper className="w-[800px] h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg">
        <Skeleton className='size-full' />
    </Wrapper>
    </SkeletonTheme>
  )
}
ResposiveLineSkeleton.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default ResposiveLineSkeleton
