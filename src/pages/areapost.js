import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import styled from 'styled-components';
import travel from '../img/travel.jpeg';

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


const AreaPost = ({ match }) => {
    const area = match.params.area;

    return(
        <div>
            <Header/>
            <Navigation/>
            <div styled={{display: 'inline-block'}}>
                <Title>RETRAVEL {area}</Title>
            </div>
            <PostWrapper>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
                <PostPreview image='../img/travel.jpeg'>
                    <AreaName>{area}</AreaName>
                    <Like>♡10</Like>
                </PostPreview>
            </PostWrapper>
            <Footer/>
        </div>
    )
}

export default AreaPost;
