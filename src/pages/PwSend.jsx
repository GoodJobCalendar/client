import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const PwSend = () => {
  return (
    <PwWrap>
      <header>
        <h1>굿잡 인증메일</h1>
        <p>계정을 찾아드릴게요!</p>
      </header>
      <Main>
        <input type="text" placeholder="이름" />
        <input type="email" placeholder="이메일" />
        <button>인증메일 발송하기</button>
      </Main>
    </PwWrap>
  );
};

export default PwSend;
const PwWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
