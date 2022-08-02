import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCookie } from "../shared/Cookie";

import { loadJobList, loadCategoryList, loadJobDetails } from "../redux/modules/job";

import Nav from "../componenets/Nav";

import location from "../assets/img/icon/Location.png";

import InfiniteScroll from "react-infinite-scroll-component";

const Job = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const jobDataList = useSelector((state) => state.job.list);
  // const jobDataList = useSelector((state) => state.job.list?.postings);
  const jobDataList1 = useSelector((state) => state.job.list);
  const page = useSelector((state) => state.job.page);

  console.log(jobDataList);
  // console.log(page);

  const [pages, setpages] = useState(page);
  // console.log("페이지는 = ", pages);
  // const [is_loading, setIs_loading] = useState(false);
  // const [hasMore, sethasMore] = useState(true);

  const getDataNext = () => {
    let count = pages + 1;
    if (jobDataList?.length < 10) {
      return window.alert("마지막 페이지 입니다");
    }
    dispatch(loadJobList(count));
    setpages(count);
  };

  const getDataBefore = () => {
    let count = pages - 1;
    if (pages === 0) {
      return window.alert("첫페이지 입니다");
    }
    dispatch(loadJobList(count));
    setpages(count);
  };

  const jobDataUpdate = useSelector((state) => state.job.list?.updatedAt);

  const navData = false;

  useEffect(() => {
    dispatch(loadJobList(page));
  }, []);

  // 무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한
  // 무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한

  return (
    <MainWrap>
      <Nav navData={navData} />

      <JobWrapper id="para">
        <TeamNameList>
          <UpdateTime>{jobDataUpdate}</UpdateTime>
          <FilterBtn onClick={() => navigate("/jobCategory")}>추천 조건</FilterBtn>
        </TeamNameList>
        {/* <div
          id="scrollableDiv"
          style={{
            height: "auto",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column-reverse",
          }}
        >
          <InfiniteScroll
            dataLength={10}
            // scrollThreshold="0.9"
            next={getData}
            hasMore={hasMore}
            scrollableTarget="scrollableDiv"
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <CardWrapper> */}
        {jobDataList?.map((tasksData, idx) => {
          return (
            <JobCard key={idx} onClick={() => navigate(`/jobDetail/${tasksData.id}`)}>
              <CompanyName>{tasksData.companyName}</CompanyName>
              <JobTitle>{tasksData.title}</JobTitle>
              <DetailInfo>
                <JobTagsWrap>
                  <JobTags>{tasksData.career}</JobTags>
                  <JobTags>{tasksData.companyType}</JobTags>
                </JobTagsWrap>

                <EndTime>{tasksData.deadline.split(" ")[0] === "2122-01-01" ? "상시채용" : "~" + tasksData.deadline.split(" ")[0]}</EndTime>
              </DetailInfo>
            </JobCard>
          );
        })}
        {/* </CardWrapper> */}
        {/* </InfiniteScroll>
        </div> */}
        <div style={{ display: "flex", gap: "60px", padding: "20px" }}>
          <button onClick={getDataBefore}>이전</button>
          <button onClick={getDataNext}>다음</button>
        </div>
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
  align-items: center;
  width: calc(100% - 34px);
  padding: 0 17px;
  height: calc(100vh - 158px);
  background: #ecf1f8;
  overflow-y: scroll;
`;

const CardWrapper = styled.div`
  height: 500px;
  margin-top: 10px;
  overflow-y: scroll;
`;

const TeamNameList = styled.div`
  width: 100%;
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
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #777777;
  margin-bottom: 3px;
`;

const JobTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #111111;
  margin-bottom: 16px;
  width: 300px;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
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

{
  /* <div>
{jobDataList?.map((tasksData, idx) => {
  return (
    <JobCard key={idx} onClick={() => navigate(`/jobDetail/${tasksData.postingId}`)}>
      <CompanyName>{tasksData.companyName}</CompanyName>
      <JobTitle>{tasksData.title}</JobTitle>
      <DetailInfo>
        <JobTagsWrap>
          <JobTags>{tasksData.career}</JobTags>
          <JobTags>{tasksData.companyType}</JobTags>
        </JobTagsWrap>

        <EndTime>{tasksData.deadline.split(" ")[0] === "2122-01-01" ? "상시채용" : "~" + tasksData.deadline.split(" ")[0]}</EndTime>
      </DetailInfo>
    </JobCard>
  );
})}
</div> */
}
