import { styled } from "styled-components";

export const ContactStyled = styled.section`
width: 80%;
display: flex;
background-color: rgba(255, 255, 255, 0.7);
h2{
    font-size: 30px;
}
p{
    font-size: 20px;
}
article{
    width: 50%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
form{
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
input, textarea{
    width: 60%;
    border-radius: 12px;
}
textarea{
    height: 100px;
}
`