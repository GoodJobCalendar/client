import React, { useState, useEffect } from "react";
import Head from "./Head";
import Body from "./Body";
import styled from "styled-components";

const Month = ({
  totalDate,
  today,
  year,
  month,
  setMonth,
  goToday,
  setYear,
  weekNumber,
}) => {
  return (
    <MonthWrap>
      <Head
        year={Number(year)}
        month={Number(month)}
        setMonth={setMonth}
        goToday={goToday}
        setYear={setYear}
        weekNumber={weekNumber}
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

export default Month;
const MonthWrap = styled.div`
  width: 100%;
  z-index: 1;
`;
