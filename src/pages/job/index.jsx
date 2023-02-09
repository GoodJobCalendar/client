import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import nextCursorBtn from '../../assets/btn/nextCursor.png';
import previousCursorBtn from '../../assets/btn/previousCursor.png';
import zzimbtn from '../../assets/btn/ZzimBtn.svg';
import Tooltipmark from '../../assets/icon/Tooltipmark.svg';
import { loadJobList } from './../../modules/job';

const Job = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jobDataList = useSelector((state) => state.job.list.data);
  const nextCursor = useSelector((state) => state.job.list.nextCursor);
  const previousCursor = useSelector((state) => state.job.list.previousCursor);

  const getDataNext = () => {
    dispatch(loadJobList(nextCursor, 0));
  };

  const getDataBefore = () => {
    dispatch(loadJobList(0, previousCursor));
  };

  const jobDataUpdate = useSelector((state) => state.job.list?.updatedAt);

  useEffect(() => {
    (async () => {
      await dispatch(loadJobList(previousCursor));
    })();
  }, []);

  return (
    <MainWrap>
      <JobWrapper id='para'>
        <Outer>
          <TeamNameList>
            <UpdateTime>{jobDataUpdate}</UpdateTime>
            <FilterBtn onClick={() => navigate('/jobCategory')}>추천 조건</FilterBtn>
          </TeamNameList>
          <Tooltip>
            <Tooltip2 src={Tooltipmark} />
            <Tooltipcontent>하트를 누르면 채용공고 찜 목록을 확인할 수 있어요!</Tooltipcontent>
          </Tooltip>
        </Outer>
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

                <EndTime>
                  {tasksData.deadline.split(' ')[0] === '2122-01-01'
                    ? '상시채용'
                    : '~' + tasksData.deadline.split(' ')[0]}
                </EndTime>
              </DetailInfo>
            </JobCard>
          );
        })}
        {/* </CardWrapper> */}
        {/* </InfiniteScroll>
        </div> */}
        <div style={{ display: 'flex', gap: '6px', padding: '20px' }}>
          <img src={previousCursorBtn} onClick={getDataBefore} alt='버튼' />
          <img src={nextCursorBtn} onClick={getDataNext} alt='버튼' />
        </div>
        <ZzimBtn
          src={zzimbtn}
          onClick={() => {
            navigate('/zzim');
          }}
        />
      </JobWrapper>
    </MainWrap>
  );
};

export default Job;

const MainWrap = styled.div`
  position: relative;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ZzimBtn = styled.img`
  position: fixed;
  right: 16px;
  bottom: 4%;
  opacity: 90%;
  &:hover {
    cursor: pointer;
  }
`;

const Tooltipcontent = styled.div`
  color: ${(props) => props.theme.colors.blue2};
  font-size: 10px;
  display: none;
`;
const Tooltip = styled.div`
  color: ${(props) => props.theme.colors.blue2};
  display: flex;
  margin: 10px 0;
  align-items: center;
`;
const Tooltip2 = styled.img`
  display: flex;
  margin: 0 8px 0 0;
  &:hover {
    ~ div {
      display: block;
    }
  }
`;
const JobWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 17px;
  height: calc(100vh - 122px);
  background: #ecf1f8;
  overflow-x: hidden;
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
