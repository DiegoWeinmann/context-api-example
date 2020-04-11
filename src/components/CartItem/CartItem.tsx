import React, { useContext, useCallback } from 'react';

import { CartContext } from '../../context/items.context';
import { CartItem as CartItemType } from '../../types';
import { Wrapper } from './CartItem.styles';

interface CartItemProps extends CartItemType {}

export const CartItem: React.FC<CartItemProps> = React.memo(
	({ item, quantity, totalPrice }) => {
		const { dispatch } = useContext(CartContext);

		const decrementHandler = useCallback(() => {
			dispatch({
				type: 'DECREMENT_QTY',
				id: item.id,
			});
		}, [dispatch, item.id]);

		const incrementHandler = useCallback(() => {
			dispatch({
				type: 'INCREMENT_QTY',
				item,
			});
		}, [dispatch, item]);

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
	}
);
