import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// 컴포넌트
import Nav from "../componenets/Nav";
import WeekSchedule from "../componenets/WeekSchedule";
import MonthSchedule from "./../componenets/month/MonthSchedule";
import MonthList from "../componenets/MonthList";
import DailyList from "../componenets/DailyList";
import SearchData from "./SearchData";

// 이미지
import zoomin from "../assets/img/icon/zoomin.png";
import zoomout from "../assets/img/icon/zoomout.png";

// 리덕스
import { searchMySchedule } from "../redux/modules/search";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [weekMonth, setWeekMonth] = useState(true);
  const [zoomInOut, setZoomInOut] = useState(true);

  // console.log(weekMonth);

  //일정등록 이동
  const MoveBtn = () => {
    navigate("/addschedule");
  };

  const [search, setSearch] = React.useState("");

  const scheduleSearchEvent = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(searchMySchedule(search));
    // search === "" ? <></> : navigate("/SearchData");
  }, [search]);

  const navData = true;

  const searchData = useSelector((state) => state.search.search?.data);

  // const searchDataList = Object.entries(searchData === undefined && null ? { 220830: [{}] } : searchData);
  // const searchDataList = () => {
  //   if (!Object.entries) {
  //     Object.entries = function (searchData) {
  //       var ownProps = Object.keys(searchData),
  //         i = ownProps.length,
  //         resArray = new Array(i); // preallocate the Array
  //       while (i--) resArray[i] = [ownProps[i], searchData[ownProps[i]]];

  //       return resArray;
  //     };
  //   }
  // };
  // console.log("검색 결과입니다. searchDataList", searchDataList(searchData));
  // console.log("검색 결과입니다. searchDataList", searchDataList);

  console.log("검색 결과 원본입니다. searchData", searchData);

  const active = useSelector((state) => state.date?.active);

  // const dataArray = searchDataList?.map((data, idx) => data[1]?.length);

  // const dataArraySum = dataArray?.reduce((acc, cur) => {
  //   return acc + cur;
  // }, 0);

  // console.log(dataArraySum);

  // function getDate(whatDay) {
  //   const week = ["일", "월", "화", "수", "목", "금", "토"];

  //   const dayOfWeek = week[new Date(whatDay).getDay()];

  //   return dayOfWeek;
  // }

  return (
    <MainWrap>
      <Nav navData={navData} />
      <FixBox>
        <Search type="text" placeholder="일정 상세 검색" onChange={scheduleSearchEvent} />
        <AddButtoon onClick={MoveBtn}>+</AddButtoon>
      </FixBox>
      {search === "" ? (
        <ContentWrap>
          {/* <ContentWrap> */}
          <ToggleBtn>
            {weekMonth ? (
              <>
                {zoomInOut ? (
                  <button
                    onClick={() => {
                      setZoomInOut(!zoomInOut);
                    }}
                  >
                    <img src={zoomin} alt="월별달력확대" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setZoomInOut(!zoomInOut);
                    }}
                  >
                    <img src={zoomout} alt="월별달력축소" />
                  </button>
                )}
              </>
            ) : (
              <div></div>
            )}
            {/* <WeekMonth
            weekMonth={weekMonth}
            onClick={() => {
              setWeekMonth(!weekMonth);
            }}
          > */}
            {/* {weekMonth ? (
              <>
                {zoomInOut ? (
                  <button
                    onClick={() => {
                      setZoomInOut(!zoomInOut);
                    }}
                  >
                    <img src={zoomin} alt="월별달력확대" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setZoomInOut(!zoomInOut);
                    }}
                  >
                    <img src={zoomout} alt="월별달력축소" />
                  </button>
                )}
              </>
            ) : (
              <div></div>
            )} */}
            <WeekMonth
              onClick={() => {
                setWeekMonth(!weekMonth);
              }}
            >
              {weekMonth ? <Circle weekMonth={weekMonth}>M</Circle> : <Circle weekMonth={weekMonth}>W</Circle>}
            </WeekMonth>
          </ToggleBtn>
          {weekMonth ? <MonthSchedule /> : <WeekSchedule />}
          {active?.isActive ? <DailyList /> : <MonthList />}
        </ContentWrap>
      ) : (
        <SearchWrapper>
          <UpBar>
            {/* <SearchInfo>{'" ' + search + ' "'} 검색결과</SearchInfo>
            <SearchInfo>{dataArraySum} 건</SearchInfo> */}
          </UpBar>
          <SearchHr />
          {/* {searchDataList?.map((tasksData, idx) => {
            const dayData = tasksData[0].split("");
            const year = "20" + dayData[0] + dayData[1];
            const month = dayData[2] + dayData[3];
            const day = dayData[4] + dayData[5];
            const today = new Date();
            const dday = new Date(year, month, day);
            const gap = dday.getTime() - today.getTime();
            const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
            return (
              <SearchDataDayWrap key={idx}>
                <SearchDataDay>{year + "년 " + month + "월 " + day + "일 " + "(" + getDate(dday) + ")"}</SearchDataDay>
                <SearchDataDDay>{"d" + (0 - result)}</SearchDataDDay>
              </SearchDataDayWrap>
            );
          })} */}
          {/* <SearchDataWrapper>
            <SearchDataDay>{searchDataList}</SearchDataDay>
          </SearchDataWrapper> */}
        </SearchWrapper>
      )}
    </MainWrap>
  );
}
export default Main;
const MainWrap = styled.div`
  position: relative;
`;
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 12px;
  background-color: var(--blue1);
  overflow: hidden;
  height: calc(812px - 236px);
  overflow-y: scroll;
