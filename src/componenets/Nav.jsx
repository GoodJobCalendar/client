import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrap>
      <div>취준생캘린더</div>
      <div>
        <Link to="">캘린더</Link>
        <Link to="">추천채용</Link>
      </div>
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
  justify-content: center;
`;
