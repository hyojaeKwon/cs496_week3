import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 10%;
    margin-top: 3rem;
`
const Title = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: #686D76;
    margin-top: 1rem;
`

const MyPage = () => {
    return(
        <div>
            <Header/>
            <Navigation/>
            <Wrapper>
                <div style={{fontSize: '1.8rem', fontWeight: 600, color: '#4F8A8B', display: 'inline-block', marginLeft: '2rem'}}>최윤지</div><div style={{fontSize: '1.5rem', fontWeight: 600, color: '#686D76', display: 'inline-block'}}>님의 프로필</div>
                <div style={{width: '80%', height: '1rem', borderBottom: '1px solid #e3e3e3'}}></div>
                <Title>자기소개</Title>
                <Title>최근 포스팅</Title>
            </Wrapper>
            
        </div>
    )
};

export default MyPage;