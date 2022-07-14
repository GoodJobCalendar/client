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
          <Flex>
            <Year>{year}</Year>
            <Year>{String(month).padStart(2, "0")}월</Year>
          </Flex>
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
  border: 2px solid #e4e3e6;
  border-radius: 2px;
`;
const Nav = styled.section``;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
const Year = styled.div`
  font-weight: 700;
  font-size: 14px;
  text-align: center;
`;
const BtnBox = styled.div`
  ${({ theme }) => theme.flexSet("space-between", "center")}
`;
const Btn = styled.li`
  padding: 5px;
  width: ${(props) => {
    return props.width || "1.3vw";
  }};
  border: 0.5px solid #e4e3e6;
  border-radius: 5px;
  text-align: center;
  font-size: 0.78rem;
  cursor: pointer;
`;
const Days = styled.div`
  display: flex;
  margin-bottom: 0.5vw;
`;
const Day = styled.li`
  width: calc(100% / 7);
  text-align: center;
  cursor: pointer;

  /* :nth-child(7n + 1),
  :nth-child(7n) {
    color: #969696;
  } */
`;

const DAY = ["일", "월", "화", "수", "목", "금", "토"];
export default Head;
