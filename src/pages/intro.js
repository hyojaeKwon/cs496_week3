import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import IntroContent from '../component/intro';

const Intro = () => {
    return(
        <div>
            <Header/>
            <Navigation/>
            <IntroContent/>
            <Footer/>
        </div>
    )
};

export default Intro;