import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import Map from '../component/map/mymap';
import styled from 'styled-components';

const SetComponent = styled.div`
    align-items: center;
`;

const MyMap = () => {
    console.log(localStorage.getItem('login-token'));
    const isAuthorized = localStorage.getItem('login-token');
    return(
        <div>
        {
            !isAuthorized ? <Redirect to='/signin'/> : 
            <SetComponent>
            <Header/>
            <Navigation/>
            <Map/>
            <Footer/>
            </SetComponent>
        }
        </div>
    )
};

export default MyMap;