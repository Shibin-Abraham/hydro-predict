/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const Input = forwardRef(({
    as = 'input',
    type = 'text',
    placeholder,
    value,
    onChange,
    onBlur,
    name,
    className,
    rows = 3,
    ...restProps
}, ref) => {
    const Component = as === 'textarea' ? 'textarea' : 'input'
    return (
        <Component
            type={as === 'textarea' ? undefined : type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={className}
            ref={ref}
            name={name}
            rows={as === 'textarea' ? rows : undefined}
            {...restProps} />
    )
})

export default Input