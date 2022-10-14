import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

// 컴포넌트
import Nav from "../components/Nav";

// 이미지
import locationGray from "../assets/img/icon/LocationGray.svg";
import searchImg from "../assets/img/icon/search.svg";
import guideImg from "../assets/img/guide.svg";

// 스티커 배경
import img2 from "../assets/img/sticker/sticker2.png";
import img3 from "../assets/img/sticker/sticker3.png";
import img4 from "../assets/img/sticker/sticker4.png";
import img5 from "../assets/img/sticker/sticker5.png";
import img6 from "../assets/img/sticker/sticker6.png";
import img7 from "../assets/img/sticker/sticker7.png";
import img8 from "../assets/img/sticker/sticker8.png";

// 리덕스
import { searchMySchedule } from "../redux/modules/search";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../components/Calendar";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navData = true;

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

  const searchData = useSelector((state) => state.search.search);

  const searchDataList = Object.entries(searchData);
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

  const dataArray = searchDataList?.map((data, idx) => data[1]?.length);

  const dataArraySum = dataArray?.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  function getDate(whatDay) {
    const week = ["일", "월", "화", "수", "목", "금", "토"];

    const dayOfWeek = week[new Date(whatDay).getDay()];

    return dayOfWeek;
  }

  const [showModal, setShowModal] = useState(false);
  const HAS_VISITED_BEFORE = localStorage.getItem("hasVisitedBefore");

  useEffect(() => {
    const handleShowModal = () => {
      if (HAS_VISITED_BEFORE && HAS_VISITED_BEFORE > new Date()) {
        return;
      }

      if (!HAS_VISITED_BEFORE) {
        setShowModal(true);
        let expires = new Date();
        expires = expires.setHours(expires.getHours() + 24);
        localStorage.setItem("hasVisitedBefore", expires);
      }
    };

    window.setTimeout(handleShowModal, 2000);
  }, [HAS_VISITED_BEFORE]);

  const handleClose = () => setShowModal(false);
  return (
    <MainWrap>
      {showModal ? (
        <GuideBg onClick={handleClose}>
          <button onClick={handleClose}>x</button>
          <GuideImg src={guideImg} alt="가이드" />
        </GuideBg>
      ) : (
        ""
      )}
      <Nav navData={navData} />
      <FixBox>
        <Search>
          <input
            type="text"
            placeholder="일정 상세 검색"
            onChange={scheduleSearchEvent}
          />
          <img src={searchImg} alt="돋보기 아이콘" />
        </Search>

        <AddButtoon onClick={MoveBtn}>+</AddButtoon>
      </FixBox>
      {search === "" ? (
        <Calendar />
      ) : (
        <SearchWrapper>
          <UpBar>
            <SearchInfo>{'" ' + search + ' "'} 검색결과</SearchInfo>
            <SearchInfo>{dataArraySum} 건</SearchInfo>
          </UpBar>
          <SearchHr />
          {searchDataList?.map((tasksData, idx) => {
            const dayData = tasksData[0].split("");
            const year = "20" + dayData[0] + dayData[1];
            const month = dayData[2] + dayData[3];
            const day = dayData[4] + dayData[5];
            const today = new Date();
            const dday = new Date(year, month, day);
            const gap = dday.getTime() - today.getTime();
            const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
            return (
              <SearchDataWrapper key={idx}>
                <SearchDataDayWrap>
                  <SearchDataDay>
                    {year +
                      "년 " +
                      month +
                      "월 " +
                      day +
                      "일 " +
                      "(" +
                      getDate(dday) +
                      ")"}
                  </SearchDataDay>
                  <SearchDataDDay>{"d" + (0 - result)}</SearchDataDDay>
                </SearchDataDayWrap>
                <SearchDataCardWrap>
                  {tasksData[1].map((data, idx) => {
                    return (
                      <SearchDataCard key={idx}>
                        <MainDataWrap>
                          <MainData>
                            <SearchDataColor color={data.color} />
                            <SearchDataTitleWrap>
                              <SearchDataTime>
                                {data.date.split(" ")[1].split(":")[0] +
                                  ":" +
                                  data.date.split(" ")[1].split(":")[1]}
                              </SearchDataTime>
                              <SearchDataTitle>
                                {data.title.split(search)[0]}
                                <span style={{ color: "#4F32FF" }}>
                                  {search}
                                </span>
                                {data.title.split(search)[1]}
                              </SearchDataTitle>
                            </SearchDataTitleWrap>
                          </MainData>
                          <Sticker
                            src={
                              data.sticker === 2
                                ? img2
                                : data.sticker === 3
                                ? img3
                                : data.sticker === 4
                                ? img4
                                : data.sticker === 5
                                ? img5
                                : data.sticker === 6
                                ? img6
                                : data.sticker === 7
                                ? img7
                                : img8
                            }
                          ></Sticker>
                        </MainDataWrap>
                        <Hr />
                        <MemoBox>{data.memo}</MemoBox>
                        <LocationBox>
                          <LocationImg src={locationGray} />
                          <LocationText>{data.place}</LocationText>
                        </LocationBox>
                      </SearchDataCard>
                    );
                  })}
                </SearchDataCardWrap>
              </SearchDataWrapper>
            );
          })}
        </SearchWrapper>
      )}
    </MainWrap>
  );
}
export default Main;
const GuideImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
const GuideBg = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
  width: 100%;
  height: 100vh;
  button {
    position: absolute;
    top: 10%;
    right: 10%;
    color: #fff !important;
    z-index: 999;
    font-size: 20px;
  }
