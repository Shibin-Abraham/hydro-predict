import Form from "../../AtomicDesign/Atom/Form/Form"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import Button from "../../AtomicDesign/Atom/Button/Button"
import Input from "../../AtomicDesign/Atom/Input/Input"
import { NavLink, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useContext, useState } from "react"
import { getsample } from "../../../API/Handler/sample"
import { login } from "../../../API/Handler/authHandler"
import { AuthContext } from "../../Contexts/AuthContext"

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, setError, formState: { errors } } = useForm()
    const { updateAuth } = useContext(AuthContext)

    const navigate = useNavigate()

    const onSubmit = async (data) => {
        console.log(data)
        setIsLoading(true)
        try {
            const response = await login(data)
            console.log(response)
            if (response?.status === 200) {
                //showSuccess(response?.data?.message)
                updateAuth(true, response?.data?.toke, response?.data?.user) //
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error)
            if (error.response?.data?.errors?.email) setError("email", { type: "server", message: error.response?.data?.errors?.email })
            if (error.response?.data?.errors?.password) setError("password", { type: "server", message: error.response?.data?.errors?.password })
        } finally {
            setIsLoading(false)
        }

        //setTimeout(() => setIsLoading(false), 5000)
    }

    return (
        <Wrapper className='w-screen h-screen flex items-center justify-center text-black dark:text-[#7d8da1]'>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className='w-[30%] max-h-[60%] border-[1px] border-black dark:border-none dark:bg-[#121721f5] rounded-md flex flex-col items-center'
            >
                <Typography tag="h2" text="LOGIN" className="text-primary text-xl font-bold mt-4" />

                <Wrapper className="w-[90%] mt-8">
                    <Typography tag="p" text="Email" className=" text-sm" />
                    <Input type='email'
                        placeholder='Email Address'
                        autoComplete='off'
                        className={`w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                `}

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
                            <Typography tag='p' className='text-color-red text-[11px] mt-2'>
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
                                value: 6,
                                message: 'Password must contain 6 character or number'
                            }
                        })}
                    />
                    {
                        errors.password && (
                            <Typography tag='p' className='text-color-red text-[11px] mt-2'>
                                {errors.password.message}
                            </Typography>
                        )
                    }
                </Wrapper>

                <Wrapper className="w-[90%] mt-4 mb-8 text-center">
                    <Button
                        type="submit"
                        className="w-full h-12 bg-primary text-white hover:bg-primary-hover"
                        containerClass="text-sm flex items-center justify-center gap-3"
                        isLoading={isLoading}
                    >
                        Login
                    </Button>
                    <Wrapper className="w-full flex justify-between mt-3" >
                        <Typography tag="p" text="Don't have an account?" className="text-xs">
                            <NavLink to='/signup' replace>
                                <Typography tag="span" text=" SignUp" className="text-xs text-primary font-bold cursor-pointer" />
                            </NavLink>
                        </Typography>
                        <Typography onClick={() => getsample()} tag="p" text="Forgot password" className="text-xs cursor-pointer hover:text-primary" />
                    </Wrapper>
                </Wrapper>

            </Form>
        </Wrapper>
    )
}

export default Login
