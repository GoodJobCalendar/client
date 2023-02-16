import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ZoomInCircleList from './circlelist/ZoomInCircleList';
import ZoomOutCircleList from './circlelist/ZoomOutCircleList';
import DateInput from './DateInput';

const Body = () => {
  const totalDate = useSelector((state) => state.date.totalDate);
  const month = useSelector((state) => state.date.changeMonth);
  const year = useSelector((state) => state.date.changeYear);

  const prevNum = useSelector((state) => state.date.calendar).prev;
  const nextNum = useSelector((state) => state.date.calendar).next;
  const total = useSelector((state) => state.date.calendar).total;

  const YEAR = useSelector((state) => state.date.date).YEAR;
  const MONTH = useSelector((state) => state.date.date).MONTH;

  const today = useSelector((state) => state.date.date).TODAY;

  const findToday = totalDate.indexOf(today);

  const zoom = useSelector((state) => state.date.zoom);

  const findTodayIndex = (idx) => {
    if (YEAR === year && findToday === idx && month === MONTH) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <SchedulerWrap>
      {totalDate.map((elm, idx) => {
        const datekey = `${year}-${String(month).padStart(2, '0')}-${String(elm).padStart(2, '0')} 00:00:00`;

        return (
          <DateItem key={idx} zoom={zoom}>
            {idx > prevNum - 1 && idx < total - nextNum && (
              <>
                <DateInput idx={idx} datekey={datekey} />
                <DateLabel findToday={findTodayIndex(idx)} htmlFor={idx}>
                  {String(elm).padStart(2, '0')}
                </DateLabel>
              </>
            )}
            {zoom ? <ZoomInCircleList datekey={datekey} /> : <ZoomOutCircleList datekey={datekey} />}
          </DateItem>
        );
      })}
    </SchedulerWrap>
  );
};

const SchedulerWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 0 0 7px 7px;
  box-shadow: 0px 3px 9px 0px rgba(116, 160, 227, 0.14);
  padding: 12px 0;
`;

const DateItem = styled.li`
  width: calc(100% / 7);
  padding: 0 8px;
  text-align: center;
  box-sizing: border-box;
  :nth-child(7n) div label {
    color: var(--blue3);
  }
  :nth-child(7n + 1) div label {
    color: var(--point3);
  }
  height: ${(props) => (props.zoom ? '50px' : '95px')};
`;

const DateLabel = styled.label`
  z-index: 1;
  box-sizing: border-box;
  width: 32.6px;
  height: 32.6px;
  border: ${(props) => props.findToday && `2px solid  var(--blue4)`};
  color: ${(props) => props.findToday && `var(--blue4)`};
  padding: ${(props) => (props.findToday ? '8px' : '10px')};
  margin-bottom: ${(props) => (props.findToday ? '5px' : '')};
  font-weight: 500;
  font-size: 12px;
  border-radius: 100%;
  cursor: pointer;
  display: block;
`;

export default Body;
