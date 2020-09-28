import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishKey =
		'pk_test_51HWHW6HEwLKwIGpqIDjZ7RzbBDlR7j8vaAq6KtJZW8SdnxNYrvAoUfSysDVj0XwzXCnAxm223bvmv2HMcYDWu5HT00yydsJ5ed';
	const onToken = (token) => {
		console.log(token, 'token');
		alert('Payment is done, you have less money than before');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="E-Platform Ltd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUZ.svg"
			description={`Your total is $${price}`}
			panelLabel={`Pay Now $${price}`}
			token={onToken}
			stripeKey={publishKey}
		/>
	);
};

export default StripeCheckoutButton;
