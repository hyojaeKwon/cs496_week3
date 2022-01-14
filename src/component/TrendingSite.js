import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TravelCard from "./TravelCard"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import styled from "styled-components";


  //"인기 여행지 탭"
  //"인기있는 여행지 약 4개를 뽑아서 보여준다."
const BackGround = styled.div`
  width: 1060px;
  margin-top: 70px;
`;

const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TextHolder = styled.div`
  display: flex;
  margin-bottom: 22px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
`;

const SubTitle = styled.span`
  font-size: 16px;
`

const TrendingSite = () => {
  SwiperCore.use([Navigation]);

  return (
    <BackGround>
      <TextHolder>
        <Title>
          인기 여행지
        </Title>
        <SubTitle>
          | NOW
        </SubTitle>
      </TextHolder>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      pagination={{ clickable:true }}
      onSwiper={swiper => console.log(swiper)}
      >

        <SwiperSlide>
          <CardHolder>
            <TravelCard/>
            <TravelCard/>
            <TravelCard/>
            <TravelCard/>
          </CardHolder>
        </SwiperSlide>
        
        <SwiperSlide>
          <CardHolder>
            <TravelCard/>
            <TravelCard/>
            <TravelCard/>
            <TravelCard/>
          </CardHolder>
          </SwiperSlide>

      </Swiper>
    </BackGround>
  );
};

export default TrendingSite;