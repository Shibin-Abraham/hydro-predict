import { useEffect } from "react"
import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"

import { usePopUp } from "../Contexts/PopUpContext"
import Select from "../AtomicDesign/Atom/Input/Select"
import Typography from "../AtomicDesign/Atom/Typography/Typography"
import Input from "../AtomicDesign/Atom/Input/Input"
import Form from "../AtomicDesign/Atom/Form/Form"
import Button from "../AtomicDesign/Atom/Button/Button"


const Prediction = () => {

  const {showInfo} = usePopUp()
  useEffect(() => {
    showInfo('Predictions are estimates only. They are based on historical data.')
  }, [showInfo])
             
            
  return (
    <Wrapper className='w-full h-full text-[#595959] dark:text-[#7d8da1] text-lg overflow-hidden'>
      <Wrapper className='w-full pl-8 pt-3 flex items-center gap-4 ' >
          <Select options={['idukki']} 
          className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
          firstOptionClassName="dark:bg-[#121721f5]"
          childClassName="dark:bg-[#121721f5]"
          placeholder="Select Dam" />
          <Select options={['XGBRegressor','Lasso']} 
          className='w-28 h-6 bg-inherit rounded-md text-[#595959] dark:text-[#7d8da196] text-sm border border-color-border dark:border-[#161d29f5] outline-none' 
          firstOptionClassName="dark:bg-[#121721f5]"
          childClassName="dark:bg-[#121721f5]"
          placeholder="Select Model" />
      </Wrapper>
      <Wrapper className='w-full h-[80vh] flex gap-4 pl-8'>
        <Wrapper className='w-[40vw] h-full pt-3'>
            <Form
              className='w-full text-black dark:text-[#7d8da1] flex flex-col gap-2 justify-between'>
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>
              
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>
                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>

                <Wrapper className='flex gap-3 justify-between'>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                    <Wrapper className='w-[47%]'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>
                </Wrapper>
                <Wrapper className='w-full'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>

                    <Wrapper className='w-full'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>

                
                    <Wrapper className='w-full'>
                      <Typography tag="p" text="Latest Inflow" className=" text-sm" />
                      <Input type='text'
                          placeholder='Enter the latest inflow value'
                          autoComplete='off'
                          className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                              placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                              `}
                      />
                    </Wrapper>

                    <Button
                            type="submit"
                            className="w-full mt-5 h-11 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
                            containerClass="text-sm flex items-center justify-center gap-3"
                           
                        >
                            submit
                        </Button>

          </Form>
        </Wrapper>
        <Wrapper className='w-[42vw] h-full bg-slate-800'>
h
        </Wrapper>
      </Wrapper>

        
    </Wrapper>
  )
}

export default Prediction