import React, { useContext } from 'react';

import { CartItem as CartItemType } from '../../types';
import { Wrapper } from './CartItem.styles';
import { CartContext } from '../../context/items.context';

interface CartItemProps extends CartItemType {}

export const CartItem: React.FC<CartItemProps> = ({
	item,
	quantity,
	totalPrice,
}) => {
	const { dispatch } = useContext(CartContext);

	const decrementHandler = () => {
		dispatch({
			type: 'DECREMENT_QTY',
			id: item.id,
		});
	};

	const incrementHandler = () => {
		dispatch({
			type: 'INCREMENT_QTY',
			item,
		});
	};

	return (
		<Wrapper>
			<h3>{item.name}</h3>
			<div>
				<button onClick={decrementHandler}>-</button>
				<p>{quantity}</p>
				<button onClick={incrementHandler}>+</button>
			</div>
			<p>${totalPrice.toFixed(2)}</p>
		</Wrapper>
	);
};
