import Button from "../../AtomicDesign/Atom/Button/Button"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"


const DamConstantForm = () => {
  return (
                        <Form
                          className='w-full mt-4 px-6 text-black dark:text-[#7d8da1]'>
                            <Typography tag="p" text="Dam Name'" className=" text-sm" />
                        <Input type='text'
                            placeholder="Enter the dam's name"
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Typography tag="p" text="Maximum Water Level(MWL)" className=" text-sm mt-2" />
                        <Input type='text'
                            placeholder='Enter the maximum water level'
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Typography tag="p" text="Full Reservoir Level(FRL)" className=" text-sm mt-2" />
                        <Input type='text'
                            placeholder='Enter the full reservoir level'
                            autoComplete='off'
                            className={`w-full h-10 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1af] outline-none bg-transparent pl-2 text-sm
                                `}
                        />
                        <Typography tag="p" text="Spillway Crest Level" className=" text-sm mt-2" />
                        <Input type='text'
                            placeholder='Enter the spillway crest level'
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

export default DamConstantForm
