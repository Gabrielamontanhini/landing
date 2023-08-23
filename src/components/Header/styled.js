import { styled } from "styled-components"

export const StyledHeader = styled.header`
width: 100%;
height: 9vh;
display: flex;
flex-direction: row;
justify-content: space-between;
box-sizing: border-box;
border: 2px solid black;
.company{
    width: 50%;
    h1{
        margin-left: 2%;
    }
}
nav{
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
`