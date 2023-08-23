import { styled } from "styled-components";

export const AquaPermaSolutions = styled.section`
width: 80%;
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
h1{
    font-size: 35px;
}
h2{
    font-size: 30px;
}
p{
    font-size: 22px;
}
ul{
    width: 100%;
    li{
        font-size: 22px;
    }
}
.image-grid {
    width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px; /* Margem entre as imagens */
}
figure {
  width:100%; /* Para manter as imagens quadradas */
  padding-bottom: 2%; /* Mantém a proporção da imagem quadrada */
  position: relative;
  margin: 0; /* Remove margem padrão */
}
img {
  object-fit: cover; /* Impede a distorção e preenche o espaço */
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
`