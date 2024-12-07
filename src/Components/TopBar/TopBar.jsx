/* eslint-disable react/prop-types */
import Media from "../AtomicDesign/Media/Media"
import Typography from "../AtomicDesign/Typography/Typography"
import Wrapper from "../AtomicDesign/Wrapper/Wrapper"
import iconBlue from '../../assets/images/water-blue.png'
import iconGreen from '../../assets/images/water-green.png'
import { useLocation } from "react-router-dom"

const TopBar = ({ theme }) => {
    const location = useLocation();
    const pathName = location.pathname.split('/').filter(x => x)
    return (
        <Wrapper className='w-full h-[13vh] flex items-center'>
            <Wrapper className="w-[242px] pl-6 pt-4">
                {
                    theme === 'blue' && <Media mediaType="image" mediaSrc={iconBlue} className="w-16 h-12" imgClass="rounded-none" />
                }
                {
                    theme === 'green' && <Media mediaType="image" mediaSrc={iconGreen} className="w-16 h-12" imgClass="rounded-none" />
                }
                <Typography tag="h2" className="text-2xl font-bold text-black dark:text-white">
                    Hydro<Typography tag="span" className="text-primary">Predict</Typography>
                </Typography>
            </Wrapper>
            <Wrapper className="pt-4">
                <Typography tag="h2" className="text-2xl font-semibold text-black dark:text-[#7d8da1] mt-10" >{decodeURIComponent(pathName)}</Typography>
            </Wrapper>
        </Wrapper>
    )
}

export default TopBar
