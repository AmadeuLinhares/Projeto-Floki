import React from 'react';

import { TiPlus, TiMinus } from 'react-icons/ti';
import {
  Container,
  Item,
  Quantidade,
  Icone,
  Titulo,
  InputQuantidade,
  MenorQtd,
  QtdToal,
  MaiorQtd,
  UnMedida,
} from './styles';

interface ParametrosIcons {
  size: number;
  color: string;
}

interface Propriedades {
  Icon: React.FC<ParametrosIcons>;
  sizeIcon: number;
  colorIcon: string;
  subtitulo?: string;
  quantidade: number;
  medida: string;
}

const Produtos: React.FC<Propriedades> = ({
  children,
  Icon,
  sizeIcon,
  colorIcon,
  subtitulo,
  quantidade,
  medida,
}) => {
  return (
    <Container>
      <Item>
        <Icone tamanhoIcon={sizeIcon}>
          <Icon size={sizeIcon} color={colorIcon} />
        </Icone>
        <Titulo>
          <p>{children}</p>
          <span>{subtitulo}</span>
        </Titulo>
      </Item>
      <Quantidade>
        <InputQuantidade>
          <MenorQtd>
            <TiPlus size={15} color="grey" />
          </MenorQtd>
          <QtdToal>
            <input value={quantidade} type="text" readOnly />
          </QtdToal>
          <MaiorQtd>
            <TiMinus size={15} color="grey" />
          </MaiorQtd>
        </InputQuantidade>
        <UnMedida>
          <h1>{medida}</h1>
        </UnMedida>
      </Quantidade>
    </Container>
  );
};

export default Produtos;
