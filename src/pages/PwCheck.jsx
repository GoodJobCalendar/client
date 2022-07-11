import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PwCheck = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();
  const Submit = async () => {
    await axios
      .patch("http://14.34.139.253:3000/api/auth/verifyNumberForOld", {
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res);
        window.alert("인증완료");
        navigate("/login");
      })
      .catch((error) => {
        window.alert("인증실패");
        console.error(error);
      });
  };

  return (
    <SignUpWrap>
      <header>
        <h1>굿잡 비밀번호 변경</h1>
        <p>이번 비밀번호는 기억해보는걸로!</p>
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
        <input
          type="password"
          placeholder="비밀번호 확인"
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
      </InputWrap>
      <footer>
        <button onClick={Submit}>로그인</button>
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
