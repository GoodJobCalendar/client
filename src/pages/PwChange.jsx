import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PwChange = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorcheck, setError] = useState("");
  const userInfo = useSelector((state) => state.user.user);

  //비밀번호 변경하기
  const PwChangeBtn = async () => {
    if (password === "" || confirmPassword === "") {
      return setError("인증번호를 입력해주세요.");
    }
    await axios
      .patch("https://goodjobcalendar.com/api/auth/newPassword", {
        email: userInfo.email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res);
        navigate("/pwchangesuccess");
      })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.msg);
      });
  };
  return (
    <PwWrap>
      <Header>
        <TitleText>
          <Title>굿잡 비밀번호 변경</Title>
          <SubTitle>이번 비밀번호는 기억해보는걸로!</SubTitle>
        </TitleText>
      </Header>
      <Main>
        <Input
          type="password"
          placeholder="비밀번호"
          errorcheck={errorcheck}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호 확인"
          errorcheck={errorcheck}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />

        <ErrorCheck>{errorcheck}</ErrorCheck>

        <SignUpBtn onClick={PwChangeBtn}>비밀번호 변경하기</SignUpBtn>
      </Main>
    </PwWrap>
  );
};

export default PwChange;

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
const ErrorCheck = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  text-align: center;
  margin-top: 39px;
  margin-bottom: 24px;
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
