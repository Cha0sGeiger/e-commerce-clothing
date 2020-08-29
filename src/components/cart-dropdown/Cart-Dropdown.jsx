import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../button/CustomButton';
import './Cart-Dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history }) => (
	<div className="cart-dropdown">
		{cartItems.length ? (
			<div className="cart-items">
				{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}
			</div>
		) : (
			<span className="empty-message">Your cart is empty</span>
		)}
		<CustomButton onClick={() => history.push('/checkout')}>CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
