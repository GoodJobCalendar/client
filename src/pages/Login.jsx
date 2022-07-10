import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { emailCheck } from "../shared/SignUpCheck";
import { loginDB } from "./../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.is_login);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
  };
  useEffect(() => {
    if (user) {
      alert("로그인 완료");
      navigate("/main");
    }
  }, [user]);
  return (
    <LoginWrap>
      <header>
        <img
          src="http://company.jobkorea.co.kr/img/common/jk_logo.png"
          alt="로고"
        />
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
          비밀번호를 혹시 잊어버리셨나요?
          <Link to="/pwsend">인증메일 보내기</Link>
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
