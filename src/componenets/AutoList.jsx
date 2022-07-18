import React from "react";
import styled from "styled-components";

const AutoList = ({ monthSchdule, date }) => {
  const auto = monthSchdule?.auto.map((value, idx) =>
    date === value.date ? (
      <>
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
          </ScheduleListWrap>
        </div>
      </>
    ) : (
      ""
    )
  );
  return <>{auto}</>;
};

export default AutoList;
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
