import React from 'react';
import styled from 'styled-components';
import Router from './../router/Router';

function Mobile() {
  return (
    <MobileBg>
      <Router />
    </MobileBg>
  );
}
export default Mobile;

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
