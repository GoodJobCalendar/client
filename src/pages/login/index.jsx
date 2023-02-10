import React from 'react';
import styled from 'styled-components';

// 이미지
import logo from '../../assets/logo/logo.png';

// 컴포넌트
import LoginMain from './LoginMain';
import Footer from './Footer';

const Login = () => {
  return (
    <LoginWrap>
      <Header>
        <img src={logo} alt='로고' />
      </Header>
      <LoginMain />
      <Footer />
    </LoginWrap>
  );
};

export default Login;
const LoginWrap = styled.div`
  height: 100vh;
  padding: 0 35px;
  padding-top: 121px;
  background-color: var(--blue1);
`;
const Header = styled.header`
  img {
    width: 50px;
  }
  margin-bottom: 47px;
  display: flex;
  justify-content: center;
`;
