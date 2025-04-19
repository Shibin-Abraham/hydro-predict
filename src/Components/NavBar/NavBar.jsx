/* eslint-disable react/prop-types */
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Media from "../AtomicDesign/Atom/Media/Media"
import { NavLink } from "react-router-dom"
import HomeIcon from "../../Assets/icons/HomeIcon"
import ChartIcon from "../../Assets/icons/ChartIcon"
import Settings from "../../Assets/icons/Settings"
import BeakerIcon from "../../Assets/icons/BeakerIcon"
import UsersIcon from "../../Assets/icons/UsersIcon"
import TableIcon from "../../Assets/icons/TableIcon"
import BookIcon from "../../Assets/icons/BookIcon"
import aiWhite from '../../Assets/images/ai-white.png'
import aiDark from '../../Assets/images/ai-dark.png'
import aiLight from '../../Assets/images/ai-light.png'
import Button from "../AtomicDesign/Atom/Button/Button"
import SparklesIcon from "../../Assets/icons/SparklesIcon"
import { useContext, } from "react"
import SettingsContext from "../Contexts/SettingsContext/SettingsContext"
import { AuthContext } from "../Contexts/AuthContext"

const NavBar = () => {
    const {expand} = useContext(SettingsContext)
    const { auth } = useContext(AuthContext)
    return (
        <Wrapper className={`h-full text-black dark:text-gray-300`}>
            <Wrapper className={`${expand ? 'w-40 ml-6 justify-between' : 'w-10'} h-full pt-8 flex flex-col`}>
                <Wrapper className="w-full h-[384px]">

                    <Wrapper className="h-12 relative">
                        <NavLink to="/dashboard" className={({ isActive }) => {
                            return isActive ? "active" : null
                        }}>
                            {
                                expand ? <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                                [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                                [.active_&]:before:left-0">
                                    <HomeIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                                    <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                        Dashboard
                                    </Typography>
                                </Wrapper>
                                    :
                                    <Wrapper className='group bg-tertiary-variant w-10 h-12 ml-6 flex items-center justify-center rounded-t-md'>
                                        <HomeIcon className="size-5 text-black dark:text-[#7d8da1] [.active_&]:text-primary  group-hover:text-primary transition-all ease-linear duration-200" />
                                    </Wrapper>
                            }
                        </NavLink>
                    </Wrapper>

                    <Wrapper className="h-12 relative">
                        <NavLink to="/Analysis" className={({ isActive }) => {
                            return isActive ? "active" : null
                        }}>{
                                expand ?
                                    <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                                        <ChartIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                                        <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                            Analysis
                                        </Typography>
                                    </Wrapper>
                                    :
                                    <Wrapper className='group bg-tertiary-variant w-10 h-12 ml-6 flex items-center justify-center'>
                                        <ChartIcon className="size-5 text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary transition-all ease-linear duration-200" />
                                    </Wrapper>
                            }
                        </NavLink>
                    </Wrapper>

                    <Wrapper className="h-12 relative">
                        <NavLink to="/Rain Gauge" className={({ isActive }) => {
                            return isActive ? "active" : null
                        }}>{
                                expand ?
                                    <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                                        <BeakerIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                                        <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                            Rain Gauge
                                        </Typography>
                                    </Wrapper>
                                    :
                                    <Wrapper className='group bg-tertiary-variant w-10 h-12 ml-6 flex items-center justify-center'>
                                        <BeakerIcon className="size-5 text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary transition-all ease-linear duration-200" />
                                    </Wrapper>
                            }
                        </NavLink>
                    </Wrapper>

                    {/* <Wrapper className="h-12 relative">
                         <NavLink to="/Statistics" className={({ isActive }) => {
                             return isActive ? "active" : null
                         }}>{
                                 expand ?
                                     <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                         [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                         [.active_&]:before:left-0">
                                         <TableIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                                         <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                         Statistics
                                         </Typography>
                                     </Wrapper>
                                     :
                                     <Wrapper className='group bg-tertiary-variant w-10 h-12 ml-6 flex items-center justify-center'>
                                         <TableIcon className="size-5 text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary transition-all ease-linear duration-200" />
                                     </Wrapper>
                             }
                         </NavLink>
                     </Wrapper> */}
 
                     {/* <Wrapper className="h-12 relative">
                         <NavLink to="/Activities" className={({ isActive }) => {
                             return isActive ? "active" : null
                         }}>{
                                 expand ?
                                     <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                         [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                         [.active_&]:before:left-0">
                                         <BookIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                                         <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                             Activities
                                         </Typography>
                                     </Wrapper>
                                     :
                                     <Wrapper className='group bg-tertiary-variant w-10 h-12 ml-6 flex items-center justify-center'>
                                         <BookIcon className="size-5 text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary transition-all ease-linear duration-200" />
                                     </Wrapper>
                             }
                         </NavLink>
                     </Wrapper> */}

                        {
                            auth?.user?.position?.toUpperCase()==='ADMIN'
                            &&
                            <Wrapper className="h-12 relative">
                                <NavLink to="/Users" className={({ isActive }) => {
                                    return isActive ? "active" : null
                                }}>{
                                        expand ?
                                            <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                                [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                                [.active_&]:before:left-0">
                                                <UsersIcon className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                                                <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                                    Users
                                                </Typography>
                                            </Wrapper>
                                            :
                                            <Wrapper className='group bg-tertiary-variant w-10 h-12 ml-6 flex items-center justify-center'>
                                                <UsersIcon className="size-5 text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary transition-all ease-linear duration-200" />
                                            </Wrapper>
                                    }
                                </NavLink>
                            </Wrapper>
                        }
                    
                    <Wrapper className="h-12 relative" >
                        <NavLink to="/Settings" className={({ isActive }) => {
                            return isActive ? "active" : null
                        }}>{
                                expand ?
                                    <Wrapper className="group flex items-center gap-2 w-full h-full [.active_&]:before:content-[''] [.active_&]:bg-[#2e79d926] dark:[.active_&]:bg-black
                        [.active_&]:before:w-1.5 [.active_&]:before:h-full [.active_&]:rounded-e-md dark:[.active_&]:rounded-none [.active_&]:before:bg-primary [.active_&]:before:absolute 
                        [.active_&]:before:left-0">
                                        <Settings className="size-4 text-black dark:text-[#7d8da1] ml-6 [.active_&]:text-primary group-hover:ml-10 group-hover:text-primary transition-all ease-linear duration-200" />
                                        <Typography tag="h4" className="text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary">
                                            Settings
                                        </Typography>
                                    </Wrapper>
                                    :
                                    <Wrapper className='group bg-tertiary-variant w-10 h-12 ml-6 flex items-center justify-center rounded-b-md'>
                                        <Settings className="size-5 text-black dark:text-[#7d8da1] [.active_&]:text-primary group-hover:text-primary transition-all ease-linear duration-200" />
                                    </Wrapper>
                            }
                        </NavLink>
                    </Wrapper>
                </Wrapper>
                {
                            auth?.user?.position?.toUpperCase()==='ADMIN'
                            &&
                <Wrapper className={`${expand ? 'w-full h-32 mb-8' : 'w-10 ml-6 h-10 mt-6'}`}>
                    <Wrapper className="group relative w-full h-full bg-tertiary overflow-hidden dark:bg-tertiary-variant border-primary rounded-md dark:hover:bg-tertiary">
                        <NavLink to="/predict" className={({ isActive }) => {
                            return isActive ? "active" : null
                        }}>
                            {
                                expand ?
                                    <>
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
                                    </>
                                    :
                                    <Wrapper className='w-full h-full flex items-center justify-center'>
                                        <Media mediaType="image" mediaSrc={aiDark} className="w-7 h-7 dark:hidden group-hover:animate-shake-ai" imgClass="rounded-none" />
                                        <Media mediaType="image" mediaSrc={aiLight} className="w-6 h-6 hidden dark:block group-hover:animate-shake-ai" imgClass="rounded-none" />
                                    </Wrapper>
                            }

                        </NavLink>
                    </Wrapper>
                </Wrapper>
            }
            </Wrapper>
        </Wrapper>
    )
}

export default NavBar
