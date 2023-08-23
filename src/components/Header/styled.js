import { styled } from "styled-components"

export const StyledHeader = styled.header`
width: 100%;
height: 9vh;
display: flex;
flex-direction: row;
justify-content: space-between;
box-sizing: border-box;
border: 2px solid black;
background-image: url(https://images.fineartamerica.com/images-medium-large-5/2-colorful-koi-fish-swimming-underwater-.jpg);
background-size: contain;
.company{
    width: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    h1{
        font-size: 35px;
        font-weight: 600;
        margin-left: 2%;
    }
}
nav{
    background-color: rgba(255, 255, 255, 0.3);
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
p{
    font-size: 20px;
    font-weight: 800;
}
`