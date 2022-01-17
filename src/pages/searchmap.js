import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import Map from '../component/map/searchmap';

const SearchPost = () => {

    return(
        <div>
            <Header/>
            <Navigation/>
            <Map/>
            <Footer/>
        </div>
    )
}

export default SearchPost;