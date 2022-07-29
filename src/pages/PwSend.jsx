import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { emailCheck } from "../shared/SignUpCheck";
import { pwEmailUser } from "../redux/modules/user";

import axios from "axios";

const PwSend = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userName, setUerName] = useState("");
  const [email, setEmail] = useState("");
  const [errorcheck, setError] = useState("");
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      PwBtn();
    }
  };
  const PwBtn = async () => {
    //빈칸 확인
    if (email === "" || userName === "") {
      return setError("이메일,이름, 비밀번호 모두 입력해주세요!");
    }
    //이메일 형식 체크
    else if (!emailCheck(email)) {
      return setError("이메일 형식이 아닙니다.");
    }
    await axios
      .post("https://goodjobcalendar.com/api/auth/lostPassword", {
        userName,
        email,
      })
      .then((res) => {
        console.log(res);
        dispatch(pwEmailUser(email, userName));
        navigate("/pwcheck");
      })
      .catch((error) => {
        setError(error.response.data.data);
        console.error(error);
      });
  };

  return (
    <EmailWrap>
      <Header>
        <Title>인증메일을 보내드려요</Title>
        <SubTitle>계정을 찾아드릴게요!</SubTitle>
      </Header>
      <Main>
        <Input
          type="text"
          placeholder="이름"
          onChange={(event) => {
            setUerName(event.target.value);
          }}
          errorcheck={errorcheck}
        />
        <Input
          type="text"
          placeholder="이메일"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          errorcheck={errorcheck}
          onKeyPress={onKeyPress}
        />
        {errorcheck ? (
          <>
            <ErrorCheck>{errorcheck}</ErrorCheck>
            <SignUpBtn onClick={PwBtn}>인증메일 재발송하기</SignUpBtn>
          </>
        ) : (
          <SignUpBtn onClick={PwBtn}>인증번호 발송하기</SignUpBtn>
        )}
      </Main>
    </EmailWrap>
  );
};

export default PwSend;
const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const Header = styled.header`
  width: 100%;
  margin-bottom: 82px;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`;
const SubTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: var(--gray4);
  margin-top: 16px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const SignUpBtn = styled.button`
  background: var(--blue4);
  border-radius: 6px;
  padding: 17px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  color: #fff !important;
  margin-bottom: 8px;
  margin-top: 80px;
`;

const Input = styled.input`
  margin-top: 16px;
  border: ${(props) =>
    props.errorcheck && props.errorcheck !== ""
      ? "2px solid var(--point3)"
      : ""}!important;
  color: ${(props) =>
    props.errorcheck && props.errorcheck !== ""
      ? "var(--point3)"
      : ""}!important;
  ::placeholder {
    color: ${(props) =>
      props.errorcheck && props.errorcheck !== ""
        ? "var(--point3)"
        : ""}!important;
  }
`;
const ErrorCheck = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  margin: 40px 0;
  text-align: center;
`;
