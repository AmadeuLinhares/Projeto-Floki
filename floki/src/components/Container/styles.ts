import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: auto 360px auto;
`;
export const Subcontainer = styled.div`
  grid-area: 2/2/3/3;
  display: grid;
  grid-template-columns: auto 330px auto;
  grid-template-rows: auto auto;
  row-gap: 20px;
`;
export const Aplicacao = styled.div`
  display: grid;
  grid-area: 1/2/2/3;
`;
