import React from 'react';
import styled from 'styled-components';

export const Input = ({ className, type, placeholder, onChange }) => {
  return <InputComponent className={className} type={type} placeholder={placeholder} onChange={onChange} />;
};
export const FormInput = ({ className, type, placeholder, form }) => {
  return <InputComponent className={className} type={type} placeholder={placeholder} {...form} />;
};
export const AddScheduleInput = ({ className, type, placeholder, onChange }) => {
  return <AddScheduleInputComponent className={className} type={type} placeholder={placeholder} onChange={onChange} />;
};

const InputComponent = styled.input`
  outline: none;
  padding: 18px 23px;
  background-color: #ffffff;
  border: 1px solid var(--blue2);
  border-radius: 6px;
  font-weight: 500;
  ::placeholder {
    color: var(--blue3);
    font-weight: 500;
  }
`;
const AddScheduleInputComponent = styled.input`
  width: 100%;
  outline: none;
  padding: 18px;
  background: #fff;
  border-radius: 6px;
  border: 0;
  outline: none;
  font-weight: 500;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--blue3);
    font-weight: 500;
    font-size: 16px;
  }
`;
