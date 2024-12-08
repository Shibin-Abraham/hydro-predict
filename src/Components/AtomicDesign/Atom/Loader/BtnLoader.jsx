/* eslint-disable react/prop-types */
import Wrapper from '../Wrapper/Wrapper'

const BtnLoader = ({
    className,
    spinnerClassName,
    ...restProps
}) => {
    return (
        <Wrapper className={className} {...restProps}>
            <Wrapper
                className={spinnerClassName}
            />
        </Wrapper>
    )
}

export default BtnLoader
