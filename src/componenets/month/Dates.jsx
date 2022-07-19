import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Dates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx } = props;

  const [evtList, setEvtList] = useState([]);
  const [isActive, setIsActive] = useState(false);
  let dateKey = `${month}` + `${elm}`;
  return (
    <>
      <Form
        elm={elm}
        onClick={() => {
          console.log(year + "년" + month + "월" + elm + "일");
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
        {Boolean(evtList[0]) && (
          <Lists>
            {evtList.map((list, index) => {
              return (
                list.slice(0, list.indexOf("_")) === dateKey && (
                  <List key={index}>
                    {list.slice(list.indexOf("_") + 1, list.length)}
                  </List>
                )
              );
            })}
          </Lists>
        )}
      </Form>
    </>
  );
};
const Form = styled.li`
  width: calc(100% / 7);
  padding: 13px 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;

  :nth-child(7n + 1) div label {
    color: var(--blue3);
  }
  :nth-child(7n) div label {
    color: var(--point3);
  }
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
  font-weight: 500;
  font-size: 12px;
  padding: 10px;
  width: 33px;
  height: 33px;
  border-radius: 100%;
`;
const Lists = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const List = styled.span``;

export default Dates;
