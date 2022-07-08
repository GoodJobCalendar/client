import React from "react";
import styled from "styled-components";
import Scheduler from "./../componenets/Scheduler";
function Main() {
  return (
    <MainWrap>
      <Scheduler />
      <FixBox>
        <Search type="text" />
        <AddButtoon>+</AddButtoon>
      </FixBox>
    </MainWrap>
  );
}
export default Main;
const MainWrap = styled.div`
  padding: 20px;
`;
const FixBox = styled.div`
  width: calc(100% - 20px);
  padding: 20px;
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
