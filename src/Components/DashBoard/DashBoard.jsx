import Wrapper from "../AtomicDesign/Wrapper/Wrapper"

const DashBoard = () => {
    return (
        <Wrapper className="w-[80vw] text-blue-200 text-2xl">
            DashBoard
            <Wrapper className="w-40 h-40 bg-[#121820] rounded-lg mt-8">
                hello
            </Wrapper>
        </Wrapper>
    )
}

export default DashBoard
