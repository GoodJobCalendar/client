import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <SignUpWrap>
      <header>
        <h1>굿잡 회원가입</h1>
        <p>당신의 취준 일정을 즐겁고 활기차게</p>
      </header>
      <InputWrap>
        <input type="text" placeholder="이름" />
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 확인" />
        <button>이메일 인증받고 가입하기</button>
      </InputWrap>
      <footer>
        <p>
          이미가입하셨다면? <Link to="/login">로그인</Link>
        </p>
      </footer>
    </SignUpWrap>
  );
};

export default SignUp;
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
