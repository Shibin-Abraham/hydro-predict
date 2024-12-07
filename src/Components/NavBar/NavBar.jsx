/* eslint-disable react/prop-types */
import Typography from "../AtomicDesign/Typography/Typography"
import Wrapper from "../AtomicDesign/Wrapper/Wrapper"
import Media from "../AtomicDesign/Media/Media"
import { NavLink } from "react-router-dom"
import HomeIcon from "../../assets/icons/HomeIcon"
import ChartIcon from "../../assets/icons/ChartIcon"
import Settings from "../../assets/icons/Settings"
import BeakerIcon from "../../assets/icons/BeakerIcon"
import MapIcon from "../../assets/icons/MapIcon"
import UsersIcon from "../../assets/icons/UsersIcon"
import TableIcon from "../../assets/icons/TableIcon"
import BookIcon from "../../assets/icons/BookIcon"
import aiWhite from '../../assets/images/ai-white.png'
import aiDark from '../../assets/images/ai-dark.png'
import Button from "../AtomicDesign/Button/Button"
import SparklesIcon from "../../assets/icons/SparklesIcon"

const NavBar = () => {
    return (
        <Wrapper className="w-72 h-full text-black dark:text-gray-300 ">
            <Wrapper className="w-40 h-full ml-6 pt-6 flex flex-col justify-between">
                <Wrapper className="w-full h-[384px]">
                    <Wrapper className="h-12 relative ">
                        <NavLink to="/Home" className={({ isActive }) => {
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
                        <NavLink to="/Analysis" className={({ isActive }) => {
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
                        <NavLink to="/Rain Gauge" className={({ isActive }) => {
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
                        <NavLink to="/Map" className={({ isActive }) => {
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
                        <NavLink to="/Users" className={({ isActive }) => {
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
                        <NavLink to="/Logs" className={({ isActive }) => {
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
                        <NavLink to="/Activities" className={({ isActive }) => {
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
                        <NavLink to="/Settings" className={({ isActive }) => {
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
                </Wrapper>

                <Wrapper className="w-full h-32 mb-8">
                    <Wrapper className="group relative w-full h-full bg-tertiary overflow-hidden dark:bg-tertiary-variant border-primary rounded-md dark:hover:bg-tertiary">
                        <NavLink to="/predict" className={({ isActive }) => {
                            return isActive ? "active" : null
                        }}>
                            <Wrapper className="absolute w-10 h-10 bg-tertiary -right-4 rounded-full -top-3 animate-bubble" />
                            <Wrapper className="absolute w-2 h-2 bg-tertiary right-[10px] top-[30px] rounded-full animate-bubble" />

                            <Wrapper className="flex absolute flex-col items-center w-full h-full z-10 pb-4 bg-transparent">

                                <Media mediaType="image" mediaSrc={aiDark} className="w-7 h-7 mt-3 dark:hidden group-hover:animate-shake-ai" imgClass="rounded-none" />
                                <Media mediaType="image" mediaSrc={aiWhite} className="w-6 h-6 mt-3 hidden dark:block group-hover:animate-shake-ai" imgClass="rounded-none" />

                                <Typography tag="p" className="text-black dark:text-[#7d8da1] text-[12px] px-4 py-2">
                                    Predict and prepare for water level changes.
                                </Typography>
                                <Button className="w-24 h-4 bg-primary hover:bg-secondary pb-4 rounded-2xl text-xs flex items-center justify-center" containerClass="flex items-center justify-center gap-1">
                                    <SparklesIcon className="size-4 text-white mt-2 animate-spin-ai" />
                                    <Typography tag="p" className="mt-2">Predict</Typography>
                                </Button>
                            </Wrapper>
                        </NavLink>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default NavBar
