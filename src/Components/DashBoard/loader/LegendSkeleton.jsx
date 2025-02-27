import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import PropTypes from 'prop-types'


const LegendSkeleton = ({mode}) => {
        const baseColor = mode === 'dark' ? '#0d1117' : '#d1d9e0'
    const highlightColor = mode === 'dark' ? '#5d6670aa' : '#f0f2f5'
  return (
     <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <Wrapper className="w-full flex flex-col items-center">
             <Skeleton circle width={15} height={15} />
             <Skeleton width={50} height={10} />
             <Skeleton circle width={15} height={15} />
             <Skeleton width={50} height={10} />
             <Skeleton circle width={15} height={15} />
             <Skeleton width={50} height={10} />
             <Skeleton circle width={15} height={15} />
             <Skeleton width={50} height={10} />
             <Skeleton circle width={15} height={15} />
             <Skeleton width={50} height={10} />         
        </Wrapper>
    </SkeletonTheme>
  )
}
LegendSkeleton.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default LegendSkeleton

