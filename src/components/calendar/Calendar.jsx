import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { zoomDate } from "../../redux/modules/date";

import styled from "styled-components";

// 컴포넌트
import WeekSchedule from "../WeekSchedule";
import MonthSchedule from "../month/MonthSchedule";
import MonthList from "./MonthList";
import DailyList from "./DailyList";
import WeekList from "../WeekList";
import SearchBox from "./SearchBox";
import SearchList from "./SearchList";
// 이미지
import zoomin from "../../assets/img/icon/zoomin.svg";
import zoomout from "../../assets/img/icon/zoomout.svg";

const Calendar = () => {
  const dispatch = useDispatch();
  const [weekMonth, setWeekMonth] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [zoomInOut, setZoomInOut] = useState(true);
  const [search, setSearch] = useState("");

  // 월간달력 줌인 줌아웃
  useEffect(() => {
    dispatch(zoomDate(zoomInOut));
  }, [zoomInOut]);

  return (
    <>
      <SearchBox setSearch={setSearch} search={search} />
      {search === "" ? (
        <ContentWrap>
          <ToggleBtn>
            {weekMonth ? (
              <>
                {zoomInOut ? (
                  <button
                    onClick={() => {
                      setZoomInOut(!zoomInOut);
                    }}
                  >
                    <img src={zoomin} alt="월별달력확대" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setZoomInOut(!zoomInOut);
                    }}
                  >
                    <img src={zoomout} alt="월별달력축소" />
                  </button>
                )}
              </>
            ) : null}
            {/* <WeekMonth
        weekMonth={weekMonth}
        onClick={() => {
          setWeekMonth(!weekMonth);
        }}
      >
        {weekMonth ? (
          <Circle weekMonth={weekMonth}>M</Circle>
        ) : (
          <Circle weekMonth={weekMonth}>W</Circle>
        )}
      </WeekMonth> */}
          </ToggleBtn>
          {weekMonth ? (
            <MonthSchedule isActive={isActive} setIsActive={setIsActive} />
          ) : (
            <WeekSchedule
              weekMonth={weekMonth}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          )}
          {isActive ? <DailyList /> : weekMonth ? <MonthList /> : <WeekList />}
        </ContentWrap>
      ) : (
        <SearchList search={search} />
      )}
    </>
  );
};

export default Calendar;

const ContentWrap = styled.div`
  padding: 18px 12px;
  background-color: var(--blue1);
  overflow: hidden;
  overflow-y: scroll;
  height: calc(100vh - 200px);
`;
const ToggleBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WeekMonth = styled.button`
  height: 27px;
  width: 52px;
  border-radius: 13px;
  padding: 0 5px;
  background-color: var(--blue2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 0px 8px 0px #3284ff45 inset;
  box-shadow: 0px -1px 2px 0px #ffffff75;
  justify-content: ${(props) => (props.weekMonth ? "flex-end" : "flex-start")};
`;
const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 8px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: ${(props) => (props.weekMonth ? "var(--blue4)" : "#fff")};
  background-color: ${(props) => (props.weekMonth ? "#fff" : "var(--blue4)")};
`;
