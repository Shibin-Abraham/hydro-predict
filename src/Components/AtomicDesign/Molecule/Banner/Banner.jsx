
import Wrapper from '../../Atom/Wrapper/Wrapper'
import Typography from '../../Atom/Typography/Typography'
import InfoIcon from '../../../../Assets/icons/InfoIcon'

// eslint-disable-next-line react/prop-types
const Banner = ({title,subTitle,linkText}) => {
  return (
    <Wrapper className='w-fit h-full border border-primary bg-tertiary flex items-center rounded-lg pl-2 pr-6 py-1'>
        <InfoIcon className='text-primary dark:text-[#fdfdfd] size-5' />
        <Typography text={title} className='text-primary dark:text-[#fdfdfd] text-sm ml-1 font-semibold' />
        <Typography text={subTitle} className='text-primary dark:text-[#fdfdfd] text-sm ml-1' />
        {
          linkText
        }
    </Wrapper>
  )
}


export default Banner

