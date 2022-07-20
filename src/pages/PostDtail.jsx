import React from "react";
import styled from "styled-components";
import arrow from "../assets/img/icon/Back.png";
import update from "../assets/img/icon/Edit.png";
import { useNavigate, useParams } from "react-router-dom";
import sticker from "../assets/img/sticker/Group 1.png";
const PostDtail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const addClick = () => {
    navigate("/main");
  };
  const updateScheduleBtn = () => {};
  return (
    <>
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
        <Sticker src={sticker} />
      </Header>
      <PostDailWrap>
        <Compony>하이퍼커넥트</Compony>
        <TextWrap>
          <Title>
            <Color></Color>하이퍼커넥트 1차 면접
          </Title>
          <DateWrap>
            <p>일정</p>
            <Date>
              <li>7월 8일 (금)</li>
              <li>오전 8:00</li>
            </Date>
          </DateWrap>
          <Text>강남구 봉은사로 아셈타워 20층</Text>
          <Text>아자르팀 면접</Text>
        </TextWrap>
        <Delete>일정 삭제하기</Delete>
      </PostDailWrap>
    </>
  );
};

export default PostDtail;
const Sticker = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 100%;
  position: absolute;
  bottom: -28px;
  right: 40px;
`;
const PostDailWrap = styled.div`
  background-color: var(--blue1);
  height: calc(100% - 150px);
  font-weight: 500;
  padding: 0 16px;
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
const Compony = styled.div`
  padding: 20px;
  font-weight: 500;
  font-size: 20px;
`;
const TextWrap = styled.div`
  gap: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  padding: 20px 33px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
  overflow: hidden;
  position: relative;
`;
const Text = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
`;
const Color = styled.div`
  width: 25px;
  height: 100%;
  background-color: #fd6e6e;
  position: absolute;
  left: 0;
  top: 0;
`;
const DateWrap = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 6px;
  font-weight: 500;
`;
const Date = styled.ul`
  display: flex;
  justify-content: space-between;
  text-align: center;
  li {
    flex: 1;
    padding: 10px 0;
  }
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
const Delete = styled.button`
  width: 100%;
  padding: 18px;
  color: #fff;
  background-color: var(--blue4);
  border-radius: 6px;
  margin-top: 25px;
`;
