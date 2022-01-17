import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import RouteMap from '../component/plan/routemap';

const Plan = ({location}) => {
    const files = location.state.files;
    console.log(files);
    return(
        <div>
            <Header/>
            <Navigation/>
            <RouteMap/>
            <Footer/>
        </div>
    )
};

export default Plan;