import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // HOC

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/Firebase.utils';
import CartIcon from '../cart-icon/Cart-Icon';
import CartDropdown from '../cart-dropdown/Cart-Dropdown';

import './Header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/contact">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</div>
		{hidden ? null : <CartDropdown />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	// getting state from our reducers
	// state is top lvl root reducer
	currentUser,
	hidden
});

export default connect(mapStateToProps)(Header);
