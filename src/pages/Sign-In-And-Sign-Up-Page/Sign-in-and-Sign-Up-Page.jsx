import React from 'react';

import SignIn from '../../components/Sign In/SignIn';

import './Sign-in-and-Sign-Up-Page.scss';
import SignUp from '../../components/Sign-Up/Sign-Up';

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <SignIn />
        <SignUp/>
    </div>
);

export default SignInAndSignUpPage;