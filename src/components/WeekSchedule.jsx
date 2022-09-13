import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadweekly, loadDaily } from "../redux/modules/schedule";

const WeekSchedule = ({ setIsActive, isActive }) => {
  const dispatch = useDispatch();
  const weekSchdule = useSelector((state) => state.schedule.weekly);
  const selectDay = useSelector((state) => state.date.select);
  const date = selectDay
    ? new Date(selectDay?.year, selectDay?.month - 1, selectDay?.elm)
    : new Date();

  const Month = date.getMonth() + 1;
  const [monthNum, setMonthNum] = useState(Month);
  const First = new Date(date.getFullYear() / (monthNum + 1) + 1);
  const Dates = First.getDate();
  const monthFirstDateDay = First.getDay();
  const [weekList, setWeekList] = useState();
  const [year, setYear] = useState(date.getFullYear());
  const [weekNum, setWeekNum] = useState(monthFirstDateDay);
  const [plusNum, setPlusNum] = useState(0);
  const [pickDays, setPickDays] = useState();
  const [dateKey, setDateKey] = useState(date);

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

  const getWeekNumber = (dateFrom = new Date(date)) => {
    // 해당 날짜 (일)
    const currentDate = dateFrom.getDate();

    // 이번 달 1일로 지정
    const startOfMonth = new Date(dateFrom.setDate(1));

    // 이번 달 1일이 무슨 요일인지 확인
    const weekDay = startOfMonth.getDay(); // 0: Sun ~ 6: Sat

    // ((요일 - 1) + 해당 날짜) / 7일로 나누기 = N 주차
    return parseInt((weekDay - 1 + currentDate) / 7) + 1;
  };

  const weekIndex = getWeekNumber(new Date(dateKey));
  const weekPlus = () => {
    const w = weekNum + 1;
    setWeekNum(w);
    if (weekIndex === 1) {
      const m = monthNum + 1;
      setMonthNum(m);
    }

    setPlusNum(plusNum + 7);
  };

  const weekMius = () => {
    setPlusNum(plusNum - 7);
    if (weekIndex === 1) {
      const m = monthNum - 1;
      setMonthNum(m);
    } else {
      const w = weekNum - 1;
      setWeekNum(w);
    }
  };

  const yearPlus = () => {
    const y = year + 1;
    setYear(y);
  };

  const yearMius = () => {
    const y = year - 1;
    setYear(y);
  };

  function getBeginOfWeek(idx) {
    const result = new Date(date);
    while (result.getDay() !== 0) {
      result.setDate(result.getDate() - 1);
    }
    return String(
      new Date(result.setDate(result.getDate() + plusNum + idx))
    ).split(" ")[2];
  }

  useEffect(() => {
    setWeekList(Object.entries(weekSchdule));
  }, [weekSchdule, plusNum]);

  useEffect(() => {
    const d = `${year}-${monthNum}-${getBeginOfWeek(0)} 00:00:00`;
    setDateKey(d);
    dispatch(loadweekly(dateKey));
  }, [dateKey, plusNum]);

  function monthTextList() {
    const result = new Date(date);
    while (result.getDay() !== 0) {
      result.setDate(result.getDate() - 1);
    }
    let [week, monthText, day, year, sTime] = result.toString().split(" ");

    const Month = (monthText) => {
      if (monthText === "Jan") return "01";
      if (monthText === "Feb") return "02";
      if (monthText === "Mar") return "03";
      if (monthText === "Apr") return "04";
      if (monthText === "May") return "05";
      if (monthText === "Jun") return "06";
      if (monthText === "Jul") return "07";
      if (monthText === "Aug") return "08";
      if (monthText === "Sep") return "09";
      if (monthText === "Oct") return "10";
      if (monthText === "Nov") return "11";
      if (monthText === "Dec") return "12";
    };
    return Month(monthText).padStart(2, "0");
  }

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
            {`${monthTextList()}월 ${weekIndex}`}
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
              const pickDay = `${year}-${String(monthNum).padStart(
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
                    Dates={Dates}
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
                  <TimeLine>
                    {weekList &&
                      weekList?.map((value, idx) => (
                        <Fragment key={idx}>
                          {value[1]?.map((val, index) => {
                            const days = getBeginOfWeek(
                              new Date(val.date).getDay()
                            );
                            const defalutTtime = Number(elm.split(":")[0]);
                            const listTime = Number(
                              val.date.split(" ")[1].split(":")[0]
                            );
                            const listDay = new Date(val.date).getDay();
                            if (
                              defalutTtime >= listTime &&
                              defalutTtime < listTime + 3
                            ) {
                              return (
                                <Schedule
                                  key={val.scheduleId}
                                  color={val.color}
                                  listDay={listDay}
                                >
                                  <ScheduleText color={val.color}>
                                    {val.title}
                                  </ScheduleText>
                                </Schedule>
                              );
                              // : (
                              //   <ScheduleDotList listDay={listDay}>
                              //     <ScheduleDot color={val.color}></ScheduleDot>
                              //   </ScheduleDotList>
                              // );
                            }
                          })}
                        </Fragment>
                      ))}
                  </TimeLine>
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
  position: absolute;
  bottom: 0;
  left: ${(props) => (props.listDay === 0 ? "calc((100%/ 8) * 1 - 5px)" : "")};
  left: ${(props) => (props.listDay === 1 ? "calc((100%/ 8) * 2 - 5px)" : "")};
  left: ${(props) => (props.listDay === 2 ? "calc((100%/ 8) * 3 - 5px)" : "")};
  left: ${(props) => (props.listDay === 3 ? "calc((100%/ 8) * 4 - 5px)" : "")};
  left: ${(props) => (props.listDay === 4 ? "calc((100%/ 8) * 5 - 5px)" : "")};
  left: ${(props) => (props.listDay === 5 ? "calc((100%/ 8) * 6 - 5px)" : "")};
  left: ${(props) => (props.listDay === 6 ? "calc((100%/ 8) * 7 - 5px)" : "")};
`;
const ScheduleDot = styled.li`
  width: 3px;
  height: 3px;
  border: ${(props) => (props.color === 1 ? "1px solid var(--blue3)" : "")};
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

const Schedule = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) =>
    props.listDay === 0 ? "calc((100% / 8) * 1 + 12px)" : ""};
  left: ${(props) =>
    props.listDay === 1 ? "calc((100% / 8) * 2 + 12px)" : ""};
  left: ${(props) =>
    props.listDay === 2 ? "calc((100% / 8) * 3 + 12px)" : ""};
  left: ${(props) =>
    props.listDay === 3 ? "calc((100% / 8) * 4 + 12px)" : ""};
  left: ${(props) =>
    props.listDay === 4 ? "calc((100% / 8) * 5 + 12px)" : ""};
  left: ${(props) =>
    props.listDay === 5 ? "calc((100% / 8) * 6 + 12px)" : ""};
  left: ${(props) =>
    props.listDay === 6 ? "calc((100% / 8) * 7 + 12px)" : ""};
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
      Number(props.days) === Number(props.Dates)
        ? "var(--blue4)"
        : "var(--gray3)"};
    border: ${(props) =>
      Number(props.days) === Number(props.Dates)
        ? "1px solid var(--blue4)"
        : ""};
    box-sizing: border-box;
  }
`;
