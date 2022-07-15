import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import calendar from "../assets/img/icon/calendar.png";
import element from "../assets/img/icon/element-4.png";
const Nav = () => {
  return (
    <NavWrap>
      <NavTitle>취준생캘린더</NavTitle>
      <NavList>
        <NavItem>
          <img src={calendar} alt="캘린더" />
          <Link to="/main">캘린더</Link>
        </NavItem>
        <NavItem>
          <img src={element} alt="추천채용" />
          <Link to="/job">추천채용</Link>
        </NavItem>
      </NavList>
    </NavWrap>
  );
};

export default Nav;
const NavWrap = styled.div`
  width: 100%;
  height: 158px;
  background-color: var(--blue4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  * {
    color: #fff;
  }
`;
const NavTitle = styled.p`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 7;
`;
const NavList = styled.ul`
  width: 100%;

  display: flex;
  align-items: flex-end;
  height: 70px;
  flex: 3;
  > * {
    flex: 1;
  }
  height: 70px;
`;
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1;
  img {
    width: 15px;
  }
  border-bottom: 2px solid var(--point1);
  padding: 8px;
`;
