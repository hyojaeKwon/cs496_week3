import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import styled from 'styled-components';
import travel from '../img/travel.jpeg';
import PostWrapper from '../component/post/postwrapper';

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
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://192.249.18.146:443/api/posts/get-city-posts/'+ area)
        .then(function (response) {
            console.log('포스팅 가져오기 성공');
            const data = response.data;
            console.log(data);
            setPosts([...posts, ...data]);
            console.log(posts);
        })
        .catch(function (error) {
            console.log('에러 발생')
        })
    }, []);

    return(
        <div>
            <Header/>
            <Navigation/>
            <div styled={{display: 'inline-block'}}>
                <Title>RETRAVEL {area}</Title>
            </div>
            <div style={{marginLeft: '10%'}}>
                <PostWrapper posts={posts}></PostWrapper>
            </div>
            <Footer/>
        </div>
    )
}

export default AreaPost;
