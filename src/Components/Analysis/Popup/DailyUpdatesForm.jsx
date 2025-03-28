/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import Button from "../../AtomicDesign/Atom/Button/Button"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import { decimalNumberPattern, feetToMeter, getCurrentDate, getCurrentTime } from "./utils"
import Select from "../../AtomicDesign/Atom/Input/Select"
import { useContext, useState } from "react"
import DamDataContext from "../../Contexts/DamDataContext/DamDataContext"
import { addNewDamData } from "../../../API/Handler/setDataHandler"
import { usePopUp } from "../../Contexts/PopUpContext"

const DailyUpdatesForm = ({damId,setAddDamData,damAlert}) => {
    const [isLoading,setIsLoading] = useState(false)
    const { showSuccess, showError } = usePopUp()
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm();

      const {damData} = useContext(DamDataContext)

      const filterdDamData = damData?.filter((data)=>parseInt(data.id)===parseInt(damId))

      const onSubmit = async (data) => {
        //console.log(data)

        const dailyUpdates = {
          dam_id:parseInt(damId),
          dam_alert_id:damAlert?.[0]?.id,
          date:data.date,
          water_level: data.waterLevelUnit === 'feet' ? feetToMeter(parseFloat(data.water_level)) : parseFloat(data.water_level),
          live_storage: parseFloat(data.live_storage),
          inflow: parseFloat(data.inflow), 
          power_house_discharge: parseFloat(data.power_house_discharge),
          spillway_release: parseFloat(data.spillway_release),
          time:data.time,
          remarks: data?.remarks??''
          };
          if (filterdDamData?.[0]?.MWL < dailyUpdates?.water_level) {
            setError('water_level', {
                type: 'manual',
                message: `Cannot exceed the Maximum Water Level (MWL) of ${filterdDamData?.[0]?.MWL} meters.`,
            });
            return; 
          }
          if (filterdDamData?.[0]?.live_storage_at_FRL < dailyUpdates?.live_storage) {
            setError('live_storage', {
                type: 'manual',
                message: `Cannot exceed the Maximum Live storage at FRL of ${filterdDamData?.[0]?.live_storage_at_FRL} MCM.`,
            });
            return; 
          }
          console.log(dailyUpdates,filterdDamData)

          try {
            setIsLoading(true)
            const response = await addNewDamData(dailyUpdates);
            console.log(response);
            showSuccess("Dam data insertion Done!")
            setAddDamData(prev=>prev.fetchAllDamData())
            setAddDamData(prev=>prev.state=false)
          } catch (error) {
            console.log(error)
           showError(error.response?.data?.error??'Error occured')
            
          }finally{
            setIsLoading(false)
          }
      }
    
  return (
    <Form
    onSubmit={handleSubmit(onSubmit)}
    className="w-full mt-4 px-6 text-black dark:text-[#7d8da1] pt-6"
  >
    {/* Water Level */}
    <Typography tag="p" text="Water Level" className="text-sm" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the Water level"
        autoComplete="off"
        {...register("water_level", {
          required: "Water level is required",
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
        {...register("waterLevelUnit", { 
          defaultValue: "meter" // Add this to all unit registers
        })}
      />
    </Wrapper>
    {errors.water_level && (
      <Typography tag="p" className="text-color-red text-[11px]">
        {errors.water_level.message}
      </Typography>
    )}

    {/* live storage */}
    <Typography tag="p" text="Live Storage" className="text-sm pt-2" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the live storage"
        autoComplete="off"
        {...register("live_storage", {
          required: "Live storage is required",
          pattern: decimalNumberPattern,
        })}
        className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
      />
      <Select
        defaultValue ='MCM'
        options={[{id:'MCM', name: "MCM" },]}
        placeholder="Units"
        className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
        firstOptionClassName="text-[#7d8da1] dark:bg-black"
        childClassName="dark:bg-black"
        {...register("liveStorageUnit", { 
          defaultValue: "MCM" // Add this to all unit registers
        })}
      />
    </Wrapper>
    {errors.live_storage && (
      <Typography tag="p" className="text-color-red text-[11px]">
        {errors.live_storage.message}
      </Typography>
    )}
    
    {/* inflow  */}
    <Typography tag="p" text="Inflow" className="text-sm pt-2" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the inflow"
        autoComplete="off"
        {...register("inflow", {
          required: "Inflow is required",
          pattern: decimalNumberPattern,
        })}
        className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
      />
      <Select
        defaultValue ='cumecs'
        options={[{id:'cumecs', name: "cumecs" },]}
        placeholder="Units"
        className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
        firstOptionClassName="text-[#7d8da1] dark:bg-black"
        childClassName="dark:bg-black"
        {...register("inflowUnit", { 
          defaultValue: "cumecs" // Add this to all unit registers
        })}
      />
    </Wrapper>
    {errors.inflow && (
      <Typography tag="p" className="text-color-red text-[11px]">
        {errors.inflow.message}
      </Typography>
    )}

    {/* Power House Discharge */}
    <Typography tag="p" text="Power House Discharge" className="text-sm pt-2" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the Power House Discharge"
        autoComplete="off"
        defaultValue={0}
        {...register("power_house_discharge", {
          required: "Power House Discharge is required",
          pattern: decimalNumberPattern,
        })}
        className="w-full h-full rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
      />
      <Select
        defaultValue ='cumecs'
        options={[{id:'cumecs', name: "cumecs" }]}
        placeholder="Units"
        className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
        firstOptionClassName="text-[#7d8da1] dark:bg-black"
        childClassName="dark:bg-black"
        {...register("powerHouseDischargeUnit", { 
          defaultValue: "cumecs" // Add this to all unit registers
        })}
      />
    </Wrapper>
    {errors.power_house_discharge && (
      <Typography tag="p" className="text-color-red text-[11px]">
        {errors.power_house_discharge.message}
      </Typography>
    )}

    {/* Spillway release */}
    <Typography tag="p" text="Spillway release" className="text-sm pt-2" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the Spillway release"
        autoComplete="off"
        defaultValue={0}
        {...register("spillway_release", {
          required: "Spillway release is required",
          pattern: decimalNumberPattern,
        })}
        className="w-full h-full rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
      />
      <Select
        defaultValue ='cumecs'
        options={[{id:'cumecs', name: "cumecs" }]}
        placeholder="Units"
        className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
        firstOptionClassName="text-[#7d8da1] dark:bg-black"
        childClassName="dark:bg-black"
        {...register("spillwayReleaseUnit", { 
          defaultValue: "cumecs" // Add this to all unit registers
        })}
      />
    </Wrapper>
    {errors.spillway_release && (
      <Typography tag="p" className="text-color-red text-[11px]">
        {errors.spillway_release.message}
      </Typography>
    )}

    {/* Date Picker */}
    <Typography tag="p" text="Date" className="text-sm pt-2" />
    <Input
        type="date"
        defaultValue={getCurrentDate()} // Set default date
        autoComplete="off"
        {...register("date", { required: "Date is required" })}
        className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
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
    className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
    />
    {errors.time && (
    <Typography tag="p" className="text-color-red text-[11px]">
        {errors.time.message}
    </Typography>
    )}

    {/* Remarks */}
    <Typography tag="p" text="Remarks" className="text-sm pt-2" />
    <Input
      type="text"
      placeholder="Remarks"
      autoComplete="off"
      {...register("remarks")}
      className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
    />

    <Button
      type="submit"
      className="w-full mt-5 h-11 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
      containerClass="text-sm flex items-center justify-center gap-3"
      isLoading={isLoading}
    >
      submit
    </Button>
  </Form>
  )
}

export default DailyUpdatesForm
