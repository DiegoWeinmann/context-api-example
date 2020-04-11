import React, { useContext } from 'react';
import { ItemsContext } from '../../context/items.context';

import Item from '../Item';
import { Item as ItemType } from '../../types';

interface ItemListProps {
	items: ItemType[];
}

export const ItemList: React.FC<ItemListProps> = React.memo(({ items }) => {
	return (
		<ul>
			{items?.map((item) => (
				<Item key={item.id} item={item} />
			))}
			{items?.length === 0 && <h3>There are not items available.</h3>}
		</ul>
	);
});
