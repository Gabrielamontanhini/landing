import { StyledHeader } from "./styled";

export default function Header(){
    return (
        <StyledHeader>
            <div className="company">
                <h1>EcoSolutions Alliance</h1>
            </div>
            <nav>
                <p>Home</p>
                <p>Who we are</p>
                <p>AquaPerma Solutions</p>
                <p>EcoArch Vision </p>
                <p>PureAqua Home</p>
                <p>Contact us!</p>
            </nav>
        </StyledHeader>
    )
}