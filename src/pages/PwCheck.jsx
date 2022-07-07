import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PwCheck = () => {
  return (
    <SignUpWrap>
      <header>
        <h1>굿잡 비밀번호 변경</h1>
        <p>이번 비밀번호는 기억해보는걸로!</p>
      </header>
      <InputWrap>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
      </InputWrap>
      <footer>
        <button>로그인</button>
      </footer>
    </SignUpWrap>
  );
};

export default PwCheck;
const SignUpWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const InputWrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
