import React from 'react';
import styled from 'styled-components';
import Calendar from '../components/calendar/Calendar';

// 컴포넌트
import Nav from '../components/Nav';
import Guide from './../components/calendar/Guide';
import Job from './job';
import { useMatch } from 'react-router-dom';
import { useState } from 'react';

function Main() {
  const [page, setState] = useState(true);
  const match = useMatch('/main/calendar');
  if (!match) {
    setState(false);
  }
  return (
    <MainWrap>
      <Guide />
      <Nav />
      {page ? <Calendar /> : <Job />}
    </MainWrap>
  );
}
export default Main;

const MainWrap = styled.div`
  position: relative;
`;
