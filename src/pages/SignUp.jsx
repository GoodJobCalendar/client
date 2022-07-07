import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { emailCheck } from "../shared/SignUpCheck";
import { useDispatch } from "react-redux";
import { setUser } from "./../redux/modules/user";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [userName, setUerName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [mailCheckState, setMailCheckState] = useState();
  const emailRef = useRef();

  const Submit = async () => {
    //빈칸 확인
    if (
      email === "" ||
      userName === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
      return;
    }

    //이메일 형식 체크
    if (!emailCheck(email)) {
      window.alert("올바른 이메일 형식을 작성해주세요");
      return;
    }
    // 이메일 중복 체크
    await axios
      .post(`http://localhost:5001/user`, {
        data: {
          email,
        },
      })
      .then((mailcheck) => {
        // 중복체크 성공했을 때
        setMailCheckState(mailcheck.status);
        emailRef.current.innerText = "사용 가능한 이메일입니다.";
      })
      .catch((error) => {
        emailRef.current.innerText = "해당 이메일은 이미 사용되고 있어요";
        console.log("Login Error", error);
      });
    //회원가입
    await axios
      .post("http://localhost:5001/user", {
        data: {
          email,
          userName,
          password,
          confirmPassword,
        },
      })
      .then((res) => {
        console.log(res);
        window.alert("회원가입을 축하합니다!");
        navigate("/emailsend");
        dispatch(setUser({ email, userName, password, confirmPassword }));
      })
      .catch((error) => {
        window.alert("아이디, 닉네임 또는 비밀번호를 확인해주세요.");
        console.log("회원가입 DB Error", error);
      });
  };
  return (
    <SignUpWrap>
      <header>
        <h1>굿잡 회원가입</h1>
        <p>당신의 취준 일정을 즐겁고 활기차게</p>
      </header>
      <InputWrap>
        <SignUpInput
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
        <PassWord
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
        <p ref={emailRef}></p>
        <button onClick={Submit}>이메일 인증받고 가입하기</button>
      </InputWrap>
      <footer>
        <p>
          이미가입하셨다면? <Link to="/login">로그인</Link>
        </p>
      </footer>
    </SignUpWrap>
  );
};

export default SignUp;
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
const SignUpInput = styled.input`
  outline: none;
`;
const EmailCheck = styled.input`
  outline: none;
  border: ${(props) =>
    props.mailCheckState && props.mailCheckState !== 201
      ? "1px solid red"
      : ""};
  color: ${(props) =>
    props.mailCheckState && props.mailCheckState !== 201 ? "red" : ""};
`;
const PassWord = styled.input`
  outline: none;
  border: ${(props) =>
    props.password && props.password !== props.confirmPassword
      ? "1px solid red"
      : ""};
  color: ${(props) =>
    props.password && props.password !== props.confirmPassword ? "red" : ""};
`;
