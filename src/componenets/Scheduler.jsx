import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import
import "../Calendar.css";
import moment from "moment";
import "moment/locale/ko";
const Scheduler = () => {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <Calendar
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        navigationLabel={null}
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가

          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div>{html}</div>
            </>
          );
        }}
      />
      <div>
        <ScheduleBox>
          <Flex>
            <p>{moment(value).format("YYYY년 MM월 DD일 dddd")}</p>
            <p>D-1</p>
          </Flex>
          <ScheduleItem>
            <Flex>
              <TimeText>11:30</TimeText>
              <Color></Color>
              <Text>하이퍼커넥트 현직자 면접 인터뷰</Text>
            </Flex>
            <AdrressText>
              서울특별시 강남구 삼성1동 영동대로 517 20층
            </AdrressText>
          </ScheduleItem>
        </ScheduleBox>
      </div>
    </>
  );
};

export default Scheduler;
const ScheduleBox = styled.div`
  width: 100%;
  height: 75px;
  border-radius: 6px;
  margin-top: 20px;
`;
const ScheduleItem = styled.div`
  padding: 20px 12px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Color = styled.div`
  width: 3px;
  background-color: var(--point3);
`;
const TimeText = styled.div`
  font-size: 12px;
  text-align: center;
`;
const Text = styled.div`
  float: right;
  width: 85%;
`;
const AdrressText = styled.div`
  float: right;
  width: 85%;
  font-size: 12px;
`;
