import React, { useState } from "react";

import ScheduleList from "./ScheduleList";
import WeekSchedule from "./WeekSchedule";
import MonthSchedule from "./MonthSchedule";
const Scheduler = ({ weekMonth }) => {
  const [value, onChange] = useState(new Date());
  console.log(value)
  console.log(new Date())
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
  
  const [test, setTest] = React.useState(false);
  
  console.log(test)

  // value !== new Date() ? setTest(false) : setTest(true)

  return (
    <>
      {weekMonth ? (
        <MonthSchedule value={value} onChange={onChange} test={test} setTest={setTest}/>
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
