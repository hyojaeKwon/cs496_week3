import React from "react";
import styled from 'styled-components';
import Textholder from "./TrendingSite";
import Subtitle from "./TrendingSite";
import CardHolder from "./TrendingSite";
import Title from "./TrendingSite";
import PostCard from "./PostCard";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

// const Container = styled.div`
//   width: 250px;
//   height: 333px;
//   border-radius: 8px;
// `;

const BackGround = styled.div`
  width: 1060px;
  margin-top: 70px;
`;

const TrendingPost = () => {
  SwiperCore.use([Navigation]);

  return (
    <BackGround>
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
        <SwiperSlide>
          <CardHolder>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
          </CardHolder>
        </SwiperSlide>

        <SwiperSlide>
          <CardHolder>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
          </CardHolder>
        </SwiperSlide>


      </Swiper>
    </BackGround>

  );
};

export default TrendingPost;