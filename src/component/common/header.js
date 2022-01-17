import React from 'react';
import { Link ,useHistory } from 'react-router-dom';
import logo from '../../img/logo.png';
import styled from 'styled-components';
import axios from 'axios';

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
    const history = useHistory();
    const Logout = () =>{
        const headers = {
            "Token": localStorage.getItem('login-token'),
        };

        axios.post('http://192.249.18.146:443/api/auth/logout', {}, {
            headers: {"Authorization": "Token " + localStorage.getItem('login-token'),}
        })
        .then(function (response) {
            console.log('로그아웃 성공');
            localStorage.removeItem('login-token');
            history.push('/');
        })
        .catch(function (error) {
            console.log('에러 발생')
        })

    }
    return(
        <div>
            <Logo to='/'>
                <img src={logo} width='200' height='60' alt='logo'/>
            </Logo>
            { localStorage.getItem('login-token') !== null ? 
                <AuthButton to='/' onClick={Logout}>로그아웃</AuthButton> :
                <span> 
                    <AuthButton to='/signin'>로그인</AuthButton>
                    <AuthButton to='/signup'>회원가입</AuthButton>
                </span>
                }

        </div>
    )
}

export default Header;


