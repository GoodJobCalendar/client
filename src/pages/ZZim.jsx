import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backBtn from "../assets/img/icon/Back.svg";
import nextCursorBtn from "../assets/img/btn/nextCursor.png";
import previousCursorBtn from "../assets/img/btn/previousCursor.png";
import { useEffect } from 'react';
import axios from 'axios';
import { getCookie } from '../shared/Cookie';
import { useState } from 'react';
import { api } from '../shared/api';
import Pagination from '../components/Pagination';

const ZZim = () => {
  const navigate = useNavigate()
  const [list, setList] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);
  console.log(totalPage)

  const paginate = currentPage;

  // 스크랩목록
  useEffect(()=>{
    const myToken = getCookie("token");
    const getZzim = async() =>{
      const head = {
        headers: {Authorization: `Bearer ${myToken}`}
      }
      await axios.get("https://goodjobcalendar.shop/api/posting/likes",head)
                .then((res)=>{
                  console.log(res.data.data)
                  setList(res.data.data)
                  setTotalPage(Math.ceil(list?.length / postPerPage))
                  
                })
    }
    getZzim()
  },[])


  return (
    <MainWrapper>
      <UpBar>
        <BackBtn src={backBtn} onClick={() => navigate(-1)} />
        <Main>
          공고찜
        </Main>
      </UpBar>
      <MiddleButton>
        <div style={{color:"var(--blue4)"}}
        >스크랩순</div>
        <div>|</div>
        <div
        onClick={()=>{
          alert("준비중인 기능입니다.")
        }}
        >날짜순</div>
      </MiddleButton>
    {currentPosts?.map((tasksData, idx)=>{
      return(
        <JobCard
              key={idx}
              onClick={() => navigate(`/jobDetail/${tasksData.id}`)}
            >
              <CompanyName>{tasksData.companyName}</CompanyName>
              <JobTitle>{tasksData.title}</JobTitle>
              <DetailInfo>
                <JobTagsWrap>
                  <JobTags>{tasksData.career.type}</JobTags>
                  <JobTags>{tasksData.companyType.type}</JobTags>
                </JobTagsWrap>

                <EndTime>
                {tasksData.deadline.split(" ")[0] === "2122-01-01"
                    ? "상시채용"
                    : "~" + tasksData.deadline.split("T")[0]}
                </EndTime>
              </DetailInfo>
            </JobCard>
      )
    })} 
    <Pagination
        postPerPage={postPerPage}
        totalPosts={list?.length}
        setCurrentPage={setCurrentPage}
      />
      

      
    </MainWrapper>
  )
}

export default ZZim

const MainWrapper = styled.div`
  background-color: var(--blue1);
  height: 100vh;
  overflow: hidden;

`;

const UpBar = styled.div`
  height: 56px;
  background: #3284ff;
  display: flex;
  position: relative;
`;

const BackBtn = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
  position: fixed;
  left: 4%;
  top: 20px;
`;

const Main = styled.div`
  font-weight: 700;
  color: #ffffff;
  margin: auto;
  font-size: 12.1px;
  letter-spacing: 1px;
`;

const MiddleButton =styled.div`
  display: flex;
  width: 113px;
  padding: 24px 16px 24px 256px; 
  gap: 8px;
  div{
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    color: var(--gray3);
  }
`

const BottomBox =styled.div`
  position: fixed;
  bottom: 30px;
  left: 23px;
`

const JobCard = styled.div`
  background: white;
  border-radius: 15px;
  margin: 6px auto;
  cursor: pointer;
  padding: 21px 22px 20px 19px;
  width: 302px;
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

const EndTime = styled.div`
  height: 14px;
  font-weight: 500;
  font-size: 12px;
  color: #74a0e3;
`;