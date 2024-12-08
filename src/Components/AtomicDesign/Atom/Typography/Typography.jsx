/* eslint-disable react/prop-types */
import React from "react"
const Typography = ({
    tag = "p",
    text,
    className,
    children,
    style,
    ariaLabel,
    ariaLabelledBy,
    ...restProps
}) => {
    return React.createElement(
        tag,
        {
            className: className,
            style: style,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledBy,
            ...restProps
        },
        <>
            {text}{children}
        </>
    )
}

export default Typography
