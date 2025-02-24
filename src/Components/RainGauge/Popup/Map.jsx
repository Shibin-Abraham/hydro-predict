
import InputPopUp from '../../AtomicDesign/Molecule/PopUp/InputPopUp'
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'
import LeafletMap from '../LeafletMap'
import CloseIcon from '../../../Assets/icons/CloseIcon'

// eslint-disable-next-line react/prop-types
const Map = ({setOpenMap}) => {
  return (
    <InputPopUp width='90%' height='100px' className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20" >
          <CloseIcon onClick={() => setOpenMap(false)} className="absolute z-[1000] rounded-full p-1 size-8 bg-[#121721f5] text-white top-4 right-4 hover:cursor-pointer" />
        <Wrapper className="w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
            <LeafletMap setOpenMap={setOpenMap} />
        </Wrapper>
        
    </InputPopUp>
  )
}

export default Map
