import React from 'react';
import { ContainerPrincipal, Subcontainer, Aplicacao } from './styles';
import Cabecalho from '../Cabecalho';

const Container: React.FC = ({ children }) => {
  return (
    <>
      <Cabecalho />
      <ContainerPrincipal>
        <Subcontainer>
          <Aplicacao>{children}</Aplicacao>
        </Subcontainer>
      </ContainerPrincipal>
    </>
  );
};

export default Container;
