import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

// 컴포넌트
import Nav from '../components/Nav';

function Mobile() {
  return (
    <MainWrap>
      <Nav />
      <Outlet />
    </MainWrap>
  );
}
export default Mobile;

const MainWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;