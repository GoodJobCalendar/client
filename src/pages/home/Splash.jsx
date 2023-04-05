import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

// 이미지
import logo_w from '../../assets/logo/logo_w.svg';
import logotext_w from '../../assets/logo/logo_text_w.svg';
import cover from '../../assets/bg/splash.png';

const Splash = () => {
  useEffect(() => {
    const image = new Image();
    image.src = logo_w;
  }, []);

  return (
    <SplashScreenWrap>
      <SplashScreen>
        <SplashScreenLogoImg src={logo_w} alt='로고' />
        <p>당신의 취준 메이트</p>
        <SplashScreenLogoTextImg src={logotext_w} alt='굿잡캘린더' />
      </SplashScreen>
      <SplashScreenBgImg src={cover} alt='배경' />
    </SplashScreenWrap>
  );
};
export default Splash;
const SplashScreenWrap = styled.div`
  background-color: var(--blue4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: hideSplashScreen 0.6s ease-in-out forwards;
  animation-delay: 1s;
  @keyframes hideSplashScreen {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
  z-index: 999;
`;

const SplashScreenBgImg = styled.img`
  position: absolute;
  top: 32%;
  right: 0;
  ${({ src }) => css`
    content: url(${src});
  `}
`;

const SplashScreen = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    color: white;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 13px;
  }
`;

const SplashScreenLogoImg = styled.img`
  width: 120px;
  height: 120px;
`;

const SplashScreenLogoTextImg = styled.img`
  width: 180px;
  height: 38px;
`;
