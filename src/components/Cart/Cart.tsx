import React, { useContext } from 'react';

import { CartContext } from '../../context/items.context';
import { Wrapper } from './Cart.styles';

export const Cart: React.FC = () => {
	const { cart } = useContext(CartContext);
	console.log(cart);

	return (
		<Wrapper>
			<h1>Cart</h1>
			{cartItems.length > 0 &&
				cartItems.map((cartItem) => {
					return <CartItem />;
				})}
		</Wrapper>
	);
};
