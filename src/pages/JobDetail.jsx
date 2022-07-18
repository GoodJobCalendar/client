import React, { useEffect } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { loadJobList, loadCategoryList, loadJobDetails } from "../redux/modules/job";

const JobDetail = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const params = useParams();

  const id = params.id;

  useEffect(() => {
    dispatch(loadJobDetails(id));
  }, []); 

  const jobDetail = useSelector((state) => state.job.details.data);

  console.log(jobDetail);

  return (
    <>
      <CompanyWrap>
        <CompanyName>{jobDetail.companyName}</CompanyName>
        <CompanySize>{jobDetail.companyType}</CompanySize>
      </CompanyWrap>

      <JobTitle>{jobDetail.title}</JobTitle>

      <Line />

      <JobInfo>
        <p>모집마감일자</p>
        <p>{jobDetail.deadline.split(" ")[0]}</p>
      </JobInfo>

      <JobInfo>
        <p>지원 자격</p>
        <p>{jobDetail.career}</p>
      </JobInfo>

      <JobInfo>
        <p>직무</p>
        <p>{jobDetail.job}</p>
      </JobInfo>

      <JobInfo>
        <p>지역</p>
        <p>{jobDetail.city}</p>
      </JobInfo>

      <BtnWrap>
        <BackBtn onClick={() => navigate("/job")}>관심없어요</BackBtn>
        <ScrapBtn>캘린더로 스크랩</ScrapBtn>
      </BtnWrap>

      <JobKoreabtn href = {jobDetail.url}>
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