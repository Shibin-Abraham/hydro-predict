/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react"
import Wrapper from "../Wrapper/Wrapper"
const Media = forwardRef(({
    title,
    mediaType,
    mediaSrc,
    className,
    children,
    imgClass,
    ...restProps
}, ref) => {
    return (
        <Wrapper className={className}>
            {
                mediaType === 'image' ?
                    (<img className={`w-full h-full object-cover rounded-[15px] ${imgClass}`} src={mediaSrc} alt={title} />)
                    :
                    (<video ref={ref} className="w-full h-full object-cover rounded-[15px]" src={mediaSrc} {...restProps} />)
            }
            {children}
        </Wrapper>
    )
})

export default Media
