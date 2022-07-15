import React from "react";
import styled from "styled-components";

const Head = (props) => {
  const { year, month, setYear, setMonth, goToday } = props;
  const monthPlus = () => {
    setMonth(month + 1);
    if (month > 11) {
      setMonth(1);
      const y = Number(year) + 1;
      setYear(y);
    }
  };
  const monthMius = () => {
    setMonth(month - 1);
    if (month < 2) {
      setMonth(12);
      const y = Number(year) - 1;
      setYear(y);
    }
  };
  console.log(year + "년" + month + "월");
  // 오늘날짜소환! goToday();

  return (
    <Form>
      <Nav>
        <BtnBox>
          <Btn onClick={monthMius}>&lt;</Btn>
          <YearMonth>
            {/* <span>{year}</span> */}
            <p>{String(month).padStart(2, "0")}월</p>
          </YearMonth>
          {/* <Btn width="3vw" onClick={() => goToday()}>
            오늘
          </Btn> */}
          <Btn onClick={monthPlus}>&gt;</Btn>
        </BtnBox>
      </Nav>
      <Days>
        {DAY.map((elm, idx) => {
          return <Day key={idx}>{elm}</Day>;
        })}
      </Days>
    </Form>
  );
};

const Form = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 2px;
`;
const Nav = styled.section``;

const YearMonth = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    font-weight: 600;
    font-size: 22px;
    color: var(--blue4);
    line-height: 30px;
  }

  span {
    font-weight: 700;
    font-size: 14px;
    color: var(--blue3);
    margin-right: 10px;
  }
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const Btn = styled.button`
  text-align: center;
  cursor: pointer;
  color: var(--blue3);
`;
const Days = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 7px 7px 0 0;
`;
const Day = styled.li`
  padding: 13px 17px;
  font-weight: 500;
  font-size: 12px;
  color: var(--gray3);
  :not(:last-child) {
    border-right: 0;
  }
  width: calc(100% / 7);
  :nth-child(7n + 1) {
    color: var(--blue3);
  }
  :nth-child(7n) {
    color: var(--point3);
  }
`;

const DAY = ["일", "월", "화", "수", "목", "금", "토"];
export default Head;
