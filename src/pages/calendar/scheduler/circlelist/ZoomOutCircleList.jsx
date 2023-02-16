import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ZoomOutCircleList = ({ datekey }) => {
  const monthSchdule = useSelector((state) => state.schedule.month);
  const monthList = Object.entries(monthSchdule);

  const TextList = (index, totalDate, nowDate, color, title) => {
    if (index < 2) {
      return <Text color={color}>{title}</Text>;
    }
  };
  const CircleList = (index, totalDate, nowDate, color) => {
    if ((index === 2 || index > 2) && index < 5) {
      return <Circle color={color} />;
    } else if (index === 5) {
      return <PlusNumber color={color}>+{index - 2}</PlusNumber>;
    }
  };
  return (
    <>
      {monthList &&
        monthList?.map((value, idx) => (
          <ZoomInCircleListWrap>
            <ListWrap key={idx}>
              {value[1]?.map((content, index) => {
                const totalDate = content?.date.split(' ')[0];
                const nowDate = datekey.split(' ')[0];
                const color = content.color;
                const title = content.title;
                if (totalDate === nowDate) {
                  return TextList(index, totalDate, nowDate, color, title);
                }
              })}
              <CircleWrap>
                {value[1]?.map((content, index) => {
                  const totalDate = content?.date.split(' ')[0];
                  const nowDate = datekey.split(' ')[0];
                  const color = content.color;
                  if (totalDate === nowDate) {
                    return CircleList(index, totalDate, nowDate, color);
                  }
                })}
              </CircleWrap>
            </ListWrap>
          </ZoomInCircleListWrap>
        ))}
    </>
  );
};

export default ZoomOutCircleList;

const ZoomInCircleListWrap = styled.div`
  width: 100%;
`;

const ListWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;
const Text = styled.p`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 4px;
  padding: 3px;
  font-size: 8px;
  box-sizing: border-box;
  color: #fff;
  color: ${(props) => props.color === 1 && `var(--blue4)`};
  border: ${(props) => props.color === 1 && `1px solid var(--blue3);`};
  background-color: ${(props) => props.color === 2 && `var(--point3)`};
  background-color: ${(props) => props.color === 3 && 'rgba(253, 187, 110, 1)'};
  color: ${(props) => props.color === 4 && `var(--black)`};
  background-color: ${(props) => props.color === 4 && 'rgba(253, 247, 110, 1)'};
  background-color: ${(props) => props.color === 5 && 'rgba(110, 253, 150, 1)'};
  background-color: ${(props) => props.color === 6 && 'rgba(110, 218, 253, 1)'};
  background-color: ${(props) => props.color === 7 && 'rgba(130, 110, 253, 1)'};
  background-color: ${(props) => props.color === 8 && `var(--gray2)`};
  background-color: ${(props) => props.color === 9 && `var(--blue4)`};
`;

const CircleWrap = styled.div`
  display: flex;
  gap: 2px;
`;
const Circle = styled.p`
  width: 5px;
  height: 5px;
  border-radius: 100%;
  box-sizing: border-box;
  border: ${(props) => (props.color === 1 ? `1px solid var(--blue3);` : '')};
  background-color: ${(props) => (props.color === 2 ? `var(--point3)` : '')};
  background-color: ${(props) => (props.color === 3 ? 'rgba(253, 187, 110, 1)' : '')};
  background-color: ${(props) => (props.color === 4 ? 'rgba(253, 247, 110, 1)' : '')};
  background-color: ${(props) => (props.color === 5 ? 'rgba(110, 253, 150, 1)' : '')};
  background-color: ${(props) => (props.color === 6 ? 'rgba(110, 218, 253, 1)' : '')};
  background-color: ${(props) => (props.color === 7 ? 'rgba(130, 110, 253, 1)' : '')};
  background-color: ${(props) => (props.color === 8 ? `var(--gray2)` : '')};
  background-color: ${(props) => (props.color === 9 ? `var(--blue4)` : '')};
`;

const PlusNumber = styled.p`
  font-weight: 500;
  font-size: 8px;
  color: var(--blue4);
`;
