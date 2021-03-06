import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import Homepage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignIn-And-SignUp';
import Checkout from './pages/checkout/Checkout';

import { auth, createUserProfileDocument } from './firebase/Firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={Checkout} />
					<Route
						exact
						path="/signin"
						render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)} // render invokacija dobiva funkcija koja na temelju trenutnog korisnika ne dopusta signin
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	// we are destructuring our userReducer
	currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	// we are updating our redux reducer with our actions
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
