import styled from 'styled-components';

export const Subcontainer = styled.div`
  margin-top: 20px;
  display: grid;
  row-gap: 20px;
`;

export const CarrinhoAtual = styled.div`
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 20px auto 20px;
  border-radius: 10px;
  border: solid 1px grey;
`;
export const Carrinho = styled.div`
  display: grid;
  grid-area: 2/2/3/3;
  row-gap: 20px;
`;
export const HeaderCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconHeaderCar = styled.div`
  display: grid;
`;
export const TituloHeaderCar = styled.div`
  display: grid;
  row-gap: 5px;
`;

export const Titulo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 20px;
    color: grey;
  }
`;
export const Entrega = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 16px;
    color: grey;
  }
  span {
    font-weight: normal;
    font-size: 16px;
    color: #bebebe;
    margin-left: 10px;
  }
`;

export const ExpandeCar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
export const BodyCarrinhoAtual = styled.button`
  display: grid;
  grid-template-columns: repeat(3, auto);
  /* column-gap: 10px; */
  row-gap: 10px;
`;

//  ADICIONAR ITENS AO CARRINHO

export const AdicionarItens = styled.div`
  display: grid;
  grid-template-columns: 20px auto 20px;
  grid-template-rows: 20px auto 20px;
  border-radius: 10px;
  border: solid 1px grey;
`;

export const SubontainerAddItens = styled.div`
  display: grid;
  grid-area: 2/2/3/3;
  row-gap: 20px;
`;

export const HeaderAddItens = styled.div`
  display: grid;
  row-gap: 20px;
`;

export const TitleAddItens = styled.div`
  display: flex;
  justify-content: space-around;
  /* padding-left: 20px; */
  width: 80%;
  h1 {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const SearchAddItens = styled.div`
  border: solid 1px grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  svg {
    cursor: pointer;
    margin-right: 10px;
  }
  input {
    width: 90%;
    height: 100%;
    border: none;
    padding-left: 10px;
    font-size: 16px;
  }
`;

export const IconsSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BodyAddItens = styled.div`
  display: grid;

  row-gap: 10px;
`;
export const HeaderBodyItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ItensAdd = styled.div`
  display: grid;
  grid-auto-rows: min-content;
`;
export const Duvida = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px grey;
  border-radius: 10px;
  padding: 20px;
`;
export const TextoDuvida = styled.div`
  display: grid;
  p {
    font-weight: bold;
  }
`;
export const ContainerButton = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  p {
    font-weight: bold;
  }
`;
