/* eslint-disable react/prop-types */

import Wrapper from "../AtomicDesign/Atom/Wrapper/Wrapper"

const DashBoard = () => {
    return (
        <Wrapper className="w-full h-full text-black dark:text-blue-200 text-lg">
            <Wrapper className='w-full h-56 '>
                <Wrapper className="w-52 ml-8 h-48 border-[1.5px] border-border dark:border-none dark:bg-[#121720] rounded-lg mt-8 pl-2 pt-2">
                    hello
                </Wrapper>
            </Wrapper>

        </Wrapper>
    )
}

export default DashBoard
