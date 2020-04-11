import React, { useContext, useCallback } from 'react';

import { Wrapper } from './Item.styles';
import { Item as ItemType } from '../../types';
import { CartContext } from '../../context/items.context';

interface ItemProps {
	item: ItemType;
}

export const Item: React.FC<ItemProps> = React.memo(({ item }) => {
	const { dispatch } = useContext(CartContext);
	const handleAddItem = useCallback(() => {
		dispatch({
			type: 'ADD_ITEM',
			item,
		});
	}, [dispatch, item]);

	const { name, description, price } = item;

	return (
		<Wrapper>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>${price}</p>
			<button onClick={handleAddItem}>Add</button>
		</Wrapper>
	);
});
