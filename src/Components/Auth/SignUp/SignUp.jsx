import { NavLink } from "react-router-dom"
import Button from "../../AtomicDesign/Atom/Button/Button"
import Form from "../../AtomicDesign/Atom/Form/Form"
import Input from "../../AtomicDesign/Atom/Input/Input"
import Select from "../../AtomicDesign/Atom/Input/Select"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { signUp } from "../../../API/Handler/signUpHandler"
import { useError } from "../../Contexts/ErrorContext"

const SignUp = () => {
    const options = ['admin', 'employee']
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const password = watch("password")

    const { showError } = useError()

    const onSubmit = async (data) => {
        console.log(data)
        setIsLoading(true)
        try {
            const response = await signUp(data)
            console.log("response", response)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <Wrapper className='w-screen h-screen flex items-center justify-center text-black dark:text-[#7d8da1]'>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className='w-[30%] min-h-[80%] border-[1px] border-black dark:border-none dark:bg-[#121721f5] rounded-md flex flex-col items-center'>
                <Typography tag="h2" text="SIGN-UP" className="text-primary text-xl font-bold mt-2" onClick={() => showError('something went error')} />
                <Wrapper className="w-[90%] mt-8">
                    <Typography tag="p" text="Name" className=" text-sm" />
                    <Input type='text'
                        placeholder='Your Name'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                        {...register("name", {
                            required: "Name is required",
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: "Name can only contain letters and spaces",
                            },
                        })}
                    />
                    {
                        errors.name && (
                            <Typography tag='p' className='text-color-red text-[11px] mt-1'>
                                {errors.name.message}
                            </Typography>
                        )
                    }
                </Wrapper>
                <Wrapper className="w-[90%] mt-2">
                    <Typography tag="p" text="Email" className=" text-sm" />
                    <Input type='email'
                        placeholder='Email Address'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email address.'
                            }
                        })}
                    />
                    {
                        errors.email && (
                            <Typography tag='p' className='text-color-red text-[11px] mt-1'>
                                {errors.email.message}
                            </Typography>
                        )
                    }
                </Wrapper>
                <Wrapper className="w-[90%] mt-2">
                    <Typography tag="p" text="Password" className=" text-sm" />
                    <Input type='password'
                        placeholder='Password'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 4,
                                message: 'Password must contain 4 character or number'
                            }
                        })}
                    />
                    {
                        errors.password && (
                            <Typography tag='p' className='text-color-red text-[11px] mt-1'>
                                {errors.password.message}
                            </Typography>
                        )
                    }
                </Wrapper>
                <Wrapper className="w-[90%] mt-2">
                    <Typography tag="p" text="Confirm" className=" text-sm" />
                    <Input type='password'
                        placeholder='Confirm password'
                        autoComplete='off'
                        className="w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm"
                        {...register('password_confirmation', {
                            required: 'Confirm password is required',
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                    />
                    {
                        errors.password_confirmation && (
                            <Typography tag='p' className='text-color-red text-[11px] mt-1'>
                                {errors.password_confirmation.message}
                            </Typography>
                        )
                    }
                </Wrapper>
                <Wrapper className="w-[90%] mt-2">
                    <Typography tag="p" text="Position" className=" text-sm" />
                    <Select
                        options={options}
                        placeholder='Select position'
                        className={`w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                        placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm cursor-pointer`}
                        firstOptionClassName="text-[#7d8da1] dark:bg-black"
                        childClassName="dark:bg-black"

                        {...register("position", {
                            required: "Please select a position",
                        })}
                    />
                    {
                        errors.position && (
                            <Typography tag='p' className='text-color-red text-[11px] mt-1'>
                                {errors.position.message}
                            </Typography>
                        )
                    }

                </Wrapper>
                <Wrapper className="w-[90%] mt-4 mb-8 text-center">
                    <Button
                        type="submit"
                        className="w-full h-12 bg-primary text-white hover:bg-primary-hover"
                        containerClass="text-sm flex items-center justify-center gap-3"
                        isLoading={isLoading} >
                        Sign up
                    </Button>
                    <Typography tag="p" text="Already have an account?" className="text-xs mt-3">
                        <NavLink to='/login' replace>
                            <Typography tag="span" text=" Login" className="text-xs text-primary font-bold cursor-pointer" />
                        </NavLink>
                    </Typography>
                </Wrapper>

            </Form>
        </Wrapper>
    )
}

export default SignUp
