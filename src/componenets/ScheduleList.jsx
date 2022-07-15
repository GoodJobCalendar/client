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
            <TimeText>{value.date}</TimeText>
            <Color color={value.color}></Color>
            <Text>{value.title}</Text>
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
  height: 150px;
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
const AdrressWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 3px;
`;
const AdrressText = styled.p`
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
