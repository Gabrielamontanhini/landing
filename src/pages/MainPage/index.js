import Home from "../Home";
import WhoWeAre from "../WhoWeAre";
import { StyledMainPage } from "./styled";
import WeOffer from "../WeOffer";
import WhatIsAqua from "../WhatIsAqua";



export default function MainPage(){
    return (
        <StyledMainPage>
        <Home />
        <WhoWeAre />
        <WhatIsAqua />
       {/**  <WeOffer />*/}
        </StyledMainPage>
    )
}