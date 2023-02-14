import React from 'react';
import styled from 'styled-components';
// 이미지
import kakaologo from '../../assets/btn/kakaobtn.svg';
import Button from './Button';

const KaKaoLoginBtn = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const onClickKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
    <KaKaoBtn onClick={onClickKakaoLogin}>
      <img src={kakaologo} alt='카카오로고' />
      <p>카카오톡 간편 로그인</p>
    </KaKaoBtn>
  );
};

export default KaKaoLoginBtn;

const KaKaoBtn = styled(Button)`
  background: #f8e041;
  gap: 8px;
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
