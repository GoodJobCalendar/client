import React, {useState, useEffect} from "react";
import styled from "styled-components";

import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

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
import {searchMySchedule} from "../redux/modules/search";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [weekMonth, setWeekMonth] = useState(true);
  const [zoomInOut, setZoomInOut] = useState(true);
  const addClick = () => {
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

  // console.log(searchData);

  const active = useSelector((state) => state.date.active);

  return (
    <MainWrap>
      <Nav navData={navData} />
      <FixBox>
        <Search type="text" placeholder="일정 상세 검색" onChange={scheduleSearchEvent} />
        <AddButtoon onClick={addClick}>+</AddButtoon>
      </FixBox>
      {search === "" ? (
        <ContentWrap>
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
            <SearchInfo>{'" ' + search + ' "'} 검색결과</SearchInfo>
            <SearchInfo>{searchData?.manual.length + searchData?.auto.length} 건</SearchInfo>
          </UpBar>
          <SearchHr />
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
