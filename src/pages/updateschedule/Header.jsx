import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import arrow from '../../assets/icon/Back.svg';

// 커버 이미지
import cover1 from '../../assets/cover/cover1.png';
import cover2 from '../../assets/cover/cover2.png';
import cover3 from '../../assets/cover/cover3.png';
import cover4 from '../../assets/cover/cover4.png';

import StickerInput from './StickerInput';
import CoverInput from './CoverInput';

import scheduleApi from '../../apis/schedule';
import { __scheduleUpdate, __updateShow } from '../../modules/schedule';
import { __emptyContent } from '../../modules/update';

const Header = () => {
  const dispatch = useDispatch();
  const updateShow = useSelector((state) => state.schedule.updateShow);
  const scheduleId = useSelector((state) => state.schedule.scheduleId);
  const detail = useSelector((state) => state.schedule.detail);
  const image = useSelector((state) => state.update.image);
  const companyName = useSelector((state) => state.update.companyName);
  const place = useSelector((state) => state.update.place);
  const color = useSelector((state) => state.update.color);
  const title = useSelector((state) => state.update.title);
  const sticker = useSelector((state) => state.update.sticker);
  const memo = useSelector((state) => state.update.memo);
  const selectTime = useSelector((state) => state.update.selectTime);
  const selectHour = useSelector((state) => state.update.selectHour);
  const selectMinute = useSelector((state) => state.update.selectMinute);
  const formatDate = useSelector((state) => state.update.formatDate);
  function coverChangeView(imageNumber) {
    if (imageNumber === '1') {
      return cover1;
    }
    if (imageNumber === '2') {
      return cover2;
    }
    if (imageNumber === '3') {
      return cover3;
    }
    if (imageNumber === '4') {
      return cover4;
    }
  }
  const [cover, setCover] = useState(coverChangeView(image));

  // 뒤로가기
  const moveBtn = () => {
    dispatch(__updateShow(!updateShow));
  };

  const hour = String(Number(selectHour) + Number(selectTime === '오후' ? 12 : 0)).padStart(2, '0');
  // 날짜
  const date = `${formatDate} ${hour}:${selectMinute}:00`;
  // 일정등록
  const addScheduleBtn = async (e) => {
    e.preventDefault();
    if (companyName === '' || title === '' || date === '' || place === '') {
      dispatch(__emptyContent(true));
    } else {
      scheduleApi
        .modifySchedule(scheduleId, {
          image: Number(image),
          companyName,
          title,
          sticker: Number(sticker),
          color: Number(color),
          date,
          place,
          memo,
        })
        .then((res) => {
          dispatch(__scheduleUpdate(res.data.data));
        })
        .catch((err) => {
          console.error(err);
        });
      dispatch(__updateShow(!updateShow));
    }
  };
  useEffect(() => {
    setCover(coverChangeView(String(image)));
  }, [image]);
  return (
    <HeaderWrap style={{ backgroundImage: `url(${cover})` }}>
      <AddFlex>
        <Btn onClick={moveBtn}>
          <img src={arrow} alt='뒤로가기' />
        </Btn>
        <Btn onClick={addScheduleBtn}>저장</Btn>
      </AddFlex>
      <BtnFlex>
        <StickerInput />
        <CoverInput />
      </BtnFlex>
    </HeaderWrap>
  );
};

export default Header;
const HeaderWrap = styled.div`
  padding: 20px;
  height: 184px;
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-repeat: no-repeat;
`;
const Btn = styled.button`
  font-weight: 700;
  color: #fff;
  background-color: transparent;
  z-index: 99;
  cursor: pointer;
`;
const AddFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;
const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  z-index: 99;
`;
