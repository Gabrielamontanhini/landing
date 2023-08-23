import { StyledHome } from "./styled";
import aqua from "../../assets/aquaponia.webp"

export default function Home(){
    return (
        <StyledHome>
            <article>
                <h1>
                AquaPerma Solutions
                </h1>
                <p>
                AquaPerma Solutions is your gateway to the world of aquaponics, offering accessible 
                and sustainable solutions that bridge the gap between nature and agriculture. 
                We are dedicated to democratizing the practice of aquaponics 
                and bringing its benefits to individuals, communities, and institutions.
                </p>
            </article>
            <figure>
                <img src={aqua} alt="figure"/>
            </figure>
        </StyledHome>
    )
}