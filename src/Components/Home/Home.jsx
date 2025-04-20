/* eslint-disable react/prop-types */

import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Button from "../AtomicDesign/Atom/Button/Button"
import { useNavigate } from "react-router-dom"
import Media from "../AtomicDesign/Atom/Media/Media"
import laptop from '../../Assets/images/laptop.png'
import lap from '../../Assets/images/lap.png'
import { useEffect, useState } from "react"
import { useRef } from "react"

const Home = ({theme}) => {
    console.log(theme)
    const navigate = useNavigate();
    const projectRef = useRef(null)
    const [onClick,setOnClick] = useState(false)

      useEffect(() => {
        if (onClick) {
          projectRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }, [onClick]);

    return (
        <Wrapper className="w-[100vw] h-full text-lg flex flex-col items-center px-48 bg-gradient-to-r from-[#0f0411] via-[#021025] to-green-950 overflow-y-scroll no-scrollbar">
            <Wrapper className='sticky w-full py-5 dark:bg-black/25 bg-black/15 backdrop-blur-sm rounded-md top-4 z-50 flex items-center justify-between'>
                <Wrapper className='pl-6'>
                    <Typography tag="h2" className="text-2xl font-bold text-black dark:text-white">
                        Hydro<Typography tag="span" className="text-primary">Predict</Typography>
                    </Typography>
                </Wrapper>
                <Wrapper className='pr-6 flex items-center gap-6'>
                    <Button onClick={()=>navigate('/dashboard')}  className='h-8 text-sm font-normal border  border-primary text-primary hover:bg-primary hover:text-white'>
                        DashBoard
                  </Button>
                  <Typography onClick={()=>navigate('/signup')} tag="span" className="text-white/75 text-base font-normal hover:text-primary-hover cursor-pointer">signup</Typography>
                  <Typography onClick={()=>setOnClick(prev=>!prev)} tag="span" className="text-white/75 text-base font-normal hover:text-primary-hover cursor-pointer">project</Typography>
                </Wrapper>
            </Wrapper>
            <Wrapper className='w-full'>
                <Wrapper className='w-full h-[80vh] flex flex-col items-center justify-center gap-2'>
                    <Typography tag="h4" className="bg-gradient-to-l from-green-400 to-primary bg-clip-text text-transparent text-3xl font-medium">
                        Predict the future
                    </Typography>
                    <Typography tag="h1" className="text-white/60 text-7xl font-extrabold text-center ">
                        AI-Powerd Water Level Forecasting  System
                    </Typography>
                    <Typography tag="h1" className="text-white/30 text-xl font-normal text-center px-32 pt-4">
                        AI‑driven dam water level forecasting with 81% accuracy
                        Integrates four years of catchment rain‑gauge and dam data into dynamic dashboards and early alerts
                        Empowering proactive water management to protect communities and infrastructure
                    </Typography>
                    <Button onClick={()=>navigate('/dashboard')}  className='h-12 rounded-xl text-lg font-medium border border-primary text-primary hover:bg-primary-hover hover:text-white mt-4 px-4'>
                         Get Started
                  </Button>
                </Wrapper>
            </Wrapper>
            <Wrapper ref={projectRef} className='w-full'>
                <Wrapper className='relative w-full h-[60vh] bg-black/40 rounded-lg overflow-hidden flex items-center justify-between'>
                    <Wrapper className='w-[50%] h-full pt-6 pl-8'>
                        <Typography tag="h4" className="bg-gradient-to-r from-green-400 to-primary bg-clip-text text-transparent text-lg font-medium w-40">
                            Project Overview
                        </Typography>
                        <Typography tag="h2" className="text-white/95 text-4xl font-bold pt-6">
                            HydroPredict – Predictive Water Management
                        </Typography>
                        <Typography tag="p" className="text-white/30 text-lg font-medium pt-6">
                            Forecast dam water levels with 81% accuracy using XGBoost AI.
                            Leverage four years of catchment rain‑gauge and dam data for robust predictions.
                            Integrate real‑time sensor feeds for up‑to‑the‑minute insights.
                            Visualize trends on dynamic dashboards with intuitive metrics.
                            Receive early alerts to preempt flood risks and safeguard assets.
                            Empower proactive resource management and community protection.
                        </Typography>
                    </Wrapper>
                    <Media mediaType="image" mediaSrc={laptop} className="rounded-lg w-[500px]" imgClass="rounded-lg" />
                </Wrapper>
            </Wrapper>
            <Wrapper className='w-full py-28'>
                <Wrapper className='w-full h-[20vh] bg-black/40 rounded-lg px-8'>
                    <Typography tag="p" className="text-white/20 text-sm font-medium pt-6">
                            contact us
                    </Typography>
                    <Typography tag="p" className="text-white/20 text-base font-medium pt-1">
                        Developed by Government Engineering College Idukki,
                    </Typography>
                    <Typography tag="p" className="text-white/20 text-base font-medium pt-1">
                    Address: Government Engineering College
                    Painavu, Idukki,
                    Kerala - 685603, India.
                    </Typography>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default Home
