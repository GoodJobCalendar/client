import React from 'react';
import styled from 'styled-components';

// 스와이퍼
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';

//이미지
import slide1 from '../../assets/slide/slide1.png';
import slide2 from '../../assets/slide/slide2.png';
import slide3 from '../../assets/slide/slide3.png';

const Slide = () => {
  return (
    <SlideWrap>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        modules={[Autoplay, Pagination]}
        className='mySwiper1'
        centeredSlides={true}
        spaceBetween={50}
      >
        <SwiperSlide>
          <SlideBox>
            <div>
              <SlideImg src={slide1} alt='일러스트1' />
              <SlideText>
                잡코리아와 연동해서 <span>취준일정을 관리</span>해보세요!
              </SlideText>
            </div>
          </SlideBox>
        </SwiperSlide>
        <SwiperSlide>
          <SlideBox>
            <div>
              <SlideImg src={slide2} alt='일러스트2' />
              <SlideText>
                중요한 일정에는 <span>스티커를 부착</span>해보세요!
              </SlideText>
            </div>
          </SlideBox>
        </SwiperSlide>
        <SwiperSlide>
          <SlideBox>
            <div>
              <SlideImg src={slide3} alt='일러스트3' />
              <SlideText>
                <span>맞춤 취준 공고를</span> 잡코리아에서 바로 확인해보세요!
              </SlideText>
            </div>
          </SlideBox>
        </SwiperSlide>
      </Swiper>
    </SlideWrap>
  );
};

export default Slide;

const SlideWrap = styled.main`
  // swiper css
  .mySwiper1 {
    margin-top: 34px;
    margin-bottom: 77px;
    overflow: visible;
    .swiper-pagination {
      bottom: -34px;
    }
    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      background-color: var(--blue2);
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background-color: var(--blue4);
    }
  }
`;
const SlideText = styled.p`
  font-size: 14px;
  color: var(--blue4);
  font-weight: 500;
  margin-top: 30px;
  > span {
    font-weight: 700;
    color: var(--blue4);
  }
`;
const SlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  > div {
    width: 100%;
    height: 268px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
const SlideImg = styled.img`
  width: 375px;
  height: 224px;
`;
