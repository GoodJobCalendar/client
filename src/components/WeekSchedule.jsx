import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadweekly, loadDaily } from "../redux/modules/schedule";

const WeekSchedule = ({ setIsActive, isActive }) => {
  const dispatch = useDispatch();
  const weekSchdule = useSelector((state) => state.schedule.weekly);
  const selectDay = useSelector((state) => state.date.select);
  const standardDate = selectDay
    ? new Date(selectDay?.year, selectDay?.month - 1, selectDay?.elm)
    : new Date();
  const [changeDate, setChangeDate] = useState(standardDate);
  const month = changeDate.getMonth() + 1;
  const date = changeDate.getDate();
  const year = changeDate.getFullYear();
  const [weekList, setWeekList] = useState();
  const [pickDays, setPickDays] = useState();

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

  const getWeekNumber = (dateFrom = new Date(changeDate)) => {
    // 해당 날짜 (일)
    const currentDate = dateFrom.getDate();

    // 이번 달 1일로 지정
    const startOfMonth = new Date(dateFrom.setDate(1));

    // 이번 달 1일이 무슨 요일인지 확인
    const weekDay = startOfMonth.getDay(); // 0: Sun ~ 6: Sat

    // ((요일 - 1) + 해당 날짜) / 7일로 나누기 = N 주차
    return parseInt((weekDay - 1 + currentDate) / 7) + 1;
  };
  const weekIndex = getWeekNumber();
  const dateKey = `${year}-${month}-${getBeginOfWeek(0)} 00:00:00`;
  const weekPlus = () => {
    const d = new Date(
      changeDate.getFullYear(),
      changeDate.getMonth(),
      changeDate.getDate() + 7
    );
    setChangeDate(d);
  };

  const weekMius = () => {
    const d = new Date(
      changeDate.getFullYear(),
      changeDate.getMonth(),
      changeDate.getDate() - 7
    );
    setChangeDate(d);
  };

  const yearPlus = () => {
    const d = new Date(
      changeDate.getFullYear() + 1,
      changeDate.getMonth(),
      changeDate.getDate()
    );
    setChangeDate(d);
  };

  const yearMius = () => {
    const d = new Date(
      changeDate.getFullYear() - 1,
      changeDate.getMonth(),
      changeDate.getDate()
    );
    setChangeDate(d);
  };

  function getBeginOfWeek(idx) {
    const result = new Date(changeDate);

    while (result.getDay() !== 0) {
      result.setDate(result.getDate() - result.getDay());
    }
    return result.getDate() + idx;
  }
  useEffect(() => {
    setWeekList(Object.entries(weekSchdule));
  }, [weekSchdule]);
  useEffect(() => {
    dispatch(loadweekly(dateKey));
  }, [changeDate]);

  return (
    <>
      <Head>
        <YearBtns>
          <YearBtn onClick={yearMius}>&lt;</YearBtn>
          <YearTitle>{`${year}`}</YearTitle>
          <YearBtn onClick={yearPlus}>&gt;</YearBtn>
        </YearBtns>
        <WeekBtns>
          <WeekBtn onClick={weekMius}>&lt;</WeekBtn>
          <WeekTitle>
            {`${String(month).padStart(2, "0")}월 ${weekIndex}`}
            주차
          </WeekTitle>
          <WeekBtn onClick={weekPlus}>&gt;</WeekBtn>
        </WeekBtns>
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
                  isActive={isActive}
                  selectDay={pickDays}
                >
                  <DayText idx={idx} isActive={isActive} selectDay={pickDays}>
                    {elm}
                  </DayText>
                </Day>
              );
            })}
          </Days>
          <DayList>
            <li></li>
            {["", "", "", "", "", "", ""].map((elm, idx) => {
              const days = getBeginOfWeek(idx);
              const pickDay = `${year}-${String(month).padStart(
                2,
                "0"
              )}-${days} 00:00:00`;
              return (
                <DayNumberList key={idx} isActive={isActive}>
                  <DayInput
                    type="radio"
                    name="day"
                    id={idx}
                    isActive={isActive}
                  />
                  <DayNumber
                    htmlFor={idx}
                    days={days}
                    date={date}
                    onClick={() => {
                      setIsActive(!isActive);
                      dispatch(loadDaily(pickDay));
                      setPickDays(new Date(pickDay).getDay());
                    }}
                  >
                    <p>{days}</p>
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
  justify-content: space-between;
  margin: 30px 0;
  > div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`;
const WeekBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const YearBtns = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

const WeekTitle = styled.p`
  font-weight: 600;
  font-size: 22px;
  color: var(--blue4);
`;
const YearTitle = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--blue3);
`;

const WeekBtn = styled.button`
  color: var(--blue3);
`;
const YearBtn = styled.button`
  color: var(--blue3);
  font-weight: 700;
  font-size: 14px;
`;

const Title = styled.div`
  padding: 0 12px;
  padding-top: 13px;
`;

const Days = styled.ul`
  display: flex;
  li {
    width: calc(100% / 8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Day = styled.li`
  border-top-left-radius: 21px;
  border-top-right-radius: 21px;
  background-color: ${(props) =>
    props.isActive && props.idx === props.selectDay ? "var(--blue4)" : ""};
  :nth-child(7n + 1) p {
    color: var(--blue3);
  }
  :nth-child(7n + 2) p {
    color: var(--point3);
  }
  overflow: hidden;
`;

const DayText = styled.p`
  padding: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) =>
    props.isActive && props.idx === props.selectDay ? "#fff" : "var(--gray3)"};
  text-align: center;
  width: 30px;
  height: 30px;
  overflow: hidden;
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
  width: calc(100% / 8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeLine = styled.div`
  width: calc(((100% / 8) * 7) - 12px);
  height: 1px;
  border-top: 1px dotted var(--blue2);
`;

const ScheduleText = styled.p`
  font-weight: 500;
  font-size: 8px;
  line-height: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
  color: #fff;
  color: ${(props) => (props.color === 1 ? "var(--blue4)" : "")};
  color: ${(props) => (props.color === 4 ? "var(--black)" : "")};
`;
const ScheduleDotList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
  position: absolute;
  bottom: 0;
  left: ${(props) => props.listDay === 0 && "calc((100% / 8) * 1 + 24px)"};
  left: ${(props) => props.listDay === 1 && "calc((100% / 8) * 2 + 24px)"};
  left: ${(props) => props.listDay === 2 && "calc((100% / 8) * 3 + 24px)"};
  left: ${(props) => props.listDay === 3 && "calc((100% / 8) * 4 + 24px)"};
  left: ${(props) => props.listDay === 4 && "calc((100% / 8) * 5 + 24px)"};
  left: ${(props) => props.listDay === 5 && "calc((100% / 8) * 6 + 24px)"};
  left: ${(props) => props.listDay === 6 && "calc((100% / 8) * 7 + 24px)"};
`;
const Flex = styled.ul`
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ScheduleDot = styled.li`
  width: 3px;
  height: 3px;
  border-radius: 100%;
  border: ${(props) => props.color === 1 && "1px solid var(--blue3)"};
  background-color: ${(props) => props.color === 2 && "var(--point3)"};
  background-color: ${(props) => props.color === 3 && "rgba(253, 187, 110, 1)"};
  background-color: ${(props) => props.color === 4 && "rgba(253, 247, 110, 1)"};
  background-color: ${(props) => props.color === 5 && "rgba(110, 253, 150, 1)"};
  background-color: ${(props) => props.color === 6 && "rgba(110, 218, 253, 1)"};
  background-color: ${(props) => props.color === 7 && "rgba(130, 110, 253, 1)"};
  background-color: ${(props) => props.color === 8 && "var(--gray2)"};
`;

const Schedule = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.listDay === 0 && "calc((100% / 8) * 1 + 12px)"};
  left: ${(props) => props.listDay === 1 && "calc((100% / 8) * 2 + 12px)"};
  left: ${(props) => props.listDay === 2 && "calc((100% / 8) * 3 + 12px)"};
  left: ${(props) => props.listDay === 3 && "calc((100% / 8) * 4 + 12px)"};
  left: ${(props) => props.listDay === 4 && "calc((100% / 8) * 5 + 12px)"};
  left: ${(props) => props.listDay === 5 && "calc((100% / 8) * 6 + 12px)"};
  left: ${(props) => props.listDay === 6 && "calc((100% / 8) * 7 + 12px)"};
  border-radius: 4px;
  padding: 3px !important;
  width: calc((100% / 8) - 6px);
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.color === 1 ? "1px solid var(--blue3)" : "")};
  box-sizing: border-box;
  background-color: ${(props) => (props.color === 1 ? "#fff" : "")};
  background-color: ${(props) => (props.color === 2 ? "var(--point3)" : "")};
  background-color: ${(props) =>
    props.color === 3 ? "rgba(253, 187, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 4 ? "rgba(253, 247, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 5 ? "rgba(110, 253, 150, 1)" : ""};
  background-color: ${(props) =>
    props.color === 6 ? "rgba(110, 218, 253, 1)" : ""};
  background-color: ${(props) =>
    props.color === 7 ? "rgba(130, 110, 253, 1)" : ""};
  background-color: ${(props) => (props.color === 8 ? "var(--gray2)" : "")};
  background-color: ${(props) => (props.color === 9 ? "var(--blue4)" : "")};
`;

const DayList = styled.ul`
  display: flex;
  width: 100%;
  li {
    width: calc(100% / 8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DayNumberList = styled.li`
  :nth-child(7n + 1) {
    label p {
      color: var(--blue3);
    }
  }
  :nth-child(7n + 2) {
    label p {
      color: var(--point3);
    }
  }
  overflow: hidden;
`;
const DayInput = styled.input`
  display: none;
  :checked + label {
    p {
      background-color: ${(props) => (props.isActive ? "#fff!important" : "")};
      color: ${(props) => (props.isActive ? "var(--blue4)" : "")};
    }
    background-color: ${(props) => (props.isActive ? "var(--blue4)" : "")};
    border-bottom-left-radius: 21px;
    border-bottom-right-radius: 21px;
  }
`;
const DayNumber = styled.label`
  padding: 6px;
  overflow: hidden;
  p {
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    font-weight: 900;
    font-size: 12px;
    border-radius: 100%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) =>
      Number(props.days) === Number(props.date)
        ? "var(--blue4)"
        : "var(--gray3)"};
    border: ${(props) =>
      Number(props.days) === Number(props.date)
        ? "1px solid var(--blue4)"
        : ""};
    box-sizing: border-box;
  }
`;
