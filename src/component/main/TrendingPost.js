import React, { useEffect, useState } from "react";
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
import axios from 'axios';


const NewBackGround = styled(BackGround)`
  margin-bottom: 70px;
  width: 1060px;
  margin-top: 70px;
`;

// const BackGround = styled.div`
//   width: 1060px;
//   margin-top: 70px;
// `;

const TrendingPost = () => {
  SwiperCore.use([Navigation]);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://192.249.18.146:443/api/posts/top-liked-posts', {
        headers: {"Authorization": "Token " + localStorage.getItem('login-token'),}
        })
        .then(function (response) {
            console.log('포스팅 가져오기 성공');
            const data = response.data.slice(0, 8)
            console.log(data);
            setPosts([...posts, ...data]);
            console.log(posts);
        })
        .catch(function (error) {
            console.log('에러 발생')
        })
  }, [])
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
        <SwiperSlide style={{'height':'700px'}}>
          <CardHolder>
            {
              posts.slice(0, 4).map(post => 
                <PostCard author={post.author.nickname} place={post.place} city={post.city} likes={post.like_users.length} content={post.contents} image={post.image}>
                </PostCard>)
            }
          </CardHolder>
        </SwiperSlide>

        <SwiperSlide>
          <CardHolder>
            {
              posts.slice(4, 8).map(post => 
                <PostCard author={post.author.nickname} place={post.place} city={post.city} likes={post.like_users.length} content={post.contents} image={post.image}>
                </PostCard>)
            }
          </CardHolder>
        </SwiperSlide>


      </Swiper>
    </NewBackGround>
    

  );
};

export default TrendingPost;