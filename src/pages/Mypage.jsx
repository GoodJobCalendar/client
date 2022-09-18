import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { getCookie, deleteCookie } from "../shared/Cookie";
// css
import styled from "styled-components";
import backBtn from "../assets/img/icon/Back.svg";
import mypagebird from "../assets/img/illust/mypagebird.svg"
import mypagebird2 from "../assets/img/illust/mypagebird2.svg"



const Mypage = () => {
  const myToken = getCookie("token");
  const navigate = useNavigate()
  const [num, setNum] = useState(0)
  
  return (
    <>
    <MyNavWrap>
      <MyBack 
       onClick={()=>{
        navigate(-1)
      }}
      src={backBtn}/>
      <MyTitle>마이페이지</MyTitle>
      {num===0? 
      <>
      <MyImg src={mypagebird2}></MyImg>
      {/* <MyNotice>아직 찜해둔 공고 리스트가 없군요!</MyNotice> */}
      <MyBubble style={{width:"162px", left:"105px"}}
       onClick={()=>{
        navigate("/Job")
      }}
      > <span style={{fontWeight:"700", marginLeft:"3px", color:"var(--blue4)"}}
      >채용공고 담으러 가기</span></MyBubble>
      {/* <MyTri src={Triangle}/> */}
      </>
      :
      <>
      <MyImg src={mypagebird}></MyImg>
      {/* <MyNotice>찜해둔 공고 리스트를 확인해보세요!</MyNotice> */}
      <MyBubble
       onClick={()=>{
        navigate("/Zzim")
      }}
      >총 {num}개 <span style={{fontWeight:"700", marginLeft:"3px", color:"var(--blue4)"}}>보러가기</span></MyBubble>
      {/* <MyTri src={Triangle}/> */}
      </>
      }
      
    </MyNavWrap> 
    <Outer>
      <PersonalInfo>
        <PersonalTitle>Email</PersonalTitle>
        <Email>daisy_com@kakao.com</Email>
        <PersonalTitle style={{marginTop:"16px"}}>비밀번호</PersonalTitle>
        <ModiWrap>
          <ModifyDate>비밀번호 바꾼지<p
          style={{color:"var(--blue4)", margin:"0 10px"}}
          >6개월</p> 이 지났어요!</ModifyDate>
          <ModifyBtn
          onClick={()=>{
            navigate("/pwChange")
          }}
          >수정</ModifyBtn>
        </ModiWrap>
        <LogoutBtn onClick={()=>{
          deleteCookie("token")
          navigate("/")
        }}>로그아웃</LogoutBtn>
      </PersonalInfo>
    </Outer>
    <Footer/>
    </>
  );
};

export default Mypage;

const Outer = styled.div`
  background-color: var(--blue1);
  height: 40.2vh;
`;

const PersonalInfo =styled.div`
  width: 90%;
  height: 256px;
  margin: auto;
  padding: 54px 0 0 0;
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
  height: 48px;
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
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 12.0999px;
  color: white;
  letter-spacing: 1px;
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
  top: 57px;
  left: 118px;
  box-shadow: 0px 3px 9px rgba(52, 46, 45, 0.468);
  cursor: pointer;
  &::after{
    border-top: 13px solid white;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 35px;
    /* left: 0%; */
  }
`

const MyNavWrap = styled.div`
  width: 100%;
  height: 20vh;
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
