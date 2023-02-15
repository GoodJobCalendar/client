import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ZoomInCircleList = ({ datekey }) => {
  const monthSchdule = useSelector((state) => state.schedule.month);
  const monthList = Object.entries(monthSchdule);

  const overlapDate = (index, totalDate, nowDate, color) => {
    if (index <= 2 && totalDate === nowDate) {
      return <List key={`zoomInCicle${index}`} color={color} />;
    } else if (index === 3 && totalDate === nowDate) {
      return (
        <PlusNumber key={color} color={color}>
          +{index - 2}
        </PlusNumber>
      );
    }
  };

  return (
    <CircleLists>
      {monthList &&
        monthList?.map((value, idx) => (
          <Lists key={idx}>
            {value[1]?.map((content, index) => {
              const totalDate = content?.date.split(' ')[0];
              const nowDate = datekey.split(' ')[0];
              const color = content.color;
              return overlapDate(index, totalDate, nowDate, color);
            })}
          </Lists>
        ))}
    </CircleLists>
  );
};

export default ZoomInCircleList;
const CircleLists = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Lists = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const List = styled.p`
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
  line-height: 5px;
  color: var(--blue4);
`;
