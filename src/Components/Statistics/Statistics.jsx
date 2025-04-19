import { useContext, useState } from "react"
import Select from "../AtomicDesign/Atom/Input/Select"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"
import DamDataContext from "../Contexts/DamDataContext/DamDataContext"
import SettingsContext from "../Contexts/SettingsContext/SettingsContext"

const Statistics = () => {
    const [selectedDamId,setSelectedDamId] = useState(1)

    const {damData} = useContext(DamDataContext)
    const{expand} = useContext(SettingsContext)

  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg flex overflow-hidden ${expand?'pl-8':'pl-16'}`}>
             <Wrapper className='w-full h-full'>
                <Wrapper className='w-full  mt-4 flex items-center gap-4' >
                    <Select
                    options={damData} 
                    onChange={(e)=>setSelectedDamId(parseInt(e.target.value))}
                    className='w-28 h-6 bg-inherit rounded-md text-sm border border-color-border dark:border-[#161d29f5] outline-none cursor-pointer' 
                    firstOptionClassName="dark:bg-[#121721f5]"
                    childClassName="dark:bg-[#121721f5]"
                    placeholder="Select Dam" 
                    defaultValue={selectedDamId}
                    />
                </Wrapper>
                <Wrapper className='w-[1300px] h-[80vh] pt-4 overflow-scroll no-scrollbar'>
                <table className="w-full overflow-scroll no-scrollbar rounded-2xl">
                        <thead className="bg-primary-variant text-white">
                            <tr>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Name
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px] w-24">
                                        District
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        MWL
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        FRL
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Spillway Crest Level
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Live Storage at FRL
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Rule level
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px] text-color-blue">
                                        Blue level
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px] text-color-orange">
                                        Orange level
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px] text-color-red">
                                        Red level
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Water level
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Live Storage
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Live Storage at FRL
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Inflow
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Power House
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Spillway
                                    </th>
                                    <th className="border-r border-primary px-2 py-1 text-[10px]">
                                        Remarks
                                    </th>
                                    
                            </tr>
                        </thead>
                        <tbody className="bg-white dark:bg-[#161d29] dark:text-[#7d8da1] text-xs">
                            {
                                damData.map((item,index)=>{
                                    return(
                                        <tr key={index} className={`${index%2===0?'bg-[#3838382b]':''} border-b border-color-border`}>
                                            <td>
                                                {
                                                    item.name
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Wrapper>
            </Wrapper>
    </Wrapper>
                
  )
}

export default Statistics
