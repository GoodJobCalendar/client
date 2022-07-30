import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadJobList, loadCategoryList, selectCategory } from "../redux/modules/job";

import backBtn from "../assets/img/icon/Back.png";
import open from "../assets/img/btn/open.png";
import close from "../assets/img/btn/close.png";

// 상세 지역 import
import { Seoul } from "../shared/region";
import { Gyeonggi } from "../shared/region";
import { Incheon } from "../shared/region";
import { Daejeon } from "../shared/region";
import { Sejong } from "../shared/region";
import { Chungnam } from "../shared/region";
import { Chungbuk } from "../shared/region";
import { Gwangju } from "../shared/region";
import { Jeonnam } from "../shared/region";
import { Jeonbuk } from "../shared/region";
import { Daegu } from "../shared/region";
import { Gyeongbuk } from "../shared/region";
import { Busan } from "../shared/region";
import { Ulsan } from "../shared/region";
import { Gyeongnam } from "../shared/region";
import { Gangwon } from "../shared/region";
import { Jeju } from "../shared/region";

// 상세 직군 import
import { 경영·사무 } from "../shared/jobData";
import { 마케팅·광고·홍보 } from "../shared/jobData";
import { IT·인터넷 } from "../shared/jobData";
import { 디자인 } from "../shared/jobData";
import { 무역·유통 } from "../shared/jobData";
import { 영업·고객상담 } from "../shared/jobData";
import { 서비스 } from "../shared/jobData";
import { 연구개발·설계 } from "../shared/jobData";
import { 생산·제조 } from "../shared/jobData";
import { 교육 } from "../shared/jobData";
import { 건설 } from "../shared/jobData";
import { 의료 } from "../shared/jobData";
import { 미디어 } from "../shared/jobData";
import { 전문·특수직 } from "../shared/jobData";

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

  const careers = ["신입", "경력", "경력무관"];

  const CompanyType = ["대기업", "중소/중견기업", "외국계기업", "공기업", "전체"];

  const defaultCategory = useSelector((state) => state.job.category.data);
  const defaultCategor1y = useSelector((state) => state);

  console.log(defaultCategor1y);

  const [categoryData, setCategoryData] = React.useState({
    jobMain: defaultCategory?.jobMain,
    jobSub: defaultCategory?.jobSub,
    cityMain: defaultCategory?.cityMain,
    citySub: defaultCategory?.citySub,
    career: defaultCategory?.career,
    companyType: defaultCategory?.companyType,
  });

  console.log(categoryData);

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
          {taskToggle === false ? <TasksBtnImg src={open} /> : <TasksBtnImg src={close} />}
        </TasksBtnWrap>
        {taskToggle === false ? (
          <></>
        ) : (
          tasks.map((tasksData, idx) => {
            return (
              <JobTags
                key={idx}
                categoryData={categoryData.jobMain}
                tasksData={tasksData}
                onClick={() => setCategoryData({ ...categoryData, jobMain: tasksData, jobSub: "" })}
              >
                {tasksData}
              </JobTags>
            );
          })
        )}
      </CategoryTap>

      {taskToggle === false ? <></> : <Hr />}

      {taskToggle === false ? (
        <></>
      ) : (
        <CategoryTap>
          {categoryData.jobMain === "전체" ? (
            <DetailJobTags categoryData={categoryData.jobSub} tasksData={"전체"} onClick={() => setCategoryData({ ...categoryData, jobSub: "전체" })}>
              {"전체"}
            </DetailJobTags>
          ) : categoryData.jobMain === "경영·사무" ? (
            경영·사무.map((workAreaData, idx) => {
              return (
                <DetailJobTags
                  key={idx}
                  categoryData={categoryData.jobSub}
                  tasksData={workAreaData}
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, jobSub: workAreaData })}
                >
                  {workAreaData}
                </DetailJobTags>
              );
            })
          ) : (
            <></>
          )}
        </CategoryTap>
      )}

      <CategoryTap>
        <TasksBtnWrap onClick={() => setworkAreaToggle(!workAreaToggle)}>
          <TasksBtnText>근무지역</TasksBtnText>
          {workAreaToggle === false ? <TasksBtnImg src={open} /> : <TasksBtnImg src={close} />}
        </TasksBtnWrap>
        {workAreaToggle === false ? (
          <></>
        ) : (
          workArea.map((workAreaData, idx) => {
            return (
              <WorkAreaTags
                key={idx}
                categoryData={categoryData.cityMain}
                tasksData={workAreaData}
                onClick={() => setCategoryData({ ...categoryData, cityMain: workAreaData, citySub: "" })}
              >
                {workAreaData}
              </WorkAreaTags>
            );
          })
        )}
      </CategoryTap>

      {workAreaToggle === false ? <></> : <Hr />}

      {workAreaToggle === false ? (
        <></>
      ) : (
        <CategoryTap>
          {categoryData.cityMain === "전체" ? (
            <DetailWorkAreaTags categoryData={categoryData.citySub} tasksData={"전체"} onClick={() => setCategoryData({ ...categoryData, citySub: "전체" })}>
              {"전체"}
            </DetailWorkAreaTags>
          ) : categoryData.cityMain === "서울" ? (
            Seoul.map((workAreaData, idx) => {
              return (
                <DetailWorkAreaTags
                  key={idx}
                  categoryData={categoryData.citySub}
                  tasksData={workAreaData}
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
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
                  onClick={() => setCategoryData({ ...categoryData, citySub: workAreaData })}
                >
                  {workAreaData}
                </DetailWorkAreaTags>
              );
            })
          ) : (
            <></>
          )}
        </CategoryTap>
      )}

      <CategoryTap>
        <div>경력</div>
        {careers.map((careersData, idx) => {
          return (
            <CareersTags
              key={idx}
              categoryData={categoryData.career}
              tasksData={careersData}
              onClick={() => setCategoryData({ ...categoryData, career: careersData })}
            >
              {careersData}
            </CareersTags>
          );
        })}
      </CategoryTap>

      <CategoryTap>
        <div>기업형태</div>
        {CompanyType.map((CompanyTypeData, idx) => {
          return (
            <CompanyTypeTags
              key={idx}
              categoryData={categoryData.companyType}
              tasksData={CompanyTypeData}
              onClick={() => window.alert("준비하고 있는 기능입니다!", setCategoryData({ ...categoryData, companyType: "대기업" }))}
            >
              {CompanyTypeData}
            </CompanyTypeTags>
          );
        })}
      </CategoryTap>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  background-color: var(--blue1);
  height: 812px;
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
  font-size: 12.0999px;
  color: #ffffff;
  cursor: pointer;
