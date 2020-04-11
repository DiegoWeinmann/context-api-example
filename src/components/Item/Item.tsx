import React, { useContext } from 'react';

import { CartContext } from '../../context/items.context';
import { Item as ItemType } from '../../types';
import { Wrapper } from './Item.styles';

interface ItemProps {
	item: ItemType;
}

export const Item: React.FC<ItemProps> = React.memo(({ item }) => {
	const { dispatch } = useContext(CartContext);

	const handleAddItem = () => {
		dispatch({
			type: 'ADD_ITEM',
			item,
		});
	};

	return (
		<Wrapper>
			<h3>{item.name}</h3>
			<p>{item.description}</p>
			<p>${item.price}</p>
			<button onClick={handleAddItem}>Add</button>
		</Wrapper>
	);
});
