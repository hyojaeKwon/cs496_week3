import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import Map from '../component/map/mymap';
import styled from 'styled-components';

const SetComponent = styled.div`
    align-items: center;
`;

const MyMap = () => {
    return(
        <SetComponent>
            <Header/>
            <Navigation/>
            <Map/>
            <Footer/>
        </SetComponent>
    )
};

export default MyMap;