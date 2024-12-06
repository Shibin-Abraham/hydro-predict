import Typography from "../AtomicDesign/Typography/Typography"
import Wrapper from "../AtomicDesign/Wrapper/Wrapper"
import img from '../../assets/water-waves.png'

const NavBar = () => {
    return (
        <Wrapper className="w-72 h-screen text-gray-300">
            <Wrapper className="w-full h-20 flex">
                <img src={img} className="w-16 h-16 rounded-full" />
                <Typography tag="h2">
                    Hydro-Predict
                </Typography>
            </Wrapper>
        </Wrapper>
    )
}

export default NavBar
