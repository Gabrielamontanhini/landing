import Home from "../Home";
import WhoWeAre from "../WhoWeAre";
import { StyledMainPage } from "./styled";
import WeOffer from "../WeOffer";
import WhatIsAqua from "../WhatIsAqua";
import ContactUs from "../ContactUs";



export default function MainPage(){
    return (
        <StyledMainPage>
        <Home />
        <WhoWeAre />
        <WhatIsAqua />
       <ContactUs/>
        </StyledMainPage>
    )
}