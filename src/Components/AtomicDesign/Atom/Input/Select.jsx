/* eslint-disable react/prop-types */
import { forwardRef } from 'react'

const Select = forwardRef(({
    options,
    placeholder,
    name,
    className,
    firstOptionClassName,
    childClassName,
    onChange,
    onBlur,
    ...restProps
}, ref) => {

    return (
        <select
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            className={className}
            {...restProps}
        >
            <option className={firstOptionClassName} value="">{placeholder}</option>
            {options.map((option, index) => (
                <option className={childClassName} key={index} value={option.id}>
                    {option.name}
                </option>
            ))}
        </select>
    )
});
Select.displayName = 'Select'
export default Select
