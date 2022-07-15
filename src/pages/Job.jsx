import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import location from "../assets/img/icon/Location.png";
import Nav from "../componenets/Nav";

const Job = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <TeamNameList>
        <UpdateTime>2022년 7월 12일 업데이트 됨</UpdateTime>
        <FilterBtn onClick={() => navigate("/jobCategory")}>
          추천 조건
        </FilterBtn>
      </TeamNameList>

      <JobCard onClick={() => navigate("/jobDetail")}>
        <EndDateBox>
          <EndDate>마감일</EndDate>
          <EndTime>22.07.19</EndTime>
        </EndDateBox>
        <CompanyName>터크코리아</CompanyName>
        <JobTitle>(주) 터크코리아 영업지원 신입/경력 직원 채용</JobTitle>
        <JobTagsWrap>
          <JobTags>신입</JobTags>
          <JobTags>중소기업</JobTags>
          <JobTags>학력무관</JobTags>
        </JobTagsWrap>
        <JobAdrress>
          <AdrressImg src={location} />
          경기도 광명시 외
        </JobAdrress>
      </JobCard>

      <JobCard>
        <EndDateBox>
          <EndDate>마감일</EndDate>
          <EndTime>22.07.19</EndTime>
        </EndDateBox>
        <CompanyName>터크코리아</CompanyName>
        <JobTitle>(주) 터크코리아 영업지원 신입/경력 직원 채용</JobTitle>
        <JobTagsWrap>
          <JobTags>신입</JobTags>
          <JobTags>중소기업</JobTags>
          <JobTags>학력무관</JobTags>
        </JobTagsWrap>
        <JobAdrress>
          <AdrressImg src={location} />
          경기도 광명시 외
        </JobAdrress>
      </JobCard>

      <JobCard>
        <EndDateBox>
          <EndDate>마감일</EndDate>
          <EndTime>22.07.19</EndTime>
        </EndDateBox>
        <CompanyName>터크코리아</CompanyName>
        <JobTitle>(주) 터크코리아 영업지원 신입/경력 직원 채용</JobTitle>
        <JobTagsWrap>
          <JobTags>신입</JobTags>
          <JobTags>중소기업</JobTags>
          <JobTags>학력무관</JobTags>
        </JobTagsWrap>
        <JobAdrress>
          <AdrressImg src={location} />
          경기도 광명시 외
        </JobAdrress>
      </JobCard>
    </>
  );
};

const TeamNameList = styled.div`
  height: 14px;
  display: inline-block;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
`;

const UpdateTime = styled.p`
  float: left;
`;

const FilterBtn = styled.p`
  cursor: pointer;
`;

const JobCard = styled.div`
  width: 343px;
  height: 137px;
  background: #f3f2b1;
  border-radius: 15px;
  margin: 5px auto 20px;
  position: relative;
  cursor: pointer;
`;

const EndDateBox = styled.div`
  width: 120px;
  height: 25px;
  position: absolute;
  margin-top: -10px;
  text-align: center;
  line-height: 25px;
  border-radius: 15px;
  right: 0;
`;

const EndDate = styled.div`
  width: 40px;
  display: inline-block;
  float: left;
  background: gray;
  border-radius: 15px;
  font-weight: 700;
  font-size: 12px;
  color: white;
  position: relative;
  z-index: 3;
`;

const EndTime = styled.div`
  width: 90px;
  height: 25px;
  display: inline-block;
  background: white;
  border-radius: 0 15px 15px 0;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  z-index: 2;
  margin-left: -10px;
`;

const CompanyName = styled.div`
  width: 100%;
  height: 50px;
  line-height: 70px;
  font-weight: 500;
  font-size: 14px;
  color: #9a9a9a;
  padding-left: 20px;
`;

const JobTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #111111;
  margin-bottom: 10px;
  padding-left: 20px;
`;

const JobTagsWrap = styled.div`
  display: flex;
  float: right;
  margin: 0 10px 10px 0;
`;

const JobTags = styled.div`
  width: auto;
  height: 18px;
  padding: 0px 5px;
  background: orange;
  margin-right: 5px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 20px;
`;

const JobAdrress = styled.div`
  display: flex;
  gap: 5px;
  width: 200px;
  height: 18px;
  align-items: center;
  padding-left: 60%;
  font-weight: 500;
  font-size: 16px;
`;

const AdrressImg = styled.img``;

export default Job;
