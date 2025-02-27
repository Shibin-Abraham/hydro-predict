import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Banner from "../AtomicDesign/Molecule/Banner/Banner"


const Prediction = () => {
  return (
    <Wrapper className='w-full h-full'>
        <Wrapper className='w-[62vw] pl-8 pt-6'>
        <Banner 
            title='Info:' 
            subTitle='Predictions are estimates only.They are based on historical data. ' 
            linkText={<a href='#' className='text-black dark:text-primary underline text-xs ml-2'>Learn more</a>}
        />
        </Wrapper>
        
    </Wrapper>
  )
}

export default Prediction