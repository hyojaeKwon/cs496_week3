import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import KaKaoMap from '../component/post/kakaomap';

const Plan = () => {
    return(
        <div>
            <Header/>
            <Navigation/>
            <KaKaoMap searchPlace='써브웨이'/>
        </div>
    )
};

export default Plan;