import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../assets/img/cover/cover1.jpg";
const PwChangeSuccess = () => {
  return (
    <EmailWrap>
      <Header>
        <Banner src={banner} alt="배너" />
        <TitleText>
          <Title>비밀번호가 변경되었어요!</Title>
          <SubTitle>다시 한번 힘차게 로그인하러 가볼까요?</SubTitle>
        </TitleText>
      </Header>
      <Main>
        <SignUpBtn>
          <Link to="/login">로그인하기</Link>
        </SignUpBtn>
      </Main>
    </EmailWrap>
  );
};

export default PwChangeSuccess;
const EmailWrap = styled.div`
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
  margin-bottom: 78px;
  font-weight: 400;
  font-size: 18px;
  color: #fff !important;
  margin-top: 72px;
`;
