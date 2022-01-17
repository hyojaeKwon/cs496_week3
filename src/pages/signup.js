import React from 'react';
import Header from '../component/common/header';
import Navigation from '../component/common/navigation';
import Footer from '../component/common/footer';
import SignupForm from '../container/auth/signupform';

const Signup = () => {
    return(
        <div>
            <Header/>
            <Navigation/>
            <SignupForm/>
            <Footer/>
        </div>
    )
};

export default Signup;