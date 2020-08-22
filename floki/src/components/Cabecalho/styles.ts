import styled from 'styled-components';
import Background from '../../assets/background-cabecalho.jpg';
import LogoImg from '../../assets/logo.png';

export const ContainerCabecalho = styled.div`
  grid-area: 1/1/2/3;
  display: grid;
  grid-template-columns: auto 360px auto;

  position: relative;
  ::before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.6;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
  }
`;
export const SubcontainerCabecalho = styled.div`
  grid-area: 1/2/2/3;
  display: grid;
  grid-template-columns: auto 330px auto;
  /* grid-template-rows: 90px auto;
  row-gap: 20px; */
`;

export const Cabecalho = styled.div`
  grid-area: 1/2/2/3;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const Usuario = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9;

  div {
    justify-content: center;
    align-items: center;

    p {
      font-size: 16px;
    }

    h1 {
      font-size: 18px;
      font-weight: bold;
    }
  }
`;
export const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${LogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 9;
`;
export const Patrocinador = styled.div`
  width: 80px;
  height: 80px;
  z-index: 9;
  border-radius: 50%;
  background-color: lightblue;
`;
