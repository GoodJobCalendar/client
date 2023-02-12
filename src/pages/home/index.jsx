import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

//컴포넌트
import Slide from './Slide';
import Splash from './Splash';
import KaKaoLoginBtn from '../../components/KaKaoLoginBtn';
import Button from '../../components/common/Button';

// 이미지
import logo from '../../assets/logo/logo.png';
import logotext from '../../assets/logo/logo_text.svg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <LoginWrap>
      <Splash />
      <header>
        <LogoImg src={logo} alt='로고' />
        <Title>당신의 취준 메이트</Title>
        <LogoTextImg src={logotext} alt='로고' />
      </header>
      <Slide />
      <Container>
        <SignUpBtn
          onClick={() => {
            navigate('/signup');
          }}
        >
          이메일로 시작
        </SignUpBtn>
        <KaKaoLoginBtn />
        <LoginBtn
          onClick={() => {
            navigate('/login');
          }}
          children='로그인 하기'
        />
      </Container>
    </LoginWrap>
  );
};

export default Home;
const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 30px;
  padding-top: 100px;
`;
const LogoImg = styled.img`
  width: 43px;
  height: 40px;
`;
const LogoTextImg = styled.img`
  width: 94px;
  height: 19px;
`;
const Title = styled.p`
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 4.6px;
  color: var(--blue4);
`;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignUpBtn = styled(Button)`
  background-color: #ffffff;
  color: var(--blue3);
`;

const LoginBtn = styled(Button)`
  background-color: var(--blue4);
  color: #fff;
`;
