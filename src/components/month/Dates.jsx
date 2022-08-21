import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { activeDate, selectDate } from "../../redux/modules/date";
import { loadDaily } from "../../redux/modules/schedule";

const Dates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx } = props;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [monthList, setMonthList] = useState();
  const monthSchdule = useSelector((state) => state.schedule.month);
  const zoom = useSelector((state) => state.date.zoom.zoomInOut);
  let dateKey = `${year}-${String(month).padStart(2, "0")}-${String(
    elm
  ).padStart(2, "0")} 00:00:00`;

  useEffect(() => {
    dispatch(activeDate(isActive));
  }, [isActive]);
  useEffect(() => {
    setMonthList(Object.entries(monthSchdule));
  }, [monthSchdule, dateKey]);

  const list =
    monthList &&
    monthList?.map((value, idx) => (
      <FlexList key={idx}>
        {value[1]?.map((content, index) => {
          if (
            index < 2 &&
            content?.date.split(" ")[0] === dateKey.split(" ")[0]
          ) {
            return (
              <TextList key={index} color={content.color}>
                {content.title}
              </TextList>
            );
          }
        })}
      </FlexList>
    ));
  function CircleList(index, content) {
    if (
      index >= 2 &&
      index < 5 &&
      content?.date.split(" ")[0] === dateKey.split(" ")[0]
    ) {
      return <List key={index} color={content.color}></List>;
    } else if (
      index === 5 &&
      content?.date.split(" ")[0] === dateKey.split(" ")[0]
    ) {
      return (
        <PlusNumber key={index} color={content.color}>
          +{index - 2}
        </PlusNumber>
      );
    }
  }
  const list2 =
    monthList &&
    monthList?.map((value, idx) => (
      <Lists key={idx}>
        {value[1]?.map((content, index) => {
          return CircleList(index, content);
        })}
      </Lists>
    ));

  const list3 =
    monthList &&
    monthList?.map((value, idx) => (
      <Lists key={idx}>
        {value[1]?.map((content, index) => {
          if (
            index <= 2 &&
            content?.date.split(" ")[0] === dateKey.split(" ")[0]
          ) {
            return <List key={index} color={content.color}></List>;
          } else if (
            index === 3 &&
            content?.date.split(" ")[0] === dateKey.split(" ")[0]
          ) {
            return (
              <PlusNumber key={index} color={content.color}>
                +{index - 2}
              </PlusNumber>
            );
          }
        })}
      </Lists>
    ));

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
          <CircleLists>{list3}</CircleLists>
        ) : (
          <>
            {list}
            {list2}
          </>
        )}
      </Form>
    </>
  );
};
const Form = styled.li`
  width: calc(100% / 7);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  :nth-child(7n) div label {
    color: var(--blue3);
  }
  :nth-child(7n + 1) div label {
    color: var(--point3);
  }
  height: ${(props) => (props.zoom ? "50px" : "95px")};
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
  box-sizing: border-box;
  width: 34px;
  height: 34px;
  border: ${(props) => props.findToday && "2px solid var(--blue4)"};
  color: ${(props) => props.findToday && "var(--blue4)!important"};
  padding: ${(props) => (props.findToday ? "8px" : "10px")};
  margin-bottom: ${(props) => (props.findToday ? "5px" : "")};
  font-weight: 500;
  font-size: 12px;
  border-radius: 100%;
  cursor: pointer;
  display: block;
`;
const Lists = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 3px;
`;
const CircleLists = styled.div`
  display: flex;
  align-items: center;
`;
const TextList = styled.p`
  width: 41px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 4px;
  padding: 3px;
  font-size: 8px;
  margin-top: 3px;
  box-sizing: border-box;
  color: #fff;
  color: ${(props) => (props.color === 1 ? "var(--blue4)" : "")};
  border: ${(props) => (props.color === 1 ? "1px solid var(--blue3)" : "")};
  background-color: ${(props) => (props.color === 2 ? "var(--point3)" : "")};
  background-color: ${(props) =>
    props.color === 3 ? "rgba(253, 187, 110, 1)" : ""};
  color: ${(props) => (props.color === 4 ? "var(--black)" : "")};
  background-color: ${(props) =>
    props.color === 4 ? "rgba(253, 247, 110, 1)" : ""};
  background-color: ${(props) =>
    props.color === 5 ? "rgba(110, 253, 150, 1)" : ""};
  background-color: ${(props) =>
    props.color === 6 ? "rgba(110, 218, 253, 1)" : ""};
  background-color: ${(props) =>
    props.color === 7 ? "rgba(130, 110, 253, 1)" : ""};
  background-color: ${(props) => (props.color === 8 ? "var(--gray2)" : "")};
  background-color: ${(props) => (props.color === 9 ? "var(--blue4)" : "")};
`;
const List = styled.p`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  box-sizing: border-box;
  border: ${(props) => (props.color === 1 ? "1px solid var(--blue3)" : "")};
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
  background-color: ${(props) => (props.color === 9 ? "var(--blue4)" : "")};
`;
const FlexList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PlusNumber = styled.p`
  font-weight: 500;
  font-size: 8px;
  color: var(--blue4);
`;

export default Dates;
