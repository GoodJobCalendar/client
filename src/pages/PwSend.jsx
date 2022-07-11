import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PwSend = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [authNumber, setAuthNumber] = useState();
  const Submit = async () => {
    // 인증번호 확인 & 회원가입완료
    await axios
      .post("http://14.34.139.253:3000/api/auth/verifyNumberForNew", {
        authNumber,
      })
      .then((res) => {
        console.log(res);
        navigate("/pwcheck");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <PwWrap>
      <header>
        <h1>인증메일을 전송했어요!</h1>
        <p>인증 메일 확인하러 메일함으로 고고</p>
        <span>이메일임</span>
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
        <button onClick={Submit}>비밀번호 변경하기</button>
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
