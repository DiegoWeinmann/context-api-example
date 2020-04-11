import React from 'react';

import { Wrapper } from './Item.styles';
import { Item as ItemType } from '../../types';

interface ItemProps extends ItemType {}

export const Item: React.FC<ItemProps> = ({ id, name, description, price }) => {
	return (
		<Wrapper>
			<h3>{name}</h3>
			<p>{description}</p>
			<p>${price}</p>
		</Wrapper>
	);
};
