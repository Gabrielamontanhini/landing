import { WhatIs } from "./styled"
import aqua1 from "../../assets/aquaponics1.jpg"
import aqua2 from "../../assets/aquaponics2.webp"
import aqua3 from "../../assets/aquaponics3.webp"
import aqua4 from "../../assets/aquaponics4.jpg"

export default function WhatIsAqua() {
    const data = [{ id: '1', image: aqua1 },
    { id: '2', image: aqua2 },
    { id: '3', image: aqua3 },
    { id: '4', image: aqua4 }
    ]
    return (
        <WhatIs>
            <article>
                <h1>
                Unveiling Aquaponics: A Harmonious Ecosystem
                </h1>
                <p>
                Aquaponics is a harmonious symbiosis between aquaculture and hydroponics, 
                creating a closed-loop ecosystem that redefines food cultivation. By harnessing the natural processes of 
                nutrient cycling, our aquaponic systems offer bountiful 
                harvests of fresh produce and fish, all while minimizing waste and resource consumption.
                </p>
                <p>
                    Our unique approach combines aquaponics and permaculture principles to create innovative systems.
                    By utilizing fish waste as nutrient-rich fertilizer for plants,
                    we develop self-sustaining cycles that enhance both food production and ecosystem health.
                </p>
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
        </WhatIs>
    )
}