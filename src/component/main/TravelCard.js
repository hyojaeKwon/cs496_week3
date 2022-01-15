import React from 'react';
import styled from 'styled-components';
import Main from '../../pages/main';
// import { BackGround } from './TrendingSite';

//카드 전체
const Card= styled.div`
  width: 250px;
  height: 333px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgb(33 37 41 / 8%);
  position: relative;
  z-index: 0;
`; 

//이미지 들어가는곳 
const Img = styled.img`
  height: 101%;
  left: 0;
  z-index: -2;
  width : auto;
  transition: 0.4s ease-out;
  :hover{
    cursor: pointer;
    transform: scale(1.4);
  }
`;

//백그라운드 이미지 들어가는 곳
const BackImg = styled.div`
  background-image: linear-gradient(142deg,rgba(0,0,0,.7),hsla(0,0%,100%,0) 65%);
  height : 100%;
  width: 100%;
  position: absolute;
  left:0;
  top: 0;
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction : column;
  position: absolute;
  top: 0px;
  left: 24px;
`;
//순위 나타내는 span
const Rate = styled.span`
  /* margin-top: 26px;
  margin-left: 18px; */
  padding-top : 26px;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

//장소 위치 나타내는 span
const Where = styled.span`
  color: #ffffff;
  margin-top: 13px;
  font-weight: 600;
  font-size: 24px;
`;

//post 개수 나타내는 span
const Post = styled.span`
  color: #ffffff;
  margin-top: 6px;
`;

const GoBtn = styled.a`
  background-color: #FFFFFF;
  position: absolute;
  width: 75px;
  padding-top: 12px;
  color: #495056;
  font-size: 12px;  
  left: 24px;
  border-radius: 4px;
  font-weight: 700;
  bottom: 28px;
  padding-bottom: 18px;
  align-items: center;
  text-align: center;
  line-height: 1;
  &:hover{
    transition: box-shadow .1s ease-out,background-color .1s ease-out,color .1s ease-out,border-bottom .1s ease-out;
  }
`;

const TravelCard = () => {
  return (
    <Card>
      <Img className="hov" src='https://cphoto.asiae.co.kr/listimglink/6/2017091415054302292_1.jpg'/>
      <BackImg />

      <InnerCard>
        <Rate># 1</Rate>
        <Where>경기 고양시</Where>
        <Post>220개의 Posts</Post>
      </InnerCard>
        <GoBtn path='/' component={Main}>
          둘러 보기
        </GoBtn> 

    </Card>
  );
};
export default TravelCard;