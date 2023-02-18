import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// 스티커 배경
import img2 from '../../assets/sticker/sticker2.png';
import img3 from '../../assets/sticker/sticker3.png';
import img4 from '../../assets/sticker/sticker4.png';
import img5 from '../../assets/sticker/sticker5.png';
import img6 from '../../assets/sticker/sticker6.png';
import img7 from '../../assets/sticker/sticker7.png';
import img8 from '../../assets/sticker/sticker8.png';

// 이미지
import locationGray from '../../assets/icon/LocationGray.svg';

const SearchList = ({ searchText }) => {
  const searchKeyword = useSelector((state) => state.search.searchKeyword);
  const searchData = useSelector((state) => state.search.search);

  const searchDataList = Object.entries(searchData);

  const dataArray = searchDataList?.map((data, idx) => data[1]?.length);

  const dataArraySum = dataArray?.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  function getDate(whatDay) {
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const dayOfWeek = week[new Date(whatDay).getDay()];

    return dayOfWeek;
  }
  return (
    <SearchWrapper>
      <UpBar>
        <SearchInfo>{'" ' + searchKeyword + ' "'} 검색결과</SearchInfo>
        <SearchInfo>{dataArraySum} 건</SearchInfo>
      </UpBar>
      <SearchHr />
      {searchDataList?.map((tasksData, idx) => {
        const dayData = tasksData[0].split('');
        const year = '20' + dayData[0] + dayData[1];
        const month = dayData[2] + dayData[3];
        const day = dayData[4] + dayData[5];
        const today = new Date();
        const dday = new Date(year, month, day);
        const gap = dday.getTime() - today.getTime();
        const result = Math.ceil(gap / (1000 * 60 * 60 * 24));
        return (
          <SearchDataWrapper key={idx}>
            <SearchDataDayWrap>
              <SearchDataDay>{year + '년 ' + month + '월 ' + day + '일 ' + '(' + getDate(dday) + ')'}</SearchDataDay>
              <SearchDataDDay>{'d' + (0 - result)}</SearchDataDDay>
            </SearchDataDayWrap>
            <SearchDataCardWrap>
              {tasksData[1].map((data, idx) => {
                return (
                  <SearchDataCard key={idx}>
                    <Link to={`/postdetail/${data?.scheduleId}`}>
                      <MainDataWrap>
                        <MainData>
                          <SearchDataColor color={data.color} />
                          <SearchDataTitleWrap>
                            <SearchDataTime>
                              {data.date.split(' ')[1].split(':')[0] + ':' + data.date.split(' ')[1].split(':')[1]}
                            </SearchDataTime>
                            <SearchDataTitle>
                              {data.title.split(searchText)[0]}
                              <span style={{ color: '#4F32FF' }}>{searchText}</span>
                              {data.title.split(searchText)[1]}
                            </SearchDataTitle>
                          </SearchDataTitleWrap>
                        </MainData>
                        <Sticker
                          src={
                            data.sticker === 2
                              ? img2
                              : data.sticker === 3
                              ? img3
                              : data.sticker === 4
                              ? img4
                              : data.sticker === 5
                              ? img5
                              : data.sticker === 6
                              ? img6
                              : data.sticker === 7
                              ? img7
                              : img8
                          }
                        ></Sticker>
                      </MainDataWrap>
                    </Link>

                    <Hr />
                    <MemoBox>{data.memo}</MemoBox>
                    <LocationBox>
                      <LocationImg src={locationGray} />
                      <LocationText>{data.place}</LocationText>
                    </LocationBox>
                  </SearchDataCard>
                );
              })}
            </SearchDataCardWrap>
          </SearchDataWrapper>
        );
      })}
    </SearchWrapper>
  );
};

export default SearchList;

const SearchWrapper = styled.div`
  padding: 14px 17px;
  padding-bottom: 78px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ecf1f8;
  height: 100vh;
  overflow-y: scroll;
`;

const UpBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px 16px;
  border-bottom: 1px solid var(--blue2);
`;

const SearchInfo = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #74a0e3;
`;

const SearchHr = styled.hr`
  width: 343px;
  height: 1px;
  background: #a6c9ff;
  margin: 0px auto;
  border: none;
`;

const SearchDataWrapper = styled.div`
  margin-top: 27px;
`;

const SearchDataDayWrap = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
  width: auto;
  display: inline-block;
  display: flex;
  justify-content: space-between;
`;

const SearchDataDay = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
  margin-bottom: 34px;
`;

const SearchDataDDay = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #3284ff;
`;

const SearchDataCardWrap = styled.div`
  a {
    display: block;
  }
  width: 342px;
  height: auto;
  margin: 0px auto;
`;

const SearchDataCard = styled.div`
  width: 342px;
  height: 147px;
  background: #ffffff;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const MainDataWrap = styled.div`
  width: auto;
  display: inline-block;
  padding: 16px 14px 14px 10px;

  display: flex;
  justify-content: space-between;
`;

const MainData = styled.div``;

const SearchDataColor = styled.div`
  float: left;
  margin-right: 15px;
  width: 3.1px;
  height: 39.25px;
  background: ${(props) =>
    props.color === 1
      ? '#16E611'
      : props.color === 2
      ? 'rgba(253, 187, 110, 1)'
      : props.color === 3
      ? 'rgba(253, 247, 110, 1)'
      : props.color === 4
      ? 'rgba(253, 247, 110, 1)'
      : props.color === 5
      ? 'rgba(253, 247, 110, 1)'
      : props.color === 6
      ? 'rgba(253, 247, 110, 1)'
      : 'rgba(154, 154, 154, 1)'};
`;

const SearchDataTitleWrap = styled.div`
  float: left;
`;

const SearchDataTitle = styled.div`
  width: 250px;
  height: 19px;
  font-weight: 700;
  font-size: 16px;
  color: #111111;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SearchDataTime = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #777777;
  width: 31px;
  height: 14px;
  line-height: 14px;
  margin-bottom: 7px;
`;

const Sticker = styled.img`
  width: 37.2px;
  height: 35.03px;
`;

const Hr = styled.hr`
  background: #ecf1f8;
  width: 320.3px;
  height: 1px;
  border: none;
  margin: auto;
`;

const MemoBox = styled.div`
  padding: 5px 8px;
  background: #efefef;
  border-radius: 2px;
  width: 292px;
  margin: 8px auto;
  font-weight: 500;
  font-size: 12px;
  color: #9a9a9a;
`;

const LocationBox = styled.div`
  padding: 5px 8px;
  border-radius: 2px;
  width: 292px;
  margin: 8px auto;
  font-weight: 500;
  font-size: 12px;
  color: #9a9a9a;
`;

const LocationImg = styled.img`
  float: left;
  margin-right: 5px;
`;

const LocationText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #9a9a9a;
`;
