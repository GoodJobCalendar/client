import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { activeDate, daily, schedule, selectDate } from "../../redux/modules/date";
import { loadDaily } from "../../redux/modules/schedule";

const Dates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx } = props;
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [mmm, setmmm] = useState();

  let dateKey = `${year}-${String(month).padStart(2, "0")}-${String(elm).padStart(2, "0")} 00:00:00`;
  const monthSchdule = useSelector((state) => state.schedule.month);
  const zoom = useSelector((state) => state.date.zoom.zoomInOut);
  console.log(zoom);

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
        <DateNum idx={idx} lastDate={lastDate} firstDate={firstDate} findToday={findToday}>
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
        {/* {zoom ? (
          ""
        ) : (
          <Lists>
            {mmm &&
              mmm.map((list, index) => {
                return (
                  list.date.split(" ")[0] === dateKey.split(" ")[0] &&
                  index === 0 && (
                    <TextList key={index} color={list.color}>
                      {list.title}
                    </TextList>
                  )
                );
              })}
          </Lists>
        )}
        <FlexList>
          {mmm &&
            mmm.map((list, index) => {
              return (
                list.date.split(" ")[0] === dateKey.split(" ")[0] && (
                  <List key={index} color={list.color}></List>
                )
              );
            })}
        </FlexList> */}
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
  background-color: ${(props) => (props.color === 3 ? "rgba(253, 187, 110, 1)" : "")};
  background-color: ${(props) => (props.color === 4 ? "rgba(253, 247, 110, 1)" : "")};
  background-color: ${(props) => (props.color === 5 ? "rgba(110, 253, 150, 1)" : "")};
  background-color: ${(props) => (props.color === 6 ? "rgba(110, 218, 253, 1)" : "")};
  background-color: ${(props) => (props.color === 7 ? "rgba(130, 110, 253, 1)" : "")};
  background-color: ${(props) => (props.color === 8 ? "var(--gray2)" : "")};
`;
const List = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: ${(props) => (props.color === 1 ? "#fff" : "")};
  background-color: ${(props) => (props.color === 2 ? "var(--point3)" : "")};
  background-color: ${(props) => (props.color === 3 ? "rgba(253, 187, 110, 1)" : "")};
  background-color: ${(props) => (props.color === 4 ? "rgba(253, 247, 110, 1)" : "")};
  background-color: ${(props) => (props.color === 5 ? "rgba(110, 253, 150, 1)" : "")};
  background-color: ${(props) => (props.color === 6 ? "rgba(110, 218, 253, 1)" : "")};
  background-color: ${(props) => (props.color === 7 ? "rgba(130, 110, 253, 1)" : "")};
  background-color: ${(props) => (props.color === 8 ? "var(--gray2)" : "")};
`;
const FlexList = styled.div`
  margin-top: 3px;

  display: flex;
  gap: 2px;
`;

export default Dates;
