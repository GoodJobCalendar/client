import React, { useState } from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { emailCheck, passwordCheck } from "../shared/SignUpCheck";
import { setUser } from "./../redux/modules/user";

// 이미지
import logo from "../assets/img/logo.png";
import logo_text from "../assets/img/logo_text.png";

import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [userName, setUerName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorCheck, setCheck] = useState("");
  // 회원가입
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      SignupBtn();
    }
  };
  const SignupBtn = async (e) => {
    e.preventDefault();
    //빈칸 확인
    if (
      email === "" ||
      userName === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return setCheck("이메일,이름, 비밀번호 모두 입력해주세요!");
    }
    //이메일 형식 체크
    else if (!emailCheck(email)) {
      return setCheck("이메일 형식이 아닙니다.");
    }
    //비밀번호 형식 체크
    else if (!passwordCheck(password)) {
      return setCheck(
        "비밀번호를 6~15자, 숫자, 대·소문자를 포함하여 입력해주세요."
      );
    }
    //비밀번호 확인
    else if (confirmPassword && password !== confirmPassword) {
      return setCheck("비밀번호가 일치하지 않습니다.");
    } else {
      //회원가입
      await axios
        .post("https://goodjobcalendar.shop/api/auth/local", {
          email,
          password,
          confirmPassword,
          userName,
        })
        .then((res) => {
          dispatch(setUser({ email, password, confirmPassword, userName }));
          navigate("/emailsend");
        })
        .catch((error) => {
          console.error(error);
          setCheck(error.response.data.msg);
        });
    }
  };
  return (
    <SignUpWrap>
      <header>
        <Flex>
          <img src={logo} alt="로고" />
          <img src={logo_text} alt="로고" />
        </Flex>

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
          email={email}
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
          onKeyPress={onKeyPress}
        />
        <Check>{errorCheck ? errorCheck : ""}</Check>
        <SignUpBtn onClick={SignupBtn}>이메일 인증받고 가입하기</SignUpBtn>
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
  height: 100vh;
  padding: 0 35px;
  background-color: var(--blue1);
  input {
    outline: none;
    padding: 18px 23px;
    background: #ffffff;
    border: 1px solid var(--blue2);
    border-radius: 6px;
    font-weight: 500;
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
const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
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
  font-weight: 400;
  font-size: 18px;
  color: #fff !important;
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
