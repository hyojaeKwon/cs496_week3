import React from 'react';
import styled from 'styled-components';

//카드 전체
const Card= styled.div`
  width: 250px;
  height: 333px;
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgb(33 37 41 / 8%);
  /* padding-bottom: 18px; */
  /* padding-top : 26px; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #cECEce;
  //justify-content: space-between;
`; 

const InnerCard = styled.div`
  display: flex;
  flex-direction : column;
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
  transition: box-shadow .1s ease-out,background-color .1s ease-out,color .1s ease-out,border-bottom .1s ease-out;
`;

const TravelCard = () => {
  return (
    <Card>
      <InnerCard>
        <Rate># 1</Rate>
        <Where>경기 고양시</Where>
        <Post>220개의 Posts</Post>
      </InnerCard>
      <div>
        <GoBtn>
          둘러 보기
        </GoBtn>
      </div>
    </Card>
  );
};
export default TravelCard;