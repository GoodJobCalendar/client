import React, { useEffect, useState, Fragment } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ScheduleItemList from './ScheduleItemList';
import DayText from './DayText';

const ScheduleList = () => {
  const isActive = useSelector((state) => state.date.active);
  const monthSchdule = useSelector((state) => state.schedule.month);
  const data = Object.entries(monthSchdule);
  const [sheduleList, setScheduleList] = useState(data);
  const dailySchedule = useSelector((state) => state.schedule.daily);

  useEffect(() => {
    (async () => {
      const data = Object.entries(dailySchedule);
      setScheduleList(data);
      if (isActive) {
        const data = await Object.entries(dailySchedule);
        return setScheduleList(data);
      } else {
        const data = await Object.entries(monthSchdule);
        return setScheduleList(data);
      }
    })();
  }, [isActive, dailySchedule, monthSchdule]);

  return (
    <Container>
      {sheduleList &&
        sheduleList?.map((value, idx) => (
          <ScheduleListWrap key={idx}>
            {value[1]?.map((content, idx) => {
              return (
                <Fragment key={content.scheduleId}>
                  {idx === 0 && <DayText value={value} content={content} />}
                  <ScheduleItemList idx={content} content={content} />
                </Fragment>
              );
            })}
          </ScheduleListWrap>
        ))}
    </Container>
  );
};

export default ScheduleList;

const Container = styled.div`
  padding-bottom: 78px;
`;
const ScheduleListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    width: 100%;
    height: 100%;
    margin-top: 16px;
    :nth-child(2) {
      margin-top: 0;
    }
  }
`;
