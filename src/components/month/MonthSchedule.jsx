import React, { useState, useEffect } from "react";
import Head from "./Head";
import Body from "./Body";
import styled from "styled-components";

const MonthSchedule = ({ setIsActive, isActive }) => {
  let DATE = new Date(); // Sun Aug 21 2022 23:42:11 GMT+0900 (한국 표준시)
  const YEAR = DATE.getFullYear(); // 2022
  const MONTH = DATE.getMonth() + 1; // 8
  const TODAY = DATE.getDate(); // 21
  const [month, setMonth] = useState(MONTH); // 8
  const [year, setYear] = useState(YEAR); // 2022
  const [totalDate, setTotalDate] = useState([]); // ['  ', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, '  ', '  ', '  ']
  const [today, setToday] = useState(new Date().getDate()); // 21

  const changeDate = () => {
    //지난달 마지막 일자의 요일(Number)
    const PrevDay = new Date(year, month - 1, 0).getDay();
    //이번달 마지막 일자의 요일(Number)
    const ThisDay = new Date(year, month, 0).getDay();
    //이번달 마지막 일자(Number)
    const ThisDate = new Date(year, month, 0).getDate();

    //이전 날짜 만들기
    let PVLD = [];
    if (PrevDay !== 6) {
      for (let i = 0; i < PrevDay + 1; i++) {
        PVLD.unshift(`  `);
      }
    }
    //다음 날짜 만들기
    let TLD = [];
    for (let i = 1; i < 7 - ThisDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(`  `);
    }

    //현재날짜
    let TD = [];
    TD = [...Array(ThisDate + 1).keys()].slice(1);
    return PVLD.concat(TD, TLD);
  };

  useEffect(() => {
    setToday(TODAY);
  }, [TODAY]);

  useEffect(() => {
    setTotalDate(changeDate());
  }, [year, month]);

  return (
    <MonthWrap>
      <Head
        year={Number(year)}
        month={Number(month)}
        setMonth={setMonth}
        setYear={setYear}
      />
      <Body
        totalDate={totalDate}
        today={today}
        month={Number(month)}
        year={Number(year)}
        setIsActive={setIsActive}
        isActive={isActive}
      />
    </MonthWrap>
  );
};

export default MonthSchedule;
const MonthWrap = styled.div`
  width: 100%;
  z-index: 1;
`;
