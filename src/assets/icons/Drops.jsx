/* eslint-disable react/prop-types */

const Drops = (

) => {
    return (
        <div className="relative w-60 h-60 bg-slate-100">
            <span className="absolute w-[154px] h-[120px] top-[-10px] left-[-10px] flex justify-center items-center overflow-hidden">
                <span className="absolute w-[150%] h-10 bg-blue-500 rotate-[-45deg] translate-y-[-20px]">
                    New
                </span>
                <span className="absolute w-2.5 h-2.5 bg-blue-500 bottom-0 left-0 z-[-1] shadow-[140px_-140px_0_0_blue]"></span>
            </span>
        </div>
    );
};

export default Drops;

