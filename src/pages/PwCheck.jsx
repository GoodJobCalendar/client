import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// 이미지
import mailSendImg from "../assets/img/illust/mailsend.png";

import axios from "axios";

const PwCheck = () => {
  const navigate = useNavigate();
  const [authNumber, setAuthNumber] = useState();
  const [errorcheck, setError] = useState("");
  const userInfo = useSelector((state) => state.user.user);

  if (authNumber === "") {
    return setError("인증번호를 입력해주세요.");
  }

  // 인증번호 재발송
  const MailReSendBtn = async () => {
    if (authNumber === "") {
      return setError("인증번호를 입력해주세요.");
    }
    await axios
      .post("r.com/api/auth/lostPassword", {
        email: userInfo?.email,
        userName: userInfo?.userName,
      })
      .then((res) => {})
      .catch((error) => {
        console.error(error);
        setError(error.response.data.msg);
      });
  };

  const PwCheckBtn = async () => {
    // 인증번호 확인
    await axios
      .patch("https://goodjobcalendar.shop/api/auth/verifyNumberForOld", {
        email: userInfo?.email,
        authNumber: authNumber,
      })
      .then((res) => {
        navigate("/pwchange");
      })
      .catch((error) => {
        setError(error.response.data.msg);
        console.error(error);
      });
  };
  return (
    <PwWrap>
      <Header>
        <Banner src={mailSendImg} alt="배너" />
        <TitleText>
          <Title>인증메일을 전송했어요!</Title>
          <SubTitle>인증 메일 확인하러 메일함으로 고고</SubTitle>
        </TitleText>
      </Header>
      <Main>
        <Email>{userInfo?.email}</Email>
        <Input
          type="password"
          placeholder="인증번호 입력"
          errorcheck={errorcheck}
          onChange={(event) => {
            setAuthNumber(event.target.value);
          }}
        />
        {errorcheck ? (
          <>
            <ErrorCheck>{errorcheck}</ErrorCheck>
            <SignUpBtn onClick={MailReSendBtn}>인증메일 재발송하기</SignUpBtn>
          </>
        ) : (
          ""
        )}

        <SignUpBtn onClick={PwCheckBtn}>비밀번호 변경하기</SignUpBtn>
      </Main>
    </PwWrap>
  );
};

export default PwCheck;
const PwWrap = styled.div`
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
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  margin-bottom: 73px;
`;
const TitleText = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 70%;
  width: 100%;
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
const Banner = styled.img`
  width: 100%;
  border-radius: 26px;
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
`;
const ErrorCheck = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  text-align: center;
  margin-top: 39px;
  margin-bottom: 24px;
`;
const Email = styled.span`
  font-weight: 800;
  font-size: 16px;
  color: var(--blue3);
  text-align: center;
  margin-bottom: 55px;
`;
const Input = styled.input`
  border: ${(props) =>
    props.errorcheck !== "" ? "2px solid var(--point3)" : ""}!important;
  color: ${(props) => (props.errorcheck !== "" ? "var(--point3)" : "")};
  ::placeholder {
    color: ${(props) =>
      props.errorcheck && props.errorcheck !== ""
        ? "var(--point3)"
        : ""}!important;
  }
  margin-bottom: 72px;
`;
