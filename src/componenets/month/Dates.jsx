import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { activeDate, selectDate } from "../../redux/modules/date";
import { loadDaily } from "../../redux/modules/schedule";

const Dates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx } = props;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const monthSchdule = useSelector((state) => state.schedule.month);
  const zoom = useSelector((state) => state.date.zoom.zoomInOut);
  const response = {
    220728: [
      {
        scheduleId: 40,
        color: 2,
        memo: null,
        sticker: 1,
        coverImage: 0,
        title:
          "[롯데멤버스] 2022년 7월 경력직 및 계약직 채용 (AI/IT기획/디지털마케팅/MD/급여/데이터추출/정산,회계 등)",
        place: "서울 중구",
        date: "2022-07-28 23:59:59",
        companyName: "롯데멤버스㈜",
        postingId: 1,
        type: "auto",
      },
      {
        scheduleId: 43,
        color: 3,
        memo: null,
        sticker: 4,
        coverImage: 0,
        place: "집",
        date: "2022-07-28 01:01:01",
        companyName: "짱좋은회사3",
        type: "manual",
        title: "면접1",
      },
    ],
    220730: [
      {
        scheduleId: 40,
        color: 1,
        memo: null,
        sticker: 3,
        coverImage: 0,
        title:
          "[롯데멤버스] 2022년 7월 경력직 및 계약직 채용 (AI/IT기획/디지털마케팅/MD/급여/데이터추출/정산,회계 등)",
        place: "서울 중구",
        date: "2022-07-30 23:59:59",
        companyName: "롯데멤버스㈜",
        postingId: 1,
        type: "auto",
      },
      {
        scheduleId: 43,
        color: 4,
        memo: null,
        sticker: 2,
        coverImage: 0,
        place: "집",
        date: "2022-07-30 01:01:01",
        companyName: "짱좋은회사3",
        type: "manual",
        title: "면접2",
      },
    ],
  };
  const monthList = Object.entries(response);
  let dateKey = `${year}-${String(month).padStart(2, "0")}-${String(
    elm
  ).padStart(2, "0")} 00:00:00`;

  useEffect(() => {
    dispatch(activeDate(isActive));
  }, [isActive]);

  return (
    <>
      <Form
        elm={elm}
        zoom={zoom}
        onClick={() => {
          dispatch(loadDaily(dateKey));
          dispatch(selectDate(year, month, elm));
        }}
      >
        <DateNum
          idx={idx}
          lastDate={lastDate}
          firstDate={firstDate}
          findToday={findToday}
        >
          <TodayCSS
            id={idx}
            type="radio"
            name="day"
            isActive={isActive}
            onClick={() => {
              setIsActive(!isActive);
            }}
          />
          <CheckDay findToday={findToday} htmlFor={idx}>
            {String(elm).padStart(2, "0")}
          </CheckDay>
        </DateNum>
        {zoom ? (
          ""
        ) : (
          <Lists>
            {monthList &&
              monthList?.map((list, index) => {
                {
                  list[1].map((content, index) => {
                    content?.date.split(" ")[0] === dateKey.split(" ")[0] &&
                      index === 0 && (
                        <TextList key={index} color={content.color}>
                          {content.title}
                        </TextList>
                      );
                  });
                }
              })}
          </Lists>
        )}
        <FlexList>
          {monthList &&
            monthList?.map((list, index) => {
              {
                list[1]?.map((content, index) => {
                  content.date.split(" ")[0] === dateKey.split(" ")[0] && (
                    <List key={index} color={content.color}></List>
                  );
                });
              }
            })}
        </FlexList>
      </Form>
    </>
  );
};
const Form = styled.li`
  width: calc(100% / 7);
  padding: 13px 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  :nth-child(7n) div label {
    color: var(--blue3);
  }
  :nth-child(7n + 1) div label {
    color: var(--point3);
  }
  height: ${(props) => (props.zoom ? "" : "74px")};
`;

const DateNum = styled.div``;

const TodayCSS = styled.input`
  display: none;
  z-index: 1;
  :checked + label {
    background-color: ${(props) => (props.isActive ? "var(--blue4)" : "")};
    color: ${(props) => (props.isActive ? "#fff!important" : "")};
  }
`;

const CheckDay = styled.label`
  z-index: 1;
  border: ${(props) => props.findToday && "2px solid var(--blue4)"};
  color: ${(props) => props.findToday && "var(--blue4)!important"};
  font-weight: 500;
  font-size: 12px;
  padding: 10px;
  width: 33px;
  height: 33px;
  border-radius: 100%;
  cursor: pointer;
`;
const Lists = styled.div``;
const TextList = styled.p`
  margin-top: 3px;
  width: 41px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 4px;
  padding: 3px;
  font-size: 8px;
  background-color: ${(props) => (props.color === 1 ? "#fff" : "")};
  background-color: ${(props) => (props.color === 2 ? "var(--point3)" : "")};
  background-color: ${(props) =>
    props.color === 3 ? "rgba(253, 187, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 4 ? "rgba(253, 247, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 5 ? "rgba(110, 253, 150, 1)" : ""};
  background-color: ${(props) =>
    props.color === 6 ? "rgba(110, 218, 253, 1)" : ""};
  background-color: ${(props) =>
    props.color === 7 ? "rgba(130, 110, 253, 1)" : ""};
  background-color: ${(props) => (props.color === 8 ? "var(--gray2)" : "")};
`;
const List = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: ${(props) => (props.color === 1 ? "#fff" : "")};
  background-color: ${(props) => (props.color === 2 ? "var(--point3)" : "")};
  background-color: ${(props) =>
    props.color === 3 ? "rgba(253, 187, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 4 ? "rgba(253, 247, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 5 ? "rgba(110, 253, 150, 1)" : ""};
  background-color: ${(props) =>
    props.color === 6 ? "rgba(110, 218, 253, 1)" : ""};
  background-color: ${(props) =>
    props.color === 7 ? "rgba(130, 110, 253, 1)" : ""};
  background-color: ${(props) => (props.color === 8 ? "var(--gray2)" : "")};
`;
const FlexList = styled.div`
  margin-top: 3px;

  display: flex;
  gap: 2px;
`;

export default Dates;
