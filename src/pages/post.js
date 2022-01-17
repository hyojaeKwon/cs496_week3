import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import Posting from '../component/post/posting';
import DatePicker from 'react-datepicker';

const Post = ({ location, match }) => {
    const files = location.state.files;
    const { username, area } = match.params;

    console.log(files);

    return(
        <div>
            <Header/>
            <Navigation/>
            <Posting username={username} area={area} files={files}/>
            <Footer/>
        </div>
    )
}

export default Post;