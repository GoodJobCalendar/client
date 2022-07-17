import React, { useEffect, useState } from "react";

import ScheduleList from "./ScheduleList";
import WeekSchedule from "./WeekSchedule";
// import MonthSchedule from "./MonthSchedule";
import Month from "./month/Month";

const Scheduler = ({ weekMonth }) => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  let [week, mm, day, yy, sTime] = value.toString().split(" ");
  let Week = (week) => {
    if (week === "Sun") return "01";
    if (week === "Mon") return "02";
    if (week === "Tue") return "03";
    if (week === "Wed") return "04";
    if (week === "Thu") return "05";
    if (week === "Fri") return "06";
    if (week === "Sat") return "07";
  };
  let Month = (mm) => {
    if (mm === "Jan") return "01";
    if (mm === "Feb") return "02";
    if (mm === "Mar") return "03";
    if (mm === "Apr") return "04";
    if (mm === "May") return "05";
    if (mm === "Jun") return "06";
    if (mm === "Jul") return "07";
    if (mm === "Aug") return "08";
    if (mm === "Sep") return "09";
    if (mm === "Oct") return "10";
    if (mm === "Nov") return "11";
    if (mm === "Dec") return "12";
  };
  const weekNumber = `${Week(week)}`;
  const dateTotal = `${yy}-06-01 00:00:00`;
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);
  const changeDate = (month) => {
    //이전 날짜
    let PVLastDate = new Date(YEAR, month - 1, 0).getDate();
    let PVLastDay = new Date(YEAR, month - 1, 0).getDay();
    //다음 날짜
    const ThisLasyDay = new Date(YEAR, month, 0).getDay();
    const ThisLasyDate = new Date(YEAR, month, 0).getDate();

    //이전 날짜 만들기
    let PVLD = [];
    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PVLD.unshift(PVLastDate - i);
      }
    }
    //다음 날짜 만들기
    let TLD = [];
    for (let i = 1; i < 7 - ThisLasyDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }

    //현재날짜
    let TD = [];

    TD = [...Array(ThisLasyDate + 1).keys()].slice(1);

    return PVLD.concat(TD, TLD);
  };

  useEffect(() => {
    setTotalDate(changeDate(7));
  }, []);

  useEffect(() => {
    setTotalDate(changeDate(month));
  }, [month]);

  const [today, setToday] = useState(0);

  const goToday = () => {
    let TODAY = new Date().getDate();
    let goMonth = new Date().getMonth() + 1;
    setMonth(goMonth);
    setToday(TODAY);
  };

  return (
    <>
      {weekMonth ? (
        // <MonthSchedule value={value} onChange={onChange} />
        <Month
          year={Number(year)}
          month={Number(month)}
          setMonth={setMonth}
          goToday={goToday}
          setYear={setYear}
          totalDate={totalDate}
          today={today}
          weekNumber={weekNumber}
        />
      ) : (
        <WeekSchedule
          value={value}
          onChange={onChange}
          weekNumber={Number(weekNumber)}
        />
      )}

      <ScheduleList dateTotal={dateTotal} />
    </>
  );
};

export default Scheduler;
