import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';

const Posting = ({ match }) => {
    const { username, area } = match.params;

    return(
        <div>
            <Header/>
            <Navigation/>
            <div>This is {username } {area} posting page</div>
        </div>
    )
}

export default Posting;