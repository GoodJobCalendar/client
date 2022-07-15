import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const JobDetail = () => {

  const navigate = useNavigate();

  return (
    <>
      <CompanyWrap>
        <CompanyName>주식회사 터크코리아</CompanyName>
        <CompanySize>중소-중견기업</CompanySize>
      </CompanyWrap>

      <JobTitle>(주)터크코리아 영업사원 신입/경력 직원 채용</JobTitle>

      <Line />

      <JobInfo>
        <p>모집마감일자</p>
        <p>2022.07.19 (화)</p>
      </JobInfo>

      <JobInfo>
        <p>지원 자격</p>
        <p>경력</p>
      </JobInfo>

      <JobInfo>
        <p>직무</p>
        <p>영업</p>
      </JobInfo>

      <JobInfo>
        <p>지역</p>
        <p>경기도 광명시 외</p>
      </JobInfo>

      <BtnWrap>
        <BackBtn onClick={() => navigate("/job")}>관심없어요</BackBtn>
        <ScrapBtn>캘린더로 스크랩</ScrapBtn>
      </BtnWrap>

      <JobKoreabtn>
        자세한 공고 잡코리아에서 확인
      </JobKoreabtn>
    </>
  );
};

const CompanyWrap = styled.div`
  height: 20px;
  display : inline-block;
  padding : 12px 24px;
  display: flex;
  justify-content: space-between;
  line-height : 24px;
`

const CompanyName = styled.div`
  
`

const CompanySize = styled.div`
width : auto;
height : 20px;
padding : 0px 5px;
background: orange;
margin-right : 5px;
border-radius : 15px;
font-size: 14px;
line-height : 22px;
`

const JobTitle = styled.div`
display : inline-block;
padding : 12px 24px;
font-weight: 500;
font-size: 20px;
`

const Line = styled.hr`
width : 327px;
margin : 15px auto 26px;
`

const JobInfo = styled.div`
  height: 20px;
  display : inline-block;
  padding : 12px 24px;
  display: flex;
  justify-content: space-between;
  line-height : 24px;
`

const BtnWrap = styled.div`
  display: flex;
  padding : 12px 24px;
  justify-content: space-between;
  margin-top : 130px;
`

const BackBtn = styled.div`
  width : 156px;
  height : 54px;
  background: #9A9A9A;
  border-radius: 6px;
  text-align : center;
  line-height : 54px;
  cursor : pointer;
`

const ScrapBtn = styled.div`
  width : 156px;
  height : 54px;
  background: #9A9A9A;
  border-radius: 6px;
  text-align : center;
  line-height : 54px;
  cursor : pointer;
`

const JobKoreabtn = styled.div`
  width : 331px;
  height : 54px;
  margin : auto;
  background: #9A9A9A;
  border-radius: 6px;
  text-align : center;
  line-height : 54px;
  cursor : pointer;
`

export default JobDetail;