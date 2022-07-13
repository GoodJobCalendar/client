import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const JobCategory = () => {

  const navigate = useNavigate();

  const [taskToggle, setTaskToggle] = React.useState(false);
  const [workAreaToggle, setworkAreaToggle] = React.useState(false);

  const tasks = [
    "경영/사무",
    '마케팅/광고/홍보',
    'IT/인터넷',
    '무역/유통',
    '영업/고객상담',
    '서비스',
    '디자인',
    '연구개발/설계',
    '교육',
    '건설',
    '의료',
    '미디어'
  ]

  const workArea = [
    '서울', '세종', '광주','대구','부산','제주','경기','충남','전남','경북','울산','강원','인천','대전','충북','전북','경남','전국'
  ]

  const careers = [
    '신입', '경력', '경력무관'
  ]

  const CompanyType = [
    '대기업', '중소/중견기업', '외국계기업', '공기업'
  ]

  const [categoryData, setCategoryData] = React.useState({
    'job1' : '',
    'job2' : [],
    'city1' : '',
    'city2' : [],
    'career' : '',
    'companyType' : [],
  })

  console.log(categoryData)

  return (
    <>
      <UpBar>
        <div onClick={() => navigate("/job")}>뒤로가기</div>
        <div>저장</div>
      </UpBar>

      <CategoryTap>
        <div onClick={() => setTaskToggle(!taskToggle)}>직무</div>
        {
          taskToggle === false
          ? 
            <></>
          :
              tasks.map((tasksData, idx)=>{
                return(
                  <JobTags key={idx} onClick={
                    () => setCategoryData({ ...categoryData, 'job1' : tasksData })
                  }>{tasksData}</JobTags>
                )
              })
        }
      </CategoryTap>

      <CategoryTap>
        <div onClick={() => setworkAreaToggle(!workAreaToggle)}>근무지역</div>
        {
          workAreaToggle === false
          ? 
            <></>
          :         
            workArea.map((workAreaData, idx)=>{
              return(
                <JobTags key={idx} onClick={
                  () => setCategoryData({ ...categoryData, 'city1' : workAreaData })
                }>{workAreaData}</JobTags>
              )
            })
        }
      </CategoryTap>

      <CategoryTap>
        <div>경력</div>
          {
            careers.map((careersData, idx)=>{
              return(
                <JobTags key={idx} onClick={
                  () => setCategoryData({ ...categoryData, 'career' : careersData })
                }>{careersData}</JobTags>
              )
            })
          }
      </CategoryTap>

      <CategoryTap>
        <div>기업형태</div>
        {  
            CompanyType.map((CompanyTypeData, idx)=>{
              return(
                <JobTags key={idx} onClick={
                  () => setCategoryData({ ...categoryData, 'companyType' : [CompanyTypeData] })
                }>{CompanyTypeData}</JobTags>
              )
            })
        }
      </CategoryTap>
    </>
  );
};

const UpBar = styled.div`
  display : inline-block;
  padding : 12px 24px;
  display: flex;
  justify-content: space-between;
`

const CategoryTap = styled.div`
  padding : 12px 24px;
`

const JobTagsWrap = styled.div`
  display : inline-block;
  float : right;
  margin : 0 10px 10px 0;
`

const JobTags = styled.div`
  width : auto;
  height : 18px;
  display : inline-block;
  padding : 2px 8px;
  background: orange;
  margin : 5px;
  border-radius : 15px;
  font-size: 14px;
  line-height : 20px;
`

export default JobCategory;