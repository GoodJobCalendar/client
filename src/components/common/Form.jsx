import React from 'react';
import styled from 'styled-components';

const Form = ({ className, onSubmit, children }) => {
  return (
    <FormContainer className={className} onSubmit={onSubmit}>
      {children}
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
