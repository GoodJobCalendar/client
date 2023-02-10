import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// 카카오
import { KAKAO_AUTH_URL } from '../../shared/kakaoOauth';
// 이미지
import kakaologo from '../../assets/btn/kakaobtn.svg';

import Button from './../../components/common/Button';

const Footer = () => {
  return (
    <FooterWrap>
      <Atherlogin>다른 서비스 계정으로 로그인</Atherlogin>
      <KaKaoBtn>
        <Link to={KAKAO_AUTH_URL}>
          <img src={kakaologo} alt='카카오로고' />
          <p>카카오톡 간편 로그인</p>
        </Link>
      </KaKaoBtn>
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

const KaKaoBtn = styled(Button)`
  background: #f8e041;
  gap: 8px;
  margin-top: 8px;
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
