import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import SigninForm from '../container/auth/signinform';

const Signin = () => {
    return(
        <div>
            <Header/>
            <Navigation/>
            <SigninForm/>
            <Footer/>
        </div>
    )
};

export default Signin;