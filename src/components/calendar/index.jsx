import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

// 컴포넌트
import MonthSchedule from '../month/MonthSchedule';
import MonthList from './MonthList';
import DailyList from './DailyList';
import SearchBox from './SearchBox';
import SearchList from './SearchList';
// 이미지
import zoomin from '../../assets/icon/zoomin.svg';
import zoomout from '../../assets/icon/zoomout.svg';
import { zoom } from './../../modules/date';

const Calendar = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [zoomInOut, setZoomInOut] = useState(true);
  const [searchText, setSearchText] = useState('');

  // 월간달력 줌인 줌아웃
  useEffect(() => {
    dispatch(zoom(zoomInOut));
  }, [zoomInOut]);
  const CalendarZoom = () => {
    setZoomInOut(!zoomInOut);
  };
  return (
    <>
      <SearchBox setSearchText={setSearchText} search={searchText} />
      {searchText === '' ? (
        <ContentWrap>
          <ToggleBtn>
            {zoomInOut ? (
              <button onClick={CalendarZoom}>
                <img src={zoomin} alt='월별달력확대' />
              </button>
            ) : (
              <button onClick={CalendarZoom}>
                <img src={zoomout} alt='월별달력축소' />
              </button>
            )}
          </ToggleBtn>
          <MonthSchedule isActive={isActive} setIsActive={setIsActive} />
          {isActive ? <DailyList /> : <MonthList />}
        </ContentWrap>
      ) : (
        <SearchList search={searchText} />
      )}
    </>
  );
};

export default Calendar;

const ContentWrap = styled.div`
  padding: 18px 12px;
  background-color: var(--blue1);
  overflow: hidden;
  overflow-y: scroll;
  height: calc(100vh - 200px);
`;
const ToggleBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
