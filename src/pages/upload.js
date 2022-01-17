import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import UploadImg from '../component/post/uploadimg';

const Upload = ({ match }) => {
    const { username, area } = match.params;

    return(
        <div>
            <Header/>
            <Navigation/>
            <UploadImg username={username} area={area}/>
            <Footer/>
        </div>
    )
}

export default Upload;