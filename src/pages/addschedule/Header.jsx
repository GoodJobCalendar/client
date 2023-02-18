import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
import { loadMonth } from '../../modules/schedule';
import { __emptyContent } from '../../modules/posting';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const image = useSelector((state) => state.posting.image);
  const companyName = useSelector((state) => state.posting.companyName);
  const place = useSelector((state) => state.posting.place);
  const color = useSelector((state) => state.posting.color);
  const title = useSelector((state) => state.posting.title);
  const sticker = useSelector((state) => state.posting.sticker);
  const memo = useSelector((state) => state.posting.memo);
  const selectTime = useSelector((state) => state.posting.selectTime);
  const selectHour = useSelector((state) => state.posting.selectHour);
  const selectMinute = useSelector((state) => state.posting.selectMinute);
  const formatDate = useSelector((state) => state.posting.formatDate);

  function coverChangeView(image) {
    if (image === '1') {
      return cover1;
    }
    if (image === '2') {
      return cover2;
    }
    if (image === '3') {
      return cover3;
    }
    if (image === '4') {
      return cover4;
    }
  }

  // 뒤로가기
  const moveBtn = () => {
    navigate('/main/calendar');
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
      await scheduleApi
        .postSchedule({
          image: Number(image),
          companyName, //필수입력
          title, //필수입력
          sticker: Number(sticker),
          date, //필수입력
          place, //필수입력
          memo,
          color: Number(color),
        })
        .then((res) => {
          dispatch(loadMonth(`${res.data.data.date.split(' ')[0].substr(0, 7)}-01 00:00:00`));
        })
        .catch((err) => {
          console.error(err);
        });
      navigate('/main/calendar');
    }
  };
  return (
    <HeaderWrap style={{ backgroundImage: `url(${coverChangeView(image)})` }}>
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
