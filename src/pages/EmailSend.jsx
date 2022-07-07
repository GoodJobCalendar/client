import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const EmailSend = () => {
  return (
    <EmailWrap>
      <header>
        <h1>인증메일을 전송했어요!</h1>
        <p>인증 메일 확인하러 메일함으로 고고</p>
        <span>daisy_com@khu.ac.kr</span>
      </header>
      <Main>
        <input type="text" placeholder="인증번호 입력" />
        {/* <p>인증번호가 잘못되었어요!</p> */}
        <button>로그인</button>
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
