import React from 'react';
import styled from 'styled-components';
import KaKaoLoginBtn from './../../components/KaKaoLoginBtn';

const Footer = () => {
  return (
    <FooterWrap>
      <Atherlogin>다른 서비스 계정으로 로그인</Atherlogin>
      <KaKaoLoginBtn />
    </FooterWrap>
  );
};

export default Footer;
const FooterWrap = styled.footer`
  width: 100%;
`;
const Atherlogin = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue3);
  margin-top: 72px;
  margin-bottom: 16px;
`;
