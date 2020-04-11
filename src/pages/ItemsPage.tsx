import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ItemList from '../components/ItemList';
import { ItemsContext } from '../context/items.context';

const ItemsPage: React.FC<RouteComponentProps> = () => {
	const { items } = useContext(ItemsContext);
	return <ItemList items={items} />;
};

export default ItemsPage;
