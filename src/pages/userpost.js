import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import styled from 'styled-components';
import travel from '../img/travel.jpeg';
import Modal from '../component/Modals/Modal'

const Title = styled.div`
    font-size: 2.5rem;
    color: #686D76;
    font-weight: 400;
    margin-top: 3rem;
    margin-left: 10%;
`;

const PostPreview = styled.div`
    width: 15rem;
    height: 20rem;
    display: inline-block;
    margin-top: 2rem;
    margin-left: 1rem;
    background-color: #cfcfcf;
    border-radius: 1rem;
    background-image: url(${travel});
`
const PostWrapper = styled.div`
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10%;
`

const AreaName = styled.div`
    display: inline-block;
    margin-left: 1rem;
    margin-top: 17.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
`

const Like = styled.div`
    display: inline-block;
    margin-left: 6rem;
    margin-top: 17.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
`;

const AddButton = styled(Link)`
    font-size: 1.2rem;
    font-weight: 500;
    background-color: #4F8A8B;
    display: inline-block;
    color: white;
    margin-left: 1000px;
    padding: 0.3rem;
    border-radius: 0.2rem;
    text-decoration: none;
`

const UserPost = ({ match }) => {
    const user = match.params.username;
    const area = match.params.area;

    const postingUrl = '/posting/' + user + '/' + area;

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        console.log('clicked');
        setModalOpen(true);
        
    }

    const closeModal = () => {
        setModalOpen(false);
    }
    
    return(
        <div>
            <Header/>
            <Navigation/>
            <div styled={{display: 'inline-block'}}>
                <Title>RETRAVEL {area}</Title>
                <AddButton to={postingUrl}>포스팅하기</AddButton>
            </div>
            <PostWrapper>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg' onClick={openModal}>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
            </PostWrapper>
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
            </Modal>
            <Footer/>
        </div>
    )
}

export default UserPost;