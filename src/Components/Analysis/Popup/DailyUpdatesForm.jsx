import Button from "../../AtomicDesign/Atom/Button/Button"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"

const DailyUpdatesForm = () => {
  return (
                    <Form
                        className='w-full mt-4 px-6 text-black dark:text-[#7d8da1]'>
                        <Typography tag="p" text="Water Level" className=" text-sm" />
                        <Input type='text'
                            placeholder='Enter the current water level'
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Typography tag="p" text="Inflow" className=" text-sm mt-2" />
                        <Input type='text'
                            placeholder='Enter the inflow rate'
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Typography tag="p" text="Power House Discharge" className=" text-sm mt-2" />
                        <Input type='text'
                            placeholder='Enter the discharge from power house'
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Typography tag="p" text="Spillway release" className=" text-sm mt-2" />
                        <Input type='text'
                            placeholder='Enter the spillway release amount'
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                         
    
                        <Button
                            type="submit"
                            className="w-full mt-5 h-10 bg-primary dark:bg-primary-variant text-white hover:bg-primary-hover"
                            containerClass="text-sm flex items-center justify-center gap-3"
                           
                        >
                            submit
                        </Button>
                    </Form>
  )
}

export default DailyUpdatesForm
