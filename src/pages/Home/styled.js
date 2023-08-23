import { styled } from "styled-components";

export const StyledHome = styled.section`
width: 80%;
height: 91vh;
display: flex;
align-items: center;
background-color: rgba(255, 255, 255, 0.7);
article{
    width: 50%;
    h1{
        font-size: 40px;
    }
    p{
        font-size: 30px;
    }
}
figure{
    width: 50%;
    img{
        width: 100%;
        border-radius: 100px;
    }
}
`