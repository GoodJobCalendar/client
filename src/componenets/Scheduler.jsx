import React, { useEffect, useState } from "react";

import ScheduleList from "./ScheduleList";
import WeekSchedule from "./WeekSchedule";
import MonthSchedule from "./MonthSchedule";
import Month from "./month/Month";

const Scheduler = ({ weekMonth }) => {
  const [value, onChange] = useState(new Date());
  const [uuuu, setuuuu] = useState("");
  const btn = document.querySelector("react-calendar__navigation__arrow");

  // useEffect(() => {
  //   let dddd = document.querySelector(
  //     ".react-calendar__navigation__label__labelText"
  //   ).textContent;
  //   setuuuu(dddd);
  //   console.log(uuuu);
  // }, [uuuu]);

  let [week, month, day, year, sTime] = value.toString().split(" ");
  let Week = (week) => {
    if (week === "Sun") return "1";
    if (week === "Mon") return "2";
    if (week === "Tue") return "3";
    if (week === "Wed") return "4";
    if (week === "Thu") return "5";
    if (week === "Fri") return "6";
    if (week === "Sat") return "7";
  };
  const weekNumber = `${Week(week)}`;

  return (
    <>
      {weekMonth ? (
        // <MonthSchedule value={value} onChange={onChange} />
        <Month />
      ) : (
        <WeekSchedule
          value={value}
          onChange={onChange}
          weekNumber={Number(weekNumber)}
        />
      )}

      <ScheduleList value={value} />
    </>
  );
};

export default Scheduler;
