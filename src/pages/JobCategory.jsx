import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// 상세 지역 import
import {Seoul} from "../shared/region";
import {Gyeonggi} from "../shared/region";
import {Incheon} from "../shared/region";
import {Daejeon} from "../shared/region";
import {Sejong} from "../shared/region";
import {Chungnam} from "../shared/region";
import {Chungbuk} from "../shared/region";
import {Gwangju} from "../shared/region";
import {Jeonnam} from "../shared/region";
import {Jeonbuk} from "../shared/region";
import {Daegu} from "../shared/region";
import {Gyeongbuk} from "../shared/region";
import {Busan} from "../shared/region";
import {Ulsan} from "../shared/region";
import {Gyeongnam} from "../shared/region";
import {Gangwon} from "../shared/region";
import {Jeju} from "../shared/region";

// 상세 직군 import
import {경영·사무} from '../shared/jobData';
import {마케팅·광고·홍보} from '../shared/jobData';
import {IT·인터넷} from '../shared/jobData';
import {디자인} from '../shared/jobData';
import {무역·유통} from '../shared/jobData';
import {영업·고객상담} from '../shared/jobData';
import {서비스} from '../shared/jobData';
import {연구개발·설계} from '../shared/jobData';
import {생산·제조} from '../shared/jobData';
import {교육} from '../shared/jobData';
import {건설} from '../shared/jobData';
import {의료} from '../shared/jobData';
import {미디어} from '../shared/jobData';
import {전문·특수직} from '../shared/jobData';

