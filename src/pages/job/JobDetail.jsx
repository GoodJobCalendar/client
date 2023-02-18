import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { loadJobDetails, addScrap, addLike, deleteLike } from '../../modules/job';

import buttonText from '../../assets/btn/buttonText.png';
import back from '../../assets/icon/Back.svg';
import msg from '../../assets/btn/msg.svg';
import backbird from '../../assets/illust/JobDetailBird.svg';
import alwaysBird from '../../assets/illust/notfound.svg';
import Tooltipmark from '../../assets/icon/Tooltipmark.svg';

const JobDetail = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();
  const id = params.id;

  const jobDetail = useSelector((state) => state.job.details.data);
  const [deadDate, setDeadDate] = useState(`${jobDetail?.deadline}`);

  useEffect(() => {
    dispatch(loadJobDetails(id));
  }, [id]);

  function getDate(whatDay) {
    //날짜문자열 형식은 자유로운 편

    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const dayOfWeek = week[new Date(whatDay).getDay()];

    return dayOfWeek;
  }

  const [sangsi, setSangsi] = React.useState(false);

  return (
    <>
      <MainWrap sangsi={sangsi}>
        <Header>
          <MyBack
            onClick={() => {
              navigate(-1);
            }}
            src={back}
          />
        </Header>
        <MainWrapper>
          <Tooltip>
            <Tooltip2 src={Tooltipmark} />
          </Tooltip>
          <CompanyWrap>
            <CompanyName>{jobDetail?.companyName}</CompanyName>
            <CompanySize>{jobDetail?.companyType}</CompanySize>
          </CompanyWrap>
          <JobTitle>{jobDetail?.title}</JobTitle>

          <Line />
          <JobInfoFlex>
            <JobInfo>
              <InfoTitle>모집마감일자</InfoTitle>
              <InfoDetails style={{ fontWeight: '800' }}>
                {jobDetail?.deadline.split(' ')[0] === '2122-01-01'
                  ? '상시채용'
                  : jobDetail?.deadline.split(' ')[0] + ' ' + '(' + getDate(jobDetail?.deadline.split(' ')[0]) + ')'}
              </InfoDetails>
            </JobInfo>

            <JobInfo>
              <InfoTitle>지원 자격</InfoTitle>
              <InfoDetails>{jobDetail?.career}</InfoDetails>
            </JobInfo>

            <JobInfo>
              <InfoTitle>직무</InfoTitle>
              <InfoDetails>{jobDetail?.job[0]}</InfoDetails>
            </JobInfo>

            <JobInfo>
              <InfoTitle>지역</InfoTitle>
              <InfoDetails>{jobDetail?.city}</InfoDetails>
            </JobInfo>
          </JobInfoFlex>
          <BackWrap>
            <BackBird src={backbird}></BackBird>
          </BackWrap>
          <BtnWrap>
            <ZimmbtnWarp>
              {jobDetail?.isLike ? (
                <>
                  <MsgText1 to='/zzim'>
                    <p>
                      <span>스크랩한 모든 공고</span>를
                      <br />
                      확인해보세요!
                    </p>
                  </MsgText1>
                  <MsgImg1 src={msg} alt='캘린더로 스크랩' />
                  <BackBtn
                    scrap={jobDetail?.isLike}
                    onClick={() => {
                      dispatch(deleteLike(id));
                    }}
                  >
                    채용공고 찜
                  </BackBtn>
                </>
              ) : (
                <BackBtn
                  scrap={jobDetail?.isLike}
                  onClick={() => {
                    dispatch(addLike(id));
                  }}
                >
                  채용공고 찜
                </BackBtn>
              )}
            </ZimmbtnWarp>
            {jobDetail?.deadline.split(' ')[0] === '2122-01-01' ? (
              <ScrapBtn1
                onClick={() => {
                  setSangsi(true);
                }}
              >
                캘린더로 스크랩
              </ScrapBtn1>
            ) : (
              <ScrapBtnWrap>
                {jobDetail?.isScrap && (
                  <>
                    <MsgText to='/main/calendar'>
                      <p>
                        <span>취준 캘린더</span>에서
                        <br />
                        확인해보세요!
                      </p>
                    </MsgText>
                    <MsgImg src={msg} alt='캘린더로 스크랩' />
                  </>
                )}
                <ScrapBtn
                  scrap={jobDetail?.isScrap}
                  onClick={() => {
                    dispatch(addScrap(id));
                  }}
                >
                  캘린더로 스크랩
                </ScrapBtn>
              </ScrapBtnWrap>
            )}
          </BtnWrap>

          <JobKoreabtn
            onClick={() => {
              window.open(jobDetail?.url);
            }}
          >
            <img src={buttonText} alt='잡코리아공고링크연결' />
            자세한 공고 잡코리아에서 확인
          </JobKoreabtn>
        </MainWrapper>
      </MainWrap>
      {sangsi && (
        <Always>
          <AlwaysModal>
            <img src={alwaysBird} alt='상시채용' />
            <p>
              <span>상시채용공고</span>는
              <br />
              <span>찜 기능을 활용</span>해보세요!
            </p>
            <AlwaysBtn
              onClick={() => {
                setSangsi(false);
              }}
            >
              확인
            </AlwaysBtn>
          </AlwaysModal>
        </Always>
      )}
    </>
  );
};

