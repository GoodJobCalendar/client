import React, { useEffect } from "react";
import styled from "styled-components";

// 리덕스
import { searchMySchedule } from "../../redux/modules/search";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// 이미지
import searchImg from "../../assets/img/icon/search.svg";
const SearchBox = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //일정등록 이동
  const MoveBtn = () => {
    navigate("/addschedule");
  };

  const scheduleSearchEvent = (event) => {
    setSearch(event.target.value);
  };
  useEffect(() => {
    dispatch(searchMySchedule(search));
  }, [search]);
  return (
    <FixBox>
      <Search>
        <input
          type="text"
          placeholder="일정 상세 검색"
          onChange={scheduleSearchEvent}
        />
        <img src={searchImg} alt="돋보기 아이콘" />
      </Search>

      <AddButtoon onClick={MoveBtn}>+</AddButtoon>
    </FixBox>
  );
};

export default SearchBox;

const FixBox = styled.div`
  width: calc(100% - 24px);
  padding: 9px 12px;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px -7px 11px rgba(50, 132, 255, 0.1);
  background-color: #fff;
  z-index: 999;
`;
const Search = styled.label`
  position: relative;
  input {
    width: 243px;
    border: 1px solid var(--blue2);
    border-radius: 32px;
    padding: 18px 0;
    padding-left: 27px;
    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      color: var(--blue3);
    }
    &:focus {
      outline: none;
      border: 0;
    }
  }
  img {
    position: absolute;
    top: 50%;
    right: 22px;
    transform: translateY(-50%);
  }
`;
const AddButtoon = styled.button`
  width: 60px;
  height: 60px;
  line-height: 60px;
  background-color: var(--blue4);
  text-align: center;
  font-size: 28px;
  display: flex;
  justify-content: center;
  color: #fff;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;
