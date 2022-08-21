import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { loadMonth } from "../../redux/modules/schedule";

const Head = (props) => {
  const { year, month, setYear, setMonth } = props;
  const dispatch = useDispatch();

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
  const yearPlus = () => {
    const y = year + 1;
    setYear(y);
  };
  const yearMius = () => {
    const y = year - 1;
    setYear(y);
  };
  const monthNumber = String(month).padStart(2, "0");
  const fullDate = `${year}-${monthNumber}-01 00:00:00`;

  useEffect(() => {
    dispatch(loadMonth(fullDate));
  }, [month]);

  // 오늘날짜소환!
  const DAY = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Form>
      <Nav>
        <BtnWrap>
          <YearBtnBox>
            <Btn onClick={yearMius}>&lt;</Btn>
            <Year>
              <p>{year}</p>
            </Year>
            <Btn onClick={yearPlus}>&gt;</Btn>
          </YearBtnBox>
          <BtnBox>
            <Btn onClick={monthMius}>&lt;</Btn>
            <Month>
              <p>{String(month).padStart(2, "0")}월</p>
            </Month>
            <Btn onClick={monthPlus}>&gt;</Btn>
          </BtnBox>
        </BtnWrap>
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
const Nav = styled.section`
  display: flex;
  justify-content: flex-end;
`;

const Year = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    font-weight: 700;
    font-size: 14px;
    color: var(--blue3);
  }
`;
const Month = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  p {
    font-weight: 600;
    font-size: 22px;
    color: var(--blue4);
    line-height: 30px;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const YearBtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  button {
    font-weight: 700;
    font-size: 14px;
    color: var(--blue3);
    background-color: transparent;
  }
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  gap: 25px;
  button {
    font-size: 22px;
    color: var(--blue4);
    line-height: 30px;
    background-color: transparent;
  }
`;
const Btn = styled.button`
  text-align: center;
  cursor: pointer;
  color: var(--blue3);
  background-color: transparent;
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
  text-align: center;
  :not(:last-child) {
    border-right: 0;
  }
  width: calc(100% / 7);
  :nth-child(7n) {
    color: var(--blue3);
  }
  :nth-child(7n + 1) {
    color: var(--point3);
  }
`;

export default Head;