import React from 'react';
import styled from 'styled-components';

import bgLeft from './assets/bg/bg_left.png';
import bgRight from './assets/bg/bg_right.png';
import Router from './router/Router';

const App = () => {
  return (
    <BrowserBg>
      <MobileBg>
        <Router />
      </MobileBg>
      <LeftImg src={bgLeft} alt='배경이미지왼쪽' />
      <RightImg src={bgRight} alt='배경이미지오른쪽' />
    </BrowserBg>
  );
};

export default App;

const BrowserBg = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: var(--blue4);
  position: relative;
`;
const LeftImg = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  max-width: 1024px;
  height: 100%;
  max-height: 1080px;
`;
const RightImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const MobileBg = styled.div`
  min-width: 375px;
  width: 20%;
  height: 100vh;
  overflow-y: scroll;
  box-shadow: 6px 0px 14px rgba(219, 219, 219, 0.39), -26px 6px 90px rgba(73, 73, 73, 0.58);
  background-color: var(--blue1);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
`;
