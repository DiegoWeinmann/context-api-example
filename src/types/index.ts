export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CartItem {
  item: Item;
  quantity: number;
  totalPrice: number;
}

export interface Cart {
  cartItems: CartItem[];
  total: number;
}
