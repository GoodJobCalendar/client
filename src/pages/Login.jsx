import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginWrap>
      <header>
        <img src="http://company.jobkorea.co.kr/img/common/jk_logo.png" />
      </header>
      <InputWrap>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <button>로그인</button>
        <p>
          비밀번호를 혹시 잊어버리셨나요? <button>인증메일 보내기</button>
        </p>
      </InputWrap>
      <footer>
        <p>다른 서비스 계정을 로그인</p>
        <Link to="/">🍋 카카오톡 간편 로그인</Link>
      </footer>
    </LoginWrap>
  );
};

export default Login;
const LoginWrap = styled.div`
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
