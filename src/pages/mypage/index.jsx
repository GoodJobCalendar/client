import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// css
import backBtn from '../../assets/icon/Back.svg';
import mypagebird from '../../assets/illust/mypagebird.svg';
import mypagebird2 from '../../assets/illust/mypagebird2.svg';
import Polygon from '../../assets/icon/Polygon.png';

import { deleteCookie, setCookie } from '../../shared/cookie';
import userApi from '../../apis/user';
import Footer from './Footer';

const Mypage = () => {
  const navigate = useNavigate();
  const [social, setSocial] = useState();
  const [userInfo, setUserInfo] = useState();
  const [date, setDate] = useState('');

  useEffect(() => {
    const myinfo = async () => {
      await userApi
        .getUserInfo()
        .then((res) => {
          setUserInfo(res.data.data);
          setSocial(res.data.data.type);
          setDate(res.data.data.updatedAt.split('T')[0]);
          setCookie('email', res.data.data.email);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    myinfo();
  }, []);

  // 비밀번호 변경일
  const strDate1 = date;
  const strDate2 = new Date();
  let year = strDate2.getFullYear(); // 년도
  let month = strDate2.getMonth() + 1; // 월
  let day = strDate2.getDate(); // 날짜
  const today = year + '-' + month + '-' + day;
  const arr1 = strDate1.split('-');
  const arr2 = today.split('-');
  const dat1 = new Date(arr1[0], arr1[1], arr1[2]);
  const dat2 = new Date(arr2[0], arr2[1], arr2[2]);

  const diff = dat2 - dat1;
  const currDay = 24 * 60 * 60 * 1000; // 시 * 분 * 초 * 밀리세컨
  const currMonth = currDay * 30; // 월 만듬

  return (
    <MyPageWrap>
      <MyNavWrap>
        <MyBack
          onClick={() => {
            navigate('/main/calendar');
          }}
        >
          <img src={backBtn} alt='뒤로가기버튼' />
          <MyTitle>마이페이지</MyTitle>
        </MyBack>
        {userInfo?.countLikePostings === 0 ? (
          <MyScheduleList>
            <MyBubble
              onClick={() => {
                navigate('main/Job');
              }}
            >
              <img src={Polygon} alt='' />
              <span>채용공고 담으러 가기</span>
            </MyBubble>
            <MyImg src={mypagebird2}></MyImg>
          </MyScheduleList>
        ) : (
          <MyScheduleList>
            <MyBubble
              onClick={() => {
                navigate('/Zzim');
              }}
            >
              <img src={Polygon} alt='' />
              <p>총 {userInfo?.countLikePostings}개</p>
              <span>보러가기</span>
            </MyBubble>
            <MyImg src={mypagebird}></MyImg>
          </MyScheduleList>
        )}
      </MyNavWrap>
      <PersonalInfo>
        {social === 'kakao' ? (
          <>
            <PersonalTitle>카카오 간편 로그인 이용중</PersonalTitle>
            <Email>{userInfo?.email}</Email>
            <LogoutBtn
              onClick={() => {
                deleteCookie('token');
                navigate('/');
              }}
            >
              로그아웃
            </LogoutBtn>
          </>
        ) : (
          <>
            <PersonalTitle>Email</PersonalTitle>
            <Email>{userInfo?.email}</Email>
            <PersonalTitle style={{ marginTop: '16px' }}>비밀번호</PersonalTitle>
            <ModiWrap>
              <ModifyDate>
                비밀번호 바꾼지
                <p style={{ color: `var(--blue4)`, margin: '0 10px' }}>{parseInt(diff / currMonth)}개월</p> 이 지났어요!
              </ModifyDate>
              <ModifyBtn
                onClick={() => {
                  // navigate("/pwChange")
                  alert('현재 준비중 입니다.');
                }}
              >
                수정
              </ModifyBtn>
            </ModiWrap>
            <LogoutBtn
              onClick={() => {
                deleteCookie('token');
                navigate('/');
              }}
            >
              로그아웃
            </LogoutBtn>
          </>
        )}
      </PersonalInfo>
      <Footer />
    </MyPageWrap>
  );
};

export default Mypage;

const MyPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  height: 100vh;
`;
const MyNavWrap = styled.div`
  width: 100%;
  height: 156px;
  background-color: var(--blue4);
  padding: 20px 18px;
  padding-bottom: 0;
`;
const MyBack = styled.button`
  display: flex;
  gap: 127px;
`;
const MyTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12px;
  color: white;
  letter-spacing: 0.756245px;
  margin-bottom: 27px;
`;
const MyScheduleList = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const MyBubble = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1px;
  height: 35px;
  background-color: white;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0px 3px 9px rgba(52, 46, 45, 0.468);
  position: absolute;
  top: 0;
  p {
    color: var(--blue4);
    font-weight: 500;
  }
  span {
    font-weight: 700;
    color: var(--blue4);
    z-index: 9;
  }
  img {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const MyImg = styled.img`
  height: 73px;
  position: absolute;
  bottom: 0;
`;

const PersonalInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  margin-top: 54px;
  margin-bottom: 24px;
`;

const PersonalTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: var(--blue4);
  height: 22px;
`;

const Email = styled.div`
  background-color: white;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 500;
`;
const ModiWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ModifyDate = styled.div`
  background-color: white;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;
const ModifyBtn = styled.button`
  color: var(--blue3);
  width: 55px;
  height: 48px;
  border: 1px solid var(--blue3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 6px;
`;
const LogoutBtn = styled.button`
  width: 100%;
  height: 54px;
  border: 1px var(--blue4) solid;
  background-color: var(--blue4);
  margin-top: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
