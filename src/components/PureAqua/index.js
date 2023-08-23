import { PureAquaStyled } from "./styled";
import water1 from "../../assets/water1.jpeg"
import water2 from "../../assets/water2.jpg"
import water3 from "../../assets/water3.webp"


export default function PureAqua() {
    return (
        <PureAquaStyled>
            <article>
                <h1>
                    PureAqua Home
                </h1>
                <p>
                    your solution for sustainable water management. We specialize in rainwater harvesting,
                    greywater reuse, ecological septic systems, and eco-friendly sanitation solutions.
                    Our mission is to provide reliable water sources in regions with limited access to proper sanitation
                    and government support, reducing the risk of waterborne diseases. By harnessing the power of rainwater
                    and implementing innovative techniques like greywater recycling, ecological septic systems, and sustainable
                    sanitation practices, we empower communities to take control of their water resources.
                    PureAqua Home ensures that even in areas without proper infrastructure,
                    families can have access to clean water and contribute to a healthier environment.
                </p>
            </article>
            <figure>
            <img src={water1} alt="water"/>
            <img src={water2} alt="water"/>
            <img src={water3} alt="water"/>
            </figure>
        </PureAquaStyled>
    )
}