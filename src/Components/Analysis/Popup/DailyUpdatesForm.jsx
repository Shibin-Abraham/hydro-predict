/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import Button from "../../AtomicDesign/Atom/Button/Button"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import { decimalNumberPattern, getCurrentDate, getCurrentTime } from "./utils"
import Select from "../../AtomicDesign/Atom/Input/Select"
import { useContext, useState } from "react"
import DamDataContext from "../../Contexts/DamDataContext/DamDataContext"

const DailyUpdatesForm = ({damId}) => {
    const [isLoading,setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
      } = useForm();

      const {damData} = useContext(DamDataContext)

      const onSubmit = async (data) => {
        console.log(data)
      }
      const filterdDamData = damData?.filter((data)=>parseInt(data.id)===parseInt(damId))
      console.log(filterdDamData,damData,damId)
    
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
        {...register("waterUnit", { 
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

    {/* Rule Level */}
    <Typography tag="p" text="Rule Level" className="text-sm pt-2" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        defaultValue={parseFloat(filterdDamData?.[0]?.dam_data?.[0]?.rule_level)}
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

    {/* Blue Level */}
    <Typography tag="p" text="Blue Level" className="text-sm pt-2 text-color-blue" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the Blue level"
        defaultValue={parseFloat(filterdDamData?.[0]?.dam_data?.[0]?.blue_level)}
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

    {/* Orange Level */}
    <Typography tag="p" text="Orange Level" className="text-sm pt-2 text-color-orange" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the Orange level"
        defaultValue={parseFloat(filterdDamData?.[0]?.dam_data?.[0]?.orange_level)}
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

    {/* Red Level */}
    <Typography tag="p" text="Red Level" className="text-sm pt-2 text-color-red" />
    <Wrapper className="w-full h-10 relative">
      <Input
        type="text"
        placeholder="Enter the Red level"
        defaultValue={parseFloat(filterdDamData?.[0]?.dam_data?.[0]?.red_level)}
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
        {...register("redUnit", { 
          defaultValue: "meter" // Add this to all unit registers
        })}
      />
    </Wrapper>
    {errors.red_level && (
      <Typography tag="p" className="text-color-red text-[11px]">
        {errors.red_level.message}
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
