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
      <FixBox>
        <Search type="text" placeholder="일정 상세 검색" />
        <AddButtoon onClick={addClick}>+</AddButtoon>
      </FixBox>
      {addSchedule ? (
        <AddSchedule
          addSchedule={addSchedule}
          SetAddSchedule={SetAddSchedule}
        />
      ) : (
        ""
      )}
    </MainWrap>
  );
}
export default Main;
const MainWrap = styled.div`
  padding: 5%;
`;
const FixBox = styled.div`
  width: calc(100% - 20px);
  padding: 5% 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;
const Search = styled.input`
  width: 80%;
`;
const AddButtoon = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--blue4);
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;
