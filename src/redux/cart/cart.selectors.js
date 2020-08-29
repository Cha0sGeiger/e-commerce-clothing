import { createSelector } from 'reselect';

const selectCart = (state) => state.cart; //input select

export const selectCartItems = createSelector([ selectCart ], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector(
	[ selectCartItems ],
	(cartItems) => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0) // native function
	// first argument is sum of every passing through our cartItems, so if our array has values 1, 2, 3 - it will be 0 + 1, 1 + 2, 3+3 = 6
);
