import React from 'react';
import styled from 'styled-components';

//카드 전체
const Card= styled.div`
  width: 250px;
  height: 333px;
  border-radius: 8px;
  
  /* padding-bottom: 18px; */
  /* padding-top : 26px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #cECEce;
  //justify-content: space-between;
`; 

//순위 나타내는 span
const Rate = styled.span`
  /* margin-top: 26px;
  margin-left: 18px; */
  padding-top : 26px;
  font-weight: 600;
  padding-left: 18px;
  font-size: 48px;
  line-height: 56px;
  color: #ffffff;
`;

//장소 위치 나타내는 span
const Where = styled.span`
  color: #ffffff;
  margin-top: 13px;
  font-weight: 600;
  padding-left: 18px;
  font-size: 24px;
`;

//post 개수 나타내는 span
const Post = styled.span`
  color: #ffffff;
  padding-left: 18px;
  margin-top: 6px;
`;

const GoBtn = styled.a`
  background-color: #FFFFFF;
  color: #495056;
  font-size: 12px;
  padding-bottom: 18px;
  align-items: center;
  text-align: center;
`;

const TravelCard = () => {
  return (
    <Card>
      <Rate># 1</Rate>
      <Where>경기 고양시</Where>
      <Post>220개의 Posts</Post>
    </Card>
  );
};
export default TravelCard;