import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getCookie } from "../shared/Cookie";

import {
  loadJobList,
  loadCategoryList,
  loadJobDetails,
} from "../redux/modules/job";

import Nav from "../components/Nav";

import nextCursorBtn from "../assets/img/btn/nextCursor.png";
import previousCursorBtn from "../assets/img/btn/previousCursor.png";
import zzimbtn from "../assets/img/btn/ZzimBtn.svg";
import Tooltipmark from "../assets/img/icon/Tooltipmark.svg";

import InfiniteScroll from "react-infinite-scroll-component";

const Job = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobDataList = useSelector((state) => state.job.list.data);
  // const jobDataList = useSelector((state) => state.job.list?.postings);
  const nextCursor = useSelector((state) => state.job.list.nextCursor);
  const previousCursor = useSelector((state) => state.job.list.previousCursor);
  const page = useSelector((state) => state.job.page);

  // console.log(nextCursor);
  // console.log(page);

  const [pages, setpages] = useState();
  console.log("페이지는 = ", pages);
  // const [is_loading, setIs_loading] = useState(false);
  // const [hasMore, sethasMore] = useState(true);

  const getDataNext = () => {
    // let count = pages + 1;
    // if (jobDataList?.length < 10) {
    //   return window.alert("마지막 페이지 입니다");
    // }
    dispatch(loadJobList(nextCursor, 0));
    // setpages(nextCursor);
  };

  const getDataBefore = () => {
    // let count = pages - 1;
    // if (pages === 0) {
    //   return window.alert("첫페이지 입니다");
    // }
    dispatch(loadJobList(0, previousCursor));
    // setpages(pages);
  };

  const jobDataUpdate = useSelector((state) => state.job.list?.updatedAt);

  const navData = false;

  useEffect(() => {
    dispatch(loadJobList(previousCursor));
  }, []);

  // 무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한
  // 무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한무한

  return (
    <MainWrap>
      <Nav navData={navData} />
      <JobWrapper id="para">
        <Outer>
        <TeamNameList>
          <UpdateTime>{jobDataUpdate}</UpdateTime>
          <FilterBtn onClick={() => navigate("/jobCategory")}>
            추천 조건
          </FilterBtn>
        </TeamNameList>
        <Tooltip>
        <Tooltip2 src={Tooltipmark} />
          <Tooltipcontent>하트를 누르면 채용공고 찜 목록을 확인할 수 있어요!</Tooltipcontent>
        </Tooltip>
        </Outer>
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
            </JobCard>
          );
        })}
        {/* </CardWrapper> */}
        {/* </InfiniteScroll>
        </div> */}
        <div style={{ display: "flex", gap: "6px", padding: "20px" }}>
          <img src={previousCursorBtn} onClick={getDataBefore}></img>
          <img src={nextCursorBtn} onClick={getDataNext}></img>
        </div>
        <ZzimBtn src={zzimbtn} onClick={()=>{
          navigate("/zzim")
        }}/>
      </JobWrapper>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`

const ZzimBtn = styled.img`
  position: fixed;
  right: 16px;
  bottom: 4%;
  opacity: 90%;
  &:hover{
    cursor: pointer;
  }
`

const Tooltipcontent =styled.div`
  color: var(--blue2);
  font-size: 10px;
  display: none;
`
const Tooltip =styled.div`
  color: var(--blue2);
  display: flex;
  margin: 10px 0 ;
  align-items: center;
 
`
const Tooltip2 = styled.img`
 display: flex;
 margin: 0 8px 0 0;
 &:hover {
   ~div{
    display: block;
   }
  }
 
`
const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 34px);
  padding: 0 17px;
  height: calc(100vh - 122px);
  background: #ecf1f8;
  overflow-y: scroll;
`;

const CardWrapper = styled.div`
  height: 500px;
  margin-top: 10px;
  overflow-y: scroll;
`;

const TeamNameList = styled.div`
  width: 335px;
  height: 14px;
  display: flex;
  /* padding: 0px 24px 0 0; */
  display: flex;
  justify-content: space-between;
  margin: 24px 0 5px;
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
