import { useNavigate, useSearchParams } from "react-router-dom";
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper";
import Form from "../../AtomicDesign/Atom/Form/Form";
import Typography from "../../AtomicDesign/Atom/Typography/Typography";
import Input from "../../AtomicDesign/Atom/Input/Input";
import Button from "../../AtomicDesign/Atom/Button/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { resetPassword } from "../../../API/Handler/authHandler";
import { usePopUp } from "../../Contexts/PopUpContext";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, setError, watch, formState: { errors } } = useForm()
    const password = watch("password")
    const token = searchParams.get("token");
    const navigate = useNavigate()

    const { showSuccess, showError } = usePopUp()

    const onSubmit = async (data) => {
        console.log(data)
        setIsLoading(true)
        try {
            const requestData = {
                ...data,
                token: token
            }
            const response = await resetPassword(requestData)
            console.log(response)
            if (response?.status === 200) {
                showSuccess(response?.data?.message)
                navigate('/login', { replace: true })
            }
        } catch (error) {
            console.log(error)
            if (error.response?.data?.errors?.email) showError(error.response?.data?.errors?.email)
            if (error.response?.data?.errors?.token) showError(error.response?.data?.errors?.token)
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
                <Typography tag="h2" text="Reset Password" className="text-primary text-xl font-bold mt-4" />

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

                <Wrapper className="w-[90%] mt-6 mb-8 text-center">
                    <Button
                        type="submit"
                        className="w-full h-12 bg-primary text-white hover:bg-primary-hover"
                        containerClass="text-sm flex items-center justify-center gap-3"
                        isLoading={isLoading}
                    >
                        Submit
                    </Button>
                </Wrapper>

            </Form>
        </Wrapper>
    )
}

export default ResetPassword
