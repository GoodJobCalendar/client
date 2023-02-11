import React, { useEffect } from 'react';
import styled from 'styled-components';

// 리덕스
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// 이미지
import searchImg from '../../assets/icon/search.svg';
import { searchMySchedule } from './../../modules/search';

const SearchBox = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //일정등록 이동
  const OnclickLink = () => {
    navigate('/addschedule');
  };

  // 검색어
  const scheduleSearchEvent = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    dispatch(searchMySchedule(searchText));
  }, [searchText]);

  return (
    <FixBox>
      <Search>
        <SearchInput type='text' placeholder='일정 상세 검색' onChange={scheduleSearchEvent} />
        <SearchImg src={searchImg} alt='돋보기 아이콘' />
      </Search>

      <AddButtoon onClick={OnclickLink}>+</AddButtoon>
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
`;

const SearchImg = styled.img`
  position: absolute;
  top: 50%;
  right: 22px;
  transform: translateY(-50%);
`;
const SearchInput = styled.input`
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
