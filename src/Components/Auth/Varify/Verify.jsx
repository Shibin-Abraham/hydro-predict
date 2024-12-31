/* eslint-disable react/prop-types */
import OtpInput from "react-otp-input"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import { useEffect, useState } from "react"
import Button from "../../AtomicDesign/Atom/Button/Button"
import { useLocation, useNavigate } from "react-router-dom"
import { resendOTP, verify } from "../../../API/Handler/signUpHandler"
import { usePopUp } from "../../Contexts/PopUpContext"


const Verify = () => {
    const [isLoading, setIsLoading] = useState(false)

    const location = useLocation()

    const [otp, setOtp] = useState(0)
    const [required, setRequired] = useState(false)
    const [resData, setResData] = useState({})

    const { showError, showSuccess } = usePopUp() //custom hook
    const navigate = useNavigate()

    console.log("location", location)

    useEffect(() => setResData(location.state), [location])

    const resendOTPHandler = async () => {
        setIsLoading(true)
        try {
            const response = await resendOTP({
                session_id: resData?.session_id || ""
            })
            console.log("otp res", response)
            if (response?.status === 200) {
                setResData(response?.data)
                showSuccess(response?.data?.message)
            }
        } catch (error) {
            console.log(error)
            showError(error.response?.data?.message)
        } finally {
            setIsLoading(false)
        }
    }

    const onSubmit = async () => {
        console.log(otp.length);
        if (!otp || otp.toString().length < 6) {
            setRequired(true);
            return;
        }
        setRequired(false);
        setIsLoading(true)
        try {
            const response = await verify({
                session_id: resData?.session_id || "",
                otp: otp
            })
            console.log(response)
            if (response?.status === 200) {
                showSuccess(response?.data?.message)
                setOtp(0)
                setTimeout(() => navigate('/login', { replace: true }), 1000)
            }
        } catch (error) {
            console.log(error)
            showError(`${error.response?.data?.message}, please try again`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Wrapper className='w-screen h-screen flex items-center justify-center text-black dark:text-[#7d8da1]'>
            <Wrapper className='w-[30%] max-h-[60%] border-[1px] border-black dark:border-none dark:bg-[#121721f5] rounded-md flex flex-col items-center'>
                <Typography tag="h2" text="Verification" className="text-primary text-xl font-bold mt-4" />
                <Typography tag='p' className='text-color-red text-[11px] mt-2'>
                    {
                        required ? "Please enter OTP" : ""
                    }
                </Typography>
                <Wrapper className="w-[95%] mt-4">
                    <Typography tag="p" className="text-xs mt-4 text-center">
                        We just sent your authentication code via email to {resData?.masked_email}.
                    </Typography>
                </Wrapper>
                <Wrapper className="w-[90%] mt-6 flex justify-center">
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        inputType="tel"
                        renderInput={(props) => <input {...props} style={{
                            width: "3rem",
                            height: "3rem",
                        }}
                            className=" bg-transparent border-[1px] border-black dark:border-[#7d8da1] rounded-md text-center text-lg selection:bg-transparent outline-none " />}
                        containerStyle="w-16 flex items-center justify-center gap-2"
                    />
                </Wrapper>
                <Wrapper className="w-[90%] mt-6 mb-8 text-center">
                    <Button
                        type="submit"
                        className="w-full h-12 bg-primary text-white hover:bg-primary-hover"
                        containerClass="text-sm flex items-center justify-center gap-3"
                        isLoading={isLoading}
                        onClick={onSubmit}
                    >
                        Verify
                    </Button>
                    <Wrapper className="w-full flex justify-between mt-3" >
                        <Typography tag="p" className="text-xs">
                            OTP will expire at.
                            <Typography tag="span" text={resData?.session_expires_at} className="text-xs text-primary cursor-pointer" />
                        </Typography>
                        <Typography onClick={resendOTPHandler} tag="p" text="Re-send OTP" className="text-xs cursor-pointer hover:text-primary" />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default Verify