const JobCategory = () => {

  const navigate = useNavigate();

  const [taskToggle, setTaskToggle] = React.useState(false);
  const [workAreaToggle, setworkAreaToggle] = React.useState(false);

  const tasks = [
    "경영·사무",
    '마케팅·광고·홍보',
    'IT·인터넷',
    '디자인',
    '무역·유통',
    '영업·고객상담',
    '서비스',
    '연구개발·설계',
    '생산·제조',
    '교육',
    '건설',
    '의료',
    '미디어',
    '전문·특수직',
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
    'job2' : '',
    'city1' : '',
    'city2' : '',
    'career' : '',
    'companyType' : '',
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
                    () => setCategoryData({ ...categoryData, 'job1' : tasksData, job2 : '' })
                  }>{tasksData}</JobTags>
                )
              })
        }
      </CategoryTap>

                <CategoryTap>
                  <div onClick={() => setTaskToggle(!taskToggle)}>상세직무</div>
                  <hr />
                  {
                                categoryData.job1 === "경영·사무"
                                ? 
                                경영·사무.map((workAreaData, idx)=>{
                                    return(
                                      <JobTags key={idx} onClick={
                                        () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                      }>{workAreaData}</JobTags>
                                    )
                                  })
                                  : 
                                  categoryData.job1 === "마케팅·광고·홍보"
                                  ? 
                                  마케팅·광고·홍보.map((workAreaData, idx)=>{
                                      return(
                                        <JobTags key={idx} onClick={
                                          () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                        }>{workAreaData}</JobTags>
                                      )
                                    })
                                    : 
                                    categoryData.job1 === "IT·인터넷"
                                    ? 
                                    IT·인터넷.map((workAreaData, idx)=>{
                                        return(
                                          <JobTags key={idx} onClick={
                                            () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                          }>{workAreaData}</JobTags>
                                        )
                                      })
                                      : 
                                      categoryData.job1 === "디자인"
                                      ? 
                                      디자인.map((workAreaData, idx)=>{
                                          return(
                                            <JobTags key={idx} onClick={
                                              () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                            }>{workAreaData}</JobTags>
                                          )
                                        })
                                        : 
                                        categoryData.job1 === "무역·유통"
                                        ? 
                                        무역·유통.map((workAreaData, idx)=>{
                                            return(
                                              <JobTags key={idx} onClick={
                                                () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                              }>{workAreaData}</JobTags>
                                            )
                                          })
                                          : 
                                          categoryData.job1 === "영업·고객상담"
                                          ? 
                                          영업·고객상담.map((workAreaData, idx)=>{
                                              return(
                                                <JobTags key={idx} onClick={
                                                  () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                }>{workAreaData}</JobTags>
                                              )
                                            })
                                            : 
                                            categoryData.job1 === "서비스"
                                            ? 
                                            서비스.map((workAreaData, idx)=>{
                                                return(
                                                  <JobTags key={idx} onClick={
                                                    () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                  }>{workAreaData}</JobTags>
                                                )
                                              })
                                              : 
                                              categoryData.job1 === "연구개발·설계"
                                              ? 
                                              연구개발·설계.map((workAreaData, idx)=>{
                                                  return(
                                                    <JobTags key={idx} onClick={
                                                      () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                    }>{workAreaData}</JobTags>
                                                  )
                                                })
                                                : 
                                                categoryData.job1 === "생산·제조"
                                                ? 
                                                생산·제조.map((workAreaData, idx)=>{
                                                    return(
                                                      <JobTags key={idx} onClick={
                                                        () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                      }>{workAreaData}</JobTags>
                                                    )
                                                  })
                                                  : 
                                                  categoryData.job1 === "교육"
                                                  ? 
                                                  교육.map((workAreaData, idx)=>{
                                                      return(
                                                        <JobTags key={idx} onClick={
                                                          () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                        }>{workAreaData}</JobTags>
                                                      )
                                                    })
                                                    : 
                                                    categoryData.job1 === "건설"
                                                    ? 
                                                    건설.map((workAreaData, idx)=>{
                                                        return(
                                                          <JobTags key={idx} onClick={
                                                            () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                          }>{workAreaData}</JobTags>
                                                        )
                                                      })
                                                      : 
                                                      categoryData.job1 === "의료"
                                                      ? 
                                                      의료.map((workAreaData, idx)=>{
                                                          return(
                                                            <JobTags key={idx} onClick={
                                                              () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                            }>{workAreaData}</JobTags>
                                                          )
                                                        })
                                                        : 
                                                        categoryData.job1 === "미디어"
                                                        ? 
                                                        미디어.map((workAreaData, idx)=>{
                                                            return(
                                                              <JobTags key={idx} onClick={
                                                                () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                              }>{workAreaData}</JobTags>
                                                            )
                                                          })
                                                          : 
                                                          categoryData.job1 === "전문·특수직"
                                                          ? 
                                                          전문·특수직.map((workAreaData, idx)=>{
                                                              return(
                                                                <JobTags key={idx} onClick={
                                                                  () => setCategoryData({ ...categoryData, 'job2' : workAreaData })
                                                                }>{workAreaData}</JobTags>
                                                              )
                                                            })
                                                            : <></>
                                  
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
                  () => setCategoryData({ ...categoryData, 'city1' : workAreaData, 'city2' : "" })
                }>{workAreaData}</JobTags>
              )
            })
        }
      </CategoryTap>


                  <CategoryTap>
                    <div onClick={() => setworkAreaToggle(!workAreaToggle)}>상세지역</div>
                    <hr />
                    {
                      categoryData.city1 === "서울"
                      ? 
                      Seoul.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :         
                        categoryData.city1 === "경기"
                        ? 
                        Gyeonggi.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "인천"
                        ?
                        Incheon.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "대전"
                        ?
                        Daejeon.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "세종"
                        ?
                        Sejong.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "충남"
                        ?
                        Chungnam.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "충북"
                        ?
                        Chungbuk.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "광주"
                        ?
                        Gwangju.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "전남"
                        ?
                        Jeonnam.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "전북"
                        ?
                        Jeonbuk.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "대구"
                        ?
                        Daegu.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "경북"
                        ?
                        Gyeongbuk.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "부산"
                        ?
                        Busan.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "울산"
                        ?
                        Ulsan.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "경남"
                        ?
                        Gyeongnam.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "강원"
                        ?
                        Gangwon.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        categoryData.city1 === "제주"
                        ?
                        Jeju.map((workAreaData, idx)=>{
                          return(
                            <JobTags key={idx} onClick={
                              () => setCategoryData({ ...categoryData, 'city2' : workAreaData })
                            }>{workAreaData}</JobTags>
                          )
                        })
                        :
                        <></>
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
                  () => setCategoryData({ ...categoryData, 'companyType' : CompanyTypeData })
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