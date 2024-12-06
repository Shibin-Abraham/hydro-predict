/* eslint-disable react/prop-types */
import Typography from "../AtomicDesign/Typography/Typography"
import Wrapper from "../AtomicDesign/Wrapper/Wrapper"
import Media from "../AtomicDesign/Media/Media"
import { NavLink } from "react-router-dom"
import icon from '../../assets/water.png'
import HomeIcon from "../../assets/icons/HomeIcon"

const NavBar = ({ theme }) => {
    return (
        <Wrapper className="w-72 h-screen text-gray-300">
            <Wrapper className="h-20 ml-6 mt-2">
                {
                    theme === 'blue' && <Media mediaType="image" mediaSrc={icon} className="w-16 h-12" imgClass="rounded-none" />
                }
                <Typography tag="h2" className="text-2xl font-bold">
                    Hydro<Typography tag="span" className="text-primary">Predict</Typography>
                </Typography>
            </Wrapper>
            <Wrapper className="w-40 ml-6 mt-8 ">

                <Wrapper className="h-12 relative ">
                    <NavLink to="/main" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <HomeIcon className="size-4 ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Home
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>
                <Wrapper className="h-12 relative">
                    <NavLink to="/charts" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <HomeIcon className="size-4 ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Home
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

            </Wrapper>
        </Wrapper>
    )
}

export default NavBar
