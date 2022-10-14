import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadJobList,
  loadCategoryList,
  selectCategory,
} from "../../redux/modules/job";

import backBtn from "../../assets/img/icon/Back.svg";
import open from "../../assets/img/btn/open.png";
import close from "../../assets/img/btn/close.png";

// 상세 지역 import
import { Seoul } from "../../shared/region";
import { Gyeonggi } from "../../shared/region";
import { Incheon } from "../../shared/region";
import { Daejeon } from "../../shared/region";
import { Sejong } from "../../shared/region";
import { Chungnam } from "../../shared/region";
import { Chungbuk } from "../../shared/region";
import { Gwangju } from "../../shared/region";
import { Jeonnam } from "../../shared/region";
import { Jeonbuk } from "../../shared/region";
import { Daegu } from "../../shared/region";
import { Gyeongbuk } from "../../shared/region";
import { Busan } from "../../shared/region";
import { Ulsan } from "../../shared/region";
import { Gyeongnam } from "../../shared/region";
import { Gangwon } from "../../shared/region";
import { Jeju } from "../../shared/region";

// 상세 직군 import
import { 경영·사무 } from "../../shared/jobData";
import { 마케팅·광고·홍보 } from "../../shared/jobData";
import { IT·인터넷 } from "../../shared/jobData";
import { 디자인 } from "../../shared/jobData";
import { 무역·유통 } from "../../shared/jobData";
import { 영업·고객상담 } from "../../shared/jobData";
import { 서비스 } from "../../shared/jobData";
import { 연구개발·설계 } from "../../shared/jobData";
import { 생산·제조 } from "../../shared/jobData";
import { 교육 } from "../../shared/jobData";
import { 건설 } from "../../shared/jobData";
import { 의료 } from "../../shared/jobData";
import { 미디어 } from "../../shared/jobData";
import { 전문·특수직 } from "../../shared/jobData";

