import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 100%;
    margin-top: 1%;
    padding-bottom: 0.5%;
`;

const Nav = styled(Link)`
    /* width: 7.5rem; */
    height: 2rem;
    /* margin-left: 3%; */
    text-align: center;
    display: inline-block;
    padding-right: 30px;
    margin-left: 4px;
    font-size: 1rem;
    font-weight: 700;
    color: #686D76;
    text-decoration: none;

    &:hover{
        font-weight: 800;
        color: #4F8A8B;
    }
`
const NavMenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;
const NavMenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1060px;
`;
const Outer = styled.div`
    border-bottom: 1px solid #e3e3e3;
`;


const Navigation = () => {
    return(
        <Outer>
            <NavBar>
                <NavMenuContainer>
                    <NavMenuWrapper>
                        <Nav to='/intro'>
                            리트래블
                        </Nav>
                        <Nav to='/plan'>
                            여행 계획
                        </Nav>
                        <Nav to='/mymap'>
                            나의 여행 지도
                        </Nav>
                        <Nav>
                            여행 둘러보기
                        </Nav>
                    </NavMenuWrapper>
                <div>
                    <Nav to='/mypage' style={{'padding-right':"4px"}}>마이페이지</Nav>
                </div>
            </NavMenuContainer>
        </NavBar>
        </Outer>
        
    )
}

export default Navigation;