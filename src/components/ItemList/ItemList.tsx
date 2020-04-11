import React, { useContext } from 'react';
import { ItemsContext } from '../../context/items.context';

import Item from '../Item';

export const ItemList: React.FC = () => {
	const { items } = useContext(ItemsContext);
	console.log(items);
	return (
		<ul>
			{items?.map((item) => (
				<Item key={item.id} {...item} />
			))}
			{items?.length === 0 && <h3>There are not items available.</h3>}
		</ul>
	);
};
