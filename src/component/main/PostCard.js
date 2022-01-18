import React, { useState } from "react";
import styled from 'styled-components';
import Modal from '../Modals/Modal';
// import {Background,Textholder,Subtitle,Title,CardHolder} from "./TrendingSite";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

const Container = styled.div`
  width: 250px;
  height: 333px;
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
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

const PostCard = ({author, place, city, likes, content, image}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const imageUrl = 'http://192.249.18.146:443' + image;

  const openModal = () => {
      console.log('clicked');
      setModalOpen(true);
      
  }

  const closeModal = () => {
      setModalOpen(false);
  }
  return (
    <Container image={imageUrl} onClick={openModal}>
        <AreaName>{city}</AreaName>
        <Like>♡{likes}</Like>
        <Modal open={modalOpen} close={closeModal} author={author} place={place} city={city} likes={likes} content={content} image={imageUrl}></Modal>  
    </Container>
  );
};

export default PostCard;