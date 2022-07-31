import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Pagination, Autoplay } from "swiper";

// 카카오
import { KAKAO_AUTH_URL } from "../shared/api";

// 이미지
import logo from "../assets/img/logo.png";
import logo_w from "../assets/img/logo_w.png";
import logotext from "../assets/img/logo_text.png";
import logotext_w from "../assets/img/logo_text_w.png";
import slide1 from "../assets/img/slide/slide1.png";
import slide2 from "../assets/img/slide/slide2.png";
import slide3 from "../assets/img/slide/slide3.png";
import cover from "../assets/img/cover.png";
import kakaologo from "../assets/img/icon/kakaobtn.png";

const Home = () => {
  return (
    <HomeWrap>
      <header>
        <img src={logo} alt="로고" />
        <Title>당신의 취준 메이트</Title>
        <img src={logotext} alt="로고" />
      </header>
      <main>
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
          className="mySwiper1"
          centeredSlides={true}
          spaceBetween={50}
        >
          <SwiperSlide>
            <SlideBox>
              <div>
                <SlideImg src={slide1} alt="일러스트" />
                <SlideText>
                  잡코리아와 연동해서 <span>취준일정을 관리</span>해보세요!
                </SlideText>
              </div>
            </SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>
              <div>
                <SlideImg src={slide2} alt="일러스트" />
                <SlideText>
                  중요한 일정에는 <span>스티커를 부착</span>해보세요!
                </SlideText>
              </div>
            </SlideBox>
          </SwiperSlide>
          <SwiperSlide>
            <SlideBox>
              <div>
                <SlideImg src={slide3} alt="일러스트" />
                <SlideText>
                  <span>맞춤 취준 공고를</span> 잡코리아에서 바로 확인해보세요!
                </SlideText>
              </div>
            </SlideBox>
          </SwiperSlide>
        </Swiper>
        <CoverImg>
          <Logo>
            <img src={logo_w} alt="로고" />
            <p>당신의 취준 메이트</p>
            <img src={logotext_w} alt="굿잡캘린더" />
          </Logo>
          <img src={cover} alt="배경" />
        </CoverImg>
      </main>
      <FooterWrap>
        <EmailBtn>
          <Link to="/signup">이메일로 시작</Link>
        </EmailBtn>
        <KaKaoBtn>
          <Link to={KAKAO_AUTH_URL}>
            <img src={kakaologo} alt="카카오로고" />
            <p>카카오톡 간편 로그인</p>
          </Link>
        </KaKaoBtn>
        <LoginBtn>
          <Link to="/login">로그인 하기</Link>
        </LoginBtn>
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
  height: 100vh;
  padding: 0 30px;
  background-color: var(--blue1);
  overflow: hidden;
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
const Title = styled.p`
  font-size: 14px;
  margin-top: 12px;
  margin-bottom: 4.6px;
  color: var(--blue4);
`;
const SlideText = styled.p`
  font-size: 14px;
  color: var(--blue4);
  font-weight: 500;
  margin-top: 30px;
  span {
    font-weight: 700;
    color: var(--blue4);
  }
`;
const SlideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    width: 100%;
    height: 268px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
const SlideImg = styled.img``;

const Logo = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    color: white;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 13px;
  }
`;
const CoverImg = styled.div`
  background-color: var(--blue4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    top: 50%;
    position: absolute;
    right: 0;
  }
  animation: hideSplashScreen 0.4s ease-in-out forwards;
  animation-delay: 1s;
  @keyframes hideSplashScreen {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
  z-index: 999;
`;

const EmailBtn = styled.button`
  background: #ffffff;
  border-radius: 6px;
  width: 100%;
  > a {
    font-weight: 400;
    padding: 17px 0;
    width: 100%;
    color: var(--blue3) !important;
    display: block;
  }
`;
const KaKaoBtn = styled.button`
  background: #f8e041;
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  margin-bottom: 24px;
  > a {
    padding: 17px 0;
    font-weight: 400;
    width: 100%;
    color: #371f1e !important;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
const LoginBtn = styled.button`
  background: var(--blue4);
  border-radius: 6px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  > a {
    padding: 17px 0;
    font-weight: 400;
    color: #fff !important;
    width: 100%;
    display: block;
  }
`;
const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
