import React from "react";
import styled from "styled-components";
// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

import { Pagination } from "swiper";
import { Link } from "react-router-dom";

import { KAKAO_AUTH_URL } from "../shared/api";

const Home = () => {
  return (
    <HomeWrap>
      <header>
        <img src="http://company.jobkorea.co.kr/img/common/jk_logo.png" />
        <p>당신의 취준 메이트</p>
        <h1>굿잡 캘린더</h1>
      </header>
      <main>
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper1"
        >
          <SwiperSlide>
            <SlideBox>Slide 1</SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>Slide 2</SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>Slide 3</SlideBox>
          </SwiperSlide>
        </Swiper>
      </main>
      <FooterWrap>
        <Link to="/signup">🍏 이메일로 시작</Link>
        <a href={KAKAO_AUTH_URL}>🍑 카카오톡 간편 로그인</a>
        <Link to="/login">로그인 하기</Link>
      </FooterWrap>
    </HomeWrap>
  );
};

export default Home;
const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
`;
const SlideBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
