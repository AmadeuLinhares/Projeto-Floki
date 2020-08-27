import React, { ButtonHTMLAttributes } from 'react';

import { Button, ContainerButton } from './styles';

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  funcao(): void;
}

const ButtonComponent: React.FC<ButtonInterface> = ({ children, funcao }) => {
  return (
    <ContainerButton>
      <Button onClick={() => funcao()}>{children}</Button>
    </ContainerButton>
  );
};

export default ButtonComponent;
