import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin-top: 2%;
    padding-bottom: 0.5%;
    border-bottom: 1px solid #e3e3e3;
`
const Nav = styled(Link)`
    width: 7.5rem;
    height: 2rem;
    margin-left: 3%;
    text-align: center;
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    font-family: SCDream4;
    color: #686D76;
    text-decoration: none;
    &:hover{
        font-weight: 800;
        color: #4F8A8B;
    }
`;


const Navigation = () => {
    return(
        <NavBar>
            <div style={{ width: '7%', display:'inline-block'}}></div>
            <Nav to='/intro'>리트래블</Nav>
            <Nav to='/make/plan'>여행 계획</Nav>
            <Nav to='/mymap'>나의 여행 지도</Nav>
            <Nav to='/search'>여행 둘러보기</Nav>
            <div style={{ width: '18%', display: 'inline-block'}}></div>
            <Nav to='/mypage'>마이페이지</Nav>
        </NavBar>
    )
}

export default Navigation;