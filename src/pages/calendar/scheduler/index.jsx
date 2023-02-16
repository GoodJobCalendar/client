import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __numberDate, __totalDate } from '../../../modules/date';

import Head from './Head';
import Body from './Body';

const MonthSchedule = () => {
  const dispatch = useDispatch();

  const month = useSelector((state) => state.date.changeMonth);
  const year = useSelector((state) => state.date.changeYear);

  const changeDate = () => {
    //지난달 마지막 일자의 요일(Number)
    const PrevDay = new Date(year, month - 1, 0).getDay();
    //이번달 마지막 일자의 요일(Number)
    const ThisDay = new Date(year, month, 0).getDay();
    //이번달 마지막 일자(Number)
    const ThisDate = new Date(year, month, 0).getDate();

    //이전 날짜 만들기
    let PVLD = [];
    if (PrevDay !== 6) {
      for (let i = 0; i < PrevDay + 1; i++) {
        PVLD.unshift(PrevDay - i);
      }
    }
    //다음 날짜 만들기
    let TLD = [];
    for (let i = 1; i < 7 - ThisDay; i++) {
      if (i === 0) {
        return TLD;
      }
      TLD.push(i);
    }

    //현재날짜
    let TD = [];
    TD = [...Array(ThisDate + 1).keys()].slice(1);
    const totalDate = PVLD.concat(TD, TLD);
    dispatch(__numberDate({ prev: PVLD.length, next: TLD.length, total: totalDate.length }));
    return totalDate;
  };

  useEffect(() => {
    dispatch(__totalDate(changeDate()));
  }, [year, month]);

  return (
    <div>
      <Head />
      <Body />
    </div>
  );
};

export default MonthSchedule;
