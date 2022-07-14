import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Dates = (props) => {
  const { lastDate, firstDate, elm, findToday, month, year, idx, holiday } =
    props;

  const [userInput, setUserInput] = useState({});
  const [evtList, setEvtList] = useState([]);
  const [isActive, setIsActive] = useState(false);
  let dateKey = `${month}` + `${elm}`;
  const registEvent = (value) => {
    setEvtList([...evtList, value]);
    setUserInput("");
  };
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
  padding: 6px;
  text-align: center;
  border-bottom: 1px solid #e4e3e6;
  border-left: 1px solid #e4e3e6;
  box-sizing: border-box;

  /* :nth-child(7n - 1),
  :nth-child(7n) {
    color: #969696;
    background-color: #f5f5f5;
  } */
`;

const DateNum = styled.div``;

const TodayCSS = styled.input`
  display: none;

  :checked + label {
    background-color: ${(props) => (props.isActive ? "var(--blue4)" : "")};
    color: ${(props) => (props.isActive ? "#fff" : "")};
  }
`;

const CheckDay = styled.label`
  border: ${(props) => props.findToday && "2px solid var(--blue4)"};

  padding: 6px;
  width: 33px;
  height: 33px;
  border-radius: 100%;
`;
const Lists = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
const List = styled.span`
  margin-top: 0.3vw;
  padding-left: 0.5vw;
  background-color: #f7ced9;
  border-radius: 5px;
`;

export default Dates;
