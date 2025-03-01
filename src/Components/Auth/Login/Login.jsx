import Form from "../../AtomicDesign/Atom/Form/Form"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import Button from "../../AtomicDesign/Atom/Button/Button"
import Input from "../../AtomicDesign/Atom/Input/Input"
import { NavLink, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useCallback, useContext, useEffect, useState } from "react"
//import { getsample } from "../../../API/Handler/sample"
import { login, sendResetLink } from "../../../API/Handler/authHandler"
import { AuthContext } from "../../Contexts/AuthContext"
import { usePopUp } from "../../Contexts/PopUpContext"
import InputPopUp from "../../AtomicDesign/Molecule/PopUp/InputPopUp"
import CloseIcon from "../../../Assets/icons/CloseIcon"
import { rememberMe } from "../../../API/Handler/userDataHandler"

const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [isResetLoading, setIsResetLoading] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)
    const { register, handleSubmit, setError, formState: { errors } } = useForm()
    const {
        register: registerReset,
        handleSubmit: handleSubmitReset,
        formState: { errors: resetErrors },
        reset,
        setError: setResetError
    } = useForm();
    const { updateAuth } = useContext(AuthContext)
    const { showSuccess, showError } = usePopUp() //custom hook

    const navigate = useNavigate()

    const fetchUser = useCallback(async ()=>{
            try {
                const {data} = await rememberMe();
                console.log("remember me ",data)
                updateAuth(data?.status, data?.token, data) //
                navigate('/dashboard', { replace: true })
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        },[navigate,updateAuth])
    

    const onSubmit = async (data) => {
        console.log(data)
        setIsLoading(true)
        try {
            const response = await login(data)
            console.log(response)
            if (response?.status === 200) {
                if(!response?.data?.user?.status) {
                    showError("Access Denied, Please contact admin")
                    return
                }
                updateAuth(response?.data?.user?.status, response?.data?.token, response?.data?.user) //
                showSuccess(response?.data?.message)
                navigate('/dashboard', { replace: true })
            }
        } catch (error) {
            console.log(error)
            if (error.response?.data?.error) showError(error.response?.data?.error)
            if (error.response?.data?.errors?.email) setError("email", { type: "server", message: error.response?.data?.errors?.email })
            if (error.response?.data?.errors?.password) setError("password", { type: "server", message: error.response?.data?.errors?.password })
        } finally {
            setIsLoading(false)
        }

        //setTimeout(() => setIsLoading(false), 5000)
    }

    const resetPassword = async (data) => {
        console.log(data)
        setIsResetLoading(true)
        try {
            const requestData = {
                ...data,
                frontend_url: import.meta.env.VITE_APP_URL,
            }

            const response = await sendResetLink(requestData)
            console.log(response)
            if (response?.status === 200) {
                showSuccess(response?.data?.message)
                reset()
            }
        } catch (error) {
            console.log(error)
            if (error.response?.data?.errors?.email) setResetError("email", { type: "server", message: error.response?.data?.errors?.email })
        } finally {
            setIsResetLoading(false)
        }
    }

    useEffect(()=>fetchUser,[fetchUser])

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
                        <Typography onClick={() => setForgotPassword(true)} tag="p" text="Forgot password" className="text-xs cursor-pointer hover:text-primary" />
                    </Wrapper>
                </Wrapper>

            </Form>
            {
                forgotPassword
                &&
                <InputPopUp className="w-full h-full bg-[#000000be] absolute flex items-center justify-center">
                    <Wrapper className="w-full flex items-center justify-between">
                        <Typography tag="h2" text="Reset Password" className="text-center text-primary text-xl font-bold mt-4 ml-4" />
                        <CloseIcon onClick={() => setForgotPassword(false)} className="size-5 text-[#595959] dark:text-[#7d8da196] mr-4 hover:cursor-pointer" />
                    </Wrapper>

                    <Typography tag="p" className="text-sm mt-6 px-6" >
                        {
                            "Forgot your password? We can email you a link to reset it. Please enter the email address that you had provided during registration. Now click the Send Reset Link button and check your inbox for an email to reset your password."
                        }
                    </Typography>
                    <Form
                        onSubmit={handleSubmitReset(resetPassword)}
                        className='w-full mt-4 px-6 pb-6'>
                        <Input type='email'
                            placeholder='Email Address'
                            autoComplete='off'
                            className={`w-full h-11 mt-1 rounded-md border-[1px] border-black dark:border-[#7d8da1]
                                placeholder:text-[#7d8da1] outline-none bg-transparent pl-2 text-sm
                                `}
                            {...registerReset('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Please enter a valid email address.'
                                }
                            })}
                        />
                        {
                            resetErrors.email && (
                                <Typography tag='p' className='text-color-red text-[11px] mt-2'>
                                    {resetErrors.email.message}
                                </Typography>
                            )
                        }
                        <Button
                            type="submit"
                            className="w-full mt-4 h-12 bg-primary text-white hover:bg-primary-hover"
                            containerClass="text-sm flex items-center justify-center gap-3"
                            isLoading={isResetLoading}
                        >
                            Send Reset Link
                        </Button>
                    </Form>
                </InputPopUp>
            }
        </Wrapper>
    )
}

export default Login



