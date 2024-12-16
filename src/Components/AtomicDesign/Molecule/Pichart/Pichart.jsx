/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Wrapper from "../../Atom/Wrapper/Wrapper"

const Pichart = ({ className, subClassName, innerClassName, percentage, speed = 25 }) => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count === parseInt(percentage) ? count : count + 1)
        }, speed)
        return () => clearInterval(interval)

    }, [count, percentage])

    return (
        <Wrapper className={className}>
            <Wrapper
                className={subClassName}
                style={{
                    background: `conic-gradient(var(--color-primary) ${count * 3.6}deg, var(--color-tertiary) ${count * 3.6}deg)`,
                }}
            >
                <Wrapper className={innerClassName}>
                    {count}%
                </Wrapper>
            </Wrapper>
        </Wrapper>
    )
}

export default Pichart