const MainWrap = styled.div`
  position: relative;
  background: #ecf1f8;
  height: 100vh;
  > * {
    filter: ${(props) => (props.sangsi ? 'blur(1.4px)' : 'blur(0px)')};
  }
`;

const MyBack = styled.img`
  width: 16px;
  position: absolute;
  left: 4%;
  top: 33%;
  cursor: pointer;
`;

const Header = styled.div`
  width: 100%;
  height: 8vh;
  position: relative;
  background-color: var(--blue4);
`;

const Tooltip = styled.div`
  color: var(--blue2);
  display: flex;
  margin: 0 0 15px 0;
  align-items: center;
  position: relative;
`;
const Tooltip2 = styled.img`
  display: flex;
  justify-content: flex-end;
  width: 18px;
  height: 18px;

  &:hover {
    ~ div {
      display: block;
    }
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 83vh;
  width: 100%;
  background: var(--blue1);
  padding: 40px 16px;
`;

const CompanyWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 24px;
  margin-bottom: 12px;
`;

const CompanyName = styled.div`
  font-weight: 500;
  font-size: 16px;
  color: #3284ff;
`;

const CompanySize = styled.div`
  width: auto;
  padding: 3px 6px;
  background: #a6c9ff;
  border-radius: 19px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

const JobTitle = styled.p`
  width: 100%;
  font-weight: 500;
  font-size: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const Line = styled.div`
  width: 100%;
  border: 1px solid #d1d1d1;
  margin-bottom: 28px;
  margin-top: 20px;
`;

const JobInfo = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;
const JobInfoFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

const InfoTitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #3284ff;
`;

const InfoDetails = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #111111;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-top: 100px; */
`;

const BackWrap = styled.div`
  position: relative;
  height: 40vh;
`;
const BackBird = styled.img`
  position: absolute;
  bottom: -26px;
  right: -20px;
  opacity: 0.15;
`;

const BackBtn = styled.div`
  width: 157px;
  height: 54px;
  font-size: 16px;
  padding: 18px 25px;
  border-radius: 6px;
  box-sizing: border-box;
  font-weight: 500;
  border: ${(props) => (props.scrap ? '2px solid  transparent' : '2px solid transparent')};
  background-color: ${(props) => (props.scrap ? `var(--blue4)` : 'white')};
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.scrap ? 'white' : '#3284ff')};
`;

const MsgImg = styled.img`
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
`;

const MsgImg1 = styled.img`
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
`;

const MsgText = styled(Link)`
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 400;
  font-size: 14px;
  color: var(--blue3);
  width: 100%;
  text-align: center;
  span {
    font-weight: 700;
    color: var(--blue4);
  }
  p {
    color: var(--blue4);
  }
  z-index: 99;
`;

const MsgText1 = styled(Link)`
  position: absolute;
  top: -55px;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 400;
  font-size: 14px;
  color: var(--blue3);
  width: 100%;
  text-align: center;
  span {
    font-weight: 700;
    color: var(--blue4);
  }
  p {
    color: var(--blue4);
  }
  z-index: 99;
`;
const ZimmbtnWarp = styled.div`
  position: relative;
  filter: blur(0px) !important;
`;
const ScrapBtnWrap = styled.div`
  position: relative;
`;

const ScrapBtn = styled.button`
  width: 157px;
  height: 54px;
  font-size: 16px;
  padding: 18px 25px;
  border-radius: 6px;
  box-sizing: border-box;
  font-weight: 500;
  border: ${(props) => (props.scrap ? '2px solid  transparent' : '2px solid transparent')};
  background-color: ${(props) => (props.scrap ? `var(--blue4)` : 'white')};
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.scrap ? 'white' : '#3284ff')};
`;

const ScrapBtn1 = styled.button`
  width: 157px;
  height: 54px;
  font-size: 16px;
  padding: 18px 25px;
  border-radius: 6px;
  box-sizing: border-box;
  font-weight: 500;
  border: 2px solid transparent;
  background-color: white;
  text-align: center;
  cursor: pointer;
  color: var(--blue4);
  z-index: 1;
`;

const JobKoreabtn = styled.div`
  background: #3284ff;
  border-radius: 6px;
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 18px 50px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-top: 16px;
`;

const Always = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  z-index: 99999;
`;
const AlwaysBtn = styled.button`
  background-color: var(--blue4);
  padding: 16px 60px;
  color: #fff;
  border-radius: 9px;
  margin-top: 17px;
`;
const AlwaysModal = styled.div`
  img {
    width: 119px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 500;
    color: var(--blue4);
    letter-spacing: 0.9px;
  }
  span {
    font-weight: 700;
    color: var(--blue4);
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 99999;
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32), inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  border-radius: 21px;
  padding: 40px 30px;
  width: 50%;
  height: 210px;
  text-align: center;
`;

export default JobDetail;
