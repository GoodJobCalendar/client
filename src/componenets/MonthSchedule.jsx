import { useEffect, useState } from "react";
import styled from "styled-components";
import $ from "jquery";

import moment from "moment";
import "moment/locale/ko";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

const MonthSchedule = ({ value, onChange, test, setTest }) => {
  const mark = [0, 0, 0];
  return (
    <MonthWrap>
      <Calendar
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        navigationLabel={null}
        tileContent={({ date, view }) => {
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            return (
              <>
                <div className="flex justify-center items-center absoluteDiv">
                  <div className="dot"></div>
                </div>
              </>
            );
          }
        }}
      />
    </MonthWrap>
  );
};

export default MonthSchedule;
const DotList = styled.div``;
const MonthWrap = styled.div`
  .react-calendar {
    width: 400px;
    max-width: 100%;
    color: var(--black);
    line-height: 1.125em;
    border: none;
    background: none;
  }
  .react-calendar__navigation__arrow {
    font-size: 25px;
    color: #afadb9;
  }
  .react-calendar__navigation button[disabled] {
    background-color: transparent !important;
  }
  .react-calendar__navigation button {
    min-width: auto;
    width: 73%;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: transparent !important;
  }
  .react-calendar__viewContainer {
    background-color: #fff;
    height: 250px;
    box-shadow: 0px 1.81132px 43.4717px rgba(0, 0, 0, 0.04);
    border-radius: 7.24528px;
  }
  .react-calendar__month-view,
  .react-calendar__month-view > div,
  .react-calendar__month-view > div > div {
    height: 100%;
  }
  .react-calendar__month-view > div > div {
    display: flex;
    flex-direction: column;
  }
  .react-calendar__month-view__weekdays {
    flex: 1;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0 !important;
    flex: 1 !important;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-calendar__month-view__weekdays abbr {
    font-weight: 500 !important;
    font-size: 12px !important;
    color: #8d8d8d !important;
    letter-spacing: 0.90566px !important;
  }
  .react-calendar__month-view__days {
    flex: 6;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0;
  }
  .react-calendar__month-view__days abbr {
    font-weight: 500;
    font-size: 12px;
    color: #27272b;
  }
  .react-calendar__navigation__label__labelText {
    font-weight: 700;
    font-size: 14px;
    color: #27272b;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #fff;
  }
  .react-calendar__navigation button[disabled] {
    background-color: transparent;
  }
  abbr[title] {
    text-decoration: none;
  }
  .react-calendar__month-view__days__day--weekend {
    color: var(--black);
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #fff;
    border-radius: 6px;
  }
  .react-calendar__tile--now {
    background: #fff;
    font-weight: bold;
    color: var(--blue4);
  }
  .react-calendar__tile--now > abbr {
    border: 1px solid var(--gray4) !important;
    border-radius: 100%;
    padding: 6px;
  }
  .react-calendar__tile--now:enabled:focus {
    border-radius: 100%;
    font-weight: bold;
    color: var(--blue4);
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #fff;
  }
  .react-calendar__tile--active {
    background: var(--blue4);
    border-radius: 6px;
    font-weight: bold;
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #fff;
    color: white;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #fff;
  }
  .react-calendar__tile--range {
    background-color: #fff;
    color: var(--blue4);
    border-radius: 6px;
  }
  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: var(--blue4);
    color: white;
  }
  .react-calendar__tile--rangeEnd {
    background-color: #fff;
    color: white;
  }
  .react-calendar__tile--rangeEnd > abbr {
    background: var(--gray4);
    padding: 6px;
    border-radius: 100%;
    color: white;
  }
  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }
`;
