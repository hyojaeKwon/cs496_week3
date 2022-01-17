import React from "react";
import styled from 'styled-components';
// import {Background,Textholder,Subtitle,Title,CardHolder} from "./TrendingSite";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

const Container = styled.div`
  width: 250px;
  height: 333px;
  position: relative;
  background-color: #cecece;
  border-radius: 8px;
`;

const AreaName = styled.div`
    display: inline-block;
    position: absolute;
    bottom : 20px;
    left: 23px;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: SCDream5;
`

const Like = styled.div`
    position : absolute;
    display: inline-block;

    bottom : 20px;
    right: 23px;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: SCDream5;
`;

const PostCard = () => {
  return (
    <Container>
      
        <AreaName>
          경기 고양시
        </AreaName>
        <Like>
          ♡10
        </Like>  
    </Container>
  );
};

export default PostCard;