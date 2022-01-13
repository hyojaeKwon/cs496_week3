import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import styled from 'styled-components';

const Logo = styled(Link)`
    display: inline-block;
    margin-top: 1%;
    width: 128px;
    /* margin-left: 10%; */
    margin-right: 50%;
`;

const HeaderInnerContainer = styled.div`
    max-width: 1060px;
    height: 72px;
    justify-content: space-between;
    display: flex;
    align-items: center;
`;

const AuthButton = styled(Link)`
    display: inline;
    padding: 0.3rem;
    margin-right: 2%;
    margin-top: 2%;
    vertical-align: top;
    font-size: 14px;
    padding-right: 30px;
    padding-left: 30px;
    overflow-anchor: none;
    text-decoration: none;
    border-color: #686D76;
    border: 1.5px solid;
    border-radius: 3px;
    opacity: 70%;
    font-weight: 800;
    color: #4F8A8B;
`
const LoginButton = styled(Link)`
    display: inline-block;
    padding: 0.3rem;
    margin-right: 2%;
    margin-top: 2%;
    vertical-align: top;
    margin-right: 30px;
    font-size: 1rem;
    text-decoration: none;
    border-color: #686D76;
    opacity: 70%;
    font-weight: 800;
    color: #666d75;
    &:hover{
        font-weight: 800;
        color: #4F8A8B;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    width:100%;
    justify-content: flex-end;
`;

const Header = () => {
    return(
        <HeaderInnerContainer>
            <Logo to='/'>
                <img src={logo} width='200' height='60' alt='logo'/>
            </Logo>
            <ButtonContainer>
                <LoginButton to='/login'>
                    <span>
                        로그인
                    </span>
                </LoginButton>
                <AuthButton to='/signin'>
                        회원 가입
                </AuthButton>
            </ButtonContainer>
        </HeaderInnerContainer>
    )
}

export default Header;


