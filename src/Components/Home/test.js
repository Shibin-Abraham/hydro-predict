/* eslint-disable react/prop-types */

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import { useState } from "react"
import ReactApexChart from "react-apexcharts"

const DashBoard = () => {
    const [option, setOption] = useState({
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [{
            name: 'series-1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    }
    )
    const [state, setState] = useState({

        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }, {
            name: "mobiles",
            data: [15, 71, 35, 519, 79, 69, 89, 101, 108]
        }],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'monotoneCubic',
                width: 1,
                colors: 'red'
            },
            title: {
                text: 'Product Trends by Month',
                align: 'left',
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
        },
        colors: ['#77B6EA', '#545454'],


    })
    const data = [
        {
            "name": "6d ago",
            "idk": 780,
            "mtp": 600,
            "amt": 2400
        },
        {
            "name": "5d ago",
            "idk": 787,
            "mtp": 642,
            "amt": 2210
        },
        {
            "name": "4d ago",
            "idk": 769,
            "mtp": 648,
            "amt": 2290
        },
        {
            "name": "3d ago",
            "idk": 773,
            "mtp": 652,
            "amt": 2000
        },
        {
            "name": "2d ago",
            "idk": 781,
            "mtp": 621,
            "amt": 2181
        },
        {
            "name": "1d ago",
            "idk": 785,
            "mtp": 612,
            "amt": 2500
        },
        {
            "name": "today",
            "idk": 689,
            "mtp": 632,
            "amt": 2100
        }
    ]
    return (
        <Wrapper className="w-full h-full text-black dark:text-blue-200 text-lg">
            <Wrapper className='w-full h-56 flex'>
                <Wrapper className=" flex items-center justify-center w-[30rem] h-72 border-[1.5px] border-color-border dark:border-none dark:bg-[#121720] rounded-lg mt-8 ml-8 pr-8">
                    <LineChart width={410} height={250} data={data}
                        margin={{ top: 0, left: -20 }}>
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={.2} />
                        <XAxis dataKey="name" fontSize={12} />
                        <YAxis type="number" fontSize={12} domain={[0, 2000]} />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Line type="monotone" dataKey="idk" stroke="#8884d8" />
                        <Line type="monotone" dataKey="mtp" stroke="#82ca9d" />
                    </LineChart>
                </Wrapper>
                <Wrapper className=" flex items-center justify-center w-[30rem] h-72 border-[1.5px] border-color-border dark:border-none dark:bg-[#121720] rounded-lg mt-8 ml-8">
                    <ReactApexChart options={state.options} series={state.series} type="line" width={470} height={350} />
                </Wrapper>
            </Wrapper>

        </Wrapper>
    )
}

export default DashBoard
