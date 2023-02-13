import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

// 컴포넌트
import MonthSchedule from './MonthSchedule';
import MonthList from './MonthList';
import DailyList from './DailyList';
import SearchBox from './SearchBox';
import SearchList from './SearchList';
// 이미지
import zoomin from '../../assets/icon/zoomin.svg';
import zoomout from '../../assets/icon/zoomout.svg';
import { zoom, __zoomDate } from './../../modules/date';

const Calendar = () => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.search.searchKeyword);

  const [isActive, setIsActive] = useState(false);
  const [zoomInOut, setZoomInOut] = useState(true);

  // 월간달력 줌인 줌아웃
  useEffect(() => {
    dispatch(__zoomDate(zoomInOut));
  }, [zoomInOut]);

  const CalendarZoom = () => {
    setZoomInOut(!zoomInOut);
  };
  return (
    <>
      <SearchBox />
      {searchKeyword === '' ? (
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
        <SearchList />
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
