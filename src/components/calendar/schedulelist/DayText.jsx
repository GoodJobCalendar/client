import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const DayText = ({ value, content }) => {
  const TODAYDATE = useSelector((state) => state.date.date).DATE;

  const fullDate = (day) => {
    return `20${day.substr(0, 2)}년 ${day.substr(2, 2)}월 ${day.substr(4, 2)}일 `;
  };

  const getDate = (whatDate) => {
    const day = `20${whatDate.substr(0, 2)}-${whatDate.substr(2, 2)}-${whatDate.substr(4, 2)}`;
    return day;
  };

  const getDay = (whatDay) => {
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayOfWeek = week[new Date(whatDay).getDay()];
    return dayOfWeek;
  };

  const getDday = (content) => {
    const selectedDate = new Date(content.split(' ')[0]);
    if (selectedDate - TODAYDATE > 0) {
      return `D-${Math.floor((selectedDate - TODAYDATE) / (1000 * 60 * 60 * 24))}`;
    } else if (selectedDate - TODAYDATE !== 0) {
      return `D+${Math.floor((TODAYDATE - selectedDate) / (1000 * 60 * 60 * 24))}`;
    } else {
      return 'D-day';
    }
  };
  return (
    <DayTextWrap>
      <DateText>
        {fullDate(value[0])}
        {getDay(getDate(value[0]))}
      </DateText>
      <Dday>{getDday(content.date)}</Dday>
    </DayTextWrap>
  );
};

export default DayText;

const DayTextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 26px;
`;
const DateText = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue4); ;
`;
const Dday = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--point2);
`;
