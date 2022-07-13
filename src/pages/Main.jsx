import React, { useState } from "react";
import styled from "styled-components";
import AddSchedule from "../componenets/AddSchedule";
import Scheduler from "./../componenets/Scheduler";
function Main() {
  const [addSchedule, SetAddSchedule] = useState(false);
  const addClick = () => {
    SetAddSchedule(!addSchedule);
  };

  return (
    <MainWrap>
      <Scheduler />
      {addSchedule ? 
        <AddSchedule
          addSchedule={addSchedule}
          SetAddSchedule={SetAddSchedule}
        />
      : 
        <></>
      }
      <FixBox>
        <Search type="text" placeholder="일정 상세 검색" />
        <AddButtoon onClick={addClick}>+</AddButtoon>
      </FixBox>
    </MainWrap>
  );
}
export default Main;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 12px;
  background-color: var(--blue1);
  height: 100%;
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
