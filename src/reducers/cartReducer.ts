import { Cart, Item } from '../types';

export type ADD_ITEM_ACTION = {
	type: 'ADD_ITEM';
	item: Item;
};

export type DECREMENT_QTY = {
	type: 'DECREMENT_QTY';
	id: number;
};

export type INCREMENT_QTY = {
	type: 'INCREMENT_QTY';
	item: Item;
};

export type Action = ADD_ITEM_ACTION | DECREMENT_QTY | INCREMENT_QTY;

export type CartReducer = (cart: Cart, action: Action) => Cart;

export const cartReducer: CartReducer = (cart: Cart, action: Action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			if (cart.cartItems.length === 0) {
				return {
					cartItems: [
						{ item: action.item, quantity: 1, totalPrice: action.item.price },
					],
					total: action.item.price,
				};
			}
			if (
				cart.cartItems.find((cartItem) => cartItem.item.id === action.item.id)
			) {
				return {
					cartItems: cart.cartItems.map((cartItem) => {
						return cartItem.item.id === action.item.id
							? {
									item: action.item,
									quantity: cartItem.quantity + 1,
									totalPrice: cartItem.totalPrice + action.item.price,
							  }
							: { ...cartItem };
					}),
					total: cart.total + action.item.price,
				};
			}

			return {
				cartItems: [
					...cart.cartItems,
					{ item: action.item, quantity: 1, totalPrice: action.item.price },
				],
				total: cart.total + action.item.price,
			};

		case 'INCREMENT_QTY':
			return {
				cartItems: cart.cartItems.map((cartItem) =>
					cartItem.item.id === action.item.id
						? {
								item: cartItem.item,
								quantity: cartItem.quantity + 1,
								totalPrice: cartItem.totalPrice + cartItem.item.price,
						  }
						: cartItem
				),
				total: cart.total + action.item.price,
			};

		case 'DECREMENT_QTY':
			const cartItem = cart.cartItems.find(
				(cartItem) => cartItem.item.id === action.id
			)!;

			if (cartItem.quantity > 1) {
				return {
					cartItems: cart.cartItems.map((cartItem) =>
						cartItem.item.id === action.id
							? {
									item: cartItem.item,
									quantity: cartItem.quantity - 1,
									totalPrice: cartItem.totalPrice - cartItem.item.price,
							  }
							: cartItem
					),
					total: cart.total - cartItem.item.price,
				};
			}

			return {
				cartItems: cart.cartItems.filter(
					(cartItem) => cartItem.item.id !== action.id
				),
				total: cart.total - cartItem.item.price,
			};

		default:
			return cart;
	}
};
