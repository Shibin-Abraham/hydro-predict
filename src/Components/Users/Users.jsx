/* eslint-disable react/prop-types */
import { useCallback, useContext, useEffect, useState } from 'react'
import SettingsContext from '../Contexts/SettingsContext/SettingsContext'
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import Button from '../AtomicDesign/Atom/Button/Button'
import Settings from '../../Assets/icons/Settings'
import { getAllUsers, getDamHandlingUsers, getRaingaugeHandlingUsers, updateUserActivation } from '../../API/Handler/userDataHandler'
import { AuthContext } from '../Contexts/AuthContext'
import Media from '../AtomicDesign/Atom/Media/Media'
import iconDam from "../../Assets/dam.png"
import DamDataContext from '../Contexts/DamDataContext/DamDataContext'
import UserCardLoader from './loader/UserCardLoader'
import { FaUsersCog } from 'react-icons/fa'
import { IoRainy } from 'react-icons/io5'
import RaingaugeContext from '../Contexts/RaingaugeContext/RaingaugeContext'
import BtnLoader from '../AtomicDesign/Atom/Loader/BtnLoader'

const Users = ({mode,setOpenUserAssignment,setOpenRainGaugeUserAssignment}) => {
    const [isLoading,setIsLoading] = useState(null)
    const [loadingUsersData,setLoadingUsersData] = useState(true)
    const [loadingDamHandlingUsers,setLoadingDamHandlingUsers] = useState(true)
    const [loadingRaingaugeHandlingUsers,setLoadingRaingaugeHandlingUsers] = useState(true)
    const [openTooltip,setOpenTooltip] = useState(null)
    const {expand} = useContext(SettingsContext)
    const [users,setUsers] = useState([])
    const [damHandlingUsers,setDamHandlingUsers] = useState([])
    const [raingaugeHandlingUsers,setRaingaugeHandlingUsers] = useState([])

    const { auth } = useContext(AuthContext)
    const {damData} = useContext(DamDataContext)
    const {raingaugeData} = useContext(RaingaugeContext)

const fetchUsers = useCallback(async ()=>{
    try {
        const {data} =await getAllUsers()
        setUsers(data)
    } catch (error) {
        console.log(error)
    }finally{
        setLoadingUsersData(false)
    }
},[])

const fetchDamHandlingUsers = useCallback(async (params = {})=>{
    setLoadingDamHandlingUsers(true)
    try {
        const {data} =await getDamHandlingUsers(params)
        console.log(data)
        setDamHandlingUsers(data)
        //console.log('dd',await damHandlingUsers)
    } catch (error) {
        console.log(error)
    }finally{
        setLoadingDamHandlingUsers(false)
    }
},[])

const fetchRaingaugeHandlingUsers = useCallback(async (params = {})=>{
    setLoadingRaingaugeHandlingUsers(true)
    try {
        const {data} =await getRaingaugeHandlingUsers(params)
        console.log(data)
        setRaingaugeHandlingUsers(data)
        //console.log('dd',await damHandlingUsers)
    } catch (error) {
        console.log(error)
    }finally{
        setLoadingRaingaugeHandlingUsers(false)
    }
},[])

const handleActivation = async (userId, activate) => {
    try {
        await updateUserActivation({userId, activate});
        fetchUsers();
    } catch (error) {
        console.error('Error updating activation status:', error);
    }finally{
        setIsLoading(null)
    }
  }

useEffect(()=>{
    fetchUsers()
    fetchDamHandlingUsers()
    fetchRaingaugeHandlingUsers()
},[])

  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg overflow-hidden ${expand?'pl-8':'pl-16'}`}>
      <Wrapper className={`w-full pt-3 flex items-center gap-4`}>
      </Wrapper>
      <Wrapper className='w-full h-[80vh] pt-2 flex gap-8'>
        
        <Wrapper className='w-[20%] h-full flex flex-wrap justify-between items-start gap-4 overflow-y-auto no-scrollbar content-start'>
            <Typography tag="h4" text={`Dam User Assignments`} className='text-base ml-1' />
            {
                    damData?.map((dam,index)=>{
                        const damHandling = damHandlingUsers.filter((data)=>data?.dam?.id===dam?.id)
                        
                        return(
                            <Wrapper key={index} className='w-full rounded-md h-16 border-2 border-color-border dark:border-none dark:bg-[#121721f5] flex justify-between gap-4 items-center px-4'>
                                <Wrapper className='flex'>
                                    <Media mediaType="image" mediaSrc={iconDam} className="w-9 h-9 bg-tertiary-variant rounded-md" imgClass="rounded-none" />
                                    <Wrapper>
                                        <Typography tag="p" className="text-sm ml-2 capitalize" text={dam?.name} />
                                        <Typography tag="p" className="text-xs ml-2 dark:text-[#7d8da196] leading-3" text={`users: `} >
                                            {
                                                loadingDamHandlingUsers?
                                                    <BtnLoader
                                                        className='w-full h-full border-b border-color-border dark:border-[#161d29f5] flex items-center justify-center'
                                                        spinnerClassName='w-3 h-3 border-[2px] border-[#575353] border-t-white rounded-[50%] animate-spin'
                                                    />
                                                :
                                                    <Typography tag='span' className={`text-xs ${damHandling?.[0]?.dam?.users?.length!==(undefined)?'text-primary':'text-color-red'}`} text={damHandling?.[0]?.dam?.users?.length??'0'} />
                                            }
                                            
                                        </Typography>
                                    </Wrapper>
                                </Wrapper>
                                <Wrapper className='flex gap-3'>
                                    <FaUsersCog onClick={
                                        ()=>setOpenUserAssignment({state:true,users:users,damId:dam?.id,damName:dam?.name,fetchDamHandlingUsers:fetchDamHandlingUsers})} 
                                        className='size-5 cursor-pointer hover:text-primary-hover' 
                                    />
                                    
                                </Wrapper>
                            </Wrapper>
                        )
                    })
                }
        </Wrapper>
        
        <Wrapper className='w-[50%] h-full flex flex-col gap-6 overflow-y-scroll no-scrollbar'>
            <Typography tag="h4" text={`User Access Control`} className='text-base' />
            {
                loadingUsersData
                &&
                [1,2,3,4,5,6].map((_,index)=><UserCardLoader key={index} mode={mode} />)
            }
            {
                users?.map(({id,name,email,position,status},index)=>{
                    if(position.toUpperCase()==='ADMIN') return
                    const nameParts = name.split(' ');
                    const profileName = nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : '');
                    return (
                        <Wrapper key={index} className='w-full rounded-md h-16 border-2 border-color-border dark:border-none dark:bg-[#121721f5] flex justify-between gap-4 items-center px-4 py-2'>
                            <Wrapper className='flex items-center gap-2'>
                                <Wrapper className='size-10 rounded-full bg-primary-variant flex items-center justify-center'>
                                    <Typography text={profileName.toUpperCase()} className='text-base font-semibold' />
                                </Wrapper>
                                <Wrapper>
                                    <Typography text={`${name} ${auth.user.id===id?'(you)':''}`} className='text-sm font-medium capitalize' />
                                    <Typography text={position} className='text-xs capitalize' />
                                </Wrapper>
                            </Wrapper>

                            <Wrapper>
                                <Typography text={email} className='text-xs' />
                            </Wrapper>

                            <Wrapper className='w-16 rounded-sm flex items-center gap-2'>
                                <Wrapper className={`size-2 rounded-full ${status?'bg-green-500':'bg-color-light-gray dark:bg-color-dark-gray'}`} />
                                <Typography text={`${status?'Active':'InActive'}`} className='text-xs' />
                            </Wrapper>

                            {
                                auth.user.id!==id&&
                                <Wrapper className='w-24 h-full flex gap-2 items-center justify-between relative'>
                                {
                                    <Button 
                                        isLoading={isLoading===index} 
                                        onlyLoader={true} 
                                        onClick={
                                            ()=>{handleActivation(id, !status)
                                            setIsLoading(index)
                                        }} 
                                        variant='primary' 
                                        variantType='outline' 
                                        className={`${status?'h-6 px-2':'h-6 border text-color-light-gray hover:text-white dark:hover:bg-color-dark-gray hover:bg-color-light-gray dark:text-color-dark-gray border-color-light-gray dark:border-color-dark-gray'}`} 
                                        >
                                        <Typography text={`${status?'Remove':'Activate'}`} className='text-xs font-thin' />
                                    </Button>
                                    
                                }
                                {
                                    openTooltip===index
                                    &&
                                    <Wrapper className={`w-20 h-6 absolute ${index!==0?'-top-5':'-bottom-5'} -right-4 rounded-lg text-xs bg-[#595959] dark:bg-[#7d8da1] text-color-red pt-1 px-2 cursor-pointer`}>
                                        <Wrapper className={`size-3 rotate-45 absolute bg-[#595959] dark:bg-[#7d8da1] ${index!==0?'-bottom-[2px]':'-top-[2px]'} right-5`} />
                                        <Typography text='Delete User' className='absolute text-center hover:underline' />
                                    </Wrapper>
                                }
                                
                                <Settings onClick={()=>setOpenTooltip(prev=>prev===index?null:index)} className='size-6 cursor-pointer' />
                            </Wrapper>
                            }
                        </Wrapper>
                    )
                })
            } 
        </Wrapper>
        <Wrapper className='w-[20%] h-full flex flex-wrap justify-between items-start gap-4 overflow-y-auto no-scrollbar content-start'>
            <Typography tag="h4" text={`Rain Gauge User Assignments`} className='text-base ml-1' />
            {
                    raingaugeData?.map((gauge,index)=>{
                        //console.log('data',data)
                        //const damHandling = damHandlingUsers.filter((data)=>data?.dam?.id===dam?.id)
                        const raingaugeHandling = raingaugeHandlingUsers.filter((data)=>data?.raingauge?.id===gauge?.id)
                        
                        return(
                            <Wrapper key={index} className='w-full rounded-md h-16 border-2 border-color-border dark:border-none dark:bg-[#121721f5] flex justify-between gap-4 items-center px-4'>
                                <Wrapper className='flex items-center'>
                                    <IoRainy className='size-5' />
                                    <Wrapper>
                                        <Typography tag="p" className="text-sm ml-2 capitalize" text={gauge?.station_name} />
                                        <Typography tag="p" className="text-xs ml-2 dark:text-[#7d8da196] leading-3" text={`users: `} >
                                            {
                                                loadingRaingaugeHandlingUsers?
                                                    <BtnLoader
                                                        className='w-full h-full border-b border-color-border dark:border-[#161d29f5] flex items-center justify-center'
                                                        spinnerClassName='w-3 h-3 border-[2px] border-[#575353] border-t-white rounded-[50%] animate-spin'
                                                    />
                                                :
                                                    <Typography tag='span' className={`text-xs ${raingaugeHandling?.[0]?.raingauge?.users?.length!==(undefined)?'text-primary':'text-color-red'}`} text={raingaugeHandling?.[0]?.raingauge?.users?.length??'0'} />
                                            }
                                        </Typography>
                                    </Wrapper>
                                </Wrapper>
                                <Wrapper className='flex gap-3'>
                                    <FaUsersCog onClick={
                                        ()=>setOpenRainGaugeUserAssignment({state:true,raingaugeId:gauge?.id,users:users,raingaugeName:gauge?.station_name,fetchRaingaugeHandlingUsers:fetchRaingaugeHandlingUsers})} 
                                        className='size-5 cursor-pointer hover:text-primary-hover' 
                                    />
                                    
                                </Wrapper>
                            </Wrapper>
                        )
                    })
                }
        </Wrapper>

      </Wrapper>
    </Wrapper>
  )
}

export default Users