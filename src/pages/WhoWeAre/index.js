import React from "react";
import { StyledWe } from "./styled";
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'

import aquaponia from '../../assets/Aquaponia.jpg'
import aqua from '../../assets/aquaponics1.jpg'


export default function WhoWeAre() {
    const data = [
        { id: '1', image: aquaponia },
        { id: '2', image: aqua}
    ]
    return (
        <StyledWe>
            <div className="aboutus">
                <h1>
                    About AquaPerma Solutions
                </h1>
                <p>
                    Founded by a team of passionate professionals including biologists,
                    pisciculturists, botanists, and engineers, our focus is on designing
                    permaculture aquaponics systems that harmonize food cultivation and biodiversity restoration.
                </p>
                <p>
                    We believe in fostering a harmonious relationship between
                    human activities and nature, ensuring a healthier planet for current and
                    future generations.
                </p>
            </div>
            <Swiper
                modules={[EffectFade]}
                effect="fade"
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation>
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                            src={item.image}
                            alt="slider"
                            className="slide-item"
                        />
                    </SwiperSlide>
                )
                )}
            </Swiper>
        </StyledWe>
    )
}