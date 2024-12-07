/* eslint-disable react/prop-types */
import Typography from "../AtomicDesign/Typography/Typography"
import Wrapper from "../AtomicDesign/Wrapper/Wrapper"
import Media from "../AtomicDesign/Media/Media"
import { NavLink } from "react-router-dom"
import iconBlue from '../../assets/images/water-blue.png'
import iconGreen from '../../assets/images/water-green.png'
import HomeIcon from "../../assets/icons/HomeIcon"
import ChartIcon from "../../assets/icons/ChartIcon"
import Settings from "../../assets/icons/Settings"
import BeakerIcon from "../../assets/icons/BeakerIcon"
import MapIcon from "../../assets/icons/MapIcon"
import UsersIcon from "../../assets/icons/UsersIcon"
import TableIcon from "../../assets/icons/TableIcon"
import BookIcon from "../../assets/icons/BookIcon"
import aiLight from '../../assets/images/ai-light.png'
import aiDark from '../../assets/images/ai-dark.png'
import Button from "../AtomicDesign/Button/Button"
import SparklesIcon from "../../assets/icons/SparklesIcon"

const NavBar = ({ theme }) => {
    return (
        <Wrapper className="w-72 h-screen text-black dark:text-gray-300">
            <Wrapper className="h-20 ml-6 mt-2">
                {
                    theme === 'blue' && <Media mediaType="image" mediaSrc={iconBlue} className="w-16 h-12" imgClass="rounded-none" />
                }
                {
                    theme === 'green' && <Media mediaType="image" mediaSrc={iconGreen} className="w-16 h-12" imgClass="rounded-none" />
                }
                <Typography tag="h2" className="text-2xl font-bold">
                    Hydro<Typography tag="span" className="text-primary">Predict</Typography>
                </Typography>
            </Wrapper>
            <Wrapper className="w-40 ml-6 mt-8">

                <Wrapper className="h-12 relative ">
                    <NavLink to="/home" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <HomeIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Home
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="h-12 relative">
                    <NavLink to="/analysis" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <ChartIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Analysis
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="h-12 relative">
                    <NavLink to="/raingauge" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <BeakerIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Rain Gauge
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="h-12 relative">
                    <NavLink to="/map" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <MapIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Map
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="h-12 relative">
                    <NavLink to="/users" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <UsersIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Users
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="h-12 relative">
                    <NavLink to="/logs" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <TableIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Logs
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="h-12 relative">
                    <NavLink to="/activities" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <BookIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Activities
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="h-12 relative">
                    <NavLink to="/settings" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                            <Settings className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                            <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                Settings
                            </Typography>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

                <Wrapper className="mt-12 bg-[#2e79d926]  dark:bg-black dark:border-[1px] border-primary rounded-md hover:bg-[#2e78d954] dark:hover:bg-[#000000af]">
                    <NavLink to="/predict" className={({ isActive }) => {
                        return isActive ? "active" : null
                    }}>
                        <Wrapper className="group flex flex-col items-center w-full h-full pb-4">

                            <Media mediaType="image" mediaSrc={aiDark} className="w-7 h-7 mt-3 dark:hidden animate-shake-ai" imgClass="rounded-none" />
                            <Media mediaType="image" mediaSrc={aiLight} className="w-6 h-6 mt-3 hidden dark:block animate-shake-ai" imgClass="rounded-none" />

                            <Typography tag="p" className="text-black dark:text-[#7d8da1] text-[12px] px-4 py-2">
                                Predict and prepare for water level changes.
                            </Typography>
                            <Button className="w-24 h-4 bg-primary  pb-4 rounded-2xl text-xs flex items-center justify-center" containerClass="flex items-center justify-center gap-1">
                                <SparklesIcon className="size-4 text-white mt-2 animate-spin-ai" />
                                <Typography tag="p" className="mt-2">Predict</Typography>
                            </Button>
                        </Wrapper>
                    </NavLink>
                </Wrapper>

            </Wrapper>
        </Wrapper>
    )
}

export default NavBar
