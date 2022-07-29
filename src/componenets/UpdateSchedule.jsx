import React, { useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { scheduleUpdate } from "../redux/modules/schedule";

// 스티커
import img1 from "../assets/img/sticker/sticker1.png";
import img2 from "../assets/img/sticker/sticker2.png";
import img3 from "../assets/img/sticker/sticker3.png";
import img4 from "../assets/img/sticker/sticker4.png";
import img5 from "../assets/img/sticker/sticker5.png";
import img6 from "../assets/img/sticker/sticker6.png";
import img7 from "../assets/img/sticker/sticker7.png";
import img8 from "../assets/img/sticker/sticker8.png";

// 커버 이미지
import cover1 from "../assets/img/cover/cover1.png";
import cover2 from "../assets/img/cover/cover2.png";
import cover3 from "../assets/img/cover/cover3.png";
import cover4 from "../assets/img/cover/cover4.png";

// 아이콘
import time from "../assets/img/icon/Time.png";
import location from "../assets/img/icon/Location.png";
import memoimg from "../assets/img/icon/memo.png";
import emptyImg from "../assets/img/illust/needlogin.png";

//Date Picker
import DatePicker from "react-datepicker";
import "date-fns";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

const UpdateSchedule = ({
  scheduleId,
  updateScheduleShow,
  setUpdateScheduleShow,
  detailInfo,
  value,
  onChange,
  ...others
}) => {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(true);

  //리스트 토글
  const [colorPickerShow, setColorPickerShow] = useState(false);
  const [stickerShow, setStickerShow] = useState(false);
  const [coverShow, setCoverShow] = useState(false);
  const [dateShow, setDateShow] = useState(true);
  const [timeShow, setTimeShow] = useState(false);
  //작성목록
  const [color, setColor] = useState("");
  const [sticker, setSticker] = useState("");
  const [image, setImage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [memo, setMemo] = useState("");
  const [cover, setCover] = useState(
    "https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
  );
  //컬러 미리보기
  const [colorPick, setColorPick] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  //Time Picker
  const [selectTime, setSelectTime] = useState("오전");
  const [selectHour, setSelectHour] = useState("01");
  const [selectMinute, setSelectMinute] = useState("00");

  //Date Picker
  let [week, month, day, year, sTime] = startDate.toString().split(" ");
  let Week = (week) => {
    if (week === "Sun") return "일";
    if (week === "Mon") return "월";
    if (week === "Tue") return "화";
    if (week === "Wed") return "수";
    if (week === "Thu") return "목";
    if (week === "Fri") return "금";
    if (week === "Sat") return "토";
  };
  let Month = (month) => {
    if (month === "Jan") return "01";
    if (month === "Feb") return "02";
    if (month === "Mar") return "03";
    if (month === "Apr") return "04";
    if (month === "May") return "05";
    if (month === "Jun") return "06";
    if (month === "Jul") return "07";
    if (month === "Aug") return "08";
    if (month === "Sep") return "09";
    if (month === "Oct") return "10";
    if (month === "Nov") return "11";
    if (month === "Dec") return "12";
  };

  //Time Picker
  const division = ["오전", "오후"];
  const hourSelect = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const minuteSelect = ["00", "10", "20", "30", "40", "50"];

  //오후 시간 선택시 12더하기
  const hour = String(
    Number(selectHour) + Number(selectTime === "오후" ? 12 : 0)
  ).padStart(2, "0");
  // 날짜
  const allDate = `${year}-${Month(month)}-${day} ${hour}:${selectMinute}:00`;

  // 뒤로가기
  const moveBtn = () => {
    setUpdateScheduleShow(!updateScheduleShow);
  };
  // 컬러 리스트 보이기
  const colorShowBtn = () => {
    setColorPickerShow(!colorPickerShow);
  };
  // 스티커 리스트 보이기
  const stickerShowBtn = () => {
    setStickerShow(!stickerShow);
    setCoverShow(false);
  };

  // 커버 이미지 보이기
  const coverShowBtn = () => {
    setCoverShow(!coverShow);
    setStickerShow(false);
  };

  // 컬러 미리보기 / 컬러 pcik
  const colorChange = (e) => {
    setColor(e.target.id);
    setColorPick(e.target.value);
    setColorPickerShow(!colorPickerShow);
  };

  // 스티커 pcik
  const stickerChange = (e) => {
    setSticker(e.target.id);
    setStickerShow(!stickerShow);
  };

  // 커버 이미지 미리보기 / 커버 이미지 pick
  const coverChange = (e) => {
    setCover(e.target.value);
    setImage(e.target.id);
    setCoverShow(!coverShow);
  };
  console.log(scheduleId);
  // 일정등록
  const addScheduleBtn = async () => {
    if ((companyName === "", title === "", allDate === "", place === "")) {
      setEmpty(!empty);
    } else {
      await dispatch(
        scheduleUpdate({
          image: Number(image),
          companyName, //필수입력
          title, //필수입력
          sticker: Number(sticker),
          date: allDate, //필수입력
          place, //필수입력
          memo,
          color: Number(color),
          scheduleId,
        })
      );
      setUpdateScheduleShow(!updateScheduleShow);
    }
  };
  const formatDate = (d) => {
    const date = new Date(d);
    const monthIndex = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${year} ${`0${monthIndex}`.slice(-2)}`;
  };
  const dateShowBtn = () => {
    setDateShow(!dateShow);
    setTimeShow(false);
  };
  const timeShowBtn = () => {
    setDateShow(false);
    setTimeShow(!timeShow);
  };
  return (
    <UpdateSchesuleWrap>
      {empty ? (
        ""
      ) : (
        <NeedPost>
          <NeedPostModal>
            <p>빈칸 작성 필요</p>
            <img src={emptyImg} alt="빈칸 작성 필요" />
            <span>빈칸을 모두 입력해주세요.</span>
            <NeedPostBtn
              onClick={() => {
                setEmpty(!empty);
              }}
            >
              계속 작성하기
            </NeedPostBtn>
          </NeedPostModal>
        </NeedPost>
      )}
      <Header style={{ backgroundImage: `url(${cover})` }}>
        <AddFlex>
          <Btn onClick={moveBtn}>&lt;</Btn>
          <Btn onClick={addScheduleBtn}>저장</Btn>
        </AddFlex>
        <BtnFlex>
          <TitleInput>
            <AddBtn onClick={stickerShowBtn}>스티커 추가</AddBtn>
            {stickerShow ? (
              <StickerList>
                <label htmlFor="1">
                  <Input
                    type="radio"
                    name="sticker"
                    id="1"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img1} />
                </label>
                <label htmlFor="2">
                  <Input
                    type="radio"
                    name="sticker"
                    id="2"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img2} />
                </label>
                <label htmlFor="3">
                  <Input
                    type="radio"
                    name="sticker"
                    id="3"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img3} />
                </label>
                <label htmlFor="4">
                  <Input
                    type="radio"
                    name="sticker"
                    id="4"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img4} />
                </label>
                <label htmlFor="5">
                  <Input
                    type="radio"
                    name="sticker"
                    id="5"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img5} />
                </label>
                <label htmlFor="6">
                  <Input
                    type="radio"
                    name="sticker"
                    id="6"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img6} />
                </label>
                <label htmlFor="7">
                  <Input
                    type="radio"
                    name="sticker"
                    id="7"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img7} />
                </label>
                <label htmlFor="8">
                  <Input
                    type="radio"
                    name="sticker"
                    id="8"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img8} />
                </label>
              </StickerList>
            ) : (
              ""
            )}
          </TitleInput>
          <TitleInput>
            <AddBtn onClick={coverShowBtn}>커버 변경</AddBtn>
            {coverShow ? (
              <CoverList>
                <label htmlFor="1">
                  <Input
                    type="radio"
                    name="cover"
                    id="1"
                    value="https://ifh.cc/g/T7qvdv.png"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover1} alt="커버 이미지1" />
                  </CoverImg>
                </label>
                <label htmlFor="2">
                  <Input
                    type="radio"
                    name="cover"
                    id="2"
                    value="https://ifh.cc/g/F6SksX.png"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover2} alt="커버 이미지2" />
                  </CoverImg>
                </label>
                <label htmlFor="3">
                  <Input
                    type="radio"
                    name="cover"
                    id="3"
                    value="https://ifh.cc/g/z3hwr6.png"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover3} alt="커버 이미지3" />
                  </CoverImg>
                </label>
                <label htmlFor="4">
                  <Input
                    type="radio"
                    name="cover"
                    id="4"
                    value="https://ifh.cc/g/Ba7rRW.png"
                    onChange={coverChange}
                  />
                  <CoverImg>
                    <img src={cover4} alt="커버 이미지4" />
                  </CoverImg>
                </label>
              </CoverList>
            ) : (
              ""
            )}
          </TitleInput>
        </BtnFlex>
      </Header>
      <AddList>
        <InputText
          type="text"
          placeholder="회사 이름"
          onChange={(event) => {
            setCompanyName(event.target.value);
          }}
        />
        <TitleInput>
          <InputText
            type="text"
            placeholder="제목"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <ColorPicker onClick={colorShowBtn} colorPick={colorPick} />
          {colorPickerShow ? (
            <ColorList>
              <Color1 htmlFor="1"></Color1>
              <Input
                type="radio"
                name="color"
                id="1"
                value="#fff"
                onChange={colorChange}
              />
              <Color2 htmlFor="2"></Color2>
              <Input
                type="radio"
                name="color"
                id="2"
                value="var(--point3)"
                onChange={colorChange}
              />
              <Color3 htmlFor="3"></Color3>
              <Input
                type="radio"
                name="color"
                id="3"
                value="rgba(253, 187, 110, 1)"
                onChange={colorChange}
              />
              <Color4 htmlFor="4"></Color4>
              <Input
                type="radio"
                name="color"
                id="4"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />
              <Color5 htmlFor="5"></Color5>
              <Input
                type="radio"
                name="color"
                id="5"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />
              <Color6 htmlFor="6"></Color6>
              <Input
                type="radio"
                name="color"
                id="6"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />
              <Color7 htmlFor="7"></Color7>
              <Input
                type="radio"
                name="color"
                id="7"
                value="rgba(253, 247, 110, 1)"
                onChange={colorChange}
              />
              <Color8 htmlFor="8"></Color8>
              <Input
                type="radio"
                name="color"
                id="8"
                value="rgba(154, 154, 154, 1)"
                onChange={colorChange}
              />
            </ColorList>
          ) : (
            ""
          )}
        </TitleInput>
        <DateContainer>
          <p>
            <img src={time} alt="" />
            일정
          </p>
          <DateFlex>
            <DateOpenBtn onClick={dateShowBtn} dateShow={dateShow}>{`${Month(
              month
            )}월 ${day}일 (${Week(week)})`}</DateOpenBtn>
            <TimeOpenBtn
              onClick={timeShowBtn}
              timeShow={timeShow}
            >{`${hour}:${selectMinute}`}</TimeOpenBtn>
          </DateFlex>
        </DateContainer>
        <Pick>
          {dateShow && (
            <DateWrap>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="yyyy-MM-dd (eee)"
                showPopperArrow={false}
                inline
                locale={ko}
                popperModifiers={{ preventOverflow: { enabled: true } }}
                popperPlacement="auto"
                shouldCloseOnSelect={true}
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                }) => (
                  <div className="datepickerHeader">
                    <DateHead>
                      <DateYear>{formatDate(date).split(" ")[0]}</DateYear>
                      <DateBtns>
                        <DateBtn onClick={decreaseMonth}> &lt;</DateBtn>
                        <DateMonth className="fomrmatDate">
                          {formatDate(date).split(" ")[1]}월
                        </DateMonth>
                        <DateBtn onClick={increaseMonth}>&gt;</DateBtn>
                      </DateBtns>
                    </DateHead>
                  </div>
                )}
              />
            </DateWrap>
          )}
          {timeShow && (
            <Modal2 className="modal">
              <div className="section">
                <div className="select-time">
                  <div className="division">
                    {division.map((e, idx) => {
                      const color =
                        selectTime === e ? "var(--black)" : "var(--gray2)";
                      return (
                        <SelectTimeBtn
                          key={idx}
                          onClick={() => {
                            setSelectTime(e);
                          }}
                          color={color}
                        >
                          {e}
                        </SelectTimeBtn>
                      );
                    })}
                  </div>
                  <div className="hour">
                    {hourSelect.map((e, idx) => {
                      const color =
                        selectHour === e ? "var(--black)" : "var(--gray2)";
                      return (
                        <SelectTimeBtn
                          key={idx}
                          onClick={() => {
                            setSelectHour(e);
                          }}
                          color={color}
                        >
                          {e}
                        </SelectTimeBtn>
                      );
                    })}
                  </div>
                  <div className="minute">
                    {minuteSelect.map((e, idx) => {
                      const color =
                        selectMinute === e ? "var(--black)" : "var(--gray2)";
                      return (
                        <SelectTimeBtn
                          key={idx}
                          onClick={() => {
                            setSelectMinute(e);
                          }}
                          color={color}
                        >
                          {e}
                        </SelectTimeBtn>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Modal2>
          )}
          <PlaceText>
            <input
              type="text"
              placeholder="장소"
              onChange={(event) => {
                setPlace(event.target.value);
              }}
            />
            <img src={location} alt="장소" />
          </PlaceText>
          <TextArea>
            <img src={memoimg} alt="메모" />
            <textarea
              placeholder="메모"
              onChange={(event) => {
                setMemo(event.target.value);
              }}
            />
          </TextArea>
        </Pick>
      </AddList>
    </UpdateSchesuleWrap>
  );
};

export default UpdateSchedule;
const NeedPost = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  background-color: rgba(17, 17, 17, 0.3);
  z-index: 99999;
`;
const NeedPostBtn = styled.button`
  background-color: var(--blue4);
  padding: 16px 30px;
  color: #fff;
  border-radius: 9px;
  margin-top: 17px;
  a {
    width: 100%;
    height: 100%;
  }
`;
const NeedPostModal = styled.div`
  p {
    font-weight: 700;
    color: var(--blue4);
    margin-bottom: 10px;
  }
  span {
    font-weight: 500;
    color: var(--blue4);
    margin-top: 15px;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 99999;
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32),
    inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  border-radius: 21px;
  padding: 40px 80px;
  width: 45%;
  text-align: center;
`;
const UpdateSchesuleWrap = styled.div`
  background-color: var(--blue1);
  width: 100%;
  font-weight: 500;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  input {
    outline: none;
    padding: 18px;
    background: #ffffff;
    border-radius: 6px;
    border: 0;
    outline: none;
    font-weight: 500;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--blue3);
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
const Btn = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 6px 10px;
  border-radius: 8px;
  z-index: 99;
`;
const AddBtn = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  border: 1px solid #fff !important;
  padding: 6px 10px;
  border-radius: 8px;
  background-color: transparent;
`;
const AddList = styled.section`
  width: 90%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const DateContainer = styled.div`
  background-color: #fff;
  font-weight: 500;
  font-size: 16px;
  padding: 18px;
  border-radius: 6px;
  img {
    margin-right: 12px;
  }
  > p {
    color: var(--blue3);
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
`;
const Pick = styled.div``;
const Header = styled.div`
  width: 90%;
  padding: 5%;
  height: 150px;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  :after {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      #3284ff 100%
    );
  }
`;
const AddFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;
const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  z-index: 99;
`;
const InputText = styled.input`
  width: 90%;
  padding: 10px;
`;
const PlaceText = styled.div`
  margin-top: 16px;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
  }
  input {
    outline: none;
    padding: 18px;
    background: #ffffff;
    border-radius: 6px;
    border: 0;
    outline: none;
    font-weight: 500;

    :focus {
      outline: none;
    }
    ::placeholder {
      color: var(--blue3);
      font-weight: 500;
      font-size: 16px;
    }
    width: 100%;
    width: calc(90% - 24px);
    padding-left: 44px !important;
  }
  background: url(../assets/img/icon/Location.png) center center no-repeat !important;
`;
const TextArea = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
  }
  textarea {
    width: calc(90% - 24px);
    padding: 18px;
    padding-left: 44px !important;
    border: 0;
    margin-top: 16px;
    resize: none;
    border-radius: 6px;
    ::placeholder {
      color: var(--blue3);
      font-weight: 500;
      font-size: 16px;
    }
    :focus {
      outline: none;
    }
  }
`;
const TitleInput = styled.label`
  position: relative;
`;
const ColorPicker = styled.button`
  width: 24px;
  height: 24px;
  background-color: ${(props) =>
    props.colorPick ? props.colorPick : "var(--blue1)"};
  border-radius: 100%;
  border: 5px solid var(--gray1);
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;
const StickerList = styled.div`
  position: absolute;
  top: calc(100% + 9px);
  left: 10%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  gap: 10px 15px;
  flex-wrap: wrap;
  border: 1px solid var(--gray2);
  border-radius: 15px;
  padding: 8px 12px;
  width: 275px;
  z-index: 99;
`;
const CoverList = styled.div`
  position: absolute;
  top: calc(100% + 9px);
  right: 0;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  gap: 10px 15px;
  flex-wrap: wrap;
  border: 1px solid var(--gray2);
  border-radius: 15px;
  padding: 8px 12px;
  width: 275px;
  z-index: 99;
`;

const ColorList = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 90%;
  border-radius: 6px;
  background: var(--blue1);
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32),
    inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  z-index: 99;
`;
const Input = styled.input`
  display: none;
`;
const Color1 = styled.label`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const Color2 = styled.label`
  background-color: var(--point3);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const Color3 = styled.label`
  background-color: rgba(253, 187, 110, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const Color4 = styled.label`
  background-color: rgba(253, 247, 110, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const Color5 = styled.label`
  background-color: rgba(110, 253, 150, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const Color6 = styled.label`
  background-color: rgba(110, 218, 253, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const Color7 = styled.label`
  background-color: rgba(130, 110, 253, 1);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const Color8 = styled.label`
  background-color: var(--gray2);
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
  border: 2px solid var(--gray2);
  cursor: pointer;
`;
const StickerImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;
const CoverImg = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  img {
    height: 100%;
  }
`;
const TimeOpenBtn = styled.button`
  font-weight: 500;
  color: var(--blue3);
  padding: 7px 10px;
  background-color: ${(props) =>
    props.timeShow ? "var(--blue1)" : "transparent"};
  border-radius: 35px;
`;
const DateOpenBtn = styled.button`
  font-weight: 500;
  color: var(--blue3);
  background-color: ${(props) =>
    props.dateShow ? "var(--blue1)" : "transparent"};
  padding: 7px 10px;
  border-radius: 35px;
`;
const DateFlex = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
const DateYear = styled.p`
  font-weight: 700;
  font-size: 14px;
  color: var(--gray3);
`;
const DateWrap = styled.div`
  .react-datepicker {
    width: calc(100% - 40px);
    padding: 17px 20px;
    background: var(--blue1);
    box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32),
      inset 0px 8px 14px rgba(255, 255, 255, 0.3);
    border-radius: 6.83801px;
    border: 0;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__header {
    width: 100%;
    background-color: transparent;
    border-bottom: none;
  }
  .datepickerHeader {
    margin-bottom: 14px;
  }
  .react-datepicker__day-name {
    :nth-child(1) {
      color: var(--point3);
    }
    :nth-child(7) {
      color: var(--blue3);
    }
  }
  .react-datepicker__day--weekend {
    :nth-child(1) {
      color: var(--point3);
    }
    :nth-child(7) {
      color: var(--blue3);
    }
  }
  .react-datepicker__day-names {
    margin-bottom: 8px;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: calc(100% / 7);
    line-height: 42px;
    height: 42px;
    margin: 0;
    text-align: center;
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected,
  .react-datepicker__day--selected,
  .react-datepicker__day--selected:hover {
    border-radius: 100%;
    background-color: var(--blue4);
    line-height: 42px;
    height: 42px;

    color: white !important;
  }
  .react-datepicker__day--outside-month {
    opacity: 0;
  }
  input {
    background-color: transparent;
    font-weight: 500;
    font-size: 16px;
    color: var(--blue3);

    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: var(--blue3);
    }
  }
`;

const DateHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateBtns = styled.div`
  display: flex;
  gap: 18px;
`;

const DateBtn = styled.button`
  color: var(--gray2);
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--gray2) !important;
  border-radius: 100%;
  background-color: transparent;
  cursor: pointer;
`;

const DateMonth = styled.p`
  font-weight: 700;
  font-size: 14px;
`;

const SelectTimeBtn = styled.button`
  background-color: transparent;
  padding: 10px;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.color && props.color};
`;
const Modal2 = styled.div`
  background-color: var(--blue1);
  box-shadow: 0px 14px 24px -4px rgba(117, 146, 189, 0.32),
    inset 0px 8px 14px rgba(255, 255, 255, 0.3);
  border-radius: 6.83801px;
  border: none;
  height: 150px;
  overflow: hidden;
  padding: 18px;
  text-align: center;

  .select-time {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: auto;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 150px;
      padding: 10px 10px;
      width: auto;
      box-sizing: border-box;
      text-align: center;
      flex: 1;
      text-align: center;
      overflow-y: scroll;
      :nth-child(1) {
        justify-content: center;
      }
    }
  }
`;
