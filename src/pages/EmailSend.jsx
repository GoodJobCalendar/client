import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailSend = () => {
  const userInfo = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [authNumber, setAuthNumber] = useState();
  console.log(userInfo);
  const Submit = async () => {
    //회원가입
    await axios
      .post("http://localhost:5001/user", {
        email: userInfo.email,
        userName: userInfo.userName,
        password: userInfo.password,
        confirmPassword: userInfo.confirmPassword,
        authNumber,
      })
      .then((res) => {
        console.log(res);
        window.alert("회원가입을 축하합니다!");
        navigate("/login");
      })
      .catch((error) => {
        window.alert("아이디, 닉네임 또는 비밀번호를 확인해주세요.");
        console.log("회원가입 DB Error", error);
      });
  };
  return (
    <EmailWrap>
      <header>
        <h1>인증메일을 전송했어요!</h1>
        <p>인증 메일 확인하러 메일함으로 고고</p>
        <span>{userInfo.email}</span>
      </header>
      <Main>
        <input
          type="text"
          placeholder="인증번호 입력"
          onChange={(event) => {
            setAuthNumber(event.target.value);
          }}
        />
        {/* <p>인증번호가 잘못되었어요!</p> */}
        <button onClick={Submit}>인증완료</button>
      </Main>
    </EmailWrap>
  );
};

export default EmailSend;
const EmailWrap = styled.div`
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
