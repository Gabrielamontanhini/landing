import AquaPerma from "../../components/AquaPerma";
import EcoArch from "../../components/EcoArch";
import Home from "../../components/Home";
import PureAqua from "../../components/PureAqua";
import WhoWeAre from "../../components/WhoWeAre";
import { StyledMainPage } from "./styled";


export default function MainPage(){
    return (
        <StyledMainPage>
        <Home />
        <WhoWeAre />
        <AquaPerma />
        <EcoArch />
        <PureAqua />
        </StyledMainPage>
    )
}