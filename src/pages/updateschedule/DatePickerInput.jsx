import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//Date Picker
import DatePicker from 'react-datepicker';
import 'date-fns';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
import { __formatDate, __selectDate, __textDate } from '../../modules/update';
import { useSelector, useDispatch } from 'react-redux';

const DatePickerInput = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.schedule.detail);
  const [selectDate, setSelectDate] = useState(new Date(detail?.date));

  const changeDate = (d) => {
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year} ${`0${monthIndex}`.slice(-2)}`;
  };
  const onChangeDate = (selectDate) => {
    let [week, month, day, year, sTime] = selectDate.toString().split(' ');
    let Week = (week) => {
      if (week === 'Sun') return '일';
      if (week === 'Mon') return '월';
      if (week === 'Tue') return '화';
      if (week === 'Wed') return '수';
      if (week === 'Thu') return '목';
      if (week === 'Fri') return '금';
      if (week === 'Sat') return '토';
    };
    let Month = (month) => {
      if (month === 'Jan') return '01';
      if (month === 'Feb') return '02';
      if (month === 'Mar') return '03';
      if (month === 'Apr') return '04';
      if (month === 'May') return '05';
      if (month === 'Jun') return '06';
      if (month === 'Jul') return '07';
      if (month === 'Aug') return '08';
      if (month === 'Sep') return '09';
      if (month === 'Oct') return '10';
      if (month === 'Nov') return '11';
      if (month === 'Dec') return '12';
    };
    const textDate = `${Month(month)}월 ${day}일 (${Week(week)})`;
    const formatDate = `${year}-${Month(month)}-${day}`;
    dispatch(__selectDate(selectDate));
    dispatch(__textDate(textDate));
    dispatch(__formatDate(formatDate));
  };
  useEffect(() => {
    onChangeDate(new Date(detail?.date));
  }, []);
  return (
    <DateWrap>
      <DatePicker
        selected={selectDate}
        onChange={(date) => {
          setSelectDate(date);
          onChangeDate(date);
        }}
        dateFormat='yyyy-MM-dd (eee)'
        showPopperArrow={false}
        inline
        locale={ko}
        popperModifiers={{ preventOverflow: { enabled: true } }}
        popperPlacement='auto'
        shouldCloseOnSelect={true}
        renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
          <div className='datepickerHeader'>
            <DateHead>
              <DateYear>{changeDate(date).split(' ')[0]}</DateYear>
              <DateBtns>
                <DateBtn onClick={decreaseMonth}> &lt;</DateBtn>
                <DateMonth className='fomrmatDate'>{changeDate(date).split(' ')[1]}월</DateMonth>
                <DateBtn onClick={increaseMonth}>&gt;</DateBtn>
              </DateBtns>
            </DateHead>
          </div>
        )}
      />
    </DateWrap>
  );
};

export default DatePickerInput;

const DateYear = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--gray3);
`;
const DateWrap = styled.div`
  .react-datepicker {
    width: 100%;
    padding: 17px 20px;
    background: var(--blue1);
    box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32), inset 0px 8px 14px rgba(255, 255, 255, 0.3);
    border-radius: 6.83801px;
    border: 0;
    margin-bottom: 16px;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__header {
    width: 100%;
    background-color: transparent;
    border-bottom: none;
  }
  .datepickerHeader {
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    :nth-child(1) {
      color: var(--point3);
    }
    :nth-child(7) {
      color: var(--blue3);
    }
  }
  .react-datepicker__day--weekend {
    :nth-child(1) {
      color: var(--point3);
    }
    :nth-child(7) {
      color: var(--blue3);
    }
  }
  .react-datepicker__day-names {
    margin-bottom: 8px;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: calc(100% / 7);
    line-height: 42px;
    height: 42px;
    margin: 0;
    text-align: center;
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected,
  .react-datepicker__day--selected,
  .react-datepicker__day--selected:hover {
    border-radius: 100%;
    background-color: var(--blue4);
    line-height: 42px;
    height: 42px;

    color: white !important;
  }
  .react-datepicker__day--outside-month {
    opacity: 0;
  }
  input {
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    color: var(--blue3);

    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: var(--blue3);
    }
  }
`;
const DateHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
const DateBtns = styled.div`
  display: flex;
  gap: 18px;
`;
const DateBtn = styled.button`
  color: var(--gray2);
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray2) !important;
  border-radius: 100%;

  background-color: transparent;
  cursor: pointer;
`;
const DateMonth = styled.p`
  font-weight: 700;
  font-size: 14px;
`;
