/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Wrapper from "../../Atom/Wrapper/Wrapper";

const Pichart = ({ className, subClassName, innerClassName, percentage, speed = 25, variant }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(0);
    }, [percentage]);

    useEffect(() => {
        const target = Math.min(isNaN(percentage) ? 0 : percentage, 100);
        const targetCeil = Math.ceil(target); 

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= targetCeil) {
                    clearInterval(interval); 
                    return prevCount; 
                }
                return prevCount + 1; 
            });
        }, speed);

        return () => clearInterval(interval);
    }, [percentage, speed]);

    return (
        <Wrapper className={className}>
            <Wrapper
                className={subClassName}
                style={{
                    background:
                        variant !== 'gray'
                            ? `conic-gradient(var(--color-primary) ${count * 3.6}deg, var(--color-tertiary) ${count * 3.6}deg)`
                            : `conic-gradient(var(--gray-dark) ${count * 3.6}deg, var(--gray-dark-variant) ${count * 3.6}deg)`,
                }}
            >
                <Wrapper className={innerClassName}>{count}%</Wrapper>
            </Wrapper>
        </Wrapper>
    );
};

export default Pichart;