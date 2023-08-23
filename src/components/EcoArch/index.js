import { StyledArch } from "./styled";
import eco1 from "../../assets/ecoarch4.jpg"
import eco2 from "../../assets/ecoarch1.jpg"
import eco3 from "../../assets/ecoarch2.jpg"
import eco4 from "../../assets/ecoarch3.webp"

export default function EcoArch(){
    return (
        <StyledArch>
            <article>
                <h1>
                EcoArch Vision
                </h1>
                <p>
                At EcoArch Vision, we believe architecture can be a 
                transformative force in creating a more sustainable future. 
                From conception to execution, each project is shaped by our 
                passion for innovation, respect for the environment, and commitment to community well-being.
                </p>
                <figure>
                <img src={eco1} alt="eco"/>
                </figure>
              
            </article>
            <article>
            <h2>
                What We Offer
                </h2>
                <ul>
                    <li>
                    Sustainable Architecture: We design buildings aligned with sustainability principles, 
                    incorporating solutions like low-impact materials and energy-efficient design.
                    </li>
                    <li>
                    Revitalizing Sustainable Communities: We collaborate with local
                    communities to rejuvenate and reimagine spaces,
                    promoting sustainable development and enhancing quality of life.
                    </li>
                    <li>
                    Intelligent Landscape Utilization: We integrate landscaping
                    as an essential part of our projects, 
                    creating balanced and functional environments that blend seamlessly with nature.
                    </li>
                </ul>
                <div className="group">
                <figure className="rounded-image">
                <img src={eco2} alt="eco"/>
                </figure>
                <figure className="rounded-image">
                <img src={eco3} alt="eco"/>
                </figure>
                <figure className="rounded-image">
                <img src={eco4} alt="eco"/>
                </figure>
                </div>
            </article>
        </StyledArch>
    )
}