import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import calendar from "../assets/img/icon/calendar.png";
import element from "../assets/img/icon/element-4.png";
const Nav = () => {
  const [nav, setNav] = useState(true);
  const toggleBtn = () => {
    setNav(!nav);
  };
  return (
    <NavWrap>
      <NavTitle>
        <Ham style={{ opacity: "0" }}>
          <LineList>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </LineList>
        </Ham>
        <p>취준생캘린더</p>
        <Ham>
          <LineList>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </LineList>
        </Ham>
      </NavTitle>
      <NavList>
        <NavItem nav={nav}>
          <NavLink to="/main" onClick={toggleBtn}>
            <img src={calendar} alt="캘린더" />
            <p>캘린더</p>
          </NavLink>
        </NavItem>
        <NavItem nav={nav}>
          <NavLink to="/job" onClick={toggleBtn}>
            <img src={element} alt="추천채용" />
            <p>추천채용</p>
          </NavLink>
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
  text-align: center;
  * {
    color: #fff;
  }
`;
const NavTitle = styled.p`
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex: 7;
  padding: 0 17px;
  p {
    font-weight: 700;
  }
`;
const NavList = styled.ul`
  width: 100%;
  display: flex;
  align-items: flex-end;
  height: 70px;
  flex: 3;
  padding-top: 30px;
  > * {
    flex: 1;
  }
  height: 70px;
`;
const Ham = styled.button`
  background-color: transparent;
`;
const LineList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Line = styled.li`
  background: var(--blue1);
  border-radius: 4px;
  width: 19px;
  height: 2px;
`;
const NavLink = styled(Link)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const NavItem = styled.li`
  :nth-of-type(1) {
    p {
      padding: 8px;
      border-bottom: ${(props) => (props.nav ? "2px solid var(--point1)" : "")};
      color: ${(props) => (props.nav ? "var(--point1)" : "")};
    }
  }
  :nth-of-type(2) {
    p {
      padding: 8px;
      border-bottom: ${(props) => (props.nav ? "" : "2px solid var(--point1)")};
      color: ${(props) => (props.nav ? "" : "var(--point1)")};
    }
  }
  flex: 1;
  img {
    width: 15px;
  }
`;
