/* eslint-disable react/prop-types */
import InputPopUp from '../../AtomicDesign/Molecule/PopUp/InputPopUp'
import CloseIcon from '../../../Assets/icons/CloseIcon'
import Wrapper from '../../AtomicDesign/Atom/Wrapper/Wrapper'
import Typography from '../../AtomicDesign/Atom/Typography/Typography'
import Button from '../../AtomicDesign/Atom/Button/Button'
import Select from '../../AtomicDesign/Atom/Input/Select'
import { usePopUp } from '../../Contexts/PopUpContext'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { decimalNumberPattern, feetToMeter } from './utils'
import Form from '../../AtomicDesign/Atom/Form/Form'
import Input from '../../AtomicDesign/Atom/Input/Input'
import { addNewDamAlert } from '../../../API/Handler/setDataHandler'

const AddDamAlert = ({addDamAlert,setAddDamAlert}) => {
    const [isLoading,setIsLoading] = useState(false)
    const { showSuccess, showError } = usePopUp()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
        } = useForm();
    
    const onSubmit = async (data) => {
        console.log(data);
        const damAlert = {
            dam_id:parseInt(addDamAlert.damId),
            rule_level: data.ruleLevelUnit === 'feet' ? feetToMeter(parseFloat(data.rule_level)) : parseFloat(data.rule_level),
            blue_level: data.blueLevelUnit === 'feet' ? feetToMeter(parseFloat(data.blue_level)) : parseFloat(data.blue_level),
            orange_level: data.orangeLevelUnit === 'feet' ? feetToMeter(parseFloat(data.orange_level)) : parseFloat(data.orange_level),
            red_level: data.redLevelUnit === 'feet' ? feetToMeter(parseFloat(data.red_level)) : parseFloat(data.red_level),
            };

        if((damAlert?.red_level>damAlert?.rule_level)&&(parseInt(damAlert?.rule_level)!==0)){
            setError('red_level', {
                type: 'manual',
                message: `Red level must be less than rule level`,
            });
            return; 
        }
        if((damAlert?.orange_level>damAlert?.red_level)&&(parseInt(damAlert?.red_level)!==0)){
            setError('orange_level', {
                type: 'manual',
                message: `Orange level must be less than red level`,
            });
            return; 
        }
        if((damAlert?.blue_level>damAlert?.orange_level)&&(parseInt(damAlert?.orange_level)!==0)){
            setError('blue_level', {
                type: 'manual',
                message: `Blue level must be less than orange level`,
            });
            return; 
        }
        console.log(damAlert)
        try {
            setIsLoading(true)
            const response = await addNewDamAlert(damAlert);
            console.log(response);
            showSuccess("Dam Alert data insertion Done!")
            //setAddDamAlert(prev=>prev.fetchAllDamData())
            setAddDamAlert(prev=>prev.state=false)
        } catch (error) {
            console.log(error)
            showError(error.response?.data?.error??'Error occured')
        }finally{
            setIsLoading(false)
        }
    }

  return (
    <InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20" >
          <CloseIcon onClick={() => setAddDamAlert(prev=>prev.state=false)} className="absolute z-20 size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer" />
          <Wrapper className="w-full flex flex-col items-center justify-start content-start px-4 pt-4 overflow-y-scroll no-scrollbar">
            <Wrapper className="p-1 rounded-3xl bg-primary-variant absolute top-2">
                <Wrapper className="w-full h-full bg-white rounded-3xl px-8 py-[1px]" >
                <Typography
                    tag="h4"
                    className={`font-normal text-xs select-none capitalize text-primary-hover`}
                    text={`Configure Alert Levels for ${addDamAlert?.damName}`}
                />
                </Wrapper>
            </Wrapper>
            <Wrapper className='w-full pb-6'>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full mt-4 px-6 text-black dark:text-[#7d8da1] pt-6"
            >
                {/* Rule Level */}
                <Typography tag="p" text="Rule Level" className="text-sm pt-2" />
                <Wrapper className="w-full h-10 relative">
                <Input
                    type="text"
                    placeholder="Enter the Rule level"
                    autoComplete="off"
                    {...register("rule_level", {
                    required: "Rule level is required",
                    pattern: decimalNumberPattern,
                    })}
                    className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                />
                <Select
                    defaultValue ='meter'
                    options={[{id:'meter', name: "meter" }, {id:'feet', name: "feet" }]}
                    placeholder="Units"
                    className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
                    firstOptionClassName="text-[#7d8da1] dark:bg-black"
                    childClassName="dark:bg-black"
                    {...register("ruleLevelUnit", { 
                    defaultValue: "meter" // Add this to all unit registers
                    })}
                />
                </Wrapper>
                {errors.rule_level && (
                <Typography tag="p" className="text-color-red text-[11px]">
                    {errors.rule_level.message}
                </Typography>
                )}

                {/* Red Level */}
                <Typography tag="p" text="Red Level" className="text-sm pt-2 text-color-red" />
                <Wrapper className="w-full h-10 relative">
                <Input
                    type="text"
                    placeholder="Enter the Red level"
                    autoComplete="off"
                    {...register("red_level", {
                    required: "Red level is required",
                    pattern: decimalNumberPattern,
                    })}
                    className="text-color-red w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                />
                <Select
                    defaultValue ='meter'
                    options={[{id:'meter', name: "meter" }, {id:'feet', name: "feet" }]}
                    placeholder="Units"
                    className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
                    firstOptionClassName="text-[#7d8da1] dark:bg-black"
                    childClassName="dark:bg-black"
                    {...register("redLevelUnit", { 
                    defaultValue: "meter" // Add this to all unit registers
                    })}
                />
                </Wrapper>
                {errors.red_level && (
                <Typography tag="p" className="text-color-red text-[11px]">
                    {errors.red_level.message}
                </Typography>
                )}

                {/* Orange Level */}
                <Typography tag="p" text="Orange Level" className="text-sm pt-2 text-color-orange" />
                <Wrapper className="w-full h-10 relative">
                <Input
                    type="text"
                    placeholder="Enter the Orange level"
                    autoComplete="off"
                    {...register("orange_level", {
                    required: "Orange level is required",
                    pattern: decimalNumberPattern,
                    })}
                    className="text-color-orange w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                />
                <Select
                    defaultValue ='meter'
                    options={[{id:'meter', name: "meter" }, {id:'feet', name: "feet" }]}
                    placeholder="Units"
                    className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
                    firstOptionClassName="text-[#7d8da1] dark:bg-black"
                    childClassName="dark:bg-black"
                    {...register("orangeLevelUnit", { 
                    defaultValue: "meter" // Add this to all unit registers
                    })}
                />
                </Wrapper>
                {errors.orange_level && (
                <Typography tag="p" className="text-color-red text-[11px]">
                    {errors.orange_level.message}
                </Typography>
                )}

                {/* Blue Level */}
                <Typography tag="p" text="Blue Level" className="text-sm pt-2 text-color-blue" />
                <Wrapper className="w-full h-10 relative">
                <Input
                    type="text"
                    placeholder="Enter the Blue level"
                    autoComplete="off"
                    {...register("blue_level", {
                    required: "Blue level is required",
                    pattern: decimalNumberPattern,
                    })}
                    className="text-color-blue w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                />
                <Select
                    defaultValue ='meter'
                    options={[{id:'meter', name: "meter" }, {id:'feet', name: "feet" }]}
                    placeholder="Units"
                    className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
                    firstOptionClassName="text-[#7d8da1] dark:bg-black"
                    childClassName="dark:bg-black"
                    {...register("blueLevelUnit", { 
                    defaultValue: "meter" // Add this to all unit registers
                    })}
                />
                </Wrapper>
                {errors.blue_level && (
                <Typography tag="p" className="text-color-red text-[11px]">
                    {errors.blue_level.message}
                </Typography>
                )}
                <Button
                    type="submit"
                    className="w-full mt-5 h-11 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
                    containerClass="text-sm flex items-center justify-center gap-3"
                    isLoading={isLoading}
                >
                    submit
                </Button>
            </Form>
            </Wrapper>
          </Wrapper>
    </InputPopUp>
  )
}

export default AddDamAlert