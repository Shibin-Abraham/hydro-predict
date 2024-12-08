/* eslint-disable react/prop-types */

import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"

const DashBoard = () => {
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
            <Wrapper className='w-full h-56 '>
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
            </Wrapper>

        </Wrapper>
    )
}

export default DashBoard
