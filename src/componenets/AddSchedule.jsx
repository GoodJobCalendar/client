import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import img1 from "../assets/img/sticker/Group 1.png";
import img2 from "../assets/img/sticker/Group 2.png";
import img3 from "../assets/img/sticker/Group 3.png";
import img4 from "../assets/img/sticker/Group 4.png";
import img5 from "../assets/img/sticker/Group 5.png";
import img6 from "../assets/img/sticker/Group 6.png";
import img7 from "../assets/img/sticker/Group 7.png";
import img8 from "../assets/img/sticker/Group 8.png";
import cover1 from "../assets/img/cover/cover1.jpg";
import cover2 from "../assets/img/cover/cover2.jpg";
import cover3 from "../assets/img/cover/cover3.jpg";
import cover4 from "../assets/img/cover/cover4.jpg";
import cover5 from "../assets/img/cover/cover5.jpg";
import cover6 from "../assets/img/cover/cover6.jpg";
import cover7 from "../assets/img/cover/cover7.jpg";
import cover8 from "../assets/img/cover/cover8.jpg";
import { SchduleDB } from "../redux/modules/post";
import "date-fns";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
const AddSchedule = ({
  addSchedule,
  SetAddSchedule,
  value,
  onChange,
  ...others
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [colorPickerShow, setColorPickerShow] = useState(false);
  const [stickerShow, setStickerShow] = useState(false);
  const [coverShow, setCoverShow] = useState(false);

  const [color, setColor] = useState("");
  const [sticker, setSticker] = useState("");
  const [image, setImage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [memo, setMemo] = useState("");
  const [cover, setCover] = useState("https://ifh.cc/g/rRCaTb.jpg");

  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate)
  const [dispatchTime, setDispatchTime] = useState(moment());
  console.log(dispatchTime)
  const now = moment().hour(0).minute(0);

  const handleValueChange = (value) => {
    setDispatchTime(value);
    console.log("value" + value);
  };
  const addClick = () => {
    SetAddSchedule(!addSchedule);
  };
  const ColorClick = () => {
    setColorPickerShow(!colorPickerShow);
  };
  const StickerClick = () => {
    setStickerShow(!stickerShow);
  };
  const coverClick = () => {
    setCoverShow(!stickerShow);
  };

  const colorChange = (e) => {
    setColor(e.target.id);
    setColorPickerShow(!colorPickerShow);
  };
  const stickerChange = (e) => {
    setSticker(e.target.id);
    setStickerShow(!stickerShow);
  };
  const coverChange = (e) => {
    setCover(e.target.value);
    setImage(e.target.id);
    console.log(e.target);
    setCoverShow(!coverShow);
  };
  // setDate(startDate + dispatchTime);
  const addScheduleBtn = async (e) => {
    dispatch(
      SchduleDB({
        image,
        companyName,
        title,
        sticker,
        date,
        place,
        memo,
      })
    );
    navigate("/main");
  };
  return (
    <AddSchesuleWrap>
      <Header style={{ backgroundImage: `url(${cover})` }}>
        <AddFlex>
          <button onClick={addClick}>&lt;</button>
          <button onClick={addScheduleBtn}>저장</button>
        </AddFlex>
        <BtnFlex>
          <TitleInput>
            <button onClick={StickerClick}>스티커 추가</button>
            {stickerShow ? (
              <List>
                <label htmlFor="sticker1">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker1"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img1} />
                </label>
                <label htmlFor="sticker2">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker2"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img2} />
                </label>
                <label htmlFor="sticker3">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker3"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img3} />
                </label>
                <label htmlFor="sticker4">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker4"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img4} />
                </label>
                <label htmlFor="sticker5">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker5"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img5} />
                </label>
                <label htmlFor="sticker6">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker6"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img6} />
                </label>
                <label htmlFor="sticker7">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker7"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img7} />
                </label>
                <label htmlFor="sticker8">
                  <Input
                    type="radio"
                    name="sticker"
                    id="sticker8"
                    onChange={stickerChange}
                  />
                  <StickerImg src={img8} />
                </label>
              </List>
            ) : (
              ""
            )}
          </TitleInput>
          <TitleInput>
            <button onClick={coverClick}>커버 변경</button>
            {coverShow ? (
              <List>
                <label htmlFor="cover1">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover1"
                    value="https://ifh.cc/g/rRCaTb.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover1} />
                </label>
                <label htmlFor="cover2">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover2"
                    value="https://ifh.cc/g/46sJrK.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover2} />
                </label>
                <label htmlFor="cover3">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover3"
                    value="https://ifh.cc/g/nxGmlc.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover3} />
                </label>
                <label htmlFor="cover4">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover4"
                    value="https://ifh.cc/g/pYVt1o.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover4} />
                </label>
                <label htmlFor="cover5">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover5"
                    value="https://ifh.cc/g/o2h5z4.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover5} />
                </label>
                <label htmlFor="cover6">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover6"
                    value="https://ifh.cc/g/z3jLkW.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover6} />
                </label>
                <label htmlFor="cover7">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover7"
                    value="https://ifh.cc/g/PJ5SXW.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover7} />
                </label>
                <label htmlFor="cover8">
                  <Input
                    type="radio"
                    name="cover"
                    id="cover8"
                    value="https://ifh.cc/g/V1yarv.jpg"
                    onChange={coverChange}
                  />
                  <CoverImg src={cover8} />
                </label>
              </List>
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
          <ColorPicker onClick={ColorClick} color={color} />
          {colorPickerShow ? (
            <List>
              <Red htmlFor="red"></Red>
              <Input
                type="radio"
                name="color"
                id="red"
                onChange={colorChange}
                checked
              />
              <Orange htmlFor="orange"></Orange>
              <Input
                type="radio"
                name="color"
                id="orange"
                onChange={colorChange}
              />
              <Yellow htmlFor="yellow"></Yellow>
              <Input
                type="radio"
                name="color"
                id="yellow"
                onChange={colorChange}
              />
              <Green htmlFor="green"></Green>
              <Input
                type="radio"
                name="color"
                id="green"
                onChange={colorChange}
              />

              <Blue htmlFor="blue"></Blue>
              <Input
                type="radio"
                name="color"
                id="blue"
                onChange={colorChange}
              />
              <Black htmlFor="black"></Black>
              <Input
                type="radio"
                name="color"
                id="black"
                onChange={colorChange}
              />
              <Purple htmlFor="purple"></Purple>
              <Input
                type="radio"
                name="color"
                id="purple"
                onChange={colorChange}
              />
              <Pink htmlFor="pink"></Pink>
              <Input
                type="radio"
                name="color"
                id="pink"
                onChange={colorChange}
              />
            </List>
          ) : (
            ""
          )}
        </TitleInput>
        <Pick>
          <DateWrap>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM-dd (eee)"
              locale={ko}
            />
          </DateWrap>
          <Div>
            <TimePicker
              locale={ko}
              showSecond={false}
              minuteStep={5}
              {...others}
              use12Hours={true}
              value={dispatchTime}
              defaultValue={now}
              onChange={handleValueChange}
              format="a HH:mm"
              showTime={{ use12Hours: true, format: "a HH:mm" }}
            />
          </Div>
        </Pick>

        <InputText
          type="text"
          placeholder="장소"
          onChange={(event) => {
            setPlace(event.target.value);
          }}
        />
        <InputText
          type="text"
          placeholder="메모"
          onChange={(event) => {
            setMemo(event.target.value);
          }}
        />
      </AddList>
    </AddSchesuleWrap>
  );
};

export default AddSchedule;
const AddSchesuleWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 100%;
  height: 100%;
  z-index: 999;
  input {
    outline: none;
    padding: 18px 23px;
    background: #ffffff;
    border: 1px solid var(--blue2);
    border-radius: 6px;
    ::placeholder {
      color: var(--blue3);
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
const AddList = styled.section`
  width: 90%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
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
`;
const AddFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const InputText = styled.input`
  width: 90%;
  padding: 10px;
`;
const TitleInput = styled.label`
  position: relative;
`;
const ColorPicker = styled.button`
  width: 25px;
  height: 25px;
  background-color: ${(props) => (props.color ? props.color : "var(--gray2)")};
  border-radius: 100%;
  border: 5px solid var(--gray1);
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
`;
const List = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  display: flex;
  width: 200px;
  background-color: #fff;
  gap: 10px 0;
  flex-wrap: wrap;
  border: 1px solid var(--gray2);
  border-radius: 30px;
  padding: 10px;
  justify-content: space-between;
  z-index: 9999;
`;
const Input = styled.input`
  display: none;
`;
const Red = styled.label`
  background-color: red;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Orange = styled.label`
  background-color: orange;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Blue = styled.label`
  background-color: blue;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Black = styled.label`
  background-color: black;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Purple = styled.label`
  background-color: purple;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Yellow = styled.label`
  background-color: yellow;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Green = styled.label`
  background-color: green;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Pink = styled.label`
  background-color: pink;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  display: block;
`;
const Pick = styled.div`
  width: 100%;
  display: flex;
`;
const StickerImg = styled.img`
  width: 50px;
  height: 50px;
`;
const CoverImg = styled.img`
  width: 100px;
  border-radius: 10px;
`;
const DateWrap = styled.div`
  .react-datepicker-popper {
    width: 90%;
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker {
    border: 1px solid #ccc;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .react-datepicker__header {
    padding-top: 0.8em;
    background-color: white;
    width: 100%;
    max-width: 330px;
    margin: auto;
    border: none;
  }
  .react-datepicker__month {
    margin: 0.4em;
  }
  .react-datepicker__day-name {
    margin: 3%;
    font-size: 12px;
    font-weight: 500;
    color: #959595;
  }
  .react-datepicker__month {
    margin: 0;
  }
  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 25px;
  }
  .react-datepicker__day {
    width: 25px;
    height: 25px;
    font-size: 12px;
    margin: 3%;
    line-height: 1.8;
    text-align: center;
    background-color: #fff;
  }
  .react-datepicker__day:hover {
    background-color: transparent;
  }
  .fomrmatDate {
    font-size: 22px;
    font-weight: 500;
  }
  .react-datepicker__day--selected {
    background-color: var(--blue4);
    border-radius: 100%;
    border: none;
    font-weight: 700;
    text-align: center;
    line-height: 25px;
  }
  .react-datepicker__day--keyboard-selected {
    color: #000;
  }
  .react-datepicker__input-container {
    cursor: pointer;
  }
`;
const Div = styled.div`
  position: relative !important;
`;
