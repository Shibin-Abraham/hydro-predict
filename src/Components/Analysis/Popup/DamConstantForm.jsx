import { useForm } from "react-hook-form";
import Button from "../../AtomicDesign/Atom/Button/Button";
import Form from "../../AtomicDesign/Atom/Form/Form";
import Input from "../../AtomicDesign/Atom/Input/Input";
import Typography from "../../AtomicDesign/Atom/Typography/Typography";
import Select from "../../AtomicDesign/Atom/Input/Select";
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper";
import { addNewDam } from "../../../API/Handler/setDataHandler";
import { feetToMeter } from "../utils";
import { useState } from "react";
import { usePopUp } from "../../Contexts/PopUpContext";
import { decimalNumberPattern } from "./utils";

// eslint-disable-next-line react/prop-types
const DamConstantForm = ({setAddDamData}) => {
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
    setIsLoading(true)
    const damData = {
      name: data.damName,
      district: data.district,
      MWL: data.MWLUnit === 'feet' ? feetToMeter(parseFloat(data.MWL)) : parseFloat(data.MWL),
      FRL: data.FRLUnit === 'feet' ? feetToMeter(parseFloat(data.FRL)) : parseFloat(data.FRL),
      spillway_crest_level: data.SpillwayUnit === 'feet' ? feetToMeter(parseFloat(data.spillway)) : parseFloat(data.spillway),
      live_storage_at_FRL: parseFloat(data.liveStorage)
    };
    try {
      const response = await addNewDam(damData);
      console.log(response);
      showSuccess("New dam added successfully!")
      setAddDamData(prev=>prev.state=false)
    } catch (error) {
      console.log(error)
      if (error?.response?.data?.errors?.name) setError("damName", { type: "server", message: error.response?.data?.errors?.name })
      if (error?.response?.data?.error) showError(error.response?.data?.error)
    }finally{
      setIsLoading(false)
    }
    
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mt-4 px-6 text-black dark:text-[#7d8da1] pt-6"
    >
      {/* Dam Name */}
      <Typography tag="p" text="Dam Name" className="text-sm" />
      <Input
        type="text"
        placeholder="Enter the dam's name"
        autoComplete="off"
        {...register("damName", { required: "Dam name is required" })}
        className="w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
      />
      {errors.damName && (
        <Typography tag="p" className="text-color-red text-[11px]">
          {errors.damName.message}
        </Typography>
      )}

      {/* Maximum Water Level */}
      <Typography tag="p" text="Maximum Water Level (MWL)" className="text-sm pt-2" />
      <Wrapper className="w-full h-10 relative">
        <Input
          type="text"
          placeholder="Enter the maximum water level"
          autoComplete="off"
          {...register("MWL", {
            required: "Maximum water level is required",
            pattern: decimalNumberPattern,
          })}
          className="w-full h-full rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm"
        />
        <Select
          defaultValue ='meter'
          options={[{id:'meter', name: "meter" }, {id:'feet', name: "feet" }]}
          placeholder="Units"
          className="w-14 rounded-md pl-1 h-full absolute right-0 border-l-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent text-xs cursor-pointer"
          firstOptionClassName="text-[#7d8da1] dark:bg-black"
          childClassName="dark:bg-black"
          {...register("MWLUnit", { 
            defaultValue: "meter" // Add this to all unit registers
          })}
        />
      </Wrapper>
      {errors.MWL && (
        <Typography tag="p" className="text-color-red text-[11px]">
          {errors.MWL.message}
        </Typography>
      )}

      {/* Full Reservoir Level */}
      <Typography tag="p" text="Full Reservoir Level (FRL)" className="text-sm pt-2" />
      <Wrapper className="w-full h-10 relative">
        <Input
          type="text"
          placeholder="Enter the full reservoir level"
          autoComplete="off"
          {...register("FRL", {
            required: "Full reservoir level is required",
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
          {...register("FRLUnit", { 
            defaultValue: "meter" // Add this to all unit registers
          })}
        />
      </Wrapper>
      {errors.FRL && (
        <Typography tag="p" className="text-color-red text-[11px]">
          {errors.FRL.message}
        </Typography>
      )}

      {/* Spillway Crest Level */}
      <Typography tag="p" text="Spillway Crest Level" className="text-sm pt-2" />
      <Wrapper className="w-full h-10 relative">
        <Input
          type="text"
          placeholder="Enter the spillway crest level"
          autoComplete="off"
          {...register("spillway", {
            required: "Spillway crest level is required",
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
          {...register("SpillwayUnit", { 
            defaultValue: "meter" // Add this to all unit registers
          })}
        />
      </Wrapper>
      {errors.spillway && (
        <Typography tag="p" className="text-color-red text-[11px]">
          {errors.spillway.message}
        </Typography>
      )}

      {/* Live Storage at FRL */}
      <Typography tag="p" text="Live Storage at FRL" className="text-sm pt-2" />
      <Wrapper className="w-full h-10 relative">
        <Input
          type="text"
          placeholder="Live Storage at FRL"
          autoComplete="off"
          {...register("liveStorage", {
            required: "Live storage at FRL is required",
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
          {...register("StorageAtFRLUnit", { 
            defaultValue: "MCM" // Add this to all unit registers
          })}
        />
      </Wrapper>
      {errors.liveStorage && (
        <Typography tag="p" className="text-color-red text-[11px]">
          {errors.liveStorage.message}
        </Typography>
      )}

      {/* Select District */}
      <Typography tag="p" text="Select District" className="text-sm pt-2" />
      <Select
        options={[{ name: "idukki" }]}
        placeholder="Select District"
        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1] placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm cursor-pointer"
        firstOptionClassName="text-[#7d8da1] dark:bg-black"
        childClassName="dark:bg-black"
        {...register("district", {
          required: "Please select a district",
        })}
      />
      {errors.district && (
        <Typography tag="p" className="text-color-red text-[11px]">
          {errors.district.message}
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
  );
};

export default DamConstantForm;
