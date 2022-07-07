import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { emailCheck } from "../shared/SignUpCheck";
import { api } from "../shared/api";
import { loginDB } from "./../redux/modules/user";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((user) => user);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginClick = async () => {
    if (email === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }
    try {
      const response = await api.loginDB({
        email,
        password,
      });
      alert("로그인 성공");
      navigate("/Home");
    } catch (error) {
      alert("로그인 다시시도");
    }
  };

  useEffect(() => {
    console.log(user);
    if (user.user.is_login === true) {
      navigate("/Main");
    }
  }, [user.user.is_login]);
  return (
    <LoginWrap>
      <header>
        <img src="http://company.jobkorea.co.kr/img/common/jk_logo.png" />
      </header>
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
        <button onClick={loginClick}>로그인</button>
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
