
import AddSolidIcon from '../../Assets/icons/AddSolidIcon'
import Button from '../AtomicDesign/Atom/Button/Button'
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Gauge from '../AtomicDesign/Molecule/Gauge/Gauge'
import LeafletMap from './LeafletMap'


const RainGauge = () => {
  return (
    <Wrapper className="w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex gap-6 overflow-hidden">
        
         <Wrapper className='w-[40%] h-full pb-4 pl-8'>
            <Wrapper className='w-full pt-4 flex items-center gap-4' >
                <Button variant='primary' variantType='outline' className='text-xs'>Add New Gauge</Button>
                <AddSolidIcon className='size-7 cursor-pointer text-[#595959] dark:text-[#7d8da196] hover:text-[#7d8da1f6]'  />
            </Wrapper>
            <Wrapper className="w-80 h-60 border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2 flex items-center justify-center">
                <Gauge rainFall={60} />
            </Wrapper>
         </Wrapper>

         <Wrapper className='w-[50%] h-full pb-4'>
            <Wrapper className="w-full h-full border-2 border-color-border dark:border-none dark:bg-[#121721f5] rounded-lg mt-2  overflow-hidden">
                <LeafletMap />
            </Wrapper>
         </Wrapper>
    </Wrapper>
  )
}

export default RainGauge
