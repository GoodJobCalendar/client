import React, { useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// 컴포넌트
import { emailCheck } from "../shared/SignUpCheck";
import { loginDB } from "./../redux/modules/user";

// 카카오
import { KAKAO_AUTH_URL } from "../shared/api";

// 이미지
import kakaologo from "../assets/img/icon/kakaobtn.png";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // 로그인
  const loginClick = () => {
    if (email === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }
    dispatch(
      loginDB({
        email,
        password,
      })
    );
    navigate("/main");
  };
  return (
    <LoginWrap>
      <Header>
        <img
          src="https://i.jobkorea.kr/content/images/ver_1/gnb/jk_logo.png?20190718"
          alt="로고"
        />
      </Header>
      <InputWrap>
        <input
          type="email"
          placeholder="이메일"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <LoginBtn onClick={loginClick}>로그인</LoginBtn>
        <PwCheck>
          비밀번호를 혹시 잊어버리셨나요?
          <Link to="/pwsend">인증메일 보내기</Link>
        </PwCheck>
      </InputWrap>
      <Footer>
        <Atherlogin>다른 서비스 계정을 로그인</Atherlogin>
        <KaKaoBtn>
          <Link to={KAKAO_AUTH_URL}>
            <img src={kakaologo} alt="카카오로고" />
            카카오톡 간편 로그인
          </Link>
        </KaKaoBtn>
      </Footer>
    </LoginWrap>
  );
};

export default Login;
const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 25px;
  background-color: var(--blue1);
  input {
    outline: none;
    padding: 18px 23px;
    background: #ffffff;
    border: 1px solid var(--blue2);
    border-radius: 6px;
    ::placeholder {
      color: var(--blue3);
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
const InputWrap = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
const Header = styled.header`
  width: 50px;
  margin-bottom: 47px;
  display: flex;
  justify-content: center;
`;
const PwCheck = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: var(--blue3);
  line-height: 17px;
  a {
    font-weight: 600;
    color: var(--blue4);
  }
`;
const Atherlogin = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  margin-top: 72px;
  margin-bottom: 16px;
`;
const Footer = styled.footer`
  width: 100%;
`;
const LoginBtn = styled.button`
  background: var(--blue4);
  border-radius: 6px;
  padding: 17px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 78px;
  font-weight: 400;
  font-size: 18px;
  color: #fff !important;
`;
const KaKaoBtn = styled.button`
  background: #f8e041;
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  > a {
    padding: 17px 0;
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    color: #371f1e !important;
    display: block;
  }
`;
