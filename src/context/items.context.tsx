import React, { createContext, useState, useReducer } from 'react';

import { Item, Cart } from '../types';
import { initialItems } from '../data/itemsData';
import { cartReducer, Action } from '../reducers/cartReducer';

interface ItemsContextState {
	items: Item[];
}

interface CartContextState {
	cart: Cart;
	dispatch: React.Dispatch<Action>;
}

export const ItemsContext = createContext<ItemsContextState>({
	items: [],
});

export const CartContext = createContext<CartContextState>({
	cart: {
		cartItems: [],
		total: 0,
	},
	dispatch: () => {},
});

export const ItemsProvider: React.FC = ({ children }) => {
	const [items] = useState<Item[]>(initialItems);

	const [cart, dispatch] = useReducer(cartReducer, {
		cartItems: [],
		total: 0,
	});

	return (
		<ItemsContext.Provider value={{ items }}>
			<CartContext.Provider value={{ cart, dispatch }}>
				{children}
			</CartContext.Provider>
		</ItemsContext.Provider>
	);
};
