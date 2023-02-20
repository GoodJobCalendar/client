import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { __selectHour, __selectMinute, __selectTime } from '../../modules/update';

const TimePickerInput = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.schedule.detail);
  const changeTime = () => {
    if (String(detail?.date).split(' ')[1].split(':')[0] > 12) {
      return '오후';
    } else {
      return '오전';
    }
  };
  const [selectTime, setSelectTime] = useState(changeTime());
  const [selectHour, setSelectHour] = useState(String(detail?.date).split(' ')[1].split(':')[0]);
  const [selectMinute, setSelectMinute] = useState(String(detail?.date).split(' ')[1].split(':')[1]);

  //Time Picker
  const division = ['오전', '오후'];
  const hourSelect = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const minuteSelect = ['00', '10', '20', '30', '40', '50'];

  return (
    <Modal className='modal'>
      <SelectTime className='division'>
        {division.map((time, idx) => {
          return (
            <SelectTimeBtn
              key={idx}
              onClick={() => {
                setSelectTime(time);
                dispatch(__selectTime(time));
              }}
              color={selectTime === time}
            >
              {time}
            </SelectTimeBtn>
          );
        })}
      </SelectTime>
      <SelectTime className='hour'>
        {hourSelect.map((hour, idx) => {
          return (
            <SelectTimeBtn
              key={idx}
              onClick={() => {
                setSelectHour(hour);
                dispatch(__selectHour(hour));
              }}
              color={selectHour === hour}
            >
              {hour}
            </SelectTimeBtn>
          );
        })}
      </SelectTime>
      <SelectTime className='minute'>
        {minuteSelect.map((minute, idx) => {
          return (
            <SelectTimeBtn
              key={idx}
              onClick={() => {
                setSelectMinute(minute);
                dispatch(__selectMinute(minute));
              }}
              color={selectMinute === minute}
            >
              {minute}
            </SelectTimeBtn>
          );
        })}
      </SelectTime>
    </Modal>
  );
};

export default TimePickerInput;

const Modal = styled.div`
  background-color: var(--blue1);
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32), inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  border-radius: 6.84px;
  height: 147px;
  overflow: hidden;
  padding: 18px 0;
  text-align: center;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const SelectTime = styled.div`
  :first-child {
    justify-content: flex-end;
  }
  :nth-child(2) {
    position: relative;
  }
  :nth-child(2)::after {
    content: ':';
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: auto;
  box-sizing: border-box;
  flex: 1;
  overflow-y: scroll;
`;
const SelectTimeBtn = styled.button`
  background-color: transparent;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => (props.color ? 'var(--black)' : 'var(--gray2)')};
`;
