import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import FirstComponent from '../component/main/FirstComponent';
import TrendingSite from "../component/main/TrendingSite";
import TrendingPost from '../component/main/TrendingPost';
import MainSwipe from '../component/main/MainSwipe';
import styled from 'styled-components';
import Footer from '../component/common/footer'; 
const SetComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Main = () => {
    return(
        <div>
            <div>
                <Header/>
                <Navigation/>
            </div>
            <SetComponent>
                <FirstComponent/>
                <TrendingSite/>
                <MainSwipe/>
                <TrendingPost/>
                <Footer/>
            </SetComponent>
        </div>
    );
};

export default Main;