import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import ItemList from '../components/ItemList';

const ItemsPage: React.FC<RouteComponentProps> = () => {
	return <ItemList />;
};

export default ItemsPage;
