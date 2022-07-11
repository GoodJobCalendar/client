import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { emailCheck } from "../shared/SignUpCheck";
import { useDispatch } from "react-redux";
import { setUser } from "./../redux/modules/user";
import banner from "../assets/img/icon/banner.png";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [userName, setUerName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [mailCheckState, setMailCheckState] = useState();
  const [errorCheck, serError] = useState();
  const Submit = async () => {
    //이메일 형식 체크
    if (!emailCheck(email)) {
      return serError("올바른 이메일 형식이 아닙니다.");
    }
    //회원가입
    await axios
      .post("http://14.34.139.253:3000/api/auth/local", {
        email,
        password,
        confirmPassword,
        userName,
      })
      .then((res) => {
        navigate("/emailsend");
        dispatch(setUser({ email, password, confirmPassword, userName }));
      })
      .catch((error) => {
        serError(error);
      });
  };
  return (
    <SignUpWrap>
      <header>
        <img src={banner} alt="" />
        <Title>회원가입을 환영합니다.</Title>
        <SubTitle>
          당신의 <span>취준메이트,</span>
          <br />
          굿잡캘린더와 함께해보세요!
        </SubTitle>
      </header>
      <InputWrap>
        <input
          type="text"
          placeholder="이름"
          onChange={(event) => {
            setUerName(event.target.value);
          }}
        />
        <EmailCheck
          type="email"
          placeholder="이메일"
          mailCheckState={mailCheckState}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          placeholder="비밀번호"
          password={password}
          confirmPassword={confirmPassword}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <PassWord
          type="password"
          placeholder="비밀번호 확인"
          password={password}
          confirmPassword={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <Check>
          {email === "" ||
          userName === "" ||
          password === "" ||
          confirmPassword === ""
            ? "이메일,이름, 비밀번호 모두 입력해주세요!"
            : ""}
          {confirmPassword && password !== confirmPassword
            ? "비밀번호를 바르게 입력해주세요"
            : errorCheck
            ? errorCheck
            : ""}
        </Check>
        <SignUpBtn onClick={Submit}>
          <Link to="/emailsend">이메일 인증받고 가입하기</Link>
        </SignUpBtn>
      </InputWrap>
      <Footer>
        <p>
          이미가입하셨다면? <Link to="/login">로그인</Link>
        </p>
      </Footer>
    </SignUpWrap>
  );
};

export default SignUp;
const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 35px;
  background-color: var(--blue1);
  input {
    outline: none;
    padding: 18px 23px;
    background: #ffffff;
    border: 1px solid var(--blue2);
    border-radius: 6px;
    color: var(--blue3);

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
  gap: 8px;
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 9px;
`;
const SubTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: var(--gray4);
  margin-bottom: 43px;
  span {
    font-weight: 700;
    color: var(--gray4);
  }
`;
const SignUpBtn = styled.button`
  background: var(--blue4);
  border-radius: 6px;
  padding: 17px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 78px;
  > a {
    font-weight: 400;
    font-size: 18px;
    color: #fff !important;
  }
`;
const EmailCheck = styled.input`
  border: ${(props) =>
    props.mailCheckState && props.mailCheckState !== 201
      ? "2px solid var(--point3)"
      : ""}!important;
  color: ${(props) =>
    props.mailCheckState && props.mailCheckState !== 201
      ? "var(--point3)"
      : ""};
`;
const PassWord = styled.input`
  border: ${(props) =>
    props.confirmPassword && props.password !== props.confirmPassword
      ? "2px solid var(--point3)"
      : ""}!important;
  color: ${(props) =>
    props.password && props.password !== props.confirmPassword
      ? "var(--point3)"
      : ""};
`;
const Check = styled.p`
  text-align: center;
  color: var(--blue3);
  font-weight: 600;
  font-size: 14px;
  padding-top: 30px;
  padding-bottom: 24px;
`;
const Footer = styled.footer`
  border-top: 1px solid var(--blue2);
  padding: 15px 0;
  p {
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #5f9fff;
    a {
      font-weight: 600;
      font-size: 14px;
      margin-left: 11px;
    }
  }
`;
