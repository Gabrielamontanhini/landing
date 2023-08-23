import { styled } from "styled-components";

export const StyledArch = styled.section`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
h1{
    font-size: 35px;
}
h2{
    font-size: 30px;
    width: 80%;
}
p, li{
    font-size: 25px;
}
article{
    width: 100%;
    display: flex;
flex-direction: column;
align-items: center;
}
.rounded-image {
  display: inline-block;
  border-radius: 50%; /* Torna a imagem redonda */
  overflow: hidden; /* Esconde as partes fora da forma circular */
  width: 350px; /* Defina a largura desejada */
  height: 350px; /* Defina a altura desejada */
  margin: 10px; /* Adicione uma margem para separar as imagens */
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Evita distorção e centraliza a imagem */
}
.group{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
}
`