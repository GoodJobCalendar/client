import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import img1 from '../../../assets/sticker/sticker1.png';
import img2 from '../../../assets/sticker/sticker2.png';
import img3 from '../../../assets/sticker/sticker3.png';
import img4 from '../../../assets/sticker/sticker4.png';
import img5 from '../../../assets/sticker/sticker5.png';
import img6 from '../../../assets/sticker/sticker6.png';
import img7 from '../../../assets/sticker/sticker7.png';
import img8 from '../../../assets/sticker/sticker8.png';

const ScheduleItemList = ({ idx, content }) => {
  const numberToSticker = (number) => {
    if (number === 1) {
      return img1;
    }
    if (number === 2) {
      return img2;
    }
    if (number === 3) {
      return img3;
    }
    if (number === 4) {
      return img4;
    }
    if (number === 5) {
      return img5;
    }
    if (number === 6) {
      return img6;
    }
    if (number === 7) {
      return img7;
    }
    if (number === 8) {
      return img8;
    }
  };
  return (
    <Fragment key={idx}>
      <Link to={`/postdetail/${content?.scheduleId}`}>
        <ScheduleItem>
          <TimeText>{content?.date.split(' ')[1].substr(0, 5)}</TimeText>
          <Color color={content?.color}></Color>
          <Text>{content?.title}</Text>
          <Sticker>
            <img src={numberToSticker(content?.sticker)} alt='스티커' />
          </Sticker>
        </ScheduleItem>
      </Link>
    </Fragment>
  );
};

export default ScheduleItemList;

const ScheduleItem = styled.div`
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 12px;
`;

const Color = styled.div`
  width: 3px;
  height: 32px;
  border-radius: 6px;
  background-color: ${(props) => (props.color === 1 ? '#fff' : '')};
  background-color: ${(props) => (props.color === 2 ? `var(--point3);` : '')};
  background-color: ${(props) => (props.color === 3 ? 'rgba(253, 187, 110, 1)' : '')};
  background-color: ${(props) => (props.color === 4 ? 'rgba(253, 247, 110, 1)' : '')};
  background-color: ${(props) => (props.color === 5 ? 'rgba(110, 253, 150, 1)' : '')};
  background-color: ${(props) => (props.color === 6 ? 'rgba(110, 218, 253, 1)' : '')};
  background-color: ${(props) => (props.color === 7 ? 'rgba(130, 110, 253, 1)' : '')};
  background-color: ${(props) => (props.color === 8 ? `var(--gray2);` : '')};
  background-color: ${(props) => (props.color === 9 ? `var(--blue4);` : '')};
`;

const TimeText = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: var(--blue3);
  padding: 6px 9px;
`;
const Text = styled.p`
  flex: 7;
  font-weight: 700;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 16px;
`;
const Sticker = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  > img {
    width: 100%;
  }
`;
