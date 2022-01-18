import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import TravelCard from "./TravelCard"
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper";
import styled from "styled-components";


  //"인기 여행지 탭"
  //"인기있는 여행지 약 4개를 뽑아서 보여준다."
export const BackGround = styled.div`
  width: 1060px;
  margin-top: 70px;
`;

export const CardHolder = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TextHolder = styled.div`
  display: flex;
  margin-bottom: 22px;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 36px;
  font-family: SCDream5;
  line-height: 42px;
  margin-right: 10px;
`;

export const SubTitle = styled.span`
  font-size: 16px;
  font-family: SCDream5;
`

const TrendingSite = () => {
  SwiperCore.use([Navigation]);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://192.249.18.146:443/api/posts/top-liked-cities', {
        headers: {"Authorization": "Token " + localStorage.getItem('login-token'),}
        })
        .then(function (response) {
            console.log('top-liked-cities 가져오기 성공');
            const data = response.data;
            console.log(data);
            setPosts([...posts, ...data]);
            console.log(posts);
        })
        .catch(function (error) {
            console.log('에러 발생')
        })
  }, [])

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
            <TravelCard city='서울특별시' imgUrl='https://i.pinimg.com/564x/ef/80/26/ef80268d1f88a5edfe42c03ecce45516.jpg' rate='1' posts='5'/>
            <TravelCard city='제주시' imgUrl='https://i.pinimg.com/564x/f5/d2/6a/f5d26a7de1796a6f51c165b81a5417e9.jpg' rate='2' posts='5'/>
            <TravelCard city='경주시' imgUrl='https://i.pinimg.com/564x/63/63/de/6363de6564ad0dbf4dd04028a81a0ad6.jpg' rate='3' posts='5'/>
            <TravelCard city='강릉시' imgUrl='https://i.pinimg.com/736x/c6/1e/11/c61e11347b0bd59e28cfe846e281de60.jpg' rate='4' posts='5'/>
          </CardHolder>
        </SwiperSlide>
        
        <SwiperSlide>
          <CardHolder>
            <TravelCard city='여수시' imgUrl='https://i.pinimg.com/564x/a2/69/b7/a269b7797a4c6b66e2e6c21074e7fe49.jpg' rate='5' posts='5'/>
            <TravelCard city='고양시' imgUrl='https://i.pinimg.com/564x/32/b2/1b/32b21bf7f9a91f273e48a5a200a4b2de.jpg' rate='6' posts='5'/>
            <TravelCard city='춘천시' imgUrl='https://i.pinimg.com/564x/a9/9f/3f/a99f3f95fd0fc4ab246bb92c71c976e2.jpg' rate='7' posts='5'/>
            <TravelCard city='포항시' imgUrl='https://i.pinimg.com/564x/22/c2/0a/22c20ac6b5ec4b3cf9ae7e72e76c8911.jpg' rate='8' posts='5'/>
          </CardHolder>
          </SwiperSlide>

      </Swiper>
    </BackGround>
  );
};

export default TrendingSite;