import React, { useState } from 'react';

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
  CheckItem,
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
  const [checkbox, setCheckbox] = useState(false);

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
        <CheckItem onChange={() => setCheckbox(!checkbox)} checked={checkbox} />
      </Quantidade>
    </Container>
  );
};

export default Produtos;
