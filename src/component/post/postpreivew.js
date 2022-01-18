import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modals/Modal';

const Wrapper = styled.div`
width: 15rem;
height: 20rem;
display: inline-block;
margin-top: 2rem;
margin-left: 1rem;
background-color: #cfcfcf;
border-radius: 1rem;
background-image: url(${props => props.image});
background-size: cover;
`;

const AreaName = styled.div`
    display: inline-block;
    margin-left: 1rem;
    margin-top: 17.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: SCDream4;
`;

const Like = styled.div`
    display: inline-block;
    margin-left: 6rem;
    margin-top: 17.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: SCDream4;
`;

const PostPreview = ({author, place, city, likes, content, image}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const imageUrl = 'http://192.249.18.146:443' + image;

    const openModal = () => {
        console.log('clicked');
        setModalOpen(true);
        
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return(
        <Wrapper image={imageUrl} onClick={openModal}>
            <AreaName>{city}</AreaName>
            <Like>♡{likes}</Like>
            <Modal open={modalOpen} close={closeModal} author={author} place={place} city={city} likes={likes} content={content} image={imageUrl}></Modal>
        </Wrapper>
    )
}

export default PostPreview;
