/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md"
import CloseIcon from "../../../Assets/icons/CloseIcon"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import InputPopUp from "../../AtomicDesign/Molecule/PopUp/InputPopUp"
import {  useState } from "react"
import Select from "../../AtomicDesign/Atom/Input/Select"

const UserAssignment = ({openUserAssignment,setOpenUserAssignment}) => {
    console.log("openUserAssignment",openUserAssignment)
    const [handlingUsers,setHandlingUsers] = useState(openUserAssignment?.damHandlingUsers?.filter((data)=>data?.id===openUserAssignment?.damId))
    console.log("handlingUsers",handlingUsers)
  return (
    <InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20 text-black dark:text-[#7d8da1]" >
          <CloseIcon onClick={() => setOpenUserAssignment(prev=>prev.state=false)} className="absolute z-20 size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer" />
        <Wrapper className="w-full flex flex-col items-center justify-center px-4 pt-4 pb-4 overflow-y-scroll no-scrollbar">
            <Wrapper className="p-1 rounded-3xl bg-primary-variant absolute top-2">
                <Wrapper className="w-full h-full bg-white rounded-3xl px-8 py-[1px]" >
                <Typography
                    tag="h4"
                    className={`font-normal text-xs select-none capitalize text-primary-hover`}
                    text={openUserAssignment?.damName}
                />
                </Wrapper>
            </Wrapper>
            <Wrapper className='w-full pt-8'>
               <Select
                options={[{id:1,name:'shibin'}]} 
                className='w-full h-6 bg-inherit rounded-md text-xs border border-color-border dark:border-[#161d29f5] outline-none cursor-pointer' 
                firstOptionClassName="dark:bg-[#121721f5]"
                childClassName="dark:bg-[#121721f5]"
                placeholder="Add Users"
                
                />
                {
                   handlingUsers?.[0]?.dam?.users?.map((user,index)=>{
                    const nameParts = user?.name.split(' ');
                    const profileName = nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : '');
                        return (
                            <Wrapper key={index} className='flex items-center justify-between text-black dark:text-[#7d8da1] pt-2 border-b border-color-border dark:border-[#161d29f5] py-1'>
                                <Wrapper className='flex items-center gap-2'>
                                        <Wrapper className='size-7 rounded-full bg-primary-variant flex items-center justify-center'>
                                            <Typography text={profileName?.toUpperCase()} className='text-xs font-semibold' />
                                        </Wrapper>
                                        <Wrapper>
                                            <Typography text={user?.name} className='text-xs font-medium capitalize' />
                                            <Typography text={user?.position} className='text-[10px] capitalize' />
                                        </Wrapper>
                                </Wrapper>
                                <Typography text={user?.email} className='text-[10px]' />
                                <MdDeleteForever className="text-color-red size-5 cursor-pointer" />
                            </Wrapper> 
                        )
                    })
                }
               
            </Wrapper>
        </Wrapper>
        </InputPopUp>
  )
}

export default UserAssignment