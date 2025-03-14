/* eslint-disable react/prop-types */
import InputPopUp from '../../AtomicDesign/Molecule/PopUp/InputPopUp'
import CloseIcon from '../../../Assets/icons/CloseIcon'
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'
import Typography from '../../AtomicDesign/Atom/Typography/Typography'
import { useContext, useState } from 'react'
import DailyUpdatesForm from './DailyUpdatesForm'
import DamConstantForm from './DamConstantForm'
import { AuthContext } from '../../Contexts/AuthContext'

const AddDamData = ({setAddDamData}) => {
    const [toggleBtn,setToggleBtn] = useState(true)

    const handleToggle = () => {
        setToggleBtn(prevToggle => !prevToggle);
    };
const { auth } = useContext(AuthContext)

  return (
    <InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20" >
          <CloseIcon onClick={() => setAddDamData(false)} className="absolute z-20 size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer" />
        <Wrapper className="w-full flex flex-col items-center justify-center px-4 pt-4 overflow-y-scroll no-scrollbar">
                    <Wrapper className="w-full flex justify-center cursor-pointer absolute top-2 z-10">
                            <Wrapper onClick={handleToggle} className={`${auth?.user?.position.toUpperCase()==='ADMIN'?"w-[288px]":"w-[150px]"} relative h-6 bg-primary dark:bg-primary-variant rounded-3xl flex items-center`}>
                                {/* Moving white background */}
                                {
                                    auth?.user?.position.toUpperCase()==='ADMIN'&&<Wrapper
                                        className={`absolute top-[3px] bottom-[3px] w-[144px] bg-white rounded-3xl transition-transform duration-300 ease-in-out ${toggleBtn ? 'translate-x-[111px] sm:translate-x-[141px]' : 'translate-x-[3px]'}`}
                                    />
                                }
                                
                                {/* Monthly and One-time text */}
                                {
                                    auth?.user?.position.toUpperCase()==='ADMIN'&&<Wrapper className="w-[144px] h-[80%] flex items-center justify-center z-10">
                                    <Typography
                                        tag="p"
                                        className={`font-normal text-xs select-none ${!toggleBtn ? 'text-primary' : 'text-[#ffffff]'}`}
                                        text="Add New Dam"
                                    />
                                </Wrapper>
                                }
                                
                                <Wrapper className="w-[144px] h-[80%] flex items-center justify-center z-10">
                                    <Typography
                                        tag="p"
                                        className={`font-normal text-xs select-none ${toggleBtn ? 'text-primary' : 'text-[#ffffff]'}`}
                                        text="Daily Updates"
                                    />
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        {
                            auth?.user?.position.toUpperCase()==='ADMIN'?
                          !toggleBtn?<DamConstantForm />:<DailyUpdatesForm />:<DailyUpdatesForm />
                        }
            
        </Wrapper>

        <Typography tag="p" className="text-sm mt-6 px-6" >
            
        </Typography>
        
    </InputPopUp>
  )
}

export default AddDamData
