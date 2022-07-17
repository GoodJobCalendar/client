// import React, { useEffect } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { loadJobList, loadCategoryList } from "../redux/modules/job";

// import location from "../assets/img/icon/Location.png";
// import Nav from "../componenets/Nav";

// const Job = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(loadJobList());
//   }, []);

//   const jobDataList = useSelector((state) => state.job.list?.data);

//   console.log(jobDataList);

//   // const Time = jobDataList.deadline.split(' ')[0]

//   return (
//     <>
//       <Nav />
//       <TeamNameList>
//         <UpdateTime>2022년 7월 12일 업데이트 됨</UpdateTime>
//         <FilterBtn onClick={() => navigate("/jobCategory")}>
//           추천 조건
//         </FilterBtn>
//       </TeamNameList>

//       {jobDataList?.map((tasksData, idx) => {
//         return (
//           <JobCard onClick={() => navigate("/jobDetail")}>
//             <EndDateBox>
//               <EndDate>마감일</EndDate>
//               <EndTime>{tasksData.deadline.split(" ")[0]}</EndTime>
//             </EndDateBox>
//             <CompanyName>{tasksData.companyName}</CompanyName>
//             <JobTitle>{tasksData.title}</JobTitle>
//             <JobTagsWrap>
//               <JobTags>{tasksData.career}</JobTags>
//               <JobTags>{tasksData.companyType}</JobTags>
//               {/* <JobTags>학력무관</JobTags> */}
//             </JobTagsWrap>
//             <JobAdrress>
//               <AdrressImg src={location} />
//               {tasksData.city}
//             </JobAdrress>
//           </JobCard>
//         );
//       })}
//     </>
//   );
// };

// const TeamNameList = styled.div`
//   height: 14px;
//   display: inline-block;
//   padding: 12px 24px;
//   display: flex;
//   justify-content: space-between;
// `;

// const UpdateTime = styled.p`
//   float: left;
// `;

// const FilterBtn = styled.p`
//   cursor: pointer;
// `;

// const JobCard = styled.div`
//   width: 343px;
//   height: 137px;
//   background: #f3f2b1;
//   border-radius: 15px;
//   margin: 5px auto 20px;
//   position: relative;
//   cursor: pointer;
// `;

// const EndDateBox = styled.div`
//   width: 120px;
//   height: 25px;
//   position: absolute;
//   margin-top: -10px;
//   text-align: center;
//   line-height: 25px;
//   border-radius: 15px;
//   right: 0;
// `;

// const EndDate = styled.div`
//   width: 40px;
//   display: inline-block;
//   float: left;
//   background: gray;
//   border-radius: 15px;
//   font-weight: 700;
//   font-size: 12px;
//   color: white;
//   position: relative;
//   z-index: 3;
// `;

// const EndTime = styled.div`
//   width: 90px;
//   height: 25px;
//   display: inline-block;
//   background: white;
//   border-radius: 0 15px 15px 0;
//   font-weight: 500;
//   font-size: 12px;
//   position: relative;
//   z-index: 2;
//   margin-left: -10px;
// `;

// const CompanyName = styled.div`
//   width: 100%;
//   height: 50px;
//   line-height: 70px;
//   font-weight: 500;
//   font-size: 14px;
//   color: #9a9a9a;
//   padding-left: 20px;
// `;

// const JobTitle = styled.div`
//   height: 20px;
//   font-weight: 500;
//   font-size: 16px;
//   color: #111111;
//   margin-bottom: 10px;
//   padding-left: 20px;
// `;

// const JobTagsWrap = styled.div`
//   display: flex;
//   float: right;
//   margin: 0 10px 10px 0;
// `;

// const JobTags = styled.div`
//   width: auto;
//   height: 18px;
//   padding: 0px 5px;
//   background: orange;
//   margin-right: 5px;
//   border-radius: 15px;
//   font-size: 14px;
//   line-height: 20px;
// `;

// const JobAdrress = styled.div`
//   display: flex;
//   gap: 5px;
//   width: 200px;
//   height: 18px;
//   align-items: center;
//   padding-left: 60%;
//   font-weight: 500;
//   font-size: 16px;
// `;

// const AdrressImg = styled.img``;

// export default Job;
