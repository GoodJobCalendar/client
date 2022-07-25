import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WeekSchedule = () => {
  const selectDay = useSelector((state) => state.date.select);
  const date = new Date(selectDay?.year, selectDay?.month, selectDay?.elm);
  const Month = date.getMonth();
  const Dates = date.getDate();
  const getDay = date.getDay();
  const First = new Date(date.getFullYear() / (Month + 1) + 1);
  const monthFirstDateDay = First.getDay();
  const weekIndex = Math.floor((Dates + monthFirstDateDay) / 7);
  const DAY = ["일", "월", "화", "수", "목", "금", "토"];
  const Time = [
    "03:00",
    "06:00",
    "09:00",
    "12:00",
    "15:00",
    "18:00",
    "22:00",
    "24:00",
  ];
  // 이번주 일요일 구하기
  function getBeginOfWeek(
    date = new Date(selectDay?.year, selectDay?.month - 1, selectDay?.elm),
    startOfWeek = 0
  ) {
    const result = new Date(date);
    while (result.getDay() !== startOfWeek) {
      result.setDate(result.getDate() - 1);
    }
    console.log(result);
    return Number(String(result).split(" ")[2]);
  }
  console.log(getBeginOfWeek());

  return (
    <>
      <Head>
        <WeekBtn>&lt;</WeekBtn>
        <WeekTitle>
          {`${String(Month).padStart(2, "0")}월 ${weekIndex + 1}`}주차
        </WeekTitle>
        <WeekBtn>&gt;</WeekBtn>
      </Head>
      <WeekWrap>
        <Days>
          {DAY.map((elm, idx) => {
            return <Day key={idx}>{elm}</Day>;
          })}
        </Days>
        <DayList>
          {["", "", "", "", "", "", ""].map((elm, idx) => {
            const monday = getBeginOfWeek() + idx;
            return <li key={idx}>{monday}</li>;
          })}
        </DayList>
        <div>
          <ul>
            {Time.map((elm, idx) => {
              return (
                <TimeWrap key={idx}>
                  <TimeText>{elm}</TimeText>
                  <TimeLine></TimeLine>
                </TimeWrap>
              );
            })}
          </ul>
        </div>
      </WeekWrap>
    </>
  );
};

export default WeekSchedule;
const WeekWrap = styled.div`
  background-color: #fff;
`;
const Head = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 21px;
`;
const WeekTitle = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: var(--blue4);
`;
const WeekBtn = styled.button`
  color: var(--blue3);
`;
const Days = styled.div`
  display: flex;
  border-radius: 7px 7px 0 0;
  width: 100%;
`;
const TimeWrap = styled.li`
  display: flex;
  align-items: center;
  padding: 0 12px;
`;
const TimeText = styled.p`
  font-weight: 400;
  font-size: 8px;
  color: var(--blue2);
  padding: 15px 0;
  padding-right: 12px;
`;
const TimeLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px dotted var(--blue2);
`;
const Day = styled.li`
  width: calc(100% / 7);
  padding: 13px 17px;
  font-weight: 500;
  font-size: 12px;
  color: var(--gray3);
  text-align: center;
  :not(:last-child) {
    border-right: 0;
  }
  width: calc(100% / 7);
  :nth-child(7n) {
    color: var(--blue3);
  }
  :nth-child(7n + 1) {
    color: var(--point3);
  }
`;
const DayList = styled.ul`
  display: flex;
  background-color: #fff;
  width: 100%;
  > li {
    /* ${(props) =>
      props.day === props.list ? "span{color: var(--blue4)}" : ""}; */
    padding: 13px 17px;
    width: calc(100% / 7);
    font-weight: 500;
    font-size: 12px;
    color: var(--gray3);
    text-align: center;
    :not(:last-child) {
      border-right: 0;
    }
    width: calc(100% / 7);
    :nth-child(7n) {
      color: var(--blue3);
    }
    :nth-child(7n + 1) {
      color: var(--point3);
    }
  }
`;
