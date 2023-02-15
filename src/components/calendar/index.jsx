import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// 컴포넌트
import SearchBox from './SearchBox';
import SearchList from './SearchList';
import MonthSchedule from './scheduler';
import ScheduleList from './schedulelist';

// 이미지
import zoomin from '../../assets/icon/zoomin.svg';
import zoomout from '../../assets/icon/zoomout.svg';

import { __zoomDate } from './../../modules/date';

const Calendar = () => {
  const dispatch = useDispatch();
  const searchKeyword = useSelector((state) => state.search.searchKeyword);
  const zoom = useSelector((state) => state.date.zoom);

  const CalendarZoom = () => {
    dispatch(__zoomDate(!zoom));
  };

  return (
    <>
      <SearchBox />
      {searchKeyword === '' ? (
        <ContentWrap>
          <ToggleBtn>
            {zoom ? (
              <button onClick={CalendarZoom}>
                <img src={zoomin} alt='월별달력확대' />
              </button>
            ) : (
              <button onClick={CalendarZoom}>
                <img src={zoomout} alt='월별달력축소' />
              </button>
            )}
          </ToggleBtn>
          <MonthSchedule />
          <ScheduleList />
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
