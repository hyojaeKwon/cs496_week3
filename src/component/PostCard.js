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
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const WhereText = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  font-weight: 600;
  font-size: 13px;
`;


const PostCard = () => {
  return (
    <Container>
      <InnerContainer>
        <WhereText>
          경기 고양시
        </WhereText>
      </InnerContainer>
    </Container>
  );
};

export default PostCard;