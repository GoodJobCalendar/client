import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import calendar_w from "../assets/img/icon/calendar_w.png";
import calendar_c from "../assets/img/icon/calendar_c.png";
import element_w from "../assets/img/icon/element_w.png";
import element_c from "../assets/img/icon/element_c.png";
const Nav = (props) => {
  const [nav, setNav] = useState(props.navData);

  return (
    <NavWrap>
      <NavTitle>
        <Ham style={{ opacity: "0" }}>
          <LogOutBtn>로그아웃</LogOutBtn>
          {/* <LineList>
            <Line></Line>
            <Line></Line>
            <Line></Line>
          </LineList> */}
        </Ham>
        <span>취준생캘린더</span>
        <Ham>
          <LogOutBtn>로그아웃</LogOutBtn>
        </Ham>
      </NavTitle>
      <NavList>
        <NavItem nav={nav}>
          <NavLink to="/main">
            <img src={nav ? calendar_c : calendar_w} alt="캘린더" />
            <span>캘린더</span>
          </NavLink>
        </NavItem>
        <NavItem nav={nav}>
          <NavLink to="/job">
            <img src={nav ? element_w : element_c} alt="추천채용" />
            <span>추천채용</span>
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
const NavTitle = styled.span`
  display: block;
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex: 7;
  padding: 0 17px;
  span {
    font-weight: 700;
    display: block;
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
const LogOutBtn = styled.button`
  background-color: transparent;
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
    span {
      display: block;
      padding: 8px;
      border-bottom: ${(props) => (props.nav ? "2px solid var(--point1)" : "")};
      color: ${(props) => (props.nav ? "var(--point1)" : "")};
    }
  }
  :nth-of-type(2) {
    span {
      display: block;
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
