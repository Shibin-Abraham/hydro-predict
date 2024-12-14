/* eslint-disable react/prop-types */

const Form = ({ onSubmit, className, children, ...restProps }) => {
    return (
        <form onSubmit={onSubmit} className={className} {...restProps}>
            {children}
        </form>
    )
}

export default Form
