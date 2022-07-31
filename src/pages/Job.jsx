import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  loadJobList,
  loadCategoryList,
  loadJobDetails,
} from "../redux/modules/job";

import Nav from "../componenets/Nav";

import location from "../assets/img/icon/Location.png";

const Job = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const jobDataList = useSelector((state) => state.job.list?.data);

  const jobDataUpdate = useSelector((state) => state.job.list?.updatedAt);

  const navData = false;

  useEffect(() => {
    dispatch(loadJobList());
  }, []);

  return (
    <MainWrap>
      <Nav navData={navData} />

      <JobWrapper>
        <TeamNameList>
          <UpdateTime>{jobDataUpdate}</UpdateTime>
          <FilterBtn onClick={() => navigate("/jobCategory")}>
            추천 조건
          </FilterBtn>
        </TeamNameList>

        {jobDataList?.map((tasksData, idx) => {
          return (
            // <JobCard onClick={() => {console.log(tasksData.postingId)}}>
            <JobCard
              key={idx}
              onClick={() => navigate(`/jobDetail/${tasksData.postingId}`)}
            >
              <CompanyName>{tasksData.companyName}</CompanyName>
              <JobTitle>{tasksData.title}</JobTitle>
              <DetailInfo>
                <JobTagsWrap>
                  <JobTags>{tasksData.career}</JobTags>
                  <JobTags>{tasksData.companyType}</JobTags>
                </JobTagsWrap>

                <EndTime>
                  {tasksData.deadline.split(" ")[0] === "2122-01-01"
                    ? "상시채용"
                    : "~" + tasksData.deadline.split(" ")[0]}
                </EndTime>
              </DetailInfo>
              {/* <JobAdrress>
              <AdrressImg src={location} />
              {tasksData.city}
            </JobAdrress> */}
            </JobCard>
          );
        })}
      </JobWrapper>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
`;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #ecf1f8;
  overflow: hidden;
  overflow-y: scroll;
`;

const TeamNameList = styled.div`
  height: 14px;
  display: inline-block;
  padding: 0px 24px;
  display: flex;
  justify-content: space-between;
  margin: 44px 0 31px;
`;

const UpdateTime = styled.p`
  float: left;
  font-weight: 600;
  font-size: 14px;
  color: #74a0e3;
`;

const FilterBtn = styled.p`
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  color: #3284ff;
`;

const JobCard = styled.div`
  width: 302px;
  height: 74px;
  background: white;
  border-radius: 15px;
  margin: 6px auto;
  cursor: pointer;
  padding: 21px 22px 20px 19px;
`;

const EndTime = styled.div`
  height: 14px;
  font-weight: 500;
  font-size: 12px;
  color: #74a0e3;
`;

const CompanyName = styled.div`
  width: 307px;
  height: 19px;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #777777;
  margin-bottom: 3px;
`;

const JobTitle = styled.div`
  height: 22px;
  font-weight: 500;
  font-size: 16px;
  color: #111111;
  margin-bottom: 16px;
`;

const DetailInfo = styled.div`
  height: 14px;
  display: inline-block;
  display: flex;
  justify-content: space-between;
`;

const JobTagsWrap = styled.div`
  display: flex;
  margin-left: 2px;
`;

const JobTags = styled.div`
  width: auto;
  height: 14px;
  font-weight: 500;
  font-size: 12px;
  margin-right: 8px;
  color: #9a9a9a;
`;

export default Job;
