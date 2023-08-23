import { StyledHeader } from "./styled";

export default function Header(){
    return (
        <StyledHeader>
            <div className="company">
                <h1>AquaPerma Solutions</h1>
            </div>
            <nav>
                <p>Home</p>
                <p>Who we are</p>
                <p>What is Aquaponics?</p>
                <p>What we offer</p>
                <p>Contact us!</p>
            </nav>
        </StyledHeader>
    )
}