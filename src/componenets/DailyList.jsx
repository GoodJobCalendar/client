import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import img1 from "../assets/img/sticker/sticker1.png";
import img2 from "../assets/img/sticker/sticker2.png";
import img3 from "../assets/img/sticker/sticker3.png";
import img4 from "../assets/img/sticker/sticker4.png";
import img5 from "../assets/img/sticker/sticker5.png";
import img6 from "../assets/img/sticker/sticker6.png";
import img7 from "../assets/img/sticker/sticker7.png";
import img8 from "../assets/img/sticker/sticker8.png";
import img9 from "../assets/img/sticker/sticker9.png";
import { Link, Navigate } from "react-router-dom";
const DailyList = () => {
  const dailySchedule = useSelector((state) => state.schedule.daily);
  const dailyList = Object.entries(dailySchedule);

  let [week, mm, day, yy, sTime] = new Date().toString().split(" ");

  let Month = (mm) => {
    if (mm === "Jan") return "01";
    if (mm === "Feb") return "02";
    if (mm === "Mar") return "03";
    if (mm === "Apr") return "04";
    if (mm === "May") return "05";
    if (mm === "Jun") return "06";
    if (mm === "Jul") return "07";
    if (mm === "Aug") return "08";
    if (mm === "Sep") return "09";
    if (mm === "Oct") return "10";
    if (mm === "Nov") return "11";
    if (mm === "Dec") return "12";
  };
  const today = `${yy}-${Month(mm)}-${day}`;
  const fullDate = (day) => {
    return `20${day.substr(0, 2)}년 ${day.substr(2, 2)}월 ${day.substr(
      4,
      2
    )}일 `;
  };
  const date = new Date(
    `20${day.substr(0, 2)},${day.substr(2, 2)},${day.substr(4, 2)}`
  );
  function getDate(whatDay) {
    //날짜문자열 형식은 자유로운 편

    const week = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    const dayOfWeek = week[new Date(whatDay).getDay()];

    return dayOfWeek;
  }
  const list =
    dailyList &&
    dailyList?.map((value, index) => (
      <ScheduleListWrap key={index}>
        {value[1]?.map((content, idx) => (
          <div>
            {idx === 0 && (
              <DayFlex key={value[1].scheduleId}>
                <Day>
                  {idx === 0 && fullDate(value[0])}
                  {idx === 0 && getDate(day)}
                </Day>
                <Dday>
                  {idx === 0 &&
                    (new Date(content.date.split(" ")[0]) - new Date(today) > 0
                      ? `D- ${Math.floor(
                          (new Date(content.date.split(" ")[0]) -
                            new Date(today)) /
                            (1000 * 60 * 60 * 24)
                        )}`
                      : new Date(content.date.split(" ")[0]) -
                          new Date(today) !==
                        0
                      ? `D+ ${Math.floor(
                          (new Date(today) -
                            new Date(content.date.split(" ")[0])) /
                            (1000 * 60 * 60 * 24)
                        )}`
                      : "D-day")}
                </Dday>
              </DayFlex>
            )}

            <MoveDetail
              onClick={() => {
                Navigate(`/postdetail/${content?.scheduleId}`);
              }}
            >
              <ScheduleItem>
                <TimeText>
                  {(content?.date).split(" ")[1].split(":")[0]}:
                  {(content?.date).split(" ")[1].split(":")[1]}
                </TimeText>
                <Color color={content?.color}></Color>
                <Text>{content.title}</Text>
                {content?.sticker === 1 ? (
                  <Sticker>
                    <img src={img1} alt="" />
                  </Sticker>
                ) : content?.sticker === 2 ? (
                  <Sticker>
                    <img src={img2} alt="" />
                  </Sticker>
                ) : content?.sticker === 3 ? (
                  <Sticker>
                    <img src={img3} alt="" />
                  </Sticker>
                ) : content?.sticker === 4 ? (
                  <Sticker>
                    <img src={img4} alt="" />
                  </Sticker>
                ) : content?.sticker === 5 ? (
                  <Sticker>
                    <img src={img5} alt="" />
                  </Sticker>
                ) : content?.sticker === 6 ? (
                  <Sticker>
                    <img src={img6} alt="" />
                  </Sticker>
                ) : content?.sticker === 7 ? (
                  <Sticker>
                    <img src={img7} alt="" />
                  </Sticker>
                ) : content?.sticker === 8 ? (
                  <Sticker>
                    <img src={img8} alt="" />
                  </Sticker>
                ) : content?.sticker === 9 ? (
                  <Sticker>
                    <img src={img9} alt="" />
                  </Sticker>
                ) : (
                  ""
                )}
              </ScheduleItem>
            </MoveDetail>
          </div>
        ))}
      </ScheduleListWrap>
    ));
  return <Container>{list}</Container>;
};

export default DailyList;

const Container = styled.div`
  padding-bottom: 78px;
`;
const ScheduleListWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    width: 100%;
    height: 100%;
    margin-top: 16px;
    :nth-child(2) {
      margin-top: 0;
    }
  }
`;
const ScheduleItem = styled.div`
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
`;
const MoveDetail = styled.div`
  margin-bottom: 16px;
`;
const DayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 26px;
`;
const Color = styled.div`
  width: 3px;
  height: 32px;
  border-radius: 6px;
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
  background-color: ${(props) => (props.color === 9 ? "var(--blue4)" : "")};
`;
const Day = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--blue4);
`;
const Dday = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: var(--point2);
`;
const TimeText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: var(--blue3);
  padding: 6px 9px;
`;
const Text = styled.p`
  flex: 7;
  font-weight: 700;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 16px;
`;
const Sticker = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  > img {
    width: 100%;
  }
`;
