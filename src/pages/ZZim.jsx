import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backBtn from '../assets/icon/Back.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import Pagination from '../components/Pagination';
import jobApi from '../apis/job';

const ZZim = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(false);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

  // 스크랩목록
  useEffect(() => {
    const getZzim = async () => {
      const condition = 'scrapping';
      const orderBy = 'asc';
      await jobApi.getLikeList(condition, orderBy).then((res) => {
        setList(res.data.data);
        setTotalPage(Math.ceil(list?.length / postPerPage));
      });
    };
    getZzim();
  }, []);

  const getZzim1 = async () => {
    const condition = 'scrapping';
    const orderBy = 'asc';
    await jobApi.getLikeList(condition, orderBy).then((res) => {
      setList(res.data.data);
      setTotalPage(Math.ceil(list?.length / postPerPage));
      setToggle(false);
    });
  };

  const getZzimDead = async () => {
    const condition = 'deadline';
    const orderBy = 'asc';
    await jobApi.getLikeList(condition, orderBy).then((res) => {
      setList(res.data.data);
      setTotalPage(Math.ceil(list?.length / postPerPage));
    });
  };

  return (
    <MainWrapper>
      <UpBar>
        <BackBtn src={backBtn} onClick={() => navigate(-1)} />
        <Main>공고찜</Main>
      </UpBar>
      <MiddleButton>
        <Scrap toggle={toggle} onClick={getZzim1}>
          스크랩순
        </Scrap>
        <div style={{ color: `var(--gray3)` }}>|</div>
        <Deadline
          toggle={toggle}
          onClick={() => {
            setToggle(true);
            getZzimDead();
          }}
        >
          날짜순
        </Deadline>
      </MiddleButton>
      <JobCardWrap>
        {currentPosts?.map((tasksData, idx) => {
          return (
            <JobCard key={idx} onClick={() => navigate(`/jobDetail/${tasksData.id}`)}>
              <CompanyName>{tasksData.companyName}</CompanyName>
              <JobTitle>{tasksData.title}</JobTitle>
              <DetailInfo>
                <JobTagsWrap>
                  <JobTags>{tasksData.career.type}</JobTags>
                  <JobTags>{tasksData.companyType.type}</JobTags>
                </JobTagsWrap>

                <EndTime>
                  {tasksData.deadline.split('T')[0] === '2121-12-31'
                    ? '상시채용'
                    : '~' + tasksData.deadline.split('T')[0]}
                </EndTime>
              </DetailInfo>
            </JobCard>
          );
        })}
      </JobCardWrap>
      <BottomWrap>
        <Pagination postPerPage={postPerPage} totalPosts={list?.length} setCurrentPage={setCurrentPage} />
      </BottomWrap>
    </MainWrapper>
  );
};

export default ZZim;

const MainWrapper = styled.div`
  background-color: var(--blue1);
  height: 100vh;
  overflow: hidden;
`;

const UpBar = styled.div`
  height: 56px;
  background: #3284ff;
  display: flex;
  position: fixed;
  width: 100%;
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

const MiddleButton = styled.div`
  display: flex;
  width: 113px;
  padding: 24px 16px 24px 256px;
  margin-top: 56px;
  gap: 8px;
  div {
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }
`;

const Scrap = styled.div`
  color: ${(props) => (props.toggle ? `var(--gray4)` : `var(--blue4)`)};
`;
const Deadline = styled.div`
  color: ${(props) => (props.toggle ? `var(--blue4)` : `var(--gray3)`)};
`;

const JobCardWrap = styled.div`
  height: 80vh;
  /* border: 1px red solid; */
  overflow-y: scroll;
`;

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

const BottomWrap = styled.div`
  position: fixed;
  width: 100%;
  /* height: 5vh; */
  /* border: 1px red solid; */
`;
