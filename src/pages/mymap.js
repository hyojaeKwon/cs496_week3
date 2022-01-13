import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Map from '../component/map';
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
        </SetComponent>
    )
};

export default MyMap;