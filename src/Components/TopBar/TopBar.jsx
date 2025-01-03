/* eslint-disable react/prop-types */
import Media from "../AtomicDesign/Atom/Media/Media"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import iconBlue from '../../Assets/images/water-blue.png'
import iconGreen from '../../Assets/images/water-green.png'
import BreadCrumb from "../AtomicDesign/Molecule/Breadcrumb/BreadCrumb"
import UserIcon from "../../Assets/icons/UserIcon"
import BellIcon from "../../Assets/icons/BellIcon"
import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthContext"

const TopBar = ({ theme }) => {
    const { auth } = useContext(AuthContext)

    return (
        <Wrapper className='w-full h-[10vh] flex justify-between items-center'>
            <Wrapper className="w-56 pl-6 pr-6 mt-2">
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
            <Wrapper className='w-full flex items-center justify-between'>
                <BreadCrumb className='mt-2 pl-2 flex' childClassName='text-2xl font-bold text-black dark:text-[#7d8da1] mt-12 pl-2' />
                <Wrapper className='mr-6 mt-2 flex'>
                    <Wrapper className='w-8 h-8 mr-8 flex justify-center items-center relative'>
                        <BellIcon className='size-6 text-black dark:text-[#7d8da1] animate-tilte-bell rounded-full cursor-pointer' />
                        <Typography tag="span" text='' className='w-2 h-2 bg-primary rounded-full absolute top-1 right-[7px]' />
                    </Wrapper>
                    <Wrapper className='mr-2'>
                        <Typography text={auth?.user?.name} tag="h5" className='text-black dark:text-[#7d8da1] text-sm font-bold' />
                        <Typography text={auth?.user?.position} tag="p" className='text-black dark:text-[#7d8da1] text-xs' />
                    </Wrapper>
                    <UserIcon className='size-9 text-black dark:text-[#7d8da1] cursor-pointer' />
                </Wrapper>

            </Wrapper>
        </Wrapper>
    )
}

export default TopBar
