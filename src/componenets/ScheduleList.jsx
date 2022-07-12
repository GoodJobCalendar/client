import React from "react";
import styled from "styled-components";
import moment from "moment";
import location from "../assets/img/icon/Location.png";
const ScheduleList = ({ value }) => {
  const array1 = [0, 0, 0, 0];
  return (
    <ScheduleBox>
      <DayFlex>
        <Day>{moment(value).format("YYYY년 MM월 DD일 dddd")}</Day>
        <Dday>D-1</Dday>
      </DayFlex>
      <ScheduleListWrap>
        {array1.map((key, value) => (
          <ScheduleItem key={value}>
            <Flex>
              <TimeText>11:30</TimeText>
              <Color></Color>
              <Text>하이퍼커넥트 현직자 면접 인터뷰</Text>
            </Flex>
            <AdrressWrap>
              <img src={location} alt="" />
              <AdrressText>
                서울특별시 강남구 삼성1동 영동대로 517 20층
              </AdrressText>
            </AdrressWrap>
          </ScheduleItem>
        ))}
      </ScheduleListWrap>
    </ScheduleBox>
  );
};

export default ScheduleList;
const ScheduleBox = styled.div`
  width: 100%;
  margin-top: 36px;
  height: 308px;
  overflow-y: scroll;
`;
const ScheduleListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
`;
const ScheduleItem = styled.div`
  padding: 20px 12px;
  background-color: #fff;
  border-radius: 6px;
`;
const DayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Color = styled.div`
  width: 3px;
  height: 32px;
  background-color: var(--point3);
  border-radius: 6px;
`;
const Day = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #9a9a9a;
`;
const Dday = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #9a9a9a;
`;
const TimeText = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #777;
  padding: 6px 9px;
  text-align: center;
`;
const Text = styled.div`
  font-weight: 700;
  font-size: 16px;
  padding: 0 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const AdrressWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding-left: 68px;
  margin-top: 3px;
`;
const AdrressText = styled.p`
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
