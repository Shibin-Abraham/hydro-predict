import { useCallback, useContext, useEffect, useState } from 'react'
import SettingsContext from '../Contexts/SettingsContext/SettingsContext'
import Wrapper from '../AtomicDesign/Atom/Wrapper/Wrapper'
import Typography from '../AtomicDesign/Atom/Typography/Typography'
import Button from '../AtomicDesign/Atom/Button/Button'
import Settings from '../../Assets/icons/Settings'
import { getAllUsers } from '../../API/Handler/userDataHandler'
import { AuthContext } from '../Contexts/AuthContext'

const Users = () => {
    const [activate,setActive] = useState(false)
    const {expand} = useContext(SettingsContext)
    const [users,setUsers] = useState([])

    const { auth } = useContext(AuthContext)

const fetchUsers = useCallback(async ()=>{
    try {
        const {data} =await getAllUsers()
        setUsers(data)
    } catch (error) {
        console.log(error)
    }
},[])

useEffect(()=>{fetchUsers()},[])

  return (
    <Wrapper className={`w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg overflow-hidden ${expand?'pl-8':'pl-16'}`}>
      <Wrapper className={`w-full pt-3 flex items-center gap-4`}>
      </Wrapper>
      <Wrapper className='w-full h-[80vh] pt-8'>
        <Wrapper className='w-[45%] h-full flex flex-col gap-6'>
            {
                users?.map(({id,name,email,position,status},index)=>{
                    const nameParts = name.split(' ');
                    const profileName = nameParts[0][0] + (nameParts[1] ? nameParts[1][0] : '');
                    return (
                        <Wrapper key={index} className='w-full rounded-md h-16 border-2 border-color-border dark:border-none dark:bg-[#121721f5] flex justify-between gap-4 items-center px-4'>
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
                                auth.user.id!==id&&<Wrapper className='w-24 flex gap-2 items-center justify-between'>
                                {
                                    status?
                                    <Button onClick={()=>setActive(prev=>!prev)} variant='primary' variantType='outline' className='h-6 px-2' >
                                        <Typography text='Remove' className='text-xs font-thin' />
                                    </Button>
                                    :
                                    <Button onClick={()=>setActive(prev=>!prev)} variantType='outline' className='h-6 px-2 border text-color-light-gray hover:text-white dark:hover:bg-color-dark-gray hover:bg-color-light-gray dark:text-color-dark-gray border-color-light-gray dark:border-color-dark-gray' >
                                        <Typography text='Activate' className='text-xs font-thin' />
                                    </Button>
                                }
                                
                                <Settings className='size-6 cursor-pointer' />
                            </Wrapper>
                            }
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