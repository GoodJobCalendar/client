import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const WeekSchedule = () => {
  const dispatch = useDispatch();
  const selectDay = useSelector((state) => state.date.select);
  const date = selectDay
    ? new Date(selectDay?.year, selectDay?.month - 1, selectDay?.elm)
    : new Date();
  const Year = date.getFullYear();
  const Month = date.getMonth() + 1;
  const Dates = date.getDate();
  const getDay = date.getDay();
  const First = new Date(date.getFullYear() / (Month + 1) + 1);
  const monthFirstDateDay = First.getDay();
  const weekIndex = Math.floor((Dates + monthFirstDateDay) / 7);
  const DAY = ["일", "월", "화", "수", "목", "금", "토"];
  const toDate = date.getDate();
  const toDay = date.getDay();
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

  // const SelectDay = () => {
  //   dispatch();
  // };

  // 이번주 일요일 구하기
  function getBeginOfWeek(date = new Date(), startOfWeek = 0) {
    const result = new Date(date);
    while (result.getDay() !== startOfWeek) {
      result.setDate(result.getDate() - 0);
    }
    return String(result).split(" ")[2];
  }
  // const start = startOfWeek(date);
  return (
    <>
      <Head>
        <WeekBtn>&lt;</WeekBtn>
        <WeekTitle>
          {`${Year}`}년 {`${String(Month).padStart(2, "0")}월 ${weekIndex}`}
          주차
        </WeekTitle>
        <WeekBtn>&gt;</WeekBtn>
      </Head>

      <WeekWrap>
        <Title>
          <Days>
            <li></li>
            {DAY.map((elm, idx) => {
              return (
                <Day
                  key={idx}
                  idx={idx}
                  selectDay={selectDay}
                  getDay={getDay} /*onClick={SelectDay}*/
                >
                  {elm}
                </Day>
              );
            })}
          </Days>
          <DayList>
            <li></li>
            {["", "", "", "", "", "", ""].map((elm, idx) => {
              function getBeginOfWeek(
                date = selectDay
                  ? new Date(
                      selectDay?.year,
                      selectDay?.month - 1,
                      selectDay?.elm
                    )
                  : new Date(),
                startOfWeek = 0
              ) {
                const result = new Date(date);
                while (result.getDay() !== startOfWeek) {
                  result.setDate(result.getDate() - 1);
                }
                // dispatch();
                return String(
                  new Date(result.setDate(result.getDate() + idx))
                ).split(" ")[2];
              }
              const sunday = getBeginOfWeek();
              return (
                <DayNumberList
                  key={idx}
                  selectDay={selectDay}
                  sunday={sunday}
                  Dates={selectDay}
                >
                  <DayNumber
                    selectDay={selectDay}
                    sunday={sunday}
                    Dates={Dates}
                  >
                    {sunday}
                  </DayNumber>
                </DayNumberList>
              );
            })}
          </DayList>
        </Title>
        <div>
          <ul>
            {Time.map((elm, idx) => {
              return (
                <TimeWrap key={idx}>
                  <TimeText>{elm}</TimeText>
                  <TimeLine></TimeLine>
                  <Schedule>일정임</Schedule>
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
  border-radius: 6px;
  box-shadow: 0px 1.81132px 43.4717px rgba(0, 0, 0, 0.04);
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
const Title = styled.div`
  padding-top: 13px;
  li {
    width: calc(100% / 8);
    padding: 6px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Days = styled.ul`
  display: flex;
  border-radius: 7px 7px 0 0;
  width: 100%;
`;
const TimeWrap = styled.li`
  display: flex;
  align-items: center;
  padding: 0 12px;
  position: relative;
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
const Schedule = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15%;
  font-size: 8px;
  background-color: var(--point1);
  border-radius: 4px;
  padding: 3px;
`;
const Day = styled.li`
  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
  padding: 9px 17px;
  font-weight: 500;
  font-size: 12px;
  color: var(--gray3);
  text-align: center;
  :nth-child(7n + 1) {
    color: var(--blue3);
  }
  :nth-child(7n + 2) {
    color: var(--point3);
  }
  background-color: ${(props) =>
    props.selectDay && props.idx === props.getDay && " var(--blue4)"};
  color: ${(props) => props.selectDay && props.idx === props.getDay && "white"};
`;
const DayList = styled.ul`
  display: flex;
  background-color: #fff;
  width: 100%;
`;
const DayNumberList = styled.li`
  border-bottom-left-radius: 21px;
  border-bottom-right-radius: 21px;

  :nth-child(7n + 1) {
    span {
      color: var(--blue3);
    }
  }
  :nth-child(7n + 2) {
    span {
      color: var(--point3);
    }
    background-color: ${(props) =>
      props.selectDay && props.sunday === props.Dates && " var(--blue4)"};
  }
`;
const DayNumber = styled.span`
  text-align: center;
  font-weight: 900;
  font-size: 12px;
  color: var(--gray3);
  border-radius: 100%;
  padding: 4px;
`;
