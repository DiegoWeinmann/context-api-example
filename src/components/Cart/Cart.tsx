import React, { useContext } from 'react';

import { CartContext } from '../../context/items.context';
import { CartItem as CartItemType } from '../../types';
import CartItem from '../CartItem';
import { Wrapper } from './Cart.styles';

export const Cart: React.FC = () => {
	const { cart } = useContext(CartContext);

	return (
		<Wrapper>
			<h1>Cart Total: ${cart.total.toFixed(2)}</h1>
			{cart.cartItems.length > 0 &&
				cart.cartItems.map((cartItem: CartItemType) => {
					return <CartItem key={cartItem.item.id} {...cartItem} />;
				})}
		</Wrapper>
	);
};
