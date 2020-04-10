import React from 'react';

import { Wrapper, LinkList, LinkListItem, Link } from './Nav.styles';

export const Nav: React.FC = () => (
	<Wrapper>
		<LinkList>
			<LinkListItem>
				<Link to="/">Items</Link>
			</LinkListItem>
			<LinkListItem>
				<Link to="/cart">Cart</Link>
			</LinkListItem>
		</LinkList>
	</Wrapper>
);
