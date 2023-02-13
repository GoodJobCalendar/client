import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

// 이미지
import img1 from '../../../assets/sticker/sticker1.png';
import img2 from '../../../assets/sticker/sticker2.png';
import img3 from '../../../assets/sticker/sticker3.png';
import img4 from '../../../assets/sticker/sticker4.png';
import img5 from '../../../assets/sticker/sticker5.png';
import img6 from '../../../assets/sticker/sticker6.png';
import img7 from '../../../assets/sticker/sticker7.png';
import img8 from '../../../assets/sticker/sticker8.png';
import img9 from '../../../assets/sticker/sticker9.png';
import { useSelector } from 'react-redux';

const MonthlyScheduleList = () => {
  const monthSchdule = useSelector((state) => state.schedule.month);

  let [week, mm, day, yy, sTime] = new Date().toString().split(' ');
  let Month = (mm) => {
    if (mm === 'Jan') return '01';
    if (mm === 'Feb') return '02';
    if (mm === 'Mar') return '03';
    if (mm === 'Apr') return '04';
    if (mm === 'May') return '05';
    if (mm === 'Jun') return '06';
    if (mm === 'Jul') return '07';
    if (mm === 'Aug') return '08';
    if (mm === 'Sep') return '09';
    if (mm === 'Oct') return '10';
    if (mm === 'Nov') return '11';
    if (mm === 'Dec') return '12';
  };
  const today = `${yy}-${Month(mm)}-${day}`;
  const fullDate = (day) => {
    return `${yy}년 ${day.substr(2, 2)}월 ${day.substr(4, 2)}일 `;
  };
  function getDate(whatDay) {
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayOfWeek = week[new Date(whatDay).getDay()];
    return dayOfWeek;
  }

  return (
    <Container>
      {monthSchdule &&
        monthSchdule?.map((value, idx) => {
          return (
            <ScheduleListWrap key={idx}>
              {value[1]?.map((content, idx) => (
                <Fragment key={idx}>
                  {idx === 0 && (
                    <DayFlex>
                      <Day>
                        {idx === 0 && fullDate(value[0])}
                        {idx === 0 &&
                          getDate(`20${value[0].substr(0, 2)}-${value[0].substr(2, 2)}-${value[0].substr(4, 2)}`)}
                      </Day>
                      <Dday>
                        {idx === 0 &&
                          (new Date(content.date.split(' ')[0]) - new Date(today) > 0
                            ? `D- ${Math.floor(
                                (new Date(content.date.split(' ')[0]) - new Date(today)) / (1000 * 60 * 60 * 24),
                              )}`
                            : new Date(content.date.split(' ')[0]) - new Date(today) !== 0
                            ? `D+ ${Math.floor(
                                (new Date(today) - new Date(content.date.split(' ')[0])) / (1000 * 60 * 60 * 24),
                              )}`
                            : 'D-day')}
                      </Dday>
                    </DayFlex>
                  )}

                  <Link to={`/postdetail/${content?.scheduleId}`}>
                    <ScheduleItem>
                      <TimeText>
                        {(content?.date).split(' ')[1].split(':')[0]}:{(content?.date).split(' ')[1].split(':')[1]}
                      </TimeText>
                      <Color color={content?.color}></Color>
                      <Text>{content.title}</Text>
                      {content?.sticker === 1 ? (
                        <Sticker>
                          <StickerImg src={img1} alt='' sticker={content?.sticker} />
                        </Sticker>
                      ) : (
                        <Sticker>
                          <img
                            src={
                              content?.sticker === 2
                                ? img2
                                : content?.sticker === 3
                                ? img3
                                : content?.sticker === 4
                                ? img4
                                : content?.sticker === 5
                                ? img5
                                : content?.sticker === 6
                                ? img6
                                : content?.sticker === 7
                                ? img7
                                : content?.sticker === 8
                                ? img8
                                : content?.sticker === 9
                                ? img9
                                : ''
                            }
                            alt=''
                          />
                        </Sticker>
                      )}
                    </ScheduleItem>
                  </Link>
                </Fragment>
              ))}
            </ScheduleListWrap>
          );
        })}
    </Container>
  );
};

export default MonthlyScheduleList;

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
const ScheduleItem = styled.div`
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
`;
const DayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 26px;
`;
const Color = styled.div`
  width: 3px;
  height: 32px;
  border-radius: 6px;
  background-color: ${(props) => (props.color === 1 ? '#fff' : '')};
  background-color: ${(props) => (props.color === 2 ? `var(--point3)` : '')};
  background-color: ${(props) => (props.color === 3 ? 'rgba(253, 187, 110, 1)' : '')};
  background-color: ${(props) => (props.color === 4 ? 'rgba(253, 247, 110, 1)' : '')};
  background-color: ${(props) => (props.color === 5 ? 'rgba(110, 253, 150, 1)' : '')};
  background-color: ${(props) => (props.color === 6 ? 'rgba(110, 218, 253, 1)' : '')};
  background-color: ${(props) => (props.color === 7 ? 'rgba(130, 110, 253, 1)' : '')};
  background-color: ${(props) => (props.color === 8 ? `var(--gray2)` : '')};
  background-color: ${(props) => (props.color === 9 ? `var(--blue4)` : '')};
`;
const Day = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue4); ;
`;
const Dday = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--point2);
`;
const TimeText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: var(--blue3);
  padding: 6px 9px;
`;
const Text = styled.p`
  flex: 7;
  font-weight: 700;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 16px;
`;
const Sticker = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  > img {
    width: 100%;
  }
`;
const StickerImg = styled.img`
  height: 100%;
  width: auto;
`;