`;

const CategoryTap = styled.div`
  padding: 12px 24px;
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

const TasksBtnImg = styled.img`
  margin-top: 15px;
  cursor: pointer;
`;

const JobTags = styled.div`
  padding: 4px 10px;
  display: inline-block;
  background: ${(props) => (props.categoryData === props.tasksData ? "#3284FF" : "transparent")};
  border-radius: 6px;
  margin: 2px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.categoryData === props.tasksData ? "white" : "#3284FF")};
  cursor: pointer;
`;

const DetailJobTags = styled.div`
  display: inline-block;
  padding: 2px 6px;
  margin: 4px;
  background: ${(props) => (props.categoryData === props.tasksData ? "#3284FF" : "transparent")};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => (props.categoryData === props.tasksData ? "white" : "#74A0E3")};
  border: 1px solid #a6c9ff;
  box-sizing: border-box;
  cursor: pointer;
`;

const WorkAreaTags = styled.div`
  padding: 4px 10px;
  display: inline-block;
  background: ${(props) => (props.categoryData === props.tasksData ? "#3284FF" : "transparent")};
  border-radius: 6px;
  margin: 2px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  font-size: 14px;
  color: ${(props) => (props.categoryData === props.tasksData ? "white" : "#3284FF")};
  cursor: pointer;
`;

const DetailWorkAreaTags = styled.div`
  display: inline-block;
  padding: 2px 6px;
  margin: 4px;
  background: ${(props) => (props.categoryData === props.tasksData ? "#3284FF" : "transparent")};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => (props.categoryData === props.tasksData ? "white" : "#74A0E3")};
  border: 1px solid #a6c9ff;
  box-sizing: border-box;
  cursor: pointer;
`;

const CareersTags = styled.div`
  display: inline-block;
  padding: 2px 6px;
  margin: 4px;
  background: ${(props) => (props.categoryData === props.tasksData ? "#3284FF" : "transparent")};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => (props.categoryData === props.tasksData ? "white" : "#74A0E3")};
  border: 1px solid #a6c9ff;
  box-sizing: border-box;
  cursor: pointer;
`;

const CompanyTypeTags = styled.div`
  display: inline-block;
  padding: 2px 6px;
  margin: 4px;
  background: ${(props) => (props.categoryData === props.tasksData ? "#3284FF" : "transparent")};
  border-radius: 8px;
  line-height: 20px;
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => (props.categoryData === props.tasksData ? "white" : "#74A0E3")};
  border: 1px solid #a6c9ff;
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
