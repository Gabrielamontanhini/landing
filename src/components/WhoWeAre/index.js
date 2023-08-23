import React from "react";

import { StyledWe } from "./styled";
import { Swiper , SwiperSlide } from 'swiper/react'
import { EffectFade } from 'swiper/modules'

import aquaponia from '../../assets/Aquaponia.jpg' 
import arquitetura from '../../assets/arquitetura.jpg' 
import tratamento from '../../assets/tratamento.png' 

export default function WhoWeAre(){
    const data = [
        {id: '1', image: aquaponia},
        {id: '3', image: arquitetura},
        {id: '4', image: tratamento}
    ]
    return (
        <StyledWe>
            <div className="aboutus">
                <h1>
                About EcoSolutions Alliance and Our Vision
                </h1>
                <p>
                EcoSolutions Alliance is a collective of 
                professionals dedicated to creating innovative and
                sustainable solutions for a greener future.
                Our diverse team includes architects, civil and environmental engineers, 
                sanitation experts, biologists, pisciculturists, and more.
                By combining our expertise, we have formed a powerful alliance 
                that aims to promote accessibility to eco-friendly practices and services.
                </p>
                <p>
                Our vision is to transform the way we interact with the 
                environment by integrating modern technology, 
                ecological principles, and community engagement. 
                We believe in fostering a harmonious relationship between 
                human activities and nature, ensuring a healthier planet for current and 
                future generations.
                </p>
            </div>
            <Swiper
            modules={[EffectFade]}
            effect="fade"
            slidesPerView={1}
            pagination={{clickable: true}}
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