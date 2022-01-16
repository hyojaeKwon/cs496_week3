import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import IntroContent from '../component/intro';

const Intro = () => {
    return(
        <div>
            <Header/>
            <Navigation/>
            <IntroContent/>
        </div>
    )
};

export default Intro;