const JobCategory = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [taskToggle, setTaskToggle] = React.useState(false);
  const [workAreaToggle, setworkAreaToggle] = React.useState(false);

  const tasks = [
    "전체",
    "경영·사무",
    "마케팅·광고·홍보",
    "IT·인터넷",
    "디자인",
    "무역·유통",
    "영업·고객상담",
    "서비스",
    "연구개발·설계",
    "생산·제조",
    "교육",
    "건설",
    "의료",
    "미디어",
    "전문·특수직",
  ];

  const workArea = [
    "서울",
    "세종",
    "광주",
    "대구",
    "부산",
    "제주",
    "경기",
    "충남",
    "전남",
    "경북",
    "울산",
    "강원",
    "인천",
    "대전",
    "충북",
    "전북",
    "경남",
    "전체",
  ];

  const careers = ["신입", "경력", "신입·경력"];

  const CompanyType = [
    "대기업",
    "중소/중견기업",
    "외국계기업",
    "공기업",
    "전체",
  ];

  const defaultCategory = useSelector((state) => state.job.category);
  const defaultCategor1y = useSelector((state) => state);

  const [categoryData, setCategoryData] = React.useState({
    jobMain: defaultCategory?.jobMain,
    jobSub: defaultCategory?.jobSub,
    cityMain: defaultCategory?.cityMain,
    citySub: defaultCategory?.citySub,
    career: defaultCategory?.career,
    companyType: defaultCategory?.companyType,
  });

  useEffect(() => {
    setCategoryData({
      jobMain: defaultCategory?.jobMain,
      jobSub: defaultCategory?.jobSub,
      cityMain: defaultCategory?.cityMain,
      citySub: defaultCategory?.citySub,
      career: defaultCategory?.career,
      companyType: defaultCategory?.companyType,
    });
  }, [defaultCategory]);

  useEffect(() => {
    dispatch(loadCategoryList());
  }, []);

  return (
    <MainWrapper>
      <UpBar>
        <BackBtn src={backBtn} onClick={() => navigate("/job")} />
        <SaveBtn
          onClick={() => {
            dispatch(selectCategory(categoryData));
            window.alert("수정이 완료되었습니다!");
            navigate("/job");
          }}
        >
          저장
        </SaveBtn>
      </UpBar>

      <CategoryTap>
        <TasksBtnWrap onClick={() => setTaskToggle(!taskToggle)}>
          <TasksBtnText>직무</TasksBtnText>
          {taskToggle === false ? (
            <TasksBtnImg src={close} />
          ) : (
            <TasksBtnImg src={open} />
          )}
        </TasksBtnWrap>
        {taskToggle === false ? (
          <></>
        ) : (
          <JobTagsFlex>
            {tasks.map((tasksData, idx) => {
              return (
                <JobTags
                  key={idx}
                  categoryData={categoryData.jobMain}
                  tasksData={tasksData}
                  onClick={() =>
                    setCategoryData({
                      ...categoryData,
                      jobMain: tasksData,
                      jobSub: "",
                    })
                  }
                >
                  {tasksData}
                </JobTags>
              );
            })}
          </JobTagsFlex>
        )}
      </CategoryTap>

      {taskToggle === false ? <></> : <Hr />}

      {taskToggle === false ? (
        <></>
      ) : (
        <DetailJobTagsFlex>
          {categoryData.jobMain === "전체" ? (
            <DetailJobTags
              categoryData={categoryData.jobSub}
              tasksData={"전체"}
              onClick={() =>
                setCategoryData({ ...categoryData, jobSub: "전체" })
              }
            >
              {"전체"}
            </DetailJobTags>
          ) : categoryData.jobMain === "경영·사무" ? (
            경영·사무.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "마케팅·광고·홍보" ? (
            마케팅·광고·홍보.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "IT·인터넷" ? (
            IT·인터넷.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "디자인" ? (
            디자인.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "무역·유통" ? (
            무역·유통.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "영업·고객상담" ? (
            영업·고객상담.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "서비스" ? (
            서비스.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "연구개발·설계" ? (
            연구개발·설계.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "생산·제조" ? (
            생산·제조.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "교육" ? (
            교육.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobMain}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "건설" ? (
            건설.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobMain}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "의료" ? (
            의료.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "미디어" ? (
            미디어.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : categoryData.jobMain === "전문·특수직" ? (
            전문·특수직.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, jobSub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : (
            <></>
          )}
        </DetailJobTagsFlex>
      )}

      <CategoryTap>
        <TasksBtnWrap onClick={() => setworkAreaToggle(!workAreaToggle)}>
          <TasksBtnText>근무지역</TasksBtnText>
          {workAreaToggle === false ? (
            <TasksBtnImg src={close} />
          ) : (
            <TasksBtnImg src={open} />
          )}
        </TasksBtnWrap>
        {workAreaToggle === false ? (
          <></>
        ) : (
          <WorkAreaTagsFlex>
            {workArea.map((workAreaData, idx) => {
              return (
                <WorkAreaTags
                  key={idx}
                  categoryData={categoryData.cityMain}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({
                      ...categoryData,
                      cityMain: workAreaData,
                      citySub: "",
                    })
                  }
                >
                  {workAreaData}
                </WorkAreaTags>
              );
            })}
          </WorkAreaTagsFlex>
        )}
      </CategoryTap>

      {workAreaToggle === false ? <></> : <Hr />}

      {workAreaToggle === false ? (
        <></>
      ) : (
        <DetailWorkAreaTagsFlex>
          {categoryData.cityMain === "전체" ? (
            <DetailWorkAreaTags
              categoryData={categoryData.citySub}
              tasksData={"전체"}
              onClick={() =>
                setCategoryData({ ...categoryData, citySub: "전체" })
              }
            >
              {"전체"}
            </DetailWorkAreaTags>
          ) : categoryData.cityMain === "서울" ? (
            Seoul.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "경기" ? (
            Gyeonggi.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "인천" ? (
            Incheon.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "대전" ? (
            Daejeon.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "세종" ? (
            Sejong.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "충남" ? (
            Chungnam.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "충북" ? (
            Chungbuk.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "광주" ? (
            Gwangju.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "전남" ? (
            Jeonnam.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "전북" ? (
            Jeonbuk.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "대구" ? (
            Daegu.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "경북" ? (
            Gyeongbuk.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "부산" ? (
            Busan.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "울산" ? (
            Ulsan.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "경남" ? (
            Gyeongnam.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "강원" ? (
            Gangwon.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : categoryData.cityMain === "제주" ? (
            Jeju.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() =>
                    setCategoryData({ ...categoryData, citySub: workAreaData })
                  }
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : (
            <></>
          )}
        </DetailWorkAreaTagsFlex>
      )}

      <CategoryTap>
        <TasksText>경력</TasksText>

        <CareersTagsFlex>
          {careers.map((careersData, idx) => {
            return (
              <CareersTags
                key={idx}
                categoryData={
                  categoryData.career === "경력무관"
                    ? "신입·경력"
                    : categoryData.career
                }
                tasksData={careersData}
                onClick={() =>
                  setCategoryData({
                    ...categoryData,
                    career:
                      careersData === "신입·경력" ? "경력무관" : careersData,
                  })
                }
              >
                {careersData}
              </CareersTags>
            );
          })}
        </CareersTagsFlex>
      </CategoryTap>

      <CategoryTap>
        <TasksText>기업형태</TasksText>
        <CompanyTypeTagsFlex>
          {CompanyType.map((CompanyTypeData, idx) => {
            return (
              <CompanyTypeTags
                key={idx}
                categoryData={categoryData.companyType}
                tasksData={CompanyTypeData}
                onClick={() =>
                  window.alert(
                    "준비하고 있는 기능입니다!",
                    setCategoryData({ ...categoryData, companyType: "대기업" })
                  )
                }
              >
                {CompanyTypeData}
              </CompanyTypeTags>
            );
          })}
        </CompanyTypeTagsFlex>
      </CategoryTap>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: var(--blue1);
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
`;

const UpBar = styled.div`
  width: auto;
  height: 41px;
  background: #3284ff;
  display: inline-block;
  padding: 63px 24px 0px;
  display: flex;
  justify-content: space-between;
`;

const BackBtn = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const SaveBtn = styled.div`
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;

const CategoryTap = styled.div`
  padding: 0 17px;
  padding-top: 22px;
`;
const DetailJobTagsFlex = styled.div`
  padding: 24px 17px;
`;

const TasksBtnWrap = styled.div`
  height: 38px;
  cursor: pointer;
`;

const TasksBtnText = styled.div`
  float: left;
  margin-right: 12px;
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
  line-height: 38px;
  cursor: pointer;
`;
const TasksText = styled.div`
  margin-right: 12px;
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
  cursor: pointer;
`;
const CareersTagsFlex = styled.div`
  padding: 33px 0;
  padding-top: 22px;
`;
const CompanyTypeTagsFlex = styled.div`
  padding: 33px 0;
  padding-top: 22px;
`;

const TasksBtnImg = styled.img`
  margin-top: 15px;
  cursor: pointer;
`;

const JobTags = styled.div`
  padding: 4px 10px;
  display: inline-block;
  background: ${(props) =>
    props.categoryData === props.tasksData ? "var(--blue4)" : "transparent"};
  border-radius: 6px;
  :nth-child(1) {
    margin-right: calc(100% - 50px);
  }
  margin-right: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) =>
    props.categoryData === props.tasksData ? "white" : "var(--blue4)"};
  cursor: pointer;
`;
const JobTagsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 8px;
  padding: 24px 0;
`;

const DetailJobTags = styled.div`
  display: inline-block;
  padding: 6px 10px;
  margin-bottom: 16px;
  margin-right: 20px;
  background: ${(props) =>
    props.categoryData === props.tasksData ? "var(--blue4)" : "transparent"};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) =>
    props.categoryData === props.tasksData ? "white" : "#74A0E3"};
  border: 1px solid var(--blue2);
  box-sizing: border-box;
  cursor: pointer;
`;

const WorkAreaTags = styled.div`
  padding: 8px 10px;
  background: ${(props) =>
    props.categoryData === props.tasksData ? "var(--blue4)" : "transparent"};
  border-radius: 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) =>
    props.categoryData === props.tasksData ? "white" : "var(--blue4)"};
  cursor: pointer;
`;

const DetailWorkAreaTags = styled.div`
  padding: 6px 10px;
  margin: 4px;
  background: ${(props) =>
    props.categoryData === props.tasksData ? "var(--blue4)" : "transparent"};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) =>
    props.categoryData === props.tasksData ? "white" : "#74A0E3"};
  border: 1px solid var(--blue2);
  box-sizing: border-box;
  cursor: pointer;
`;
const WorkAreaTagsFlex = styled.div`
  width: 100%;
  display: flex;
  gap: 6px 14px;
  flex-wrap: wrap;
  padding: 24px 0;
`;
const DetailWorkAreaTagsFlex = styled.div`
  width: calc(100% - 32px);
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 24px 17px;
`;

const CareersTags = styled.div`
  display: inline-block;
  padding: 6px 10px;
  margin: 4px;
  margin-bottom: 8px;
  background: ${(props) =>
    props.categoryData === props.tasksData ? "var(--blue4)" : "transparent"};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) =>
    props.categoryData === props.tasksData ? "white" : "var(--blue3)"};
  border: 1px solid var(--blue2);
  box-sizing: border-box;
  cursor: pointer;
`;

const CompanyTypeTags = styled.div`
  display: inline-block;
  padding: 4px 10px;
  margin: 4px;
  margin-bottom: 8px;
  background: ${(props) =>
    props.categoryData === props.tasksData ? "var(--blue4)" : "transparent"};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) =>
    props.categoryData === props.tasksData ? "white" : "var(--blue3)"};
  border: 1px solid var(--blue2);
  box-sizing: border-box;
  cursor: pointer;
`;

const Hr = styled.hr`
  width: 343px;
  height: 1px;
  border: none;
  background: #d9d9d9;
  margin: auto;
`;

export default JobCategory;
