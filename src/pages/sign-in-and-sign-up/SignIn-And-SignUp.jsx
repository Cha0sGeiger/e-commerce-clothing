import React from 'react';
import SignIn from '../../components/sign-in/Sign-In';
import SignUp from '../../components/sign-up/Sign-Up';

import './SignIn-And-SignUp.styles.scss';

const SignInAndSignUp = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default SignInAndSignUp;
