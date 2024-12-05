/* eslint-disable react/prop-types */
import { getBtnClasses } from './utils'
import BtnLoader from '../Loader/BtnLoader'

const Button = ({
    variant = "primary",
    variantType = "solid",
    type = "button",
    className,
    children,
    isLoading,
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
                            spinnerClassName='w-7 h-7 border-[4px] border-[#575353] border-t-[#ffff] rounded-[50%] animate-spin'
                        />
                        processing...
                    </> : children
                }
            </span>
        </button>
    )
}

export default Button
