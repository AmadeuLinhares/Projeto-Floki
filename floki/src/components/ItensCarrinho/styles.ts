import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Icone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Titulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold;
    color: black;
  }
`;

export const Quantidade = styled.div`
  p {
    font-size: 14px;
    margin-left: 10px;
    font-weight: bold;
    color: grey;
  }
`;
