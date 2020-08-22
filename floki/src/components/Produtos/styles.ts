import styled, { css } from 'styled-components';

interface Parameters {
  tamanhoIcon: number;
}
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Icone = styled.div<Parameters>`
  ${props =>
    props.tamanhoIcon &&
    css`
      width: ${props.tamanhoIcon};
      height: ${props.tamanhoIcon};
    `}
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  p {
    font-size: 16px;
    font-weight: bold;
    color: grey;
  }

  span {
    font-size: 14px;
    color: #bebebe;
  }
`;

export const Quantidade = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const InputQuantidade = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const MenorQtd = styled.button`
  background-color: transparent;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const QtdToal = styled.div`
  input {
    width: 20px;
    height: 20px;
    text-align: center;
  }
`;
export const MaiorQtd = styled.button`
  background-color: transparent;
  width: 15px;
  height: 15px;
`;
export const UnMedida = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  h1 {
    font-size: 14px;
    color: grey;
  }
`;
