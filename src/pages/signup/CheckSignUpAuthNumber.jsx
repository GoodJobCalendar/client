import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//이미지
import mailSendImg from '../../assets/illust/mailsend.png';
import userApi from '../../apis/user';

const CheckSignUpAuthNumber = () => {
  const navigate = useNavigate();

  const [authNumber, setAuthNumber] = useState();
  const [errorcheck, setError] = useState('');

  const userInfo = useSelector((state) => state.user.user);
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      MailsendBtn();
    }
  };
  // 이메일 인증 메일 전송
  const MailsendBtn = async () => {
    await userApi
      .sendEmailAuthNumber({
        email: userInfo.email,
        password: userInfo.password,
        confirmPassword: userInfo.password,
        userName: userInfo.userName,
      })
      .then(() => {})
      .catch((error) => {
        console.error(error);
        setError(error.response.data.msg);
      });
  };
  // 인증번호 확인 & 회원가입완료
  const AuthNumberCheckBtn = async () => {
    await userApi
      .checkEmailAuthNumber({
        authNumber: Number(authNumber),
        email: userInfo.email,
        password: userInfo.password,
        userName: userInfo.userName,
      })
      .then(() => {
        navigate('/signupsuccess');
      })
      .catch((error) => {
        setError(error.response.data.msg);
        console.error(error);
      });
  };
  return (
    <EmailWrap>
      <Header>
        <Banner src={mailSendImg} alt='배너' />
        <TitleText>
          <Title>인증메일을 전송했어요!</Title>
          <SubTitle>인증 메일 확인하러 메일함으로 고고</SubTitle>
        </TitleText>
      </Header>
      <Main>
        <Email>{userInfo?.email}</Email>
        <Input
          type='text'
          placeholder='인증번호 입력'
          onChange={(event) => {
            setAuthNumber(event.target.value);
          }}
          errorcheck={errorcheck}
          onKeyPress={onKeyPress}
        />
        {errorcheck ? (
          <>
            <ErrorCheck>{errorcheck}</ErrorCheck>
            <SignUpBtn onClick={MailsendBtn}>인증메일 재발송하기</SignUpBtn>
          </>
        ) : (
          ''
        )}
        <SignUpBtn onClick={AuthNumberCheckBtn}>인증번호 확인하기</SignUpBtn>
      </Main>
    </EmailWrap>
  );
};

export default CheckSignUpAuthNumber;
const EmailWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 0 35px;
  background-color: var(--blue1);
`;
const Header = styled.header`
  position: relative;
  width: 100%;
  padding-bottom: 50px;
  margin-bottom: 73px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.img`
  width: 180px;
  border-radius: 26px;
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
const Email = styled.p`
  font-weight: 800;
  font-size: 16px;
  color: var(--blue3);
  text-align: center;
  margin-bottom: 55px;
`;
const Input = styled.input`
  outline: none;
  padding: 18px 23px;
  background: #ffffff;
  border: 1px solid var(--blue2);
  margin-bottom: ${(props) => (props.errorcheck ? '' : '72px')};
  border-radius: 6px;
  ${(props) =>
    props.errorcheck &&
    css`
  border:2px solid var(--blue3);
  color: var(--blue3);
  color
  `}
  ::placeholder {
    color: var(--blue3);
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => (props.errorcheck && props.errorcheck !== '' ? `var(--blue3)` : '')};
  }
  :focus {
    ::placeholder {
      opacity: 0;
    }
  }
`;
const ErrorCheck = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  text-align: center;
  margin-top: 39px;
  margin-bottom: 24px;
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
  color: #fff !important;
  margin-bottom: 8px;
`;
