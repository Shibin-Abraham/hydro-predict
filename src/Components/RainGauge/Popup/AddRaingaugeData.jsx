/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import CloseIcon from "../../../Assets/icons/CloseIcon"
import Button from "../../AtomicDesign/Atom/Button/Button"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Select from "../../AtomicDesign/Atom/Input/Select"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import InputPopUp from "../../AtomicDesign/Molecule/PopUp/InputPopUp"
import { decimalNumberPattern, getCurrentDate, getCurrentTime } from "../../Analysis/Popup/utils"
import RaingaugeContext from "../../Contexts/RaingaugeContext/RaingaugeContext"
import { useCallback, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import { getRaingaugeHandlingUsers } from "../../../API/Handler/userDataHandler"
import { addRaingaugeData } from "../../../API/Handler/setDataHandler"
import { usePopUp } from "../../Contexts/PopUpContext"

const AddRaingaugeData = ({setAddRaingaugeData}) => {
    const [options,setOptions] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const { showSuccess, showError } = usePopUp()
    const { auth } = useContext(AuthContext)

    const { raingaugeData, fetchAllRaingaugeData } = useContext(RaingaugeContext);
    const {
            register,
            handleSubmit,
            formState: { errors },
            } = useForm();

    console.log("options",options,raingaugeData,auth)

    const onSubmit = async (data) => {
        console.log("Form data", data);
        const formattedData = {
            raingauge_id : data.raingauge,
            value : data.gauge_value,
            date : data.date,
            time : data.time
        }
        console.log(formattedData)
        try {
            setIsLoading(true)
            const response = await addRaingaugeData(formattedData);
            console.log(response);
            showSuccess("Rain data insertion Done!")
            fetchAllRaingaugeData()
            setAddRaingaugeData(prev=>prev.state=false)
        } catch (error) {
            console.log(error)
            showError(error.response?.data?.error??'Error occured')
        }finally{
            setIsLoading(false)
        }
    }

    const fetchRaingaugeHandlingUsers = useCallback(async (params = {})=>{
        try {
            const {data} =await getRaingaugeHandlingUsers(params)
            console.log("rainhandling",data)
            setOptions(data?.map((item) => ({
                id: item?.raingauge?.id,
                name: item?.raingauge?.station_name,
            })));
            //console.log('dd',await damHandlingUsers)
        } catch (error) {
            console.log(error)
        }
    },[])

    useEffect(() => {
        if (auth?.user?.position?.toUpperCase() === 'ADMIN') {
            setOptions(raingaugeData?.map((item) => ({
                id: item?.id,
                name: item?.station_name,
            })));
        }else{
            fetchRaingaugeHandlingUsers()
        }
    }, [auth, raingaugeData,fetchRaingaugeHandlingUsers]);

  return (
    <InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20" >
          <CloseIcon onClick={() => setAddRaingaugeData({state:false})} className="absolute z-20 size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer" />
          <Wrapper className="w-full flex flex-col items-center justify-start content-start px-4 pt-4 overflow-y-scroll no-scrollbar">
            <Wrapper className="p-1 rounded-3xl bg-primary-variant absolute top-2">
                <Wrapper className="w-full h-full bg-white rounded-3xl px-8 py-[1px]" >
                <Typography
                    tag="h4"
                    className={`font-normal text-xs select-none capitalize text-primary-hover`}
                    text={`Add Raingauge Data`}
                />
                </Wrapper>
            </Wrapper>
            <Wrapper className='w-full pb-6'>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full mt-4 px-6 text-black dark:text-[#7d8da1] pt-6"
            >
                <Typography tag="p" text="Select Raingauge" className="text-sm pt-2" />
                <Wrapper className="w-full h-10 relative">
                    <Select
                        options={options}
                        placeholder={options.length!==0?"Select Raingauge":"Your not assigned to any raingauge"}
                        className={`w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm cursor-pointer`}
                        firstOptionClassName="text-[#7d8da1] dark:bg-black"
                        childClassName="dark:bg-black"

                        {...register("raingauge", {
                            required: "Please select a raingauge",

                        })}
                    />
                </Wrapper>
                {
                    errors.raingauge && (
                        <Typography tag='p' className='text-color-red text-[11px] pt-2'>
                            {errors.raingauge.message}
                        </Typography>
                    )
                }
                <Typography tag="p" text="Raingauge value (mm)" className="text-sm pt-3" />
                <Wrapper className="w-full h-10 relative">
                <Input
                    type="text"
                    placeholder="Enter the Gauge value"
                    autoComplete="off"
                    {...register("gauge_value", {
                    required: "Gauge value is required",
                    pattern: decimalNumberPattern,
                    })}
                    className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                />  
                </Wrapper>
                {errors.gauge_value && (
                <Typography tag="p" className="text-color-red text-[11px]">
                    {errors.gauge_value.message}
                </Typography>
                )}

                {/* Date Picker */}
                <Typography tag="p" text="Date" className="text-sm pt-2" />
                <Input
                    type="date"
                    defaultValue={getCurrentDate()} // Set default date
                    autoComplete="off"
                    {...register("date", { required: "Date is required" })}
                    className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent px-2 text-sm"
                    />
                {errors.date && (
                    <Typography tag="p" className="text-color-red text-[11px]">
                        {errors.date.message}
                    </Typography>
                )}

                {/* Time Picker */}
                <Typography tag="p" text="Time" className="text-sm pt-2" />
                <Input
                type="time"
                defaultValue={getCurrentTime()} // Set default time
                autoComplete="off"
                {...register("time", { required: "Time is required" })}
                className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent px-2 text-sm"
                />
                {errors.time && (
                <Typography tag="p" className="text-color-red text-[11px]">
                    {errors.time.message}
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

export default AddRaingaugeData
