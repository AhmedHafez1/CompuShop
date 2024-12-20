import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  _id: string;
  price: number;
  qty: number;
}

interface CartState {
  cartItems: CartItem[];
  itemsPrice: number;
  shippingPrice: number;
  tax: number;
  totalPrice: number;
}

const initialState: CartState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart')!)
  : { cartItems: [], itemsPrice: 0, shippingPrice: 0, tax: 0, totalPrice: 0 };

function addDecimal(num: number): number {
  return Number(Math.round((num * 100) / 100).toFixed());
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((x) => x._id === item._id);
      if (existingItem) {
        state.cartItems = state.cartItems.map((x) =>
          x._id === item._id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemsPrice = addDecimal(
        state.cartItems.reduce(
          (acc: number, item: { price: number; qty: number }) => {
            return acc + item.price * item.qty;
          },
          0
        )
      );
      state.shippingPrice = state.itemsPrice >= 100 ? 0.0 : 10.0;
      state.tax = addDecimal(0.15 * state.itemsPrice);
      state.totalPrice = state.itemsPrice + state.shippingPrice + state.tax;

      localStorage.setItem('cart', JSON.stringify(state));

      return state;
    },
  },
});

const { addToCart } = cartSlice.actions;

export { addDecimal, addToCart };

export default cartSlice.reducer;
