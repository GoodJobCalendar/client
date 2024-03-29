import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailPost, __scheduleIdGet, __updateShow } from '../modules/schedule';

//스티커 이미지
import img2 from '../assets/sticker/sticker2.png';
import img3 from '../assets/sticker/sticker3.png';
import img4 from '../assets/sticker/sticker4.png';
import img5 from '../assets/sticker/sticker5.png';
import img6 from '../assets/sticker/sticker6.png';
import img7 from '../assets/sticker/sticker7.png';
import img8 from '../assets/sticker/sticker8.png';

//커버 이미지
import cover1 from '../assets/cover/cover1.png';
import cover2 from '../assets/cover/cover2.png';
import cover3 from '../assets/cover/cover3.png';
import cover4 from '../assets/cover/cover4.png';

//아이콘 이미지
import arrow from '../assets/icon/Back.svg';
import update from '../assets/icon/Edit.svg';
import logomini from '../assets/icon/Logo_mini.svg';
import location from '../assets/icon/Location.svg';
import time from '../assets/icon/Time.svg';

import scheduleApi from '../apis/schedule';
import UpdateSchedule from './updateschedule';

const PostDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { scheduleId } = useParams();
  const updateShow = useSelector((state) => state.schedule.updateShow);
  const detailInfo = useSelector((state) => state.schedule.detail);

  //뒤로가기
  const moveBtn = () => {
    navigate(-1);
  };

  //수정하기
  const updateScheduleBtn = () => {
    dispatch(__updateShow(!updateShow));
  };

  useEffect(() => {
    dispatch(detailPost(scheduleId));
    dispatch(__scheduleIdGet(scheduleId));
  }, []);

  const onClickdeleteSchedule = async () => {
    await scheduleApi
      .deleteSchedule(scheduleId)
      .then((res) => {
        navigate(-1);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Header>
        <BtnFlex>
          <Btn onClick={moveBtn}>
            <img src={arrow} alt='뒤로가기' />
          </Btn>
          {}
          <Btn onClick={updateScheduleBtn}>
            <img src={update} alt='수정하기' style={{ opacity: detailInfo?.memo === null && '0' }} />
          </Btn>
        </BtnFlex>
        <Cover
          src={
            detailInfo?.coverImage === 1
              ? cover1
              : detailInfo?.coverImage === 2
              ? cover2
              : detailInfo?.coverImage === 3
              ? cover3
              : detailInfo?.coverImage === 4 && cover4
          }
        />
        <Sticker
          src={
            detailInfo?.sticker === 2
              ? img2
              : detailInfo?.sticker === 3
              ? img3
              : detailInfo?.sticker === 4
              ? img4
              : detailInfo?.sticker === 5
              ? img5
              : detailInfo?.sticker === 6
              ? img6
              : detailInfo?.sticker === 7
              ? img7
              : detailInfo?.sticker === 8 && img8
          }
        />
      </Header>
      <PostDailWrap>
        <Compony>{detailInfo?.companyName}</Compony>
        <TextWrap>
          <Title>
            <Color color={detailInfo?.color}></Color>
            {detailInfo?.title}
          </Title>
          <DateWrap>
            <TimeTitle>
              <img src={time} alt='일정아이콘' />
              일정
            </TimeTitle>
            <Date>
              <li>
                {detailInfo?.date.split(' ')[0].split('-')[1]}월 {detailInfo?.date.split(' ')[0].split('-')[2]}일
              </li>
              <li>
                {detailInfo?.date.split(' ')[1].split(':')[0]}시 {detailInfo?.date.split(' ')[1].split(':')[1]}분
              </li>
            </Date>
          </DateWrap>
          <Text>
            <img src={location} alt='장소아이콘' />
            {detailInfo?.place}
          </Text>
          {detailInfo?.memo && <Text>{detailInfo?.memo}</Text>}
        </TextWrap>
        <Delete onClick={onClickdeleteSchedule}>일정 삭제하기</Delete>
        {detailInfo?.memo === null && (
          <Move
            onClick={() => {
              window.open(detailInfo?.url);
            }}
          >
            <img src={logomini} alt='잡코리아로고' />
            자세한 공고 잡코리아에서 확인
          </Move>
        )}
      </PostDailWrap>
      {updateShow && <UpdateSchedule />}
    </>
  );
};

export default PostDetail;

const PostDailWrap = styled.div`
  background-color: var(--blue1);
  font-weight: 500;
  padding: 0 16px;
`;
const Cover = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;
const Sticker = styled.img`
  width: 92px;
  border-radius: 100%;
  position: absolute;
  bottom: -28px;
  right: 40px;
  z-index: 2;
`;
const Header = styled.div`
  width: 100%;
  padding: 20px;
  height: 184px;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: var(--blue1);
`;
const Compony = styled.div`
  padding: 20px;
  padding-top: 40px;
  font-weight: 500;
  font-size: 20px;
`;
const TextWrap = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  padding: 20px 33px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
  overflow: hidden;
  position: relative;
`;
const Text = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;
const TimeTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;
const Color = styled.div`
  width: 20px;
  height: 100%;
  background-color: ${(props) => props.color === 1 && '#fff'};
  background-color: ${(props) => props.color === 2 && `var(--point3)`};
  background-color: ${(props) => props.color === 3 && ' rgba(253, 187, 110, 1)'};
  background-color: ${(props) => props.color === 4 && 'rgba(253, 247, 110, 1)'};
  background-color: ${(props) => props.color === 5 && ' rgba(110, 253, 150, 1)'};
  background-color: ${(props) => props.color === 6 && 'rgba(110, 218, 253, 1)'};
  background-color: ${(props) => props.color === 7 && 'rgba(130, 110, 253, 1)'};
  background-color: ${(props) => props.color === 8 && `var(--gray2)`};
  background-color: ${(props) => props.color === 9 && `var(--blue4)`};
  position: absolute;
  left: 0;
  top: 0;
`;
const DateWrap = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
`;
const Date = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  li {
    flex: 1;
    padding: 10px 0;
  }
`;
const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
`;
const Btn = styled.button`
  background-color: transparent;
`;
const Delete = styled.button`
  width: 100%;
  padding: 18px;
  color: #fff;
  background-color: var(--blue4);
  border-radius: 6px;
  margin-top: 25px;
`;
const Move = styled.button`
  width: 100%;
  padding: 18px;
  color: #fff;
  background-color: var(--blue4);
  border-radius: 6px;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
