import React, { useEffect } from "react";
import styled from "styled-components";
import location from "../assets/img/icon/Location.png";
import { useSelector, useDispatch } from "react-redux";
import { monthList } from "../redux/modules/schedule";
import Dayjs from "dayjs";
import "dayjs/locale/ko";
import AutoList from "./AutoList";
const ScheduleList = ({ monthDate }) => {
  Dayjs.locale("ko");
  const monthSchdule = useSelector((state) => state.schedule.month);
  const manual1 = monthSchdule?.manual;
  console.log("으1", manual1);
  const auto = monthSchdule?.auto;
  console.log("으2", auto);
  console.log("으악", ...manual1);
  // const ddd = [...manual1, ...auto];
  // console.log("으3", ddd);

  const manual = monthSchdule?.manual.map((value, idx) => (
    <div key={idx}>
      <DayFlex>
        <Day>{value.date}</Day>
        <Dday>D-1</Dday>
      </DayFlex>
      <ScheduleListWrap>
        <ScheduleItem>
          <TimeText>{value.date}</TimeText>
          <Color color={value.color}></Color>
          <Text>{value.title}</Text>
        </ScheduleItem>
        <AutoList monthSchdule={monthSchdule} date={value.date} />
      </ScheduleListWrap>
    </div>
  ));

  return <>{manual}</>;
};

export default ScheduleList;

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
