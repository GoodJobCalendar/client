import React from "react";
import styled from "styled-components";
import arrow from "../assets/img/icon/Back.png";
import update from "../assets/img/icon/Edit.png";
const PostDtail = () => {
  const addClick = () => {};
  const updateScheduleBtn = () => {};
  return (
    <div>
      {" "}
      <Header
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80')`,
        }}
      >
        <BtnFlex>
          <Btn onClick={addClick}>
            <img src={arrow} alt="뒤로가기" />
          </Btn>
          <Btn onClick={updateScheduleBtn}>
            <img src={update} alt="수정하기" />
          </Btn>
        </BtnFlex>
      </Header>
    </div>
  );
};

export default PostDtail;
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
const BtnFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button`
  background-color: transparent;
`;
