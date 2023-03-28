import React, { useState, lazy } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// 스티커
import img2 from '../../assets/sticker/sticker2.png';
import img3 from '../../assets/sticker/sticker3.png';
import img4 from '../../assets/sticker/sticker4.png';
import img5 from '../../assets/sticker/sticker5.png';
import img6 from '../../assets/sticker/sticker6.png';
import img7 from '../../assets/sticker/sticker7.png';
import img8 from '../../assets/sticker/sticker8.png';

// 아이콘
import time from '../../assets/icon/Time.svg';
import location from '../../assets/icon/Location.svg';
import memoimg from '../../assets/icon/memo.svg';

import { __companyNameInfo, __memoInfo, __placeInfo, __titleInfo } from '../../modules/posting';

import ColorInput from './ColorInput';
import NeedPostModal from './NeedPostModal';
import Header from './Header';

import { AddScheduleInput } from '../../components/common/Input';

const DatePickerInput = lazy(() => import('./DatePickerInput'));
const TimePickerInput = lazy(() => import('./TimePickerInput'));

const AddSchedule = () => {
  const dispatch = useDispatch();
  const sticker = useSelector((state) => state.posting.sticker);
  const textDate = useSelector((state) => state.posting.textDate);
  const empty = useSelector((state) => state.posting.empty);
  const selectHour = useSelector((state) => state.posting.selectHour);
  const selectTime = useSelector((state) => state.posting.selectTime);
  const selectMinute = useSelector((state) => state.posting.selectMinute);

  //리스트 토글
  const [dateShow, setDateShow] = useState(true);
  const [timeShow, setTimeShow] = useState(false);

  //Date Picker
  const CompanyOnChange = (e) => {
    dispatch(__companyNameInfo(e.target.value));
  };
  const PlacwOnChange = (e) => {
    dispatch(__placeInfo(e.target.value));
  };

  // 커버 이미지 미리보기 / 커버 이미지 pick
  function stickerChangeView(stickerNum) {
    if (stickerNum === '2') {
      return img2;
    }
    if (stickerNum === '3') {
      return img3;
    }
    if (stickerNum === '4') {
      return img4;
    }
    if (stickerNum === '5') {
      return img5;
    }
    if (stickerNum === '6') {
      return img6;
    }
    if (stickerNum === '7') {
      return img7;
    }
    if (stickerNum === '8') {
      return img8;
    }
  }

  const dateShowBtn = () => {
    setDateShow(!dateShow);
    setTimeShow(false);
  };
  const timeShowBtn = () => {
    setDateShow(false);
    setTimeShow(!timeShow);
  };

  const hour = String(Number(selectHour) + Number(selectTime === '오후' ? 12 : 0)).padStart(2, '0');

  return (
    <AddSchesuleWrap>
      {empty && <NeedPostModal />}
      <Header />
      <AddList>
        <TitleInput>
          <AddScheduleInput type='text' placeholder='회사 이름' onChange={CompanyOnChange} />
          {sticker !== '1' && <StickerView src={stickerChangeView(sticker)} alt='스티커미리보기' />}
        </TitleInput>
        <TitleInput>
          <AddScheduleInput
            type='text'
            placeholder='제목'
            onChange={(event) => {
              dispatch(__titleInfo(event.target.value));
            }}
          />
          <ColorInput />
        </TitleInput>
        <DateContainer>
          <p>
            <img src={time} alt='' />
            일정
          </p>
          <DateFlex>
            <DateOpenBtn onClick={dateShowBtn} dateShow={dateShow}>{`${textDate}`}</DateOpenBtn>
            <TimeOpenBtn onClick={timeShowBtn} timeShow={timeShow}>{`${hour}:${selectMinute}`}</TimeOpenBtn>
          </DateFlex>
        </DateContainer>
        <div>
          {dateShow && <DatePickerInput />}
          {timeShow && <TimePickerInput />}
          <PlaceText>
            <AddScheduleIconInput type='text' placeholder='장소' onChange={PlacwOnChange} />
            <img src={location} alt='장소' />
          </PlaceText>
          <TextArea>
            <img src={memoimg} alt='메모' />
            <textarea
              placeholder='메모'
              onChange={(e) => {
                dispatch(__memoInfo(e.target.value));
              }}
            />
          </TextArea>
        </div>
      </AddList>
    </AddSchesuleWrap>
  );
};

export default AddSchedule;

const AddSchesuleWrap = styled.div`
  background-color: var(--blue1);
  width: 100%;
  height: 100vh;
  font-weight: 500;
`;

const AddList = styled.section`
  background-color: var(--blue1);
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DateContainer = styled.div`
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  padding: 18px;
  border-radius: 6px;
  img {
    margin-right: 12px;
  }
  > p {
    color: var(--blue3);
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;
const AddScheduleIconInput = styled(AddScheduleInput)`
  padding-left: 44px !important;
`;

const PlaceText = styled.div`
  width: 100%;

  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
  }

  background: url(../../assets/img/icon/Location.svg) center center no-repeat !important;
`;
const TextArea = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
  }
  textarea {
    width: 100%;
    padding: 18px;
    padding-left: 44px !important;
    border: 0;
    margin-top: 16px;
    resize: none;
    border-radius: 6px;
    ::placeholder {
      color: var(--blue3);
      font-weight: 500;
      font-size: 16px;
    }
    :focus {
      outline: none;
    }
  }
`;
const TitleInput = styled.label`
  position: relative;
`;
const StickerView = styled.img`
  position: absolute;
  width: 40px;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;
const TimeOpenBtn = styled.button`
  font-weight: 500;
  color: var(--blue3);
  padding: 7px 10px;
  background-color: ${(props) => (props.timeShow ? 'var(--blue1)' : 'transparent')};
  border-radius: 35px;
`;
const DateOpenBtn = styled.button`
  font-weight: 500;
  color: var(--blue3);
  background-color: ${(props) => (props.dateShow ? 'var(--blue1)' : 'transparent')};
  padding: 7px 10px;
  border-radius: 35px;
`;
const DateFlex = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
