/* eslint-disable react/prop-types */
import { getBtnClasses } from './utils'
import BtnLoader from '../Loader/BtnLoader'

const Button = ({
    variant = "",
    variantType = "",
    type = "button",
    className,
    children,
    isLoading,
    onlyLoader,
    containerClass = "flex items-center justify-center gap-3",
    ...restProps
}) => {
    const btnClasses = getBtnClasses({ variant, variantType, className, isLoading })
    return (
        <button type={type} className={btnClasses} disabled={isLoading} {...restProps}>
            <span className={containerClass}>

                {
                    isLoading ? <>
                        <BtnLoader
                            className='w-full h-full '
                            spinnerClassName='w-5 h-5 border-[2px] border-[#575353] border-t-white rounded-[50%] animate-spin'
                        />
                        {!onlyLoader&&'processing...'}
                    </> : children
                }
            </span>
        </button>
    )
}

export default Button
