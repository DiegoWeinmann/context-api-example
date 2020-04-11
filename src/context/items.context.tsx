import React, { createContext, useState } from 'react';

import { Item, Cart, CartItem } from '../types';
import { initialItems } from '../data/itemsData';

interface ItemsContextState {
	items: Item[];
}

interface CartContextState {
	cart: Cart;
}

const initialCart: Cart = {
	cartItems: [],
	total: 0,
};

export const ItemsContext = createContext<ItemsContextState>({
	items: [],
});

export const CartContext = createContext<CartContextState>({
	cart: {
		cartItems: [],
		total: 0,
	},
});

export const ItemsProvider: React.FC = ({ children }) => {
	const [items, setItems] = useState(initialItems);
	const [cart, setCart] = useState<Cart>(initialCart);

	return (
		<CartContext.Provider value={{ cart }}>
			<ItemsContext.Provider value={{ items }}>
				{children}
			</ItemsContext.Provider>
		</CartContext.Provider>
	);
};
