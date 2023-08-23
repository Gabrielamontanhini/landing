import { AquaPermaSolutions } from "./styled";
import aqua1 from "../../assets/aquaponics1.jpg"
import aqua2 from "../../assets/aquaponics2.webp"
import aqua3 from "../../assets/aquaponics3.webp"
import aqua4 from "../../assets/aquaponics4.jpg"

export default function AquaPerma() {
    const data = [{ id: '1', image: aqua1 },
    { id: '2', image: aqua2 },
    { id: '3', image: aqua3 },
    { id: '4', image: aqua4 }
    ]
    return (
        <AquaPermaSolutions>
            <article>
                <h1>
                    AquaPerma Solutions (Integrated Aquaponics and Permaculture):
                </h1>
                <p>
                    We are AquaPerma Solutions, a dedicated team of professionals united by our passion for sustainable
                    agriculture and ecosystem restoration. Our focus is on designing
                    permaculture aquaponics systems that harmonize food cultivation and biodiversity restoration.
                </p>
                <p>
                    Our unique approach combines aquaponics and permaculture principles to create innovative systems.
                    By utilizing fish waste as nutrient-rich fertilizer for plants,
                    we develop self-sustaining cycles that enhance both food production and ecosystem health.
                </p>
            </article>
            <article>
                <h2>
                    What We Offer:
                </h2>
               
                    <ul>
                        <li>
                            Designing Integrated Systems: Crafting setups that synergize crop
                            cultivation and ecosystem restoration.
                        </li>
                        <li>
                            Ecosystem Restoration: Revitalizing natural habitats through our permaculture aquaponics systems.
                        </li>
                        <li>
                            Sustainable Food Production: Enabling nutrient-rich produce growth while reducing water usage and waste production.
                        </li>
                    </ul>
              
            </article>
            <div class="image-grid">
                {data.map((item) => (
                    <figure key={item.id}>
                    <img
                        
                        src={item.image}
                        alt="item" 
                    />
                    </figure>
                ))}
            </div>
            <article>
                <h2>
                    Our Impact:
                </h2>
                <p>
                    Our journey has led us to collaborate on meaningful projects with schools, orphanages, and social welfare organizations. 
                    By bringing sustainable food sources to these institutions, we empower communities and contribute to the well-being of vulnerable groups. 
                    This work embodies our commitment to environmental stewardship and social responsibility.
                </p>
            </article>
        </AquaPermaSolutions>
    )
}