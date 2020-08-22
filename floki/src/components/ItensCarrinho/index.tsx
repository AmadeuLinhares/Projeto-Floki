import React from 'react';

import { TiPlus, TiMinus } from 'react-icons/ti';
import { Container, Item, Quantidade, Icone, Titulo } from './styles';

interface ParametrosIcons {
  size: number;
  color: string;
}

interface Propriedades {
  Icon: React.FC<ParametrosIcons>;
  sizeIcon: number;
  qtdItens: number;

  colorIcon: string;
}

const Produtos: React.FC<Propriedades> = ({
  children,
  Icon,
  sizeIcon,
  colorIcon,
  qtdItens,
}) => {
  return (
    <Container>
      <Item>
        <Icone>
          <Icon size={sizeIcon} color={colorIcon} />
        </Icone>
        <Titulo>
          <p>{qtdItens}</p>
        </Titulo>
        <Quantidade>
          <p>Itens</p>
        </Quantidade>
      </Item>
    </Container>
  );
};

export default Produtos;
