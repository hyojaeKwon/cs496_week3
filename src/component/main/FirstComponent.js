import React from 'react';
import styled from "styled-components";
import background from '../../img/main-back.jpg';

//main페이지에 들어갈 첫번째 네모 css 파일 제작
const MainSquare = styled.div`
  width : 1060px;
  height : 450px;
  margin-top: 50px;
  background-image : url(${background});
  box-shadow: 4px 4px 4px rgba(171, 171, 171);
  display : flex;
  align-items : center;
`;

const TextHolder = styled.div`
  display: flex;
  flex-direction : row;
  align-items: flex-end;
  width: 100%;
  justify-content: space-between;
`;
//첫번째 네모에 들어갈 text css
const MainText = styled.span`
  text-align: left;
  font-size: 64px;
  line-height: 75px;
  font-weight: 600;
  margin-left: 80px;
  color: #5c5c5c;
`;

//첫번째 네모에 들어갈 버튼 css
const MainButton = styled.a`
  width: 180px;
  height: 50px;
  border : 0.5px solid #000;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  vertical-align: middle;
`;

const FirstComponent = () => {
  return(   
    <MainSquare>
      <TextHolder>
        <MainText>
          여행을 기록하다, <br/>
          RETRAVEL
        </MainText>
        <MainButton>
          <p>떠나보기</p>
        </MainButton>
      </TextHolder>
    </MainSquare>
  );
}

export default FirstComponent;  