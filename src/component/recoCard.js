import React, { Component, useState } from "react";
import styled from "styled-components";

const RecoCard = ({ posts, changeItems}) => {
  // const {posts} = props;
  // const posts = props;
  console.log(posts);
  const List = posts;

  // const recoList = list.map(text => 
  //   <Wrapper>
  // );
  // console.log("넘어옴")
  // console.log(list)


    
    return(
      <div style={{display:'flex',flexDirection:'column'}}>
        {List.map((item,i) => (
          <Wrapper key={i} onClick={() => {
            var obj = new Object()
            obj['x'] = item.longitude;
            obj['y'] = item.latitude;
            changeItems(obj);
          }}>
            <div style={{color: '#4F8A8B', fontSize: '1.2rem','margin-left':'18px'}}>
              {i+1}
            </div>
            <img src={'http://192.249.18.146:443'  + item.image} style={{width:'90%',height:'auto','overflow':'hidden','marginLeft':'18px'}}>
              
            </img>
            <div style={{'fontSize':'20px','fontWeight':'700',color: '#4F8A8B','margin-left':'18px'}}>
              {item.place}
            </div>
            <div style={{'fontSize':'13px','color':'#848484','margin-left':'18px'}}>
              <span>작성자 - </span>
              <span>{item.author.nickname}</span>
            </div>
          </Wrapper>
        ))}
      </div>
    );
  
}

const Wrapper = styled.div`
  width: 320px;
  background-color : rgba(241, 241, 241, 0.4);
  margin-left: 5px;
  margin-bottom: 10px;
  margin-right: 5px;
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  flex-direction: column;
  border: 1px solid rgba(241, 241, 241);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export default RecoCard;