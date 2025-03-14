import { useLocation } from "react-router-dom"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import SettingsContext from "../../Contexts/SettingsContext/SettingsContext"
import { useContext } from "react"

const WaterLevel = () => {
    const location = useLocation()
    const { id } = location.state || {}

    const{expand} = useContext(SettingsContext)
  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex overflow-hidden ${expand?'pl-8':'pl-16'} py-8 pr-8`}>
        <Wrapper className='w-full h-full bg-slate-400'>
            {id}
        </Wrapper>
    </Wrapper>
  )
}

export default WaterLevel
