import Button from "../../AtomicDesign/Atom/Button/Button"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Select from "../../AtomicDesign/Atom/Input/Select"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"

const SignUp = () => {
    const options = ['Admin', 'Employee']
    return (
        <Wrapper className='w-screen h-screen flex items-center justify-center text-black dark:text-[#7d8da1]'>
            <Form className='w-[30%] max-h-[80%] border-[1px] border-black dark:border-none dark:bg-[#121721f5] rounded-md flex flex-col items-center'>
                <Typography tag="h2" text="SIGN-UP" className="text-primary text-xl font-bold mt-4" />
                <Wrapper className="w-[90%] h-20 mt-8">
                    <Typography tag="p" text="Name" className=" text-sm" />
                    <Input type='text'
                        placeholder='Your Name'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                    />
                </Wrapper>
                <Wrapper className="w-[90%] h-20">
                    <Typography tag="p" text="Email" className=" text-sm" />
                    <Input type='email'
                        placeholder='Email Address'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                    />
                </Wrapper>
                <Wrapper className="w-[90%] h-20">
                    <Typography tag="p" text="Password" className=" text-sm" />
                    <Input type='password'
                        placeholder='Password'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                    />
                </Wrapper>
                <Wrapper className="w-[90%] h-20">
                    <Typography tag="p" text="Confirm" className=" text-sm" />
                    <Input type='password'
                        placeholder='Confirm password'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                    />
                </Wrapper>
                <Wrapper className="w-[90%] h-20">
                    <Typography tag="p" text="Position" className=" text-sm" />
                    <Select
                        options={options}
                        placeholder='Select position'
                        className={`w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm cursor-pointer`}
                        firstOptionClassName="text-[#7d8da1] dark:bg-black"
                        childClassName="dark:bg-black"
                    />

                </Wrapper>
                <Wrapper className="w-[90%] mt-4 mb-8 text-center">
                    <Button type="submit" className="w-full h-12 bg-primary text-white" >
                        Sign up
                    </Button>
                    <Typography tag="p" text="Already have an account?" className="text-xs mt-3">
                        <Typography tag="span" text=" Login" className="text-xs text-primary font-bold cursor-pointer" />
                    </Typography>
                </Wrapper>

            </Form>
        </Wrapper>
    )
}

export default SignUp
