import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  loadJobList,
  loadCategoryList,
  loadJobDetails,
  addScrap,
} from "../redux/modules/job";

import buttonText from "../assets/img/btn/buttonText.png";
import back from "../assets/img/icon/Back.svg";
import msg from "../assets/img/btn/msg.svg";
import backbird from "../assets/img/illust/JobDetailBird.svg"
const JobDetail = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const params = useParams();

  const id = params.id;

  const jobDetail = useSelector((state) => state.job.details.data);

  // console.log(jobDetail);

  useEffect(() => {
    dispatch(loadJobDetails(id));
  }, [id]);

  function getDate(whatDay) {
    //날짜문자열 형식은 자유로운 편

    const week = ["일", "월", "화", "수", "목", "금", "토"];

    const dayOfWeek = week[new Date(whatDay).getDay()];

    return dayOfWeek;
  }

  const [isScrap, setIsScrap] = React.useState(false);

  return (
    <MainWrap>
      <Header>
      <MyBack 
       onClick={()=>{
        navigate(-1)
      }}
      src={back}/>
      </Header>

      <MainWrapper>
        <CompanyWrap>
          <CompanyName>{jobDetail?.companyName}</CompanyName>
          <CompanySize>{jobDetail?.companyType}</CompanySize>
        </CompanyWrap>

        <JobTitle>{jobDetail?.title}</JobTitle>

        <Line />
        <JobInfoFlex>
          <JobInfo>
            <InfoTitle>모집마감일자</InfoTitle>
            <InfoDetails style={{ fontWeight: "800" }}>
              {jobDetail?.deadline.split(" ")[0] === "2122-01-01"
                ? "상시채용"
                : jobDetail?.deadline.split(" ")[0] +
                  " " +
                  "(" +
                  getDate(jobDetail?.deadline.split(" ")[0]) +
                  ")"}
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
          <BackBtn>
          {jobDetail?.isScrap && (
              <>
                <MsgText1 to="/zzim">
                  <p>
                    <span>스크랩한 모든 공고</span>를
                    <br />
                    확인해보세요!
                  </p>
                </MsgText1>
                <MsgImg1 src={msg} alt="캘린더로 스크랩" />
              </>
            )}
          채용공고 찜
          </BackBtn>

          <ScrapBtnWrap>
            {jobDetail?.isScrap && (
              <>
                <MsgText to="/main">
                  <p>
                    <span>취준 캘린더</span>에서
                    <br />
                    확인해보세요!
                  </p>
                </MsgText>
                <MsgImg src={msg} alt="캘린더로 스크랩" />
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
        </BtnWrap>

        <JobKoreabtn
          onClick={() => {
            window.open(jobDetail?.url);
          }}
        >
          <img src={buttonText} alt="잡코리아공고링크연결" />
          자세한 공고 잡코리아에서 확인
        </JobKoreabtn>
      </MainWrapper>
    </MainWrap>
  );
};

const MainWrap = styled.div`
  position: relative;
  background: #ecf1f8;
  height: 100vh;
`;

const MyBack = styled.img`
  width: 16px;
  position: absolute;
  left: 4%;
  top: 33%;
`

const Header = styled.div`
  width: 100%;
  height: 8vh;
  position: relative;
  background-color: var(--blue4);
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 83vh;
  width: calc(100% - 48px);
  background: var(--blue1);
  padding: 40px 24px;
`;

const CompanyWrap = styled.div`
  height: 23px;
  display: flex;
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
  height: 23px;
  padding: 3px 6px;
  gap: 10px;
  margin-right: 5px;
  background: #a6c9ff;
  border-radius: 19px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
`;

const JobTitle = styled.div`
  width: 100%;
  padding: 15px 0;
  font-weight: 500;
  font-size: 20px;
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #d1d1d1;
  margin-bottom: 28px;
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
`
const BackBird = styled.img`
  position: absolute;
  bottom: -26px;
  right: -20px;
  opacity: 0.15;
`



const BackBtn = styled.div`
  width: 157px;
  height: 54px;
  font-size: 16px;
  padding: 18px 25px;
  border-radius: 6px;
  position: relative;
  box-sizing: border-box;
  font-weight: 500;
  border: ${(props) =>
    props.scrap
      ? "2px solid  transparent"
      : "2px solid transparent"};
  background-color: ${(props) =>
    props.scrap ? "var(--blue4)" : "white"};
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.scrap ? "white" : "#3284ff")};
`;

const BackBtnImg = styled.img`
  width: 99px;
  margin: auto;
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
  p{
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
  p{
    color: var(--blue4);
  }
  z-index: 99;
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
  border: ${(props) =>
    props.scrap
      ? "2px solid  transparent"
      : "2px solid transparent"};
  background-color: ${(props) =>
    props.scrap ? "var(--blue4)" : "white"};
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.scrap ? "white" : "#3284ff")};
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

export default JobDetail;
