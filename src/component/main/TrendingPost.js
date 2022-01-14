import React from "react";
// import Textholder from "./TrendingSite";
// import Subtitle from "./TrendingSite";
// import CardHolder from "./TrendingSite";
// import Title from "./TrendingSite";
import PostCard from "./PostCard";
import styled from "styled-components";
import { CardHolder, TextHolder, Title, SubTitle, BackGround  } from "./TrendingSite";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const NewBackGround = styled(BackGround)`
  margin-bottom: 70px;
  width: 1060px;
  margin-top: 70px;
`;

const TrendingPost = () => {
  SwiperCore.use([Navigation]);

  return (
<NewBackGround>
      <TextHolder>
        <Title>
        인기 포스트
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
    </NewBackGround>
    

  );
};

export default TrendingPost;