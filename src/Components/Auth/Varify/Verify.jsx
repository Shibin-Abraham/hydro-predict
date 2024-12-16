import OtpInput from "react-otp-input"
import Typography from "../../AtomicDesign/Atom/Typography/Typography"
import Wrapper from "../../AtomicDesign/Atom/Wrapper/Wrapper"
import { useState } from "react"
import Button from "../../AtomicDesign/Atom/Button/Button"
import { timer } from "./utils"

const Verify = () => {
    timer({ issuedAt: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`, duration: 300 })
    const [otp, setOtp] = useState(0)
    return (
        <Wrapper className='w-screen h-screen flex items-center justify-center text-black dark:text-[#7d8da1]'>
            <Wrapper className='w-[30%] max-h-[60%] border-[1px] border-black dark:border-none dark:bg-[#121721f5] rounded-md flex flex-col items-center'>
                <Typography tag="h2" text="Verification" className="text-primary text-xl font-bold mt-4" />
                <Wrapper className="w-[95%] mt-4">
                    <Typography tag="p" className="text-xs mt-4 text-center">
                        We just sent your authentication code via email to 12345678910111267892@gmail.com.
                    </Typography>
                </Wrapper>
                <Wrapper className="w-[90%] mt-4 flex justify-center">
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
                    >
                        Verify
                    </Button>
                    <Wrapper className="w-full flex justify-between mt-3" >
                        <Typography tag="p" className="text-xs">
                            You can request a new OTP in
                            <Typography tag="span" text=" 05:00 " className="text-sm text-primary font-bold cursor-pointer" />
                            Seconds.
                        </Typography>
                        <Typography tag="p" text="Re-send OTP" className="text-xs cursor-pointer hover:dark:text-primary" />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default Verify
