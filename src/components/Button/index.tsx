import React, { ButtonHTMLAttributes } from 'react';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <Loader type="ThreeDots" height={40} width={40} color="#000" />
    ) : (
      children
    )}
  </Container>
);

export default Button;
