import React from 'react';
import {
  ContainerCabecalho,
  SubcontainerCabecalho,
  Cabecalho,
  Usuario,
  Logo,
  Patrocinador,
} from './styles';

const CabecalhoComponent: React.FC = () => {
  return (
    <ContainerCabecalho>
      <SubcontainerCabecalho>
        <Cabecalho>
          <Usuario>
            <div>
              <p>Boa noite</p>
            </div>
            <div>
              <h1>Mariane</h1>
            </div>
          </Usuario>
          <Logo />
          <Patrocinador />
        </Cabecalho>
      </SubcontainerCabecalho>
    </ContainerCabecalho>
  );
};

export default CabecalhoComponent;
