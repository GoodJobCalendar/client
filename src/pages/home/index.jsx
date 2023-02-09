import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

//컴포넌트
import Slide from './Slide';
import Splash from './Splash';
import Button from '../../components/common/Button';
import { KAKAO_AUTH_URL } from './../../shared/kakaoOauth';

// 이미지
import logo from '../../assets/logo/logo.png';
import logotext from '../../assets/logo/logo_text.svg';
import kakaologo from '../../assets/btn/kakaobtn.svg';

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
        <KaKaoBtn>
          <Link to={KAKAO_AUTH_URL}>
            <img src={kakaologo} alt='카카오로고' />
            <p>카카오톡 간편 로그인</p>
          </Link>
        </KaKaoBtn>
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
  color: ${(props) => props.theme.colors.blue4};
`;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SignUpBtn = styled(Button)`
  background-color: #ffffff;
  color: ${(props) => props.theme.colors.blue3};
`;

const KaKaoBtn = styled(Button)`
  background: #f8e041;
  margin: 8px 0;
  > a {
    font-weight: 400;
    width: 100%;
    color: #371f1e;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
const LoginBtn = styled(Button)`
  background-color: ${(props) => props.theme.colors.blue4};
  color: #fff;
`;
