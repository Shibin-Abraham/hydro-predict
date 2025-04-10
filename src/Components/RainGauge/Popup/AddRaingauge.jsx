/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import CloseIcon from "../../../Assets/icons/CloseIcon"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import InputPopUp from "../../AtomicDesign/Molecule/PopUp/InputPopUp"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Button from "../../AtomicDesign/Atom/Button/Button"
import {  useContext, useState } from "react"
import { addNewRaingauge } from "../../../API/Handler/setDataHandler"
import { usePopUp } from "../../Contexts/PopUpContext"
import DamDataContext from "../../Contexts/DamDataContext/DamDataContext"
import Select from "../../AtomicDesign/Atom/Input/Select"

const AddRaingauge = ({setAddRaingauge}) => {
    const [isLoading, setIsLoading] = useState(false)

    const {showError, showSuccess} = usePopUp()
    const {damData} = useContext(DamDataContext)

    const {
            register,
            handleSubmit,
            setError,
            formState: { errors },
            } = useForm();
    const onSubmit = async (data) => { 
        const formatedData = {
            "station_name": data?.station_name,
            "latitude": parseFloat(data?.latitude),
            "longitude": parseFloat(data?.longitude),
            "district": data?.district,
            "red_level": parseFloat(data?.red_level),
            "orange_level": parseFloat(data?.orange_level),
            "yellow_level": parseFloat(data?.yellow_level),
            "catchment_dam_id": data?.damId,
        }
        console.log("Form data:", data,formatedData);
        if((formatedData?.orange_level>formatedData?.red_level)&&(formatedData?.red_level!==0)){
            setError('orange_level', {
                type: 'manual',
                message: `Orange level must be less than red level`,
            });
            return; 
        }
        if((formatedData?.yellow_level>formatedData?.orange_level)&&(formatedData?.orange_level!==0)){
            setError('yellow_level', {
                type: 'manual',
                message: `Yellow level must be less than orange level`,
            });
            return; 
        }

        try {
            setIsLoading(true)
            const response = await addNewRaingauge(formatedData)
            console.log(response);
            showSuccess("New raingauge added successfully!")
            setAddRaingauge(prev=>prev.fetchAllRaingaugeData())
            setAddRaingauge(prev=>prev.state=false)
        } catch (error) {
            console.log(error)
            if(error?.response?.data?.errors?.station_name) setError("station_name", { type: "server", message: error.response?.data?.errors?.station_name })
            showError(error.response?.data?.error??'Error occured')
        }finally{
            setIsLoading(false)
        }
        // Handle form submission logic here
        //setAddRaingauge(prev=>prev.state=false)
    }
    const decimalNumberPattern = /^\d+(\.\d+)?$/;
  return (
    <InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center z-20" >
          <CloseIcon onClick={() => setAddRaingauge(prev=>prev.state=false)} className="absolute z-20 size-5 text-[#595959] dark:text-[#7d8da196] top-4 right-4 hover:cursor-pointer" />
          <Wrapper className="w-full flex flex-col items-center justify-start content-start px-4 pt-4 overflow-y-scroll no-scrollbar">
            <Wrapper className="p-1 rounded-3xl bg-primary-variant absolute top-2">
                <Wrapper className="w-full h-full bg-white rounded-3xl px-8 py-[1px]" >
                <Typography
                    tag="h4"
                    className={`font-normal text-xs select-none capitalize text-primary-hover`}
                    text={`Add Rain Gauge`}
                />
                </Wrapper>
            </Wrapper>
            <Wrapper className='w-full pb-6'>
                <Form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full mt-4 px-6 text-black dark:text-[#7d8da1] "
                >
                    {/* Station Name */}
                    <Typography tag="p" text="Station Name" className="text-sm pt-2" />
                    <Input
                    type="text"
                    placeholder="Enter station name"
                    autoComplete="off"
                    {...register("station_name", {
                        required: "Station name is required",
                    })}
                    className="w-full h-10 rounded-md border border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                    />
                    {errors.station_name && (
                    <Typography tag="p" className="text-color-red text-[11px]">
                        {errors.station_name.message}
                    </Typography>
                    )}

                    {/* Latitude */}
                    <Typography tag="p" text="Latitude (decimal)" className="text-sm pt-2" />
                    <Input
                    type="text"
                    placeholder="Enter latitude"
                    autoComplete="off"
                    {...register("latitude", {
                        required: "Latitude is required",
                        pattern: {
                        value: decimalNumberPattern,
                        message: "Invalid latitude format",
                        },
                    })}
                    className="w-full h-10 rounded-md border border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                    />
                    {errors.latitude && (
                    <Typography tag="p" className="text-color-red text-[11px]">
                        {errors.latitude.message}
                    </Typography>
                    )}

                    {/* Longitude */}
                    <Typography tag="p" text="Longitude (decimal)" className="text-sm pt-2" />
                    <Input
                    type="text"
                    placeholder="Enter longitude"
                    autoComplete="off"
                    {...register("longitude", {
                        required: "Longitude is required",
                        pattern: {
                        value: decimalNumberPattern,
                        message: "Invalid longitude format",
                        },
                    })}
                    className="w-full h-10 rounded-md border border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                    />
                    {errors.longitude && (
                    <Typography tag="p" className="text-color-red text-[11px]">
                        {errors.longitude.message}
                    </Typography>
                    )}

                    {/* District */}
                    <Typography tag="p" text="District" className="text-sm pt-2" />
                    <Input
                    type="text"
                    placeholder="Enter district"
                    autoComplete="off"
                    {...register("district", {
                        required: "District is required",
                    })}
                    className="w-full h-10 rounded-md border border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                    />
                    {errors.district && (
                    <Typography tag="p" className="text-color-red text-[11px]">
                        {errors.district.message}
                    </Typography>
                    )}

                    {/* Red Level */}
                    <Typography tag="p" text="Red Level" className="text-sm pt-2 text-color-red" />
                    <Wrapper className="w-full h-10 relative">
                    <Input
                        type="text"
                        placeholder="Enter Red level"
                        autoComplete="off"
                        {...register("red_level", {
                        required: "Red level is required",
                        pattern: {
                            value: decimalNumberPattern,
                            message: "Invalid number",
                        },
                        })}
                        className="text-color-red w-full h-10 rounded-md border border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
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
                        placeholder="Enter Orange level"
                        autoComplete="off"
                        {...register("orange_level", {
                        required: "Orange level is required",
                        pattern: {
                            value: decimalNumberPattern,
                            message: "Invalid number",
                        },
                        })}
                        className="text-color-orange w-full h-10 rounded-md border border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                    />
                    </Wrapper>
                    {errors.orange_level && (
                    <Typography tag="p" className="text-color-red text-[11px]">
                        {errors.orange_level.message}
                    </Typography>
                    )}

                    {/* Yellow Level */}
                    <Typography tag="p" text="Yellow Level" className="text-sm pt-2 text-color-yellow" />
                    <Wrapper className="w-full h-10 relative">
                    <Input
                        type="text"
                        placeholder="Enter Yellow level"
                        autoComplete="off"
                        {...register("yellow_level", {
                        required: "yellow level is required",
                        pattern: {
                            value: decimalNumberPattern,
                            message: "Invalid number",
                        },
                        })}
                        className="text-color-yellow w-full h-10 rounded-md border border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
                    />
                    </Wrapper>
                    {errors.yellow_level && (
                    <Typography tag="p" className="text-color-red text-[11px]">
                        {errors.yellow_level.message}
                    </Typography>
                    )}

                    <Typography tag="p" text="Select Catchment Dam" className="text-sm pt-2" />
                    <Wrapper className="w-full h-10 relative">
                        <Select
                            options={damData}
                            placeholder={"Select Dam"}
                            className={`w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                            placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm cursor-pointer`}
                            firstOptionClassName="text-[#7d8da1] dark:bg-black"
                            childClassName="dark:bg-black"
                            {...register("damId", )}
                        />
                    </Wrapper>
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

export default AddRaingauge
