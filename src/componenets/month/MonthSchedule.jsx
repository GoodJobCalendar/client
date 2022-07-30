import React, { useState, useEffect } from "react";
import Head from "./Head";
import Body from "./Body";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { schedule } from "../../redux/modules/date";

const MonthSchedule = () => {
  let DATE = new Date();
  const YEAR = DATE.getFullYear();
  const MONTH = DATE.getMonth() + 1;
  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [totalDate, setTotalDate] = useState([]);

  const changeDate = (month) => {
    //이전 날짜
    let PVLastDate = new Date(year, month - 1, 0).getDate();
    let PVLastDay = new Date(year, month - 1, 0).getDay();
    //다음 날짜
    const ThisLasyDay = new Date(year, month, 0).getDay();
    const ThisLasyDate = new Date(year, month, 0).getDate();

    //이전 날짜 만들기
    let PVLD = [];
    if (PVLastDay !== 6) {
      for (let i = 0; i < PVLastDay + 1; i++) {
        PVLD.unshift(`  `);
      }
    }
    //다음 날짜 만들기
    let TLD = [];
    for (let i = 1; i < 7 - ThisLasyDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(`  `);
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
  }, [month, year]);

  const [today, setToday] = useState(0);

  const goToday = () => {
    let TODAY = new Date().getDate();
    setToday(TODAY);
  };

  return (
    <MonthWrap>
      <Head
        year={Number(year)}
        month={Number(month)}
        setMonth={setMonth}
        goToday={goToday}
        setYear={setYear}
      />
      <Body
        totalDate={totalDate}
        today={today}
        month={Number(month)}
        year={Number(year)}
      />
    </MonthWrap>
  );
};

export default MonthSchedule;
const MonthWrap = styled.div`
  width: 100%;
  z-index: 1;
`;
