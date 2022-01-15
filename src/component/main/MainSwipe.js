import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 222px;
  background-color: #c4c4c4;
`;

const MainSwipe = () => {
  return (
    <div style={{ width: '1060px', 'margin-top':'70px'}}>
          <Swiper
    spaceBetween={50}
    slidesPerView={1}
    centeredSlides
    onSlideChange={() => console.log("slide change")}
    pagination={{ clickable:true }}
    onSwiper={swiper => console.log(swiper)}
    > 
      <SwiperSlide>
        <Container/>
      </SwiperSlide>
      <SwiperSlide>
        <Container/>
      </SwiperSlide>
      <SwiperSlide>
        <Container/>
      </SwiperSlide>
    </Swiper>
    </div>

  );
};

export default MainSwipe;