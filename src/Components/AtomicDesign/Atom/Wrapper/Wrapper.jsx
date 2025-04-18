/* eslint-disable react/prop-types */

import { forwardRef } from "react"

const Wrapper = forwardRef( ({ className, children, ...props },ref) => {
    return (
        <div className={className} ref={ref} {...props}>
            {children}
        </div>
    )
})

Wrapper.displayName = "Wrapper"

export default Wrapper
