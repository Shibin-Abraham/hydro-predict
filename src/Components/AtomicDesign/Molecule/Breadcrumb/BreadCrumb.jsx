/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import Wrapper from "../../Atom/Wrapper/Wrapper";
import Typography from "../../Atom/Typography/Typography";
import { formatBreadcrumb } from "./utils";


const BreadCrumb = ({ className, childClassName }) => {
    const location = useLocation();

    const pathNames = location.pathname.split("/").filter(x => x)


    return (
        <Wrapper className={className}>
            {
                pathNames.map((value, index) => {
                    const to = `/${pathNames.slice(0, index + 1).join("/")}`
                    const formattedValue = formatBreadcrumb(value);

                    return (index + 1 === pathNames.length ?
                        <Typography key={to} tag="span" className={childClassName}>
                            <Link to={to}>{formattedValue}</Link>
                        </Typography> :
                        <Typography key={to} tag="span" className={childClassName}>
                            <Link to={to}>{formattedValue}</Link>
                            {' > '}
                        </Typography>
                    )
                })
            }

        </Wrapper>

    )
}

export default BreadCrumb
