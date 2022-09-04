import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import { getCookie } from "../shared/Cookie";
import backBtn from "../assets/img/icon/Back.svg";
import mypagebird from "../assets/img/illust/mypagebird.svg"
import Triangle from "../assets/img/icon/Triangle.svg"

const Mypage = () => {
  const myToken = getCookie("token");
  
  return (
    <>
    <MyNavWrap>
      <MyBack src={backBtn}/>
      <MyTitle>마이페이지</MyTitle>
      <MyImg src={mypagebird}></MyImg>
      <MyNotice>찜해둔 공고 리스트를 확인해보세요!</MyNotice>
      <MyBubble>총 24개 <span style={{fontWeight:"700", marginLeft:"3px", color:"var(--blue4)"}}>보러가기</span></MyBubble>
      <MyTri src={Triangle}/>
    </MyNavWrap> 
    <Outer>
      <PersonalInfo>
        <PersonalTitle>Email</PersonalTitle>
        <Email>daisy_com@kakao.com</Email>
        <PersonalTitle style={{marginTop:"16px"}}>비밀번호</PersonalTitle>
        <ModiWrap>
          <ModifyDate><p
          style={{color:"var(--blue4)", marginRight:"10px"}}
          >최종 수정일</p> 2018.08.06</ModifyDate>
          <ModifyBtn>수정</ModifyBtn>
        </ModiWrap>
        <LogoutBtn>로그아웃</LogoutBtn>
      </PersonalInfo>
    </Outer>
    <Footer/>
    </>
  );
};

export default Mypage;

const Outer = styled.div`
  background-color: var(--blue1);
  height: 320px;
`;

const PersonalInfo =styled.div`
  width: 90%;
  height: 256px;
  margin: auto;
  padding: 24px 0 0 0;
`

const PersonalTitle =styled.div`
  font-weight: 500;
  font-size: 12px;
  color: var(--blue4);
  height: 22px;
`

const Email =styled.div`
  background-color: white;
  width: 313px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-weight: 500;
`
const ModiWrap =styled.div`
  display: flex;
  align-items: center;
`
const ModifyDate =styled.div`
  background-color: white;
  width: 250px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`
const ModifyBtn =styled.div`
  color: var(--blue3);
  width: 55px;
  height: 50px;
  border: 1px var(--blue3) solid;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-left: 6px;
`
const LogoutBtn =styled.div`
  /* width: 341px; */
  height: 54px;
  border: 1px var(--blue4) solid;
  background-color: var(--blue4) ;
  margin-top: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const MyTitle = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12.0999px;
  color: white;
`

const MyNotice = styled.div`
  position: absolute;
  top: 53px;
  left: 123px;
  transform: translate(-10%, 3%);
  font-size: 12px;
  color: white;
`

const MyBubble = styled.div`
  width: 139px;
  height: 35px;
  background-color: white;
  border-radius: 8px;
  color: var(--blue4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-weight: 500;
  top: 76px;
  left: 123px;
  box-shadow: 0px 3px 9px rgba(116, 160, 227, 0.14);
`

const MyNavWrap = styled.div`
  width: 100%;
  height: 187px;
  background-color: var(--blue4);
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
`;

const MyBack = styled.img`
  width: 16px;
  position: absolute;
  left: 4%;
  top: 8%
`
const MyTri = styled.img`
  width: 26px;
  position: absolute;
  bottom: 32%;
  left: 46%;
`

const MyImg = styled.img`
  width: 200px;
  height: 100px;
  position: absolute;
  bottom: 0;
  right: 50%;
  border: none;
  border-radius: 50%;
  transform: translate(50%, 3%);
`
