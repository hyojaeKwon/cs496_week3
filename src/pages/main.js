import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import FirstComponent from '../component/FirstComponent';
import TrendingSite from "../component/TrendingSite";
import styled from 'styled-components';
import MainSwipe from '../component/MainSwipe';
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
        </SetComponent>
    );
};

export default Main;