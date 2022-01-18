import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import styled from "styled-components";
import Wide1 from '../../img/wide1.jfif';
import Wide2 from '../../img/wide2.jfif';
import Wide3 from '../../img/wide3.jfif';

const Container1 = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${Wide1});
  overflow:hidden;
  border-radius: 10px;
  box-shadow: 0 8px 12px 0 rgb(33 37 41 / 15%);
  /* background-color: #c4c4c4; */
`;
const Container2 = styled.div`
  width: 100%;
  height: 222px;
  background-image: url(${Wide2});
  overflow:hidden;
  border-radius: 10px;
  box-shadow: 0 8px 12px 0 rgb(33 37 41 / 15%);
  /* background-color: #c4c4c4; */
`;
const Container3 = styled.div`
  width: 100%;
  height: 222px;
  background-image: url(${Wide3});
  border-radius: 10px;
  overflow:hidden;
  box-shadow: 0 8px 12px 0 rgb(33 37 41 / 15%);
  /* background-color: #c4c4c4; */
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
        <Container1/>
      </SwiperSlide>
      <SwiperSlide>
      <Container2/>
      </SwiperSlide>
      <SwiperSlide>
      <Container3/>
      </SwiperSlide>
    </Swiper>
    </div>

  );
};

export default MainSwipe;