`;
const ToggleBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const WeekMonth = styled.button`
  height: 27px;
  width: 52px;
  border-radius: 13px;
  padding: 0 5px;
  background-color: var(--blue2);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: 0px 0px 8px 0px #3284ff45 inset;
  box-shadow: 0px -1px 2px 0px #ffffff75;
  justify-content: ${(props) => (props.weekMonth ? "flex-end" : "flex-start")};
`;
const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 8px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  color: ${(props) => (props.weekMonth ? "var(--blue4)" : "#fff")};
  background-color: ${(props) => (props.weekMonth ? "#fff" : "var(--blue4)")};
`;
const FixBox = styled.div`
  width: calc(100% - 20px);
  padding: 9px 22px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -7px 11px rgba(50, 132, 255, 0.1);
  background-color: #fff;
  z-index: 999;
`;
const Search = styled.input`
  padding: 18px 0;
  border: 1px solid var(--blue2);
  border-radius: 32px;
  width: 243px;
  padding-left: 27px;
  ::placeholder {
    font-weight: 500;
    font-size: 16px;
    color: var(--blue3);
  }
  &:focus {
    outline: none;
  }
  width: 243px;
`;
const AddButtoon = styled.button`
  width: 60px;
  height: 60px;
  background-color: var(--blue4);
  text-align: center;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 60px;
  color: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  height: calc(812px - 236px);
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ecf1f8;
  overflow: hidden;
  overflow-y: scroll;
`;

const UpBar = styled.div`
  width: auto;

  display: inline-block;
  padding: 35px 34px 18px;
  display: flex;
  justify-content: space-between;
`;

const SearchInfo = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #74a0e3;
`;

const SearchHr = styled.hr`
  width: 343px;
  height: 1px;
  background: #a6c9ff;
  margin: 0px auto;
  border: none;
`;

const SearchDataWrapper = styled.div`
  width: 342px;
  height: auto;
  background-color: green;
`;

const SearchDataDayWrap = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
  width: auto;
  display: inline-block;
  padding: 27px 15px 34px;
  display: flex;
  justify-content: space-between;
`;

const SearchDataDay = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
`;

const SearchDataDDay = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
`;

const SearchDataCard = styled.div``;
