import React, { useState } from "react";
import styled from "styled-components";
import AddSchedule from "../componenets/AddSchedule";
import Scheduler from "./../componenets/Scheduler";

import zoomin from "../assets/img/icon/zoomin.png";
import zoomout from "../assets/img/icon/zoomout.png";
import Nav from "../componenets/Nav";
function Main() {
  const [addSchedule, SetAddSchedule] = useState(false);
  const [weekMonth, setWeekMonth] = useState(true);
  const [zoomInOut, setZoomInOut] = useState(true);
  const addClick = () => {
    SetAddSchedule(!addSchedule);
  };

  return (
    <MainWrap>
      <Nav />
      <FixBox>
        <Search type="text" placeholder="일정 상세 검색" />
        <AddButtoon onClick={addClick}>+</AddButtoon>
      </FixBox>
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
          ) : (
            <div></div>
          )}
          <WeekMonth
            onClick={() => {
              setWeekMonth(!weekMonth);
            }}
            weekMonth={weekMonth}
          >
            {weekMonth ? (
              <Circle weekMonth={weekMonth}>M</Circle>
            ) : (
              <Circle weekMonth={weekMonth}>W</Circle>
            )}
          </WeekMonth>
        </ToggleBtn>
        <Scheduler weekMonth={weekMonth} />

        {addSchedule ? (
          <AddSchedule
            addSchedule={addSchedule}
            SetAddSchedule={SetAddSchedule}
          />
        ) : (
          ""
        )}
      </ContentWrap>
    </MainWrap>
  );
}
export default Main;
const MainWrap = styled.div``;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 18px 12px;
  background-color: var(--blue1);
  position: relative;
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
const FixBox = styled.div`
  width: calc(100% - 20px);
  padding: 9px 22px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -7px 11px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  z-index: 999;
`;
const Search = styled.input`
  padding: 18px 27px;
  border: 1px solid #d1d1d1;
  border-radius: 32px;
  &:focus {
    outline: none;
  }
  width: 243px;
`;
const AddButtoon = styled.button`
  width: 60px;
  height: 60px;
  background-color: #777;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;
