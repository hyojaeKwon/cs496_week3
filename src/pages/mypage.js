import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import styled from 'styled-components';
import travel from '../img/travel.jpeg';
import PostWrapper from '../component/post/postwrapper';

const Wrapper = styled.div`
    width: 1060px;
    margin-left: 10%;
    margin-top: 3rem;
`

const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: #5c5c5c;
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
`

const Introduction = styled.div`
    font-size: 1.2rem;
    width: 80%;
    height: 10rem;
    margin-left: 1rem;
    margin-bottom: 7rem;
    padding-left: 2rem;
    background-color: #d4d4d4;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;

`

const PostPreview = styled.div`
    width: 15rem;
    height: 20rem;
    display: inline-block;
    margin-top: 1rem;
    margin-left: 1rem;
    background-color: #cfcfcf;
    border-radius: 1rem;
    background-image: url(${travel});
`;

const AreaName = styled.div`
    display: inline-block;
    margin-left: 1rem;
    margin-top: 17.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
`;

const Like = styled.div`
    display: inline-block;
    margin-left: 6rem;
    margin-top: 17.5rem;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
`;

const MyPage = () => {
    const isAuthorized = localStorage.getItem('login-token');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://192.249.18.146:443/api/posts/get-user-post', {
        headers: {"Authorization": "Token " + localStorage.getItem('login-token'),}
        })
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
    }, [])

    return(
        <div>
            {!isAuthorized ? <Redirect to='/signin'/> : 
                <div>
                    <Header/>
                    <Navigation/>
                    <Wrapper>
                        <div style={{fontSize: '1.8rem', fontWeight: 600, color: '#4F8A8B', display: 'inline-block', marginLeft: '2rem'}}>최윤지</div>
                        <div style={{fontSize: '1.5rem', fontWeight: 600, color: '#686D76', display: 'inline-block'}}>님의 프로필</div>
                        <div style={{fontSize: '1.2rem', fontWeight: 500, backgroundColor: '#4F8A8B', display: 'inline-block', color: 'white', marginLeft: '2rem', padding: '0.3rem', borderRadius: '0.2rem'}}>FOLLOW</div>
                        <div style={{width: '80%', height: '1rem', borderBottom: '1px solid #e3e3e3'}}></div>
                        <Title>자기소개</Title>
                        <Introduction>
                            이것은 자기소개입니다.
                        </Introduction>
                        <Title>최근 포스팅</Title>
                        <PostWrapper posts={posts}></PostWrapper>
                    </Wrapper>
                    <Footer/>
                </div>
            }
        </div>
        
    )
};

export default MyPage;