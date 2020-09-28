import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // HOC
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/Firebase.utils';
import CartIcon from '../cart-icon/Cart-Icon';
import CartDropdown from '../cart-dropdown/Cart-Dropdown';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles.jsx';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer className="options">
			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/contact">CONTACT</OptionLink>
			{currentUser ? (
				<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	// getting state from our reducers
	// state is top lvl root reducer
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
