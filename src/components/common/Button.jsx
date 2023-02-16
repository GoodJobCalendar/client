import React from 'react';

import styled from 'styled-components';

const Button = ({ onClick, children, className }) => {
  return (
    <ButtonComponent onClick={onClick} className={className}>
      {children}
    </ButtonComponent>
  );
};

export default Button;

const ButtonComponent = styled.button`
  outline: none;
  border-radius: 6px;
  width: 100%;
  padding: 17px 0;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
