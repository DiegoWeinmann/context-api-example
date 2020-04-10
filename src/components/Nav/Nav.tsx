import React from 'react';

import { Wrapper, LinkList, LinkListItem, Button } from './Nav.styles';

export const Nav: React.FC = () => (
	<Wrapper>
		<LinkList>
			<LinkListItem>
				<Button>Items</Button>
			</LinkListItem>
			<LinkListItem>
				<Button>Cart</Button>
			</LinkListItem>
		</LinkList>
	</Wrapper>
);
