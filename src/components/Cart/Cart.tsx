import React, { useContext } from 'react';

import { CartContext } from '../../context/items.context';
import { Wrapper } from './Cart.styles';
import CartItem from '../CartItem';
import { CartItem as CartItemType } from '../../types';

export const Cart: React.FC = () => {
	const {
		cart: { cartItems, total },
	} = useContext(CartContext);

	console.log(cartItems);

	console.log(total);

	return (
		<Wrapper>
			<h1>Cart</h1>
			{cartItems.length > 0 &&
				cartItems.map((cartItem: CartItemType) => {
					return <CartItem {...cartItem} />;
				})}
		</Wrapper>
	);
};
