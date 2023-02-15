import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { __activeDate } from '../../../modules/date';
import { loadDaily } from '../../../modules/schedule';

const DateInput = ({ idx, datekey }) => {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.date.active);

  return (
    <Input
      id={idx}
      type='radio'
      name='day'
      isActive={isActive}
      onClick={() => {
        dispatch(loadDaily(datekey));
        dispatch(__activeDate(!isActive));
      }}
    />
  );
};

export default DateInput;
const Input = styled.input`
  display: none;
  :checked + label {
    background-color: ${(props) => props.isActive && ` var(--blue4)`};
    color: ${(props) => props.isActive && '#fff!important'};
  }
`;
