import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// 컴포넌트
import Nav from "../components/Nav";
import Guide from "./../components/calendar/Guide";

function Main() {
  return (
    <MainWrap>
      <Guide />
      <Nav />
      <Outlet />
    </MainWrap>
  );
}
export default Main;

const MainWrap = styled.div`
  position: relative;
`;
