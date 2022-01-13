import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import FirstComponent from '../component/FirstComponent';
import TrendingPost from "../component/TrendingPost";

const Main = () => {
    return(
        <div>
            <Header/>
            <Navigation/>
            <FirstComponent/>
            <TrendingPost/>
        </div>
    );
};

export default Main;