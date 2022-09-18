import React, { useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import { setCookie } from "../shared/Cookie";
import apis from "../shared/apis";

// 컴포넌트
import { emailCheck } from "../shared/SignUpCheck";

// 카카오
import { KAKAO_AUTH_URL } from "../shared/api";

// 이미지
import logo from "../assets/img/logo.png";
import kakaologo from "../assets/img/icon/kakaobtn.svg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorcheck, setError] = useState();

  // 로그인
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      loginBtn();
    }
  };
  const loginBtn = async () => {
    if (email === "" || password === "") {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    if (!emailCheck(email)) {
      setError("이메일 형식이 맞지 않습니다.");
      return;
    }
    await apis
      .login({ email, password })
      .then((response) => {
        setCookie("token", response.data.token, 24);
        navigate("/main");
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.msg);
      });
  };

  return (
    <LoginWrap>
      <Header>
        <img src={logo} alt="로고" />
      </Header>
      <InputWrap>
        <EmailInput
          type="email"
          placeholder="이메일"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          errorcheck={errorcheck}
        />
        <PwInput
          type="password"
          placeholder="비밀번호"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          onKeyPress={onKeyPress}
          errorcheck={errorcheck}
        />
        <ErrorCheck>{errorcheck}&nbsp;</ErrorCheck>
        <LoginBtn onClick={loginBtn}>로그인</LoginBtn>
        <PwCheck>
          비밀번호를 혹시 잊어버리셨나요?
          <Link to="/pwsend">인증메일 보내기</Link>
        </PwCheck>
      </InputWrap>
      <Footer>
        <Atherlogin>다른 서비스 계정을 로그인</Atherlogin>
        <KaKaoBtn>
          <a href={KAKAO_AUTH_URL}>
            <img src={kakaologo} alt="카카오로고" />
            <p>카카오톡 간편 로그인</p>
          </a>
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
  height: 100vh;
  padding: 0 35px;
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
  width: 100%;
`;
const EmailInput = styled.input`
  background-color: #fff;
  border: ${(props) =>
    props.errorcheck &&
    (props.errorcheck === "이메일 형식이 맞지 않습니다." ||
      "아이디와 비밀번호를 입력해주세요.") &&
    "2px solid var(--point3)!important"};
  color: ${(props) =>
    props.errorcheck &&
    (props.errorcheck === "이메일 형식이 맞지 않습니다." ||
      "아이디와 비밀번호를 입력해주세요.") &&
    "var(--point3)!important"};
  ::placeholder {
    color: ${(props) =>
      props.errorcheck &&
      (props.errorcheck === "이메일 형식이 맞지 않습니다." ||
        "아이디와 비밀번호를 입력해주세요.") &&
      "var(--point3)!important"};
  }
`;
const PwInput = styled.input`
  border: ${(props) =>
    props.errorcheck === "아이디와 비밀번호를 입력해주세요." &&
    "2px solid var(--point3)!important"};
  color: ${(props) =>
    props.errorcheck === "아이디와 비밀번호를 입력해주세요." &&
    "var(--point3)!important"};
  ::placeholder {
    color: ${(props) =>
      props.errorcheck === "아이디와 비밀번호를 입력해주세요." &&
      "var(--point3)!important"};
  }
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
  display: flex;
  gap: 7px;
  line-height: 17px;
  justify-content: center;
  a {
    font-weight: 600;
    color: var(--blue4);
  }
`;
const ErrorCheck = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  text-align: center;
  margin-top: 39px;
  margin-bottom: 24px;
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
  font-weight: 400;
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
    width: 100%;
    color: #371f1e !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
