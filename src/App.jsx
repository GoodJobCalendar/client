import React from 'react';
import styled from 'styled-components';

import bgLeft from './assets/bg/bg_left.png';
import bgRight from './assets/bg/bg_right.png';

import Mobile from './pages/Mobile';

const App = () => {
  return (
    <BrowserBg>
      <Mobile />
      <img src={bgLeft} alt='배경이미지왼쪽' />
      <img src={bgRight} alt='배경이미지오른쪽' />
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
  > img:first-child {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  > img:last-child {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
