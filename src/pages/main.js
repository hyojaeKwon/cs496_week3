import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import FirstComponent from '../component/FirstComponent';
import TrendingSite from "../component/TrendingSite";
import TrendingPost from '../component/TrendingPost';
import MainSwipe from '../component/MainSwipe';

import styled from 'styled-components';

const SetComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const Main = () => {
    return(
        <SetComponent>
            <div>
                <Header/>
                <Navigation/>
            </div>

            <FirstComponent/>
            
            <TrendingSite/>
            <MainSwipe/>
            <TrendingPost/>
            <TrendingPost/>

        </SetComponent>
    );
};

export default Main;