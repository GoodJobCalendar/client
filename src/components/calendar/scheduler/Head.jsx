import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { loadMonth } from '../../../modules/schedule';
import { __changeMonth, __changeYear } from '../../../modules/date';

const Head = () => {
  const dispatch = useDispatch();
  const month = useSelector((state) => state.date.changeMonth);
  const year = useSelector((state) => state.date.changeYear);

  const monthPlus = () => {
    dispatch(__changeMonth(month + 1));
    if (month > 11) {
      dispatch(__changeMonth(1));
      const y = Number(year) + 1;
      dispatch(__changeYear(y));
    }
  };
  const monthMius = () => {
    dispatch(__changeMonth(month - 1));
    if (month < 2) {
      dispatch(__changeMonth(12));
      const y = Number(year) - 1;
      dispatch(__changeYear(y));
    }
  };
  const yearPlus = () => {
    const y = year + 1;
    dispatch(__changeYear(y));
  };
  const yearMius = () => {
    const y = year - 1;
    dispatch(__changeYear(y));
  };
  const monthNumber = String(month).padStart(2, '0');

  useEffect(() => {
    (async () => {
      const startDate = `${year}-${monthNumber}-01 00:00:00`;
      await dispatch(loadMonth(startDate));
    })();
  }, [year, month]);

  const DAY = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <Form>
      <Nav>
        <BtnWrap>
          <YearBtnBox>
            <YearBtn onClick={yearMius}>&lt;</YearBtn>
            <Year>
              <p>{year}</p>
            </Year>
            <YearBtn onClick={yearPlus}>&gt;</YearBtn>
          </YearBtnBox>
          <MonthBtnBox>
            <MonthBtn onClick={monthMius}>&lt;</MonthBtn>
            <Month>
              <p>{String(month).padStart(2, '0')}월</p>
            </Month>
            <MonthBtn onClick={monthPlus}>&gt;</MonthBtn>
          </MonthBtnBox>
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
`;
const YearBtn = styled.button`
  font-weight: 700;
  font-size: 14px;
  color: var(--blue3);
  background-color: transparent;
  text-align: center;
  cursor: pointer;
`;
const MonthBtnBox = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  gap: 25px;
`;
const MonthBtn = styled.button`
  font-size: 22px;
  color: var(--blue4);
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
`;

const Days = styled.ul`
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
