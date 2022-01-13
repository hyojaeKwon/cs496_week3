import React from "react";
import styled from 'styled-components';
import {Background,Textholder,Subtitle,Title,CardHolder} from "./TrendingSite";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const Container = styled.div`
  width: 250px;
  height: 333px;
  border-radius: 8px;
`;

const PostCard = () => {
  return (
    <Background>
      <Textholder>
        <Title>
        인기 포스트
        </Title>
        <Subtitle>
        | NOW
        </Subtitle>
      </Textholder>
      <Swiper
    spaceBetween={50}
      slidesPerView={1}
      centeredSlides
      onSlideChange={() => console.log("slide change")}
      pagination={{ clickable:true }}
      onSwiper={swiper => console.log(swiper)}
      >

        {/* Post Card 가 들어가는 부분 */}

        <SwiperSlide>
          <CardHolder>

          </CardHolder>
        </SwiperSlide>

        <SwiperSlide>
          <CardHolder>

          </CardHolder>
        </SwiperSlide>


      </Swiper>
    </Background>

  );
};

export default PostCard;