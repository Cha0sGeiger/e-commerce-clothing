import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../button/CustomButton';
import './Cart-Dropdown.styles.scss';
import CartItem from '../cart-item/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</div>
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