`;

const MainWrap = styled.div`
  position: relative;
`;
const FixBox = styled.div`
  width: calc(100% - 24px);
  padding: 9px 12px;
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
const Search = styled.label`
  position: relative;
  input {
    width: 243px;
    border: 1px solid var(--blue2);
    border-radius: 32px;
    padding: 18px 0;
    padding-left: 27px;
    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: var(--blue3);
    }
    &:focus {
      outline: none;
      border: 0;
    }
  }
  img {
    position: absolute;
    top: 50%;
    right: 22px;
    transform: translateY(-50%);
  }
`;
const AddButtoon = styled.button`
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: var(--blue4);
  text-align: center;
  font-size: 28px;
  display: flex;
  justify-content: center;
  color: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  padding: 14px 17px;
  padding-bottom: 78px;
  display: flex;
  flex-direction: column;
  width: calc(100% -34px);
  background: #ecf1f8;
  height: calc(100vh - 253px);
  overflow-y: scroll;
`;

const UpBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% -32px);
  padding: 18px 16px;
  border-bottom: 1px solid var(--blue2);
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
  margin-top: 27px;
`;

const SearchDataDayWrap = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
  width: auto;
  display: inline-block;
  display: flex;
  justify-content: space-between;
`;

const SearchDataDay = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
  margin-bottom: 34px;
`;

const SearchDataDDay = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
`;

const SearchDataCardWrap = styled.div`
  width: 342px;
  height: auto;
  margin: 0px auto;
`;

const SearchDataCard = styled.div`
  width: 342px;
  height: 147px;
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const MainDataWrap = styled.div`
  width: auto;
  display: inline-block;
  padding: 16px 14px 14px 10px;

  display: flex;
  justify-content: space-between;
`;

const MainData = styled.div``;

const SearchDataColor = styled.div`
  float: left;
  margin-right: 15px;
  width: 3.1px;
  height: 39.25px;
  background: ${(props) =>
    props.color === 1
      ? "#16E611"
      : props.color === 2
      ? "rgba(253, 187, 110, 1)"
      : props.color === 3
      ? "rgba(253, 247, 110, 1)"
      : props.color === 4
      ? "rgba(253, 247, 110, 1)"
      : props.color === 5
      ? "rgba(253, 247, 110, 1)"
      : props.color === 6
      ? "rgba(253, 247, 110, 1)"
      : "rgba(154, 154, 154, 1)"};
`;

const SearchDataTitleWrap = styled.div`
  float: left;
`;

const SearchDataTitle = styled.div`
  width: 250px;
  height: 19px;
  font-weight: 700;
  font-size: 16px;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SearchDataTime = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #777777;
  width: 31px;
  height: 14px;
  line-height: 14px;
  margin-bottom: 7px;
`;

const Sticker = styled.img`
  width: 37.2px;
  height: 35.03px;
`;

const Hr = styled.hr`
  background: #ecf1f8;
  width: 320.3px;
  height: 1px;
  border: none;
  margin: auto;
`;

const MemoBox = styled.div`
  padding: 5px 8px;
  background: #efefef;
  border-radius: 2px;
  width: 292px;
  height: 15px;
  margin: 8px auto;
  font-weight: 500;
  font-size: 12px;
  color: #9a9a9a;
  line-height: 15px;
`;

const LocationBox = styled.div`
  padding: 5px 8px;
  border-radius: 2px;
  width: 292px;
  height: 15px;
  margin: 8px auto;
  font-weight: 500;
  font-size: 12px;
  color: #9a9a9a;
  line-height: 15px;
`;

const LocationImg = styled.img`
  float: left;
  margin-right: 5px;
`;

const LocationText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #9a9a9a;
`;
