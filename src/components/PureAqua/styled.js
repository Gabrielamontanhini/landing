import { styled } from "styled-components";

export const PureAquaStyled = styled.section`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
article{
    display: flex;
    flex-direction: column;
    align-items: center;
}
figure{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 70%;
        margin-top: 20px;
        border-radius: 20px;
    }
}
h1{
    font-size: 35px;
}
p{
    font-size: 25px;
    width: 80%;
}
`