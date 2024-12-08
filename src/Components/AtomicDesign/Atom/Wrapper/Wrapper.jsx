/* eslint-disable react/prop-types */

const Wrapper = ({ className, children, ...props }) => {
    return (
        <div className={className} {...props}>
            {children}
        </div>
    )
}

export default Wrapper
