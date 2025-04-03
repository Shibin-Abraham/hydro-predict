/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";
import CloseIcon from "../../../Assets/icons/CloseIcon";
import Select from "../../AtomicDesign/Atom/Input/Select";
import BtnLoader from "../../AtomicDesign/Atom/Loader/BtnLoader";
import Typography from "../../AtomicDesign/Atom/Typography/Typography";
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper";
import InputPopUp from "../../AtomicDesign/Molecule/PopUp/InputPopUp";
import Button from "../../AtomicDesign/Atom/Button/Button";
import { useCallback, useEffect, useState } from "react";
import { getRaingaugeHandlingUsers } from "../../../API/Handler/userDataHandler";
import { addRainGaugeHandlingUser, deleteRainGaugeHandlingUser } from "../../../API/Handler/setDataHandler";

const RainGaugeUserAssignment = ({openRainGaugeUserAssignment,setOpenRainGaugeUserAssignment}) => {
    const [selectedUser,setSelectedUser] = useState('')
    const [raingaugeHandlingUsers,setRaingaugeHandlingUsers] = useState()
    const [isLoading,setIsLoading] = useState(false)
    
      const filteredUsers = openRainGaugeUserAssignment?.users?.filter(user => 
        !raingaugeHandlingUsers?.raingauge?.users?.some(gaugeUser => gaugeUser.id === user.id)
      );
      console.log("handlingUsers",filteredUsers)

      const fetchRaingaugeHandlingUsers = useCallback(async (params = {})=>{
            setIsLoading(true)
          try {
              const {data} =await getRaingaugeHandlingUsers(params)
              console.log(data)
              setRaingaugeHandlingUsers(data)
              //console.log('dd',await damHandlingUsers)
          } catch (error) {
              console.log(error)
          }finally{
            setIsLoading(false)
          }
      },[])

      const onAddRaingaugeHandlingUser = async(e)=>{
            console.log('slected option ',e.target.value)
            setSelectedUser(parseInt(e.target.value))
            try {
              const response = await addRainGaugeHandlingUser({user_id:parseInt(e.target.value),raingauge_id:openRainGaugeUserAssignment?.raingaugeId})
              console.log(response)
              fetchRaingaugeHandlingUsers({raingauge_id:openRainGaugeUserAssignment?.raingaugeId})
            } catch (error) {
              console.log(error)
            }finally{
              setSelectedUser('')
            }
          }
        
        const onDeleteRaingaugeHandlingUser = async(userId)=>{
              console.log('slected option ',userId)
              try {
                const response = await deleteRainGaugeHandlingUser({user_id:parseInt(userId),raingauge_id:openRainGaugeUserAssignment?.raingaugeId})
                console.log(response)
                fetchRaingaugeHandlingUsers({raingauge_id:openRainGaugeUserAssignment?.raingaugeId})
              } catch (error) {
                console.log(error)
              }
            }

      useEffect(()=>{ 
        fetchRaingaugeHandlingUsers({raingauge_id:openRainGaugeUserAssignment?.raingaugeId})
       },[openRainGaugeUserAssignment?.raingaugeId,fetchRaingaugeHandlingUsers])

  return (
    <InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20 text-black dark:text-[#7d8da1]" >
          <CloseIcon
            className="absolute z-20 size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer" 
            onClick={()=>setOpenRainGaugeUserAssignment(prev=>({...prev,state:false}))}
          />
        <Wrapper className="w-full flex flex-col items-center justify-center px-4 pt-4 pb-4 overflow-y-scroll no-scrollbar">
            <Wrapper className="p-1 rounded-3xl bg-primary-variant absolute top-2">
                <Wrapper className="w-full h-full bg-white rounded-3xl px-8 py-[1px]" >
                <Typography
                    tag="h4"
                    className={`font-normal text-xs select-none capitalize text-primary-hover`}
                    text={openRainGaugeUserAssignment?.raingaugeName}
                />
                </Wrapper>
            </Wrapper>
            <Wrapper className='w-full pt-8'>
               <Select
                value={selectedUser}
                options={filteredUsers.filter((user)=>user?.position.toUpperCase()!=='ADMIN')} 
                onChange={onAddRaingaugeHandlingUser}
                className={`w-full h-6 bg-inherit rounded-md text-xs border border-color-border dark:border-[#161d29f5] outline-none ${isLoading?'cursor-wait':'cursor-pointer'}`} 
                firstOptionClassName="dark:bg-[#121721f5]"
                childClassName="dark:bg-[#121721f5]"
                placeholder="Add Users"
                />
                {
                  isLoading
                  &&
                  
                  <BtnLoader
                    className='w-full h-full border-b border-color-border dark:border-[#161d29f5] flex items-center justify-center'
                    spinnerClassName='w-5 h-5 border-[2px] border-[#575353] border-t-white rounded-[50%] animate-spin'
                  />
                } 
                {
                  raingaugeHandlingUsers?.raingauge?.users?.lenght!==0?
                   raingaugeHandlingUsers?.raingauge?.users?.map((user,index)=>{
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
                                <MdDeleteForever onClick={()=>onDeleteRaingaugeHandlingUser(user?.id)} className="text-color-red size-5 cursor-pointer" />
                            </Wrapper> 
                        )
                    }):null
                }
                <Button 
                  type="button" 
                  className='h-8 text-xs w-full mt-4' 
                  variant="primary" 
                  variantType="solid"
                  onClick={()=>
                    {
                      setOpenRainGaugeUserAssignment(prev=>prev.state=false)
                      openRainGaugeUserAssignment.fetchRaingaugeHandlingUsers()
                    }
                  }
                  >Done</Button>
            </Wrapper>
        </Wrapper>
        </InputPopUp>
  )
}

export default RainGaugeUserAssignment
