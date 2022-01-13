import React from 'react';
import logo from '../../img/logo.png';
import styled from 'styled-components';

const Logo = styled.div`
    display: inline-block;
    margin-top: 1%;
    margin-left: 0%;
    margin-right: 50%;
`

const AuthButton = styled.div`
    display: inline-block;
    padding: 0.3rem;
    margin-right: 2%;
    margin-top: 2%;
    vertical-align: top;
    font-size: 1rem;
    text-decoration: none;
    border-color: #686D76;
    border: 1.5px solid;
    opacity: 70%;
    font-weight: 800;
    color: #4F8A8B;
`

const Header = () => {
    return(
        <div>
            <Logo>
                <img src={logo} width='200' height='60' alt='logo'/>
            </Logo>
            <AuthButton>로그인</AuthButton>
            <AuthButton>회원가입</AuthButton>
        </div>
    )
}

export default Header;


