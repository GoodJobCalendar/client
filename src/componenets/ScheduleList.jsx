import React from "react";
import styled from "styled-components";
import moment from "moment";
import location from "../assets/img/icon/Location.png";
import { useSelector } from "react-redux";
const ScheduleList = ({ value }) => {
  const postContent = useSelector((state) => state.post.post);
  console.log("제발되라", postContent);
  const array1 = [0, 0, 0, 0];
  return (
    <ScheduleBox>
      <DayFlex>
        <Day>{moment(value).format("YYYY년 MM월 DD일 dddd")}</Day>
        <Dday>D-1</Dday>
      </DayFlex>
      <ScheduleListWrap>
        {array1.map((value, idx) => (
          <ScheduleItem key={idx}>
            <TimeText>11:30</TimeText>
            <Color color={value.color}></Color>
            <Text>하이퍼커넥트 현직자 면접 인터뷰</Text>
          </ScheduleItem>
        ))}
      </ScheduleListWrap>
    </ScheduleBox>
  );
};

export default ScheduleList;
const ScheduleBox = styled.div`
  width: 100%;
  padding-top: 36px;
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
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px 12px;
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const DayFlex = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: var(--blue4);
`;
const Dday = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--point2);
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
