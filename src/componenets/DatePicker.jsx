import React, { useState } from "react";
import styled from "styled-components";

import "date-fns";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
const DatePick = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DateWrap>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM-dd (eee)"
        locale={ko}
      />
    </DateWrap>
  );
};

export default DatePick;
const DateWrap = styled.div`
  .react-datepicker-popper {
    width: 90%;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker {
    border: 1px solid #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .react-datepicker__header {
    padding-top: 0.8em;
    background-color: white;
    width: 100%;
    max-width: 330px;
    margin: auto;
    border: none;
  }
  .react-datepicker__month {
    margin: 0.4em;
  }
  .react-datepicker__day-name {
    margin: 3%;
    font-size: 12px;
    font-weight: 500;
    color: #959595;
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 25px;
  }
  .react-datepicker__day {
    width: 25px;
    height: 25px;
    font-size: 12px;
    margin: 3%;
    line-height: 1.8;
    text-align: center;
    background-color: #fff;
  }
  .react-datepicker__day:hover {
    background-color: transparent;
  }
  .fomrmatDate {
    font-size: 22px;
    font-weight: 500;
  }
  .react-datepicker__day--selected {
    background-color: var(--blue4);
    border-radius: 100%;
    border: none;
    font-weight: 700;
    text-align: center;
    line-height: 25px;
  }
  .react-datepicker__day--keyboard-selected {
    color: #000;
  }
  .react-datepicker__input-container {
    cursor: pointer;
  }
`;
