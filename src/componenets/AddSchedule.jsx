import React, { useState } from "react";
import styled from "styled-components";
import DatePick from "./DatePicker";
import TimePick from "./TimePick";

const AddSchedule = ({ addSchedule, SetAddSchedule }) => {
  const [fileImage, setFileImage] = useState("");
  const [colorPickerShow, setColorPickerShow] = useState(false);
  const [color, setColor] = useState("");

  const fileInputRef = React.useRef();
  const addClick = () => {
    SetAddSchedule(!addSchedule);
  };
  const ColorClick = () => {
    setColorPickerShow(!colorPickerShow);
  };
  //프로필 사진 업로드
  const saveFileImage = async (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    // setProfileImage(e.target.files)
  };
  //input창 숨기고 사진 넣기
  const onClickImageUpload = () => {
    fileInputRef.current.click();
  };
  const handleChange = (e) => {
    setColor(e.target.id);
    setColorPickerShow(!colorPickerShow);
  };

  return (
    <AddSchesuleWrap>
      <Header style={{ backgroundImage: `url(${fileImage})` }}>
        <AddFlex>
          <button onClick={addClick}>&lt;</button>
          <button onClick={addClick}>저장</button>
        </AddFlex>
        <BtnFlex>
          <button>스티커 추가</button>
          <button onClick={onClickImageUpload}>
            커버 변경
            <input
              name="imgUpload"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={saveFileImage}
              style={{ display: "none" }}
            />
          </button>
        </BtnFlex>
      </Header>
      <AddList>
        <Input type="text" placeholder="회사 이름" />
        <TitleInput>
          <Input type="text" placeholder="제목" />
          <ColorPicker onClick={ColorClick} color={color} />
          {colorPickerShow ? (
            <ColorList>
              <Red htmlFor="red"></Red>
              <ColorInput
                type="radio"
                name="color"
                id="red"
                onChange={handleChange}
              />
              <Orange htmlFor="orange"></Orange>
              <ColorInput
                type="radio"
                name="color"
                id="orange"
                onChange={handleChange}
              />
              <Yellow htmlFor="yellow"></Yellow>
              <ColorInput
                type="radio"
                name="color"
                id="yellow"
                onChange={handleChange}
              />
              <Green htmlFor="green"></Green>
              <ColorInput
                type="radio"
                name="color"
                id="green"
                onChange={handleChange}
              />

              <Blue htmlFor="blue"></Blue>
              <ColorInput
                type="radio"
                name="color"
                id="blue"
                onChange={handleChange}
              />
              <Black htmlFor="black"></Black>
              <ColorInput
                type="radio"
                name="color"
                id="black"
                onChange={handleChange}
              />
              <Purple htmlFor="purple"></Purple>
              <ColorInput
                type="radio"
                name="color"
                id="purple"
                onChange={handleChange}
              />
              <Pink htmlFor="pink"></Pink>
              <ColorInput
                type="radio"
                name="color"
                id="pink"
                onChange={handleChange}
              />
            </ColorList>
          ) : (
            ""
          )}
        </TitleInput>
        <Pick>
          <DatePick />
          <TimePick />
        </Pick>
        <Input type="text" placeholder="장소" />
        <Input type="text" placeholder="메모" />
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
  background: url("https://placedog.net/375/150") center center no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
const Input = styled.input`
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
const ColorList = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  display: flex;
  width: 140px;
  background-color: #fff;
  gap: 10px 0;
  flex-wrap: wrap;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 10px;
  justify-content: space-between;
  z-index: 9999;
`;
const ColorInput = styled.input`
  display: none;
`;
const Red = styled.label`
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Orange = styled.label`
  background-color: orange;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Blue = styled.label`
  background-color: blue;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Black = styled.label`
  background-color: black;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Purple = styled.label`
  background-color: purple;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Yellow = styled.label`
  background-color: yellow;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Green = styled.label`
  background-color: green;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Pink = styled.label`
  background-color: pink;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: block;
`;
const Pick = styled.div`
  width: 100%;
  display: flex;
`;
