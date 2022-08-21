import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

const Mypage = () => {
  return (
    <>
      <Nav />
      <Outer>Mypage</Outer>
    </>
  );
};

export default Mypage;

const Outer = styled.div`
  background-color: white;
  height: 83.5vh;
`;
