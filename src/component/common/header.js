import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import styled from 'styled-components';

const Logo = styled(Link)`
    display: inline-block;
    margin-top: 1%;
    margin-left: 10%;
    margin-right: 50%;
`

const AuthButton = styled(Link)`
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
            <Logo to='/'>
                <img src={logo} width='200' height='60' alt='logo'/>
            </Logo>
            <AuthButton to='/login'>로그인</AuthButton>
            <AuthButton to='/signin'>회원가입</AuthButton>
        </div>
    )
}

export default Header;


