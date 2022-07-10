import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { emailCheck } from "../shared/SignUpCheck";

const PwSend = () => {
  const [email, setEmail] = useState();
  const [userName, setUerName] = useState();
  const navigate = useNavigate();

  const PwSendCheck = async () => {
    if (!emailCheck(email)) {
      window.alert("이메일 형식이 맞지 않습니다.");
      return;
    }
    if (email === "" || userName === "") {
      window.alert("이름과 이메일을 입력해주세요.");
      return;
    }
    // 인증번호 확인 & 회원가입완료
    await axios
      .post("http://14.34.139.253:3000/auth/lostPassword", {
        email,
        userName,
      })
      .then((res) => {
        console.log(res);
        navigate("/pwcheck");
        window.alert("비밀번호 전송성공");
      })
      .catch((error) => {
        console.error(error);
        window.alert("비밀번호 전송실패");
      });
  };

  return (
    <PwWrap>
      <header>
        <h1>굿잡 인증메일</h1>
        <p>계정을 찾아드릴게요!</p>
      </header>
      <Main>
        <input
          type="text"
          placeholder="이름"
          onChange={(event) => {
            setUerName(event.target.value);
          }}
        />
        <input
          type="email"
          placeholder="이메일"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button onClick={PwSendCheck}>인증메일 발송하기</button>
      </Main>
    </PwWrap>
  );
};

export default PwSend;
const PwWrap = styled.div`